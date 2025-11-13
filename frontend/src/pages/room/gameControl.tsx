import snick from "@/assets/SNick.svg";
import gift from "@/assets/Gifts.svg";
import { useContext, useState } from "react";
import { RoomContext } from "./roomMain.tsx";
import { toast } from "sonner";
import { useParams } from "react-router";
import type { usersInfoType, wishType } from "@/helpers/types.ts";
import { WishCard } from "./wishList.tsx";
import Modal from "@/components/Modal.tsx";
import { Sparkle } from "lucide-react";
import AiLoadingSpinner from "@/components/spinners/aiLoadingSpinner.tsx";
import clsx from "clsx";

export function StartGame() {
  const ctx = useContext(RoomContext);
  if (!ctx) throw new Error("RoomContext.Provider is missing");
  const { roomInfo, setRoomInfo } = ctx;
  const [isLoading, setIsLoading] = useState(false);
  const { room, user } = useParams();

  async function drawNames() {
    setIsLoading(true);
    if ((roomInfo?.users.length || 0) < 3) {
      toast("Cannot start game with less than 3 players");
      setIsLoading(false);
      return;
    }

    const result = await fetch(
      `${import.meta.env.VITE_API_URL}v1/room/start/${room}/${user}/`
    );
    const data = await result.json();
    setRoomInfo((prev) => ({
      room: { ...prev!.room, state: true },
      users: data.users,
    }));
    setIsLoading(false);
    toast(`Saint Nick is drawing names... (${result.status})`);
  }

  return (
    <div className="flex flex-col justify-end items-center h-60">
      <div className="h-fit flex flex-col justify-start items-center rounded-xl w-full bg-white">
        <div className="relative w-full bg-[#DED6C7] h-14 text-(--red) text-xl font-semibold flex justify-center items-center rounded-t-xl">
          <img
            src={gift}
            alt="gift img"
            className="absolute size-26 bottom-6 left-34"
          />
          <p>Let the Magic Begin!</p>
        </div>
        <p className="text-center mt-2">
          Dont forget to fit the button to randomnly pair everyone in the game.
        </p>
        <button
          className="w-5/6 my-2 text-xl border-black border-3 rounded-xl shadow-md/20 hover:shadow-md hover:bg-gray-200 transition-all duration-150 cursor-pointer"
          onClick={drawNames}
          disabled={isLoading}
        >
          {isLoading ? "Drawing..." : "Draw Names"}
        </button>
      </div>
    </div>
  );
}

export function ViewGiftee() {
  const ctx = useContext(RoomContext);
  if (!ctx) throw new Error("RoomContext.Provider is missing");
  const { roomInfo, user } = ctx;
  const gifteeCode = roomInfo?.users.filter((item) => item.code === user)[0]
    .giftee;
  const gifteeUser = roomInfo?.users.filter(
    (item) => item.code === gifteeCode
  )[0];

  return (
    <div className="flex flex-col justify-end items-center h-60 w-full">
      <div className="h-fit flex flex-col justify-start items-center rounded-xl w-full bg-white">
        <div className="relative w-full bg-[#DED6C7] h-14 text-(--red) text-xl font-semibold flex justify-center items-center rounded-t-xl">
          <img
            src={snick}
            alt="gift img"
            className="absolute size-26 bottom-6 left-1/2 -translate-x-1/2"
          />
          <p>Look Who You Got</p>
        </div>
        <div className="flex flex-col my-4 text-center">
          <p className="text-gray-500">You are Secret Nick to</p>
          <p className="text-center text-2xl font-bold">
            {`${gifteeUser!.fn} ${gifteeUser!.ln}`}
          </p>
        </div>
        <GifteeView giftee={gifteeUser} />
      </div>
    </div>
  );
}

function GifteeView({ giftee }: { giftee: usersInfoType | undefined }) {
  const giftType = giftee!.pref != "" ? "pref" : "wish";

  const trigger = (
    <div
      className="w-4/5 mx-auto my-2 text-xl border-black border-3 rounded-xl shadow-md/20 hover:shadow-md
        hover:bg-gray-200 transition-all duration-150 cursor-pointer"
    >
      Read Details
    </div>
  );
  const title = (
    <span className="relative flex flex-row justify-center items-center gap-5  w-full h-full rounded-t-xl">
      <img
        src={snick}
        alt="gift img"
        className="absolute size-70 botton-0 left-1/2 -translate-x-1/2 -translate-y-24"
      />
      <span className="my-auto text-(--red) font-bold text-xl">
        Look who you got!
      </span>
    </span>
  );
  const children = (
    <span className="flex flex-col justify-start items-center w-full h-full gap-2 px-4">
      <span className="gap-2 flex flex-row justify-start items-top w-full">
        <span className="flex gap-2 flex-col justify-start items-left flex-1/2 w-full p-4">
          <span className="text-xl font-bold text-black">
            Personal Information
          </span>
          <span className="bg-[#F1F5F2] rounded-xl w-full h-fit flex flex-col gap-4 p-4 text-left">
            <span className="flex flex-col gap-1 justify-left items-left">
              <span className="text-gray-700 text-[14px]">First name</span>
              <span className="text-black font-bold text-[18px]">
                {giftee!.fn}
              </span>
            </span>
            <span className="flex flex-col gap-1 justify-left items-left">
              <span className="text-gray-700 text-[14px]">Last name</span>
              <span className="text-black font-bold text-[18px]">
                {giftee!.ln}
              </span>
            </span>
            <span className="flex flex-col gap-1 justify-left items-left">
              <span className="text-gray-700 text-[14px]">Phone number</span>
              <span className="text-black font-bold text-[18px]">
                {giftee!.phone}
              </span>
            </span>
            <span className="flex flex-col gap-1 justify-left items-left">
              <span className="text-gray-700 text-[14px]">Email</span>
              <span className="text-black font-bold text-[18px]">
                {giftee!.email != "" ? giftee!.email : "-"}
              </span>
            </span>
            <span className="flex flex-col gap-1 justify-left items-left">
              <span className="text-gray-700 text-[14px]">
                Delivery Address
              </span>
              <span className="text-black font-bold text-[18px]">
                {giftee!.adress}
              </span>
            </span>
          </span>
        </span>
        <span className="flex gap-4 flex-col justify-start items-left flex-1/2 w-full p-4">
          <span className="text-xl font-bold text-black">Wishlist</span>
          {giftType == "pref" ? (
            <SurpriseGift giftee={giftee} />
          ) : (
            <span className="w-full px-2 flex flex-col justify-center items-center gap-2 my-4">
              {giftee!.links.map((wish: wishType) => (
                <WishCard wish={wish} key={wish.id} />
              ))}
            </span>
          )}
        </span>
      </span>
    </span>
  );
  return (
    <Modal title={title} trigger={trigger}>
      {children}
    </Modal>
  );
}

function SurpriseGift({ giftee }: { giftee: usersInfoType | undefined }) {
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(RoomContext);
  if (!ctx) throw new Error("RoomContext.Provider is missing");
  const { roomInfo, setRoomInfo } = ctx;
  async function handleAI() {
    setIsLoading(true);
    const data = await fetch(
      `${import.meta.env.VITE_API_URL}v1/ai/${roomInfo?.room.room_code}/${
        giftee!.code
      }/`
    );
    const response = await data.json();
    if (response.error) {
      toast("Something went wrong!");
      return;
    }
    setRoomInfo((prev) => ({
      room: prev!.room,
      users: prev!.users.map((item) =>
        item.id == giftee!.id ? response : item
      ),
    }));
    console.log(roomInfo);
    setIsLoading(false);
  }

  return (
    <>
      <span className="flex flex-col justify-start items-left">
        <span className="flex flex-col justify-start items-left w-full bg-(--gray) rounded-xl gap-4 p-5 shadow-md/20">
          <span className="text-[18px] font-bold text-gray-800">
            Suprise me!
          </span>
          <span className="w-full h-px bg-gray-400" />
          <span className="text-[14px] text-gray-800">{giftee!.pref}</span>
        </span>
        {giftee?.ai_links && giftee?.ai_links.length > 0? (
          <span className="mt-2">
            <span className="text-(--red) font-semibold font-md">Nick's little AI helper found these:</span>
          <span className="h-full w-full gap-2 py-2 flex flex-col justify-start items-center max-h-60 overflow-auto my-scrollbar">
            {giftee!.ai_links.map((wish: wishType) => (
              <WishCard wish={wish} key={wish.id} />
            ))}
            </span>
          </span>
        ) : (
          <>
            <span className="flex flex-col justify-center items-center w-full">
              <span className="font-semibold text-red-700 text-center mt-2">
                Dont know what to get? Let Saint Nick's little helper AI help!
              </span>
              <button
                className={clsx(
                  "gap-2 flex flex-row justify-center items-center bg-(--green) font-bold rounded-4xl w-3/4 py-1 text-white shadow-md/10 hover:shadow-md hover:bg-(--green)/80 cursor-pointer mt-4",
                  isLoading
                    ? "bg-gray-500 shadow-none hover:bg-gray-500 text-white cursor-none hover:shadow-none"
                    : ""
                )}
                onClick={handleAI}
                disabled={isLoading}
              >
                {isLoading ? (
                  "Loading Ideas"
                ) : (
                  <>
                    <Sparkle className="text-(--red)/80" />
                    Help me pick gifts!
                    <Sparkle className="text-(--red)/80" />
                  </>
                )}
              </button>
            </span>
            {isLoading && (
              <span className="mt-4 flex flex-col justify-center items-center w-full text-center">
                <AiLoadingSpinner />
                Saint Nick is picking out gift idea for you!
                <br />
                (The internet is a big place, so it might take some time)
              </span>
            )}
          </>
        )}
      </span>
    </>
  );
}
