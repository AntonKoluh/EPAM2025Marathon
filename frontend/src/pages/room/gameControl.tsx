import snick from "@/assets/SNick.svg";
import gift from "@/assets/Gifts.svg";

export function GameControl() {
  return (
    <div className="flex flex-col justify-end items-center h-60">
        <div className="h-fit flex flex-col justify-start items-center rounded-xl w-full bg-white">
      <div className="relative w-full bg-[#DED6C7] h-14 text-(--red) text-xl font-semibold flex justify-center items-center rounded-t-xl">
        <img src={gift} alt="gift img" className="absolute size-26 bottom-6 left-34" />
        <p>Let the Magic Begin!</p>
      </div>
      <p className="text-center mt-2">
        Dont forget to fit the button to randomnly pair everyone in the game.
      </p>
      <button className="w-5/6 my-2 text-xl border-black border-3 rounded-xl shadow-md/20 hover:shadow-md hover:bg-gray-200 transition-all duration-150 cursor-pointer">
        Draw Names
      </button>
    </div>
    </div>
  );
}
