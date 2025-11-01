import rainder from "@/assets/Raindeers.svg";
import infocircle from "@/assets/InfoCircleFilled.svg";
import bin from "@/assets/bin.svg";
import linksvg from "@/assets/link.svg";
import cookie from "@/assets/cookie.svg";
import type { fetchType, usersInfoType } from "@/helpers/types";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { toast } from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputCopy from "@/components/inputCopy";

export default function UserList({
  roomInfo,
  user,
}: {
  roomInfo: fetchType | null;
  user: string;
}) {
  const playersCount = roomInfo?.users.length || 0;
  const currentAdmin =
    roomInfo?.users.filter((item) => item.admin === true)[0]?.id || -1;
  const currentUser =
    roomInfo?.users.filter((item) => item.code === user)[0]?.id || -1;

  console.log(currentAdmin, currentUser);

  return (
    <div className="bg-white rounded-xl flex-2 w-full h-fit p-4 shadow-md/40 flex flex-col justify-center items-center">
      <div className="flex flex-row justify-start items-center">
        <div>
          <h1 className="text-2xl font-semibold text-left">Who's Playing?</h1>
          <p>
            <span
              className={playersCount != 20 ? "text-gray-500" : "text-(--red)"}
            >
              {playersCount}/
            </span>
            20
          </p>
        </div>
        <img src={rainder} alt="Raindeers" />
      </div>
      <div className="flex flex-col justify-start items-left mt-2 w-full gap-2">
        {roomInfo?.users.map((items) => (
          <UserCard
            key={items.id}
            user={items}
            currentUser={currentUser}
            currentAdmin={currentAdmin}
          />
        ))}
      </div>
    </div>
  );
}

function UserCard({
  user,
  currentUser,
  currentAdmin,
}: {
  user: usersInfoType;
  currentUser: number;
  currentAdmin: number;
}) {
  const fullName =
    user.fn.charAt(0).toUpperCase() +
    user.fn.slice(1) +
    " " +
    user.ln.charAt(0).toUpperCase() +
    user.ln.slice(1);

  function handleLinkCopy(code: string) {
    const link = window.location.href.slice(0, -6);
    navigator.clipboard.writeText(link + code);
    toast("Link has been copied successfully");
  }

  return (
    <div className="shadow-md/20 bg-(--gray) rounded-xl py-2 px-4 flex flex-row justify-between items-center w-full">
      <p className="text-xl font-medium w-full items-center">{fullName}</p>
      <div className="flex flex-row gap-2 w-full justify-end text-right items-center">
        <span className="w-0.5 h-3 bg-black" />
        {user.phone != "" && (
          <span className="mr-1">
            {user.id === currentAdmin
              ? "Admin"
              : user.id === currentUser
              ? "You"
              : ""}
          </span>
        )}
        {currentUser != currentAdmin && user.id === currentAdmin && (
          <InfoHover user={user} />
        )}
        {currentUser === currentAdmin && (
          <>
            {user.id != currentAdmin && <DeleteConfirmation user={user} />}
            <img
              src={linksvg}
              alt="link copy button"
              className="cursor-pointer hover:bg-gray-200"
              onClick={() => handleLinkCopy(user.code)}
            />
            <ParticipantDetails user={user} />
          </>
        )}
      </div>
    </div>
  );
}

function InfoHover({ user }: { user: usersInfoType }) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <img src={infocircle} alt="info button" className="cursor-pointer" />
      </HoverCardTrigger>
      <HoverCardContent>
        Phone: +{user.phone} <br />
        {user.email !== "" ? `Email: ${user.email}` : "Email not provided"}
      </HoverCardContent>
    </HoverCard>
  );
}

function DeleteConfirmation({ user }: { user: usersInfoType }) {
  return (
    <Dialog>
      <DialogTrigger>
        <img
          src={bin}
          alt="delete button"
          className="cursor-pointer hover:bg-gray-200"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            Removing {user.fn + " " + user.ln} will kick them from the room!
            *They can be reinvited at a later time prior to game starting *You
            cannot remove participants after the game has began
            <div className="flex flex-row justify-center gap-6 mt-6">
              <button className="bg-(--red) py-1 w-40 text-xl rounded-xl font-semibold shadow-md/30 text-black hover:shadow-md hover:bg-red-400 transition-all duration-150 cursor-pointer">
                Remove
              </button>
              <DialogClose asChild>
                <button className="bg-gray-100 py-1 w-40 text-xl rounded-xl font-semibold shadow-md/30 text-black hover:shadow-md hover:gray-300 transition-all duration-150 cursor-pointer">
                  Cancel
                </button>
              </DialogClose>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function ParticipantDetails({ user }: { user: usersInfoType }) {
  return (
    <Dialog>
      <DialogTrigger>
        <img
          src={infocircle}
          alt="info button"
          className="cursor-pointer hover:bg-gray-200"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-row justify-start items-top gap-5">
              <img src={cookie} alt="cookie pic" />
              <div>
                <h2 className="text-xl font-semibold">Partipant Details</h2>
                <p className="text-normal text-sm mt-2">
                  Everything about your Saint Nick player
                </p>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription>
            <div>
              <h2 className="text-xl font-semibold mt-2 text-black">
                Personal Information
              </h2>
              <div className="flex flex-col gap-10 justify-start items-top bg-(--bg-green)/50 border-border border-3 rounded-md">
              <div className="mt-2 flex flex-row w-full justify-start items-top p-4 gap-4">
                <div className="mt-2 flex flex-col w-full justify-start items-top p-4 gap-4">
                  <div>
                    <p className="text-gray-800">First name</p>
                    <p className="text-black font-semibold text-xl">
                      {user.fn}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800">Phone number</p>
                    <p className="text-black font-semibold text-xl">
                      +{user.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800">Devlivery address</p>
                    <p className="text-black font-semibold text-xl">
                      {user.adress}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex flex-col w-full justify-start items-top p-4 gap-4">
                  <div>
                    <p className="text-gray-800">Last name</p>
                    <p className="text-black font-semibold text-xl">
                      {user.ln}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800">Email</p>
                    <p className="text-black font-semibold text-xl">
                      {user.email != "" ? user.email : "-"}
                    </p>
                  </div>
                </div>
                </div>
                <div className="flex flex-col items-left justify-start px-8 mb-2">
                  <p>Participant's Person Room Link</p>
                  <InputCopy link={window.location.href} />
                  <p className="text-red-600 text-[12px]">
                    Share this link only with the participant
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-6 mt-6">
              <DialogClose asChild>
                <button className="text-center ml-auto bg-(--green) py-1 w-60 text-xl rounded-xl font-semibold shadow-md/30 text-white hover:shadow-md hover:bg-green-700 transition-all duration-150 cursor-pointer">
                  Go Back to Room
                </button>
              </DialogClose>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
