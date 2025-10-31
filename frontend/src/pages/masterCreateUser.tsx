import { useEffect, useState } from "react";
import CreatePreferance from "./createPreference";
import CreateUser from "./createuser";
import CreationFeedBack from "@/components/creationFeedback";
import CreateFinal from "./createfinal";

type roomType = {
  roomId: string | undefined;
  roomName: string | null;
  maxPrice: string | null;
  welcomeMsg: string | null;
  date: string | null;
  empty: null;
};

export default function MasterCreateUser() {
  const params = new URLSearchParams(window.location.search);
  const [state, setState] = useState<"user"|"pref"|"finish">("user");
  const [room, setRoom] = useState<roomType>({
    roomId: "",
    roomName: "",
    maxPrice: "",
    welcomeMsg: "",
    date: "",
    empty: null,
  });
  const [userData, setUserData] = useState({
    fn: "",
    ln: "",
    phone: "",
    email: "",
    adress: "",
  });

  const [roomLinkInfo, setRoomLinkInfo] = useState({'room': "", "user": ""})

  const [isSubmiting, setIsSubmiting] = useState(true)

  const [wish, setWish] = useState<{ id: number; value: string; link: string }[]>([
    { id: 1, value: "", link: "" },
  ]);
  const [pref, setPref] = useState<string>("")

  useEffect(() => {
    if (params.get("roomName")) {
      setRoom({
        ...room,
        roomName: params.get("roomName"),
        maxPrice: params.get("maxPrice"),
        welcomeMsg: params.get("welcomeMsg"),
        date: params.get("date"),
        empty: null,
      });
    }
    if (params.get("roomId")) {
      setRoom({
        ...room,
        roomId: params.get("roomId") || "",
      })
    }

  }, []);

  async function create() {
    const data ={"room":room, "userData":userData, "wish": wish, "pref": pref, "room_key":room.roomId}
    const res = await fetch('http://127.0.0.1:8000/api/v1/create', {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    })
    const result = await res.json()
    setRoomLinkInfo(result)
    setIsSubmiting(false)
    return result
  }

  switch (state){
  case "user":
  return (
        <>
          <CreationFeedBack variant={room.roomName != "" ? 2 : 5} />
          <CreateUser
            data={userData}
            setData={setUserData}
            room={room ? true : false}
            setState={setState}
          />
        </>)
  case "pref":
    return(
        <>
          <CreationFeedBack variant={room.roomName != "" ? 3 : 6} />
          <CreatePreferance maxPrice={room.maxPrice} setState={setState} wish={wish} setWish={setWish} pref={pref} setPref={setPref} submitResult={create}/>
        </>
    )
  case "finish":
    if (isSubmiting) {
      return <p>Loading</p>
    }
    return (
      <>
      <CreationFeedBack variant={room.roomName != "" ? 4 : 7} />
      <CreateFinal admin={room.roomName === "" ? false : true} rooms={roomLinkInfo}/>
      </>
    )

}}
