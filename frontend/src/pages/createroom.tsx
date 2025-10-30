import clsx from "clsx";
import { useState } from "react";
import { checkMaxPrice, checkRoomName } from "../helpers/formCheckers";
import { useNavigate } from "react-router";
import CreationFeedBack from "../components/creationFeedback";

export default function CreateRoom() {
  const [roomError, setRoomErrors] = useState({
    roomName: "",
    maxPrice: "",
    welcomeMsg: "",
  });
  const navigate = useNavigate();
  function submitRoom(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (!checkRoomName(String(data.roomName))) {
      setRoomErrors({ ...roomError, roomName: "Room must have a name" });
      return;
    } else {
      setRoomErrors({ ...roomError, roomName: "" });
    }
    if (checkMaxPrice(String(data.maxPrice), setRoomErrors)) {
      setRoomErrors((prev) => ({ ...prev, maxPrice: "" }));
    } else {
      return;
    }
    navigate(
      `/createuser?roomName=${data.roomName}&maxPrice=${data.maxPrice}&welcomeMsg=${data.welcomeMsg}`
    );
  }

  return (
    <div className="flex flex-col justify-start items-center gap-5 h-full w-full">
      <CreationFeedBack variant={1} />
      <form
        className="flex flex-col justify-start items-center gap-2 h-full mt-4 w-full max-w-2xl"
        onSubmit={submitRoom}
      >
        <div className="flex flex-col justify-start items-center w-full max-w-xl">
          <p className="text-left text-(--green) w-full max-w-xl">
            Room Name<span className="text-(--red)">*</span>
          </p>
          <input
            type="text"
            name="roomName"
            className={clsx(
              "bg-(--gray) rounded-sm p-1 text-black border-(--border) border w-full max-w-xl",
              roomError["roomName"] ? "border-red-600" : "border-(--green)"
            )}
            placeholder="Room Name"
          />
          {roomError["roomName"] && (
            <p className="text-red-500 text-sm">*{roomError["roomName"]}</p>
          )}
        </div>
        <div className="flex flex-col justify-start items-center w-full">
          <p className="text-left text-(--green)) w-full max-w-xl">
            Welcoming message:
          </p>
          <textarea
            name="welcomeMsg"
            className="bg-zinc-200 rounded-l-sm p-1 text-black resize-none w-full h-40 border-(green) border-2 max-w-xl"
            placeholder="Leave a nice welcoming message to put people in a gift giving mood!"
          />
        </div>
        
        <div className="flex flex-col">
          <p className="text-left text-(--green)">
            Max Price<span className="text-(--red)">*</span>
          </p>
          <div className="flex flex-row justify-center items-center">
            <input
              type="text"
              name="maxPrice"
              className={clsx(
                "bg-zinc-200 rounded-l-sm p-1 text-black w-20 border-(--green) border-2 border-r-0",
                roomError["maxPrice"] ? "border-red-600" : "border-(--green)"
              )}
              placeholder="Max Price"
            />
            <p
              className={clsx(
                "p-1 px-0.5 bg-zinc-200 rounded-r-sm h-full text-md my-auto border-(green) border-2 border-l border-l-black",
                roomError["maxPrice"] ? "border-red-600" : "border-(--green)"
              )}
            >
              UAH
            </p>
          </div>
          {roomError["maxPrice"] && (
            <p className="text-red-500 text-sm text-center">
              *{roomError["maxPrice"]}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="text-xl font-semibold border-(green) border-2 rounded-md px-8 py-1 mt-2
              cursor-pointer hover:bg-(--green) hover:text-white transition-all duration-150 shadow-md/30 hover:shadow-md"
        >
          Next{" "}
        </button>
      </form>
    </div>
  );
}
