import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


import type { fetchType } from "@/helpers/types";
import PersonalCard from "./personalCard";
import RoomInfo from "./roomInfo";
import UserList from "./userList";
import WishList from "./wishList";
import { StartGame, ViewGiftee } from "./gameControl"

type roomContextType = {
  roomInfo: fetchType | null;
  setRoomInfo: React.Dispatch<React.SetStateAction<fetchType | null>>;
  user: string;
  currentAdmin: number;
  currentUser: number;
}

export const RoomContext = createContext<roomContextType | null>(null)

export default function RoomMain() {
  const { room, user } = useParams();
  const [roomInfo, setRoomInfo] = useState<fetchType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  if (!room || !user) {
    navigate("/");
    return;
  }

  useEffect(() => {
    async function getRoomInfo() {
      const data = await fetch(
        `http://127.0.0.1:8000/api/v1/room/${room}/${user}/`
      );
      const response = await data.json();
      if (response.error) {
        navigate("/");
      }
      setRoomInfo(response);
      setIsLoading(false);
    }
    getRoomInfo();
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

    const currentAdmin =
    roomInfo?.users.filter((item) => item.admin === true)[0]?.id || -1;
  const currentUser =
    roomInfo?.users.filter((item) => item.code === user)[0]?.id || -1;

  return (
    <RoomContext.Provider value={{roomInfo, setRoomInfo, user, currentAdmin, currentUser}}>
    <div className="flex flex-col jsutify-start items-top w-full p-6 h-fit">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full h-fit">
        <RoomInfo roomInfo={roomInfo} />
        <PersonalCard roomInfo={roomInfo} user={user} />
      </div>
      <div className="flex flex-col sm:flex-row justify-start items-top gap-4 w-full mt-4 h-fit min-h-0 overflow-hidden py-1">
        <UserList />
        <div className="flex flex-col justify-start items-center w-[267px] gap-4">
        {roomInfo?.room.state === true ? <ViewGiftee /> : roomInfo?.users.filter(item => item.code == user)[0].admin ? <StartGame /> :  null}
        <WishList />
        </div>
      </div>
    </div>
    </RoomContext.Provider>
  );
}
