import InputCopy from "@/components/inputCopy";
import roomvector from "@/assets/roomvector.svg";
import car from "@/assets/car.svg";
import type { fetchType, usersInfoType } from "@/helpers/types";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function PersonalCard({
  roomInfo,
  user,
}: {
  roomInfo: fetchType | null;
  user: string;
}) {
    const currentUser =
    roomInfo?.users.filter((item) => item.code === user)[0]
  return (
    <div className="relative bg-(--red)/90 shadow-[2px_2px_10px] rounded-xl flex-1 w-full h-60 flex flex-col justify-between items-center border-border">
      <div className="p-4 w-full">
        <p className="text-white text-left w-full text-2xl font-semibold">
          Hi, {roomInfo?.users?.find((item) => item.code === user)?.fn}
        </p>
        <p className="text-white text-[12px] mt-2">
          Get ready for happy gift exchange nad fun in Secret Nick game!
        </p>
        <div className="mt-5">
          <InputCopy link={window.location.href} />
        </div>
      </div>
      <img src={roomvector} alt="decoation cvector" className="" />
      <PersonInfo user={currentUser}/>
    </div>
  );
}

function PersonInfo({ user }: { user: usersInfoType | undefined }) {
  return (
    <Dialog>
      <DialogTrigger>
      <p
        className="absolute top-50 left-1/2 -translate-x-1/2 transform-4/5 font-bold rounded-xl border-gray-950 border-3 w-50 py-0.5
          hover:bg-(--red) hover:text-white transform-all duration-150 cursor-pointer
          "
      >
        View Information
      </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-row justify-start items-top gap-5">
              <img src={car} alt="cookie pic" />
              <div>
                <h2 className="text-xl font-semibold">Personal Information</h2>
                <p className="text-normal text-sm mt-2">
                  Secret Nick needs to know where to send your presents!
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
                        {user?.fn}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-800">Phone number</p>
                      <p className="text-black font-semibold text-xl">
                        +{user?.phone}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-800">Devlivery address</p>
                      <p className="text-black font-semibold text-xl">
                        {user?.adress}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col w-full justify-start items-top p-4 gap-4">
                    <div>
                      <p className="text-gray-800">Last name</p>
                      <p className="text-black font-semibold text-xl">
                        {user?.ln}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-800">Email</p>
                      <p className="text-black font-semibold text-xl">
                        {user?.email != "" ? user?.email : "-"}
                      </p>
                    </div>
                  </div>
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
