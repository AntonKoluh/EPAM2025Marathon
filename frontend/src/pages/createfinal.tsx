import { inviteMessage } from "@/helpers/inviteMsg";
import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import wreath from "../assets/wreath.svg";

export default function CreateFinal({
  admin,
  rooms,
}: {
  admin: boolean;
  rooms: { room: string; user: string };
}) {
  const [personalCopied, setPersonalCopied] = useState(false);
  const [inviteMsgCopy, setInviteMsgCopy] = useState(false);
  const [adminLinkCopy, setAdminLinkCopy] = useState(false);
  const baseUrl = window.location.origin;
  const adminLinkTemp = baseUrl + "/" + rooms.room + "/" + rooms.user;
  const personalLinkTemp = baseUrl + "/" + rooms.room;
    const [inviteMsg, setInviteMsg] = useState(inviteMessage(personalLinkTemp))


  function handlePersonalCopy() {
    navigator.clipboard.writeText(personalLinkTemp);
    setPersonalCopied(true);
  }

  function handleInviteCopy() {
    navigator.clipboard.writeText(inviteMsg);
    setInviteMsgCopy(true);
  }

  function handleAdminCopy() {
    navigator.clipboard.writeText(adminLinkTemp);
    setAdminLinkCopy(true);
  }

  if (admin) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center px-10 py-4 w-full">
        <div className="flex flex-col justify-center gap-2 overflow-hidden w-full">
          <h2 className="text-3xl">Your Secret Nick Room is Ready!</h2>
          <p>
            Share the link below with up to 20 friends to invite them -- and
            <br />
            don't lose your personal link! Let the festive magic begin
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <h3 className="font-semibold w-full max-w-xl">Your Room Link</h3>
          <div className="flex flex-row justify-center items-center w-full max-w-xl">
            <input
              type="text"
              className="rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl border-r-0 rounded-r-none"
              value={personalLinkTemp}
              name="personalLink"
              disabled={true}
            />
            {personalCopied ? (
              <CopyCheck
                className="p-0.5 border-border border-3 rounded-sm border-l-0 rounded-l-none w-9 h-9 cursor-pointer text-(--green)"
                onClick={handlePersonalCopy}
              />
            ) : (
              <Copy
                className="p-0.5 border-border border-3 rounded-sm border-l-0 rounded-l-none w-9 h-9 cursor-pointer hover:bg-(--green) hover:text-white transition-all duration-200"
                onClick={handlePersonalCopy}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-5">
          <h3 className="font-semibold max-w-xl w-full">Invitation Note</h3>
          <div className="flex flex-row justify-center items-center w-full max-w-xl h-full">
            <textarea
              className="rounded-sm text-sm text-black bg-(--gray) border-border border-3 w-full resize-none max-w-xl h-64 border-r-0 rounded-r-none focus:outline-none"
              value={inviteMsg}
              onChange={(e) => setInviteMsg(e.target.value)}
            />
            <div className="h-64 w-fit border-border rounded-l-none border-3 border-l-0 rounded-sm bg-(--gray) flex justify-center items-center">
              {inviteMsgCopy ? (
                <CopyCheck
                  className="p-1 w-9 h-9 cursor-pointer text-(--green) border-0"
                  onClick={handleInviteCopy}
                />
              ) : (
                <Copy
                  className="cursor-pointer hover:bg-(--green) hover:text-white transition-all duration-200 border-0"
                  onClick={handleInviteCopy}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center w-full mt-2">
          <div className=" w-full max-w-xl">
            <h3 className="font-semibold w-full max-w-xl">
              Your Personal Participant Link
            </h3>
            <p className="font-normal w-full max-w-xl">
              This is your unique personal link to access the Secret Nick room.
            </p>
          </div>
          <div className="flex flex-row justify-center items-center w-full max-w-xl">
            <input
              type="text"
              className="rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl border-r-0 rounded-r-none"
              value={adminLinkTemp}
              name="adminlink"
              disabled={true}
            />
            {adminLinkCopy ? (
              <CopyCheck
                className="p-0.5 border-border border-3 rounded-sm border-l-0 rounded-l-none w-9 h-9 cursor-pointer text-(--green)"
                onClick={handleAdminCopy}
              />
            ) : (
              <Copy
                className="p-0.5 border-border border-3 rounded-sm border-l-0 rounded-l-none w-9 h-9 cursor-pointer hover:bg-(--green) hover:text-white transition-all duration-200"
                onClick={handleAdminCopy}
              />
            )}
          </div>
        </div>
        <Link
          to={adminLinkTemp}
          className="rounded-4xl bg-(--green) h-12 text-xl text-gray-100 hover:bg-(--green)/80 shadow-md/40 hover:shadow-sm cursor-pointer w-full mt-3 flex justify-center items-center"
        >
          Visit Your Room
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-start items-left p-6 w-full">
      <div className="flex flex-row justify-center items-top w-full">
        <div className="flex-2">
          <h1 className="text-3xl font-bold">You Have Joined the Room!</h1>
          <p className="mt-2">
            Your holiday adventure is about to begin! Thank you for joining the{" "}
            <br /> Secret Nick room
          </p>
          <p className="mt-6 text-2xl font-semibold">
            Your Personal Participant Link
          </p>
          <p className="mt-2">
            This is your unique personal link to access the Secret Nick room.
          </p>
        </div>
        <img src={wreath} alt="wreath" className="flex-1 size-[180px]" />
      </div>
      <div className="flex flex-row justify-center items-center w-full mt-5">
        <input
          type="text"
          className="rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full border-r-0 rounded-r-none"
          value={adminLinkTemp}
          name="adminlink"
          disabled={true}
        />
        {adminLinkCopy ? (
          <CopyCheck
            className="p-0.5 border-border border-3 rounded-sm border-l-0 rounded-l-none w-9 h-9 cursor-pointer text-(--green)"
            onClick={handleAdminCopy}
          />
        ) : (
          <Copy
            className="p-0.5 border-border border-3 rounded-sm border-l-0 rounded-l-none w-9 h-9 cursor-pointer hover:bg-(--green) hover:text-white transition-all duration-200"
            onClick={handleAdminCopy}
          />
        )}
      </div>
      <p className="text-[10px] text-red-500 px-1">
        *Do not share this link with others
      </p>
      <Link
        to={adminLinkTemp}
        className="my-6 rounded-4xl bg-(--green) h-12 text-xl text-gray-100 hover:bg-(--green)/80 shadow-md/40 hover:shadow-sm cursor-pointer w-full flex justify-center items-center"
      >
        Visit Your Room
      </Link>
    </div>
  );
}
