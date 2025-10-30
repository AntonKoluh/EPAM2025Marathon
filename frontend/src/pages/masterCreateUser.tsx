import { useEffect, useState } from "react";
import CreatePreferance from "./createPreference";
import CreateUser from "./createuser";
import CreationFeedBack from "@/components/creationFeedback";
import CreateFinal from "./createfinal";

type roomType = {
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

  const [isSubmiting, setIsSubmiting] = useState(true)

  const [wish, setWish] = useState<{ id: number; value: string; link: string }[]>([
    { id: 1, value: "", link: "" },
  ]);
  const [pref, setPref] = useState<string>("")

  useEffect(() => {
    if (params.get("roomName")) {
      setRoom({
        roomName: params.get("roomName"),
        maxPrice: params.get("maxPrice"),
        welcomeMsg: params.get("welcomeMsg"),
        date: params.get("date"),
        empty: null,
      });
    }
  }, []);


  switch (state){
  case "user":
  return (
        <>
          <CreationFeedBack variant={room ? 2 : 5} />
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
          <CreationFeedBack variant={room ? 3 : 6} />
          <CreatePreferance maxPrice={room.maxPrice} setState={setState} wish={wish} setWish={setWish} pref={pref} setPref={setPref}/>
        </>
    )
  case "finish":
    if (isSubmiting) {
      // Submit data and spinner waiting
      console.log(room, userData, wish, pref)
      setIsSubmiting(false)
    }
    return (
      <>
      <CreationFeedBack variant={room ? 4 : 7} />
      <CreateFinal admin={room ? true : false}/>
      </>
    )

}}
