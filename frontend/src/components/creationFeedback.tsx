export default function CreationFeedBack({variant}:{variant: number}){
    switch (variant){
    case 1:
    return (<div className="flex flex-row justify-center items-center">
        <span className="relative w-6 h-6 bg-linear-270 from-gray-400 to-(--green) rounded-full">
          <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-semibold">Room</span>
        </span>
        <span className="w-20 h-2 bg-gray-400"></span>
        <span className="relative w-6 h-6 bg-gray-400 rounded-full">
            <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-normal">User</span>
        </span>
        <span className="w-20 h-2 bg-gray-400"></span>
        <span className="relative w-6 h-6 bg-gray-400 rounded-full">
            <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-normal">Preferances</span>
        </span>
      </div>)
    
    case 2:
    return (<div className="flex flex-row justify-center items-center">
        <span className="relative w-6 h-6 bg-(--green) rounded-full">
          <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-normal">Room</span>
        </span>
        <span className="w-20 h-2 bg-(--green)"></span>
        <span className="relative w-6 h-6 bg-linear-270 from-gray-400 to-(--green) rounded-full">
            <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-semibold">User</span>
        </span>
        <span className="w-20 h-2 bg-gray-400"></span>
        <span className="relative w-6 h-6 bg-gray-400 rounded-full">
            <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-normal">Preferances</span>
        </span>
      </div>)
    case 3:
    return (<div className="flex flex-row justify-center items-center">
        <span className="relative w-6 h-6 bg-(--green) rounded-full">
          <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-normal">Room</span>
        </span>
        <span className="w-20 h-2 bg-(--green)"></span>
        <span className="relative w-6 h-6 bg-(--green) rounded-full">
            <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-normal">User</span>
        </span>
        <span className="w-20 h-2 bg-(--green)"></span>
        <span className="relative w-6 h-6 bg-linear-270 from-gray-400 to-(--green) rounded-full">
            <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-semibold">Preferances</span>
        </span>
      </div>)
    
    case 5:
    return (<div className="flex flex-row justify-center items-center">
        <span className="relative w-6 h-6 bg-linear-270 from-gray-400 to-(--green) rounded-full">
            <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-normal">User</span>
        </span>
        <span className="w-20 h-2 bg-gray-400"></span>
        <span className="relative w-6 h-6 bg-gray-400 rounded-full">
            <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-normal">Preferances</span>
        </span>
      </div>)
    case 6:
    return (<div className="flex flex-row justify-center items-center">
        <span className="relative w-6 h-6 bg-(--green) rounded-full">
            <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-normal">User</span>
        </span>
        <span className="w-20 h-2 bg-(--green)"></span>
        <span className="relative w-6 h-6 bg-linear-270 from-gray-400 to-(--green) rounded-full">
            <span className="absolute text-[12px] top-6 left-1/2 -translate-x-1/2 font-normal">Preferances</span>
        </span>
      </div>)
    }
}