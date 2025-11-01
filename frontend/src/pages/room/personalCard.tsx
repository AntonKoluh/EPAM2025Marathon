import InputCopy from "@/components/inputCopy";
import roomvector from "@/assets/roomvector.svg";
import type { fetchType } from "@/helpers/types";


export default function PersonalCard({roomInfo, user} : {roomInfo: fetchType | null; user:string}) {
  return (
    <div className="relative bg-(--red)/90 shadow-[2px_2px_10px] rounded-xl flex-1 w-full h-60 flex flex-col justify-between items-center border-border">
      <div className="p-4 w-full">
        <p className="text-white text-left w-full text-2xl font-semibold">
          Hi, {roomInfo?.users?.find((item) => item.code === user)?.fn}
        </p>
        <p className="text-white text-[12px] mt-2">
          Get ready for happy gift exchange nad fun in Secret Nick game!
        </p>
        <div className="mt-5">
          <InputCopy link={window.location.href} />
        </div>
      </div>
      <img src={roomvector} alt="decoation cvector" className="" />
      <button
        className="absolute top-50 left-1/2 -translate-x-1/2 transform-4/5 font-bold rounded-xl border-gray-950 border-3 w-50 py-0.5
          hover:bg-(--red) hover:text-white transform-all duration-150 cursor-pointer
          "
      >
        View Information
      </button>
    </div>
  );
}
