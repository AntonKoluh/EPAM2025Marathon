import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import type { fetchType } from "@/helpers/types";
import PersonalCard from "./personalCard";
import RoomInfo from "./roomInfo";
import UserList from "./userList";
import WishList from "./wishList";

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
      console.log(response);
      setIsLoading(false);
    }
    getRoomInfo();
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="flex flex-col jsutify-start items-top w-full p-6">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
        <RoomInfo roomInfo={roomInfo} />
        <PersonalCard roomInfo={roomInfo} user={user} />
      </div>
      <div className="flex flex-col sm:flex-row justify-start items-top gap-4 w-full mt-4">
        <UserList roomInfo={roomInfo} user={user}/>
        <WishList />
      </div>
    </div>
  );
}
