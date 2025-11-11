import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

export default function RecoverAdmin() {
    const [recoveredLink, setRecoveredLink] = useState<{room?: string; code?: string}>({})
    const [personalCopied, setPersonalCopied] = useState(false);
    const baseUrl = window.location.origin

      function handlePersonalCopy() {
    navigator.clipboard.writeText(`${baseUrl}/${recoveredLink.room}/${recoveredLink.code}`);
    setPersonalCopied(true);
  }

  async function submitRoom(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const req = await fetch(`${import.meta.env.VITE_API_URL}v1/user/${data.firstName}/${data.roomPass}/`)
    if (req.status === 200){
        const res: {room?: string; code?:string} = await req.json()
        setRecoveredLink(res)
    } 
    if (req.status === 401){
        toast(`Wrong Firstname or Recovery Key`)
    }
  }
  return (
    <div className="p-4 flex flex-col justify-start items-center gap-3">
        {recoveredLink.code == undefined ? (
            <>
      <p className="font-bold">Recover admin password</p>
      <form
        className="flex flex-col justify-start items-center gap-2 h-full mt-4 w-full max-w-sm"
        onSubmit={submitRoom}
      >
        <input
          type="text"
          name="firstName"
          className="rounded-sm p-1 text-black bg-(--gray) border-border border w-full"
          placeholder="First Name"
        />
        <input
          type="text"
          name="roomPass"
          className="rounded-sm p-1 text-black bg-(--gray) border-border border w-full"
          placeholder="Recovery Password"
        />
        <button
          type="submit"
          className="text-xl font-semibold border-(green) border-2 rounded-md px-8 py-1 mt-5 w-full
              cursor-pointer hover:bg-(--green) hover:text-white transition-all duration-150 shadow-md/30 hover:shadow-md"
        >
          Recover
        </button>
      </form>
      </>
      ): (
        <>
          <div className="flex flex-row justify-center items-center w-full max-w-xl">
            <input
              type="text"
              className="rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl border-r-0 rounded-r-none"
              value={`${baseUrl}/${recoveredLink.room}/${recoveredLink.code}`}
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
                  <Link
          to={`${baseUrl}/${recoveredLink.room}/${recoveredLink.code}`}
          className="rounded-4xl bg-(--green) h-12 text-xl text-gray-100 hover:bg-(--green)/80 shadow-md/40 hover:shadow-sm cursor-pointer w-3/4 mt-3 flex justify-center items-center"
        >
          Visit Your Room
        </Link>
        </>
      )}
    </div>
  );
}
