import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

type roomInfoType = {
    exchange_date: Date;
    state: boolean;
    room_code: string;
    name: string;
    msg: string;
    budget: number;
}


export default function RoomMain() {
    const { room, user } = useParams();
    const [roomInfo, setRoomInfo] = useState<roomInfoType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    if (!room || !user){
        navigate("/")
        return
    }

    useEffect(() => {
        async function getRoomInfo() {
           const data = await fetch(`http://127.0.0.1:8000/api/v1/room/${room}/${user}/`)
           const response = await data.json()
            if (response.error) {
                navigate("/")
           }
           setRoomInfo(response)
           setIsLoading(false)

        }
        getRoomInfo()
    }, [])

    if (isLoading) {
        return <h1>Loading</h1>
    }
    return <h1>{roomInfo?.name}</h1>
}