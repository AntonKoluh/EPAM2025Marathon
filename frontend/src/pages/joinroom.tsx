import { Link } from "react-router";
import Button from "../components/buttons";
import Input from "../components/formInput";
import { useState } from "react";

export default function JoinRoomByCode() {
    const [joinCode, setJoinCode] = useState("");


    return (
        <div className="flex flex-col w-full h-full justify-start mt-10 items-center gap-2">
        <h1 className="text-xl font-(family-name:--roboto-font) font-medium">Join Room by code:</h1>
        <Input placeholder={"Code"} value={joinCode} state={setJoinCode}/>
        {joinCode ? (
        <Link to={`/join/${joinCode}`} className="w-full text-center"><Button text="Join" variant="main"/></Link>
        ) : <Button text="Enter Code" variant="inactive"/>}
        </div>
    )
}