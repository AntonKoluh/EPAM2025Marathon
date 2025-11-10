import { Link, useParams } from "react-router";
import Button from "../components/buttons";
import Input from "../components/formInput";
import { useEffect, useState } from "react";
import christmastree from "@/assets/christmastree.svg";
import balldecor from "@/assets/presents.svg";
import giftbox from "@/assets/Gifts.svg";
import elf from "@/assets/cookie.svg";
import wreath from "@/assets/wreath.svg";

type roomInfoType = {
  date: string;
  maxPrice: number;
  welcomeMsg: string;
  name: string;
  active: boolean;
};

export default function JoinRoomByCode() {
  const [joinCode, setJoinCode] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [roomInfo, setRoomInfo] = useState<roomInfoType>();
  const { id } = useParams();

  async function getRoom() {
    try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}v1/room/` + id);
    const result = await res.json();
    setRoomInfo(result);
    }
    finally {
    setIsLoading(false);
    }
  }

  useEffect(() => {
    getRoom();
  }, [id]);

  if (!id) {
    return (
      <>
      <title>Join Room</title>
      <div className="relative flex flex-col w-full h-full justify-start mt-20 items-center gap-10">
        <img src={balldecor} alt="ball decor" className="absolute top-0 left-25 w-24 h-24"/>
        <img src={giftbox} alt="gift box" className="absolute bottom-60 left-50 w-24 h-24"/>
        <img src={elf} alt="elf" className="absolute bottom-50 right-10 w-24 h-24"/>
        <img src={wreath} alt="wreath" className="absolute top-10 right-20 w-24 h-24"/>
        <h1 className="text-xl font-(family-name:--roboto-font) font-medium">
          Join Room by code:
        </h1>
        <span className="max-w-1/3 w-full">
        <Input placeholder={"Code"} value={joinCode} state={setJoinCode} />
        </span>
        <span className="max-w-1/3 w-full">
        {joinCode ? (
          <Link to={`/${joinCode}`} className="w-full text-center">
            <Button text="Join" variant="main" />
          </Link>
        ) : (
          <Button text="Enter Code" variant="inactive" />
        )}
        </span>
      </div>
      </>
    );
  }

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (!roomInfo) {
    return <h2>Room not found</h2>;
  }
  if (!roomInfo.active) {
    return <h2>Unable to join - Maximum participants reached or game has already started!</h2>;
  }
  if (roomInfo.active) {
  return (
    <div className="flex flex-col px-12 w-full py-6 mt-14 gap-3 h-full">
      <div className="flex flex-row justify-between h-fit">
        <div className="">
          <h1 className="text-3xl font-semibold">
            Welcome to {roomInfo?.name}
          </h1>
          <p className="mt-2">
            You've been invited to a cozy holiday gift exchange!
            <br />
            Ger ready to surprise and be surprised!
          </p>
          <div className="mt-10 flex flex-row justify-around items-center gap-4">
            <div className="border-zinc-400 rounded-xl border-3 bg-zinc-200 flex flex-col justify-center items-center gap-2 py-4 w-full">
              <p className="font-bold">Exchange Date</p>
              <p className="text-gray-700">{roomInfo?.date}</p>
            </div>
            <div className="border-zinc-400 rounded-xl border-3 bg-zinc-200 flex flex-col justify-center items-center gap-2 py-4 w-full">
              <p className="font-bold">Budget</p>
              <p className="text-gray-700">
                {roomInfo?.maxPrice === 0 ? "Unlimited" : roomInfo?.maxPrice}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center">
          <img src={christmastree} alt="christmas tree" className="" />
        </div>
      </div>
      <div className="py-8">
        <h2 className="font-bold text-2xl">
          To join the fun, you'll just need to:
        </h2>
        <p className="font-semibold mt-4">- Fill in your details</p>
        <p className="font-semibold mt-2">
          - Add your wishlist (or let the magic decide!)
        </p>
        <p className="font-semibold mt-4">
          It only takes a minute -- and the joy will last all season long!
        </p>
      </div>
      <Link
        to={`/createuser?roomId=${id}`}
        className="rounded-4xl bg-(--green) h-12 text-xl text-gray-100 hover:bg-(--green)/80 shadow-md/40 hover:shadow-sm cursor-pointer w-full mt-3 flex justify-center items-center"
      >
        Join the room
      </Link>
    </div>
  );
}
}
