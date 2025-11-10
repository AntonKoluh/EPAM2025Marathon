import InputCopy from "@/components/inputCopy";
import roomvector from "@/assets/roomvector.svg";
import car from "@/assets/car.svg";
import type { fetchType, usersInfoType } from "@/helpers/types";
import Modal from "@/components/Modal";

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
    <div className="relative bg-(--red)/90 shadow-[2px_2px_10px] rounded-xl flex-1 w-full max-h-60 flex flex-col justify-between items-center border-border">
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
  
  const trigger = (
    <p
      className="absolute top-50 left-1/2 -translate-x-1/2 transform-4/5 font-bold rounded-xl border-gray-950 border-3 w-50 py-0.5
        hover:bg-(--red) hover:text-white transform-all duration-150 cursor-pointer
        "
    >
      View Information
    </p>
  )
  const title = (
      <span className="flex flex-row justify-start items-top gap-5">
        <img src={car} alt="cookie pic" />
        <span className="flex flex-col">
        <span className="text-xl font-semibold">Personal Information</span>
          <span className="text-normal text-sm mt-2">
            Secret Nick needs to know where to send your presents!
          </span>
        </span>
      </span>
  )
  
  const children = (
              <span className="flex flex-col">
              <span className="text-xl font-semibold mt-2 text-black">
                Personal Information
              </span>
              <span className="flex flex-col gap-10 justify-start items-top bg-(--bg-green)/50 border-border border-3 rounded-md">
                <span className="mt-2 flex flex-row w-full justify-start items-top p-4 gap-4">
                  <span className="mt-2 flex flex-col w-full justify-start items-top p-4 gap-4">
                    <span className="flex flex-col">
                      <span className="text-gray-800">First name</span>
                      <span className="text-black font-semibold text-xl">
                        {user?.fn}
                      </span>
                    </span>
                    <span className="flex flex-col">
                      <span className="text-gray-800">Phone number</span>
                      <span className="text-black font-semibold text-xl">
                        +{user?.phone}
                      </span>
                    </span>
                    <span className="flex flex-col">
                      <span className="text-gray-800">Devlivery address</span>
                      <span className="text-black font-semibold text-xl">
                        {user?.adress}
                      </span>
                    </span>
                  </span>
                  <span className="mt-2 flex flex-col w-full justify-start items-top p-4 gap-4">
                    <span className="flex flex-col">
                      <span className="text-gray-800">Last name</span>
                      <span className="text-black font-semibold text-xl">
                        {user?.ln}
                      </span>
                    </span>
                    <span className="flex flex-col">
                      <span className="text-gray-800">Email</span>
                      <span className="text-black font-semibold text-xl">
                        {user?.email != "" ? user?.email : "-"}
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
  )
  
  return (
    <Modal trigger={trigger} title={title}>{children}</Modal>
  );
}
