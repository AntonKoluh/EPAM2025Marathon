import type { wishType } from "@/helpers/types";
import snowflake from "@/assets/snowflake.svg";
import presents from "@/assets/presents.svg";
import { RoomContext } from "./roomMain";
import { useContext } from "react";
import Modal from "@/components/Modal";

export default function WishList() {
    const ctx = useContext(RoomContext);
    if (!ctx) throw new Error("RoomContext.Provider is missing");
    const { roomInfo, user } = ctx;
  const currentUser = roomInfo?.users.filter((item) => item.code === user)[0];
  const wishType = currentUser?.pref != "" ? "pref" : "wish";

  return (
    <div className="relative bg-white shadow-md/40 rounded-xl flex-1 w-full flex flex-col justify-start items-center border-border h-fit max-h-70">
      <div className="w-full bg-(--green) text-gray-100 flex flex-row justify-center items-center gap-4 rounded-t-xl">
        <img src={snowflake} alt="snowflake" />
        <h3 className="text-xl">
          My {wishType == "wish" ? "Wishlist" : "Preferences"}
        </h3>
        <img src={snowflake} alt="snowflake" />
      </div>
      <div className="h-full min-h-10 flex flex-col justify-start items-top w-full my-2">
        {wishType == "pref" ? (
          <div className="line-clamp-6 px-2">{currentUser?.pref}</div>
        ) : (
          <div className="w-full p-2 flex flex-col justify-start items-center gap-2 h-fit overflow-y-auto my-scrollbar">
            {currentUser?.links.map((wish: wishType) => (
              <WishCard wish={wish} key={wish.id} />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-end items-center mb-4 w-full text-center px-4 h-fit">
        {wishType == "pref" ? (
          <ViewPref budget={roomInfo?.room.budget} pref={currentUser?.pref} />
        ) : (
          <ViewWish budget={roomInfo?.room.budget} wish={currentUser?.links} />
        )}
      </div>
    </div>
  );
}

export function WishCard({ wish }: { wish: wishType }) {
  return (
    <span className="shadow-md/20 bg-(--gray) rounded-xl py-2 px-4 flex flex-row justify-between items-center w-full">
      <span className="text-md font-medium w-full items-center">{wish.value ? wish.value : wish.name}</span>
      <span className="flex flex-row gap-2 w-full justify-end text-right items-center">
        <span className="w-0.5 h-3 bg-black" />
        {wish.link &&(
        <a href={wish.link} className="text-purple-700 underline!">
          Link
        </a>
        )}
      </span>
    </span>
  );
}

function ViewWish({
  budget,
  wish,
}: {
  budget: number | undefined;
  wish: wishType[] | undefined;
}) {
const trigger = (
  <p
    className="text-md py-1 border-3 border-black w-full rounded-4xl shadow-md/50 hover:shadow-md
    transition-all duration-150 hover:bg-gray-200 cursor-pointer"
  >
    View Wishlist
  </p>
);
  const title = (
  <span className="flex flex-row justify-start items-top gap-5">
              <img src={presents} alt="presents pic" />
              <span className="flex flex-col">
                <span className="text-xl font-semibold">Your Wishlist</span>
                <span className="text-normal text-[12px] mt-2">
                  Let your Secret Nick know what would make you smile this
                  season.
                </span>
                <span className="font-bold text-[14px] mt-2">
                  Gift Budget: {budget == 0 ? "Unlimited" : budget}
                </span>
              </span>
            </span>
            )

  const children = (
            <span className="flex flex-col justify-start items-center w-full">
              <span className="w-full px-2 flex flex-col justify-center items-center gap-2 my-4">
                {wish?.map((wish: wishType) => (
                  <WishCard wish={wish} key={wish.id} />
                ))}
              </span>
              </span>
  )
  return (
    <Modal title={title} trigger={trigger} >{children}</Modal>
  );
}

function ViewPref({
  budget,
  pref,
}: {
  budget: number | undefined;
  pref: string | undefined;
}) {
  const trigger = (
  <p
    className="text-md py-1 border-3 border-black w-full rounded-4xl shadow-md/50 hover:shadow-md
    transition-all duration-150 hover:bg-gray-200 cursor-pointer"
  >
    View Preferences
  </p>
  )
  const title = (
            <span className="flex flex-row justify-start items-top gap-5 h-full">
              <img src={presents} alt="presents pic" />
              <span className="flex flex-col">
                <span className="text-xl font-semibold">Your Wishlist<br/></span>
                <span className="text-normal text-[12px] mt-2">
                  Let your Secret Nick know what would make you smile this
                  season.
                </span>
                <span className="font-bold text-[14px] mt-2">
                  Gift Budget: {budget == 0 ? "Unlimited" : budget}
                </span>
              </span>
            </span>
  )
  const children = (
    <span className="flex flex-col justify-top items-left">
            <span className="text-[18px] font-bold text-gray-800">Suprise me!</span>
            <span className="w-full h-px bg-gray-400" />
            <span className="text-[14px] text-gray-800">{pref}</span>
    </span>
  )
  return (
    <Modal title={title} trigger={trigger}>{children}</Modal>
  );
}
