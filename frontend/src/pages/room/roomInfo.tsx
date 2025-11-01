import balldecor from "@/assets/Balldecor.svg";
import type { fetchType } from "@/helpers/types";

export default function RoomInfo({ roomInfo }: { roomInfo: fetchType | null }) {
  return (
    <div className="bg-(--green)/90 rounded-xl flex-2 w-full h-60 p-4 shadow-[2px_2px_10px] flex flex-col justify-center items-center">
      <div className="text-xl flex flex-row justify-between items-top flex-3/5 w-full p-0">
        <div className="flex-3/5 p-2">
          <h3 className="text-2xl text-white font-semibold">
            {roomInfo?.room.name}
          </h3>
          <p className="text-[12px] text-white font-semibold mt-2 max-h-10">
            {roomInfo?.room.msg}
          </p>
        </div>
        <div className="flex-2/5">
          <img src={balldecor} alt="decor" className="size-full" />
        </div>
      </div>
      <div className="flex-2/5 flex flex-row justify-around items-center gap-5 px-2 w-full">
        <div className="flex flex-col w-full bg-zinc-100 rounded-xl p-2">
          <p className="text-center font-semibold">Exchange Date</p>
          <p className="text-center text-gray-600">
            {roomInfo?.room.exchange_date}
          </p>
        </div>
        <div className="flex flex-col w-full bg-zinc-100 rounded-xl p-2">
          <p className="text-center font-semibold">Gift Budget</p>
          <p className="text-center text-gray-600">
            {roomInfo?.room.budget === 0 ? "Unlimited" : roomInfo?.room.budget}
          </p>
        </div>
      </div>
    </div>
  );
}
