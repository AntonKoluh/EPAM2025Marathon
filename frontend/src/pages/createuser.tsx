import { useEffect } from "react";

export default function CreateUser(){
    const params = new URLSearchParams(window.location.search);
    let room = null
    useEffect(() => {
    if (params.get('roomName')) {
        room = ({"roomName": params.get("roomName"), "maxPrice": params.get("maxPrice"), "welcomeMsg": params.get("welcomeMsg")})
    }
    }, [])

    return (<h1>User registration</h1>)
}