import type { fetchType, wishType } from "@/helpers/types";
import snowflake from "@/assets/snowflake.svg";
import presents from "@/assets/presents.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function WishList({
  roomInfo,
  user,
}: {
  roomInfo: fetchType | null;
  user: string;
}) {
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
          <div className="line-clamp-6">{currentUser?.pref}</div>
        ) : (
          <div className="w-full px-2 flex flex-col justify-start items-center gap-2 h-full overflow-y-auto my-scrollbar">
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

function WishCard({ wish }: { wish: wishType }) {
  return (
    <div className="shadow-md/20 bg-(--gray) rounded-xl py-2 px-4 flex flex-row justify-between items-center w-full">
      <p className="text-md font-medium w-full items-center">{wish.value}</p>
      <div className="flex flex-row gap-2 w-full justify-end text-right items-center">
        <span className="w-0.5 h-3 bg-black" />
        <a href={wish.link} className="text-purple-700 underline!">
          Link
        </a>
      </div>
    </div>
  );
}

function ViewWish({
  budget,
  wish,
}: {
  budget: number | undefined;
  wish: wishType[] | undefined;
}) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <p
          className="text-md py-1 border-3 border-black w-full rounded-4xl shadow-md/50 hover:shadow-md
                transition-all duration-150 hover:bg-gray-200 cursor-pointer"
        >
          View Wishlist
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-row justify-start items-top gap-5">
              <img src={presents} alt="presents pic" />
              <div>
                <h2 className="text-xl font-semibold">Your Wishlist</h2>
                <p className="text-normal text-[12px] mt-2">
                  Let your Secret Nick know what would make you smile this
                  season.
                </p>
                <p className="font-bold text-[14px] mt-2">
                  Gift Budget: {budget == 0 ? "Unlimited" : budget}
                </p>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription>
            <div className="flex flex-col justify-start items-center w-full">
              <div className="w-full px-2 flex flex-col justify-center items-center gap-2 my-4">
                {wish?.map((wish: wishType) => (
                  <WishCard wish={wish} key={wish.id} />
                ))}
              </div>
              <DialogClose asChild>
                <button className="text-center ml-auto bg-(--green) py-1 w-60 text-xl rounded-xl font-semibold shadow-md/30 text-white hover:shadow-md hover:bg-green-700 transition-all duration-150 cursor-pointer">
                  Go Back to Room
                </button>
              </DialogClose>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function ViewPref({
  budget,
  pref,
}: {
  budget: number | undefined;
  pref: string | undefined;
}) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <p
          className="text-md py-1 border-3 border-black w-full rounded-4xl shadow-md/50 hover:shadow-md
                transition-all duration-150 hover:bg-gray-200 cursor-pointer"
        >
          View Prefference
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="w-full">
          <DialogTitle>
            <div className="flex flex-row justify-start items-top gap-5">
              <img src={presents} alt="presents pic" />
              <div>
                <h2 className="text-xl font-semibold">Your Wishlist</h2>
                <p className="text-normal text-[12px] mt-2">
                  Let your Secret Nick know what would make you smile this
                  season.
                </p>
                <p className="font-bold text-[14px] mt-2">
                  Gift Budget: {budget == 0 ? "Unlimited" : budget}
                </p>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="flex flex-col justify-start items-left w-full bg-(--gray) rounded-xl gap-4 p-5 shadow-md/20">
            <span className="text-[18px] font-bold text-gray-800">Suprise me!</span>
            <span className="w-full h-px bg-gray-400" />
            <span className="text-[14px] text-gray-800">{pref}</span>
          </DialogDescription>
          <DialogClose asChild>
            <button className="mt-2 text-center ml-auto bg-(--green) py-1 w-60 text-xl rounded-xl font-semibold shadow-md/30 text-white hover:shadow-md hover:bg-green-700 transition-all duration-150 cursor-pointer">
              Go Back to Room
            </button>
          </DialogClose>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
