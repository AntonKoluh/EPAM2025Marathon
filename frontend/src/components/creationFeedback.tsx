import { Check } from "lucide-react";

export default function CreationFeedBack({ variant }: { variant: number }) {
  switch (variant) {
    case 1:
      return (
        <div className="flex flex-row gap-2 justify-center items-center">
          {/* Room */}
          <span className="bg-(--green) text-white rounded-full text-center w-6 h-6 text-bold">
            1
          </span>
          <span className="text-sm">Room Creation</span>
          <span className="h-0.5 w-20 bg-gray-300 rounded-md"></span>
          {/* User */}
          <span className="bg-gray-300 rounded-full text-center w-6 h-6 text-bold">
            2
          </span>
          <span className="text-sm">Personal Info</span>
          <span className="h-0.5 w-20 bg-gray-300 rounded-md"></span>
          {/* Preferences */}
          <span className="bg-gray-300 rounded-full text-center w-6 h-6 text-bold">
            3
          </span>
          <span className="text-sm">Preferences</span>
        </div>
      );

    case 2:
      return (
        <div className="flex flex-row gap-2 justify-center items-center">
          {/* Room */}
          <span className="bg-green-500/30 text-white rounded-full flex justify-center items-center w-6 h-6 text-bold">
            <Check className="text-(--green) h-5 w-5 mx-auto my-auto" />
          </span>
          <span className="text-sm text-(--green)">Room Creation</span>
          <span className="h-0.5 w-20 bg-(--green) rounded-md"></span>
          {/* User */}
          <span className="bg-(--green) text-white rounded-full text-center w-6 h-6 text-bold">
            2
          </span>
          <span className="text-sm">Personal Info</span>
          <span className="h-0.5 w-20 bg-gray-300 rounded-md"></span>
          {/* Preferences */}
          <span className="bg-gray-300 rounded-full text-center w-6 h-6 text-bold">
            3
          </span>
          <span className="text-sm">Preferences</span>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-row gap-2 justify-center items-center">
          {/* Room */}
          <span className="bg-green-500/30 text-white rounded-full flex justify-center items-center w-6 h-6 text-bold">
            <Check className="text-(--green) h-5 w-5 mx-auto my-auto" />
          </span>
          <span className="text-sm text-(--green)">Room Creation</span>
          <span className="h-0.5 w-20 bg-(--green) rounded-md"></span>
          {/* User */}
          <span className="bg-green-500/30 text-white rounded-full flex justify-center items-center w-6 h-6 text-bold">
            <Check className="text-(--green) h-5 w-5 mx-auto my-auto" />
          </span>
          <span className="text-sm text-(--green)">Personal Info</span>
          <span className="h-0.5 w-20 bg-(--green) rounded-md"></span>
          {/* Preferences */}
          <span className="bg-(--green) text-white rounded-full text-center w-6 h-6 text-bold">
            3
          </span>
          <span className="text-sm text-(--green)">Preferences</span>
        </div>
      );
    case 4:
      return (
        <div className="flex flex-row gap-2 justify-center items-center">
          {/* Room */}
          <span className="bg-green-500/30 text-white rounded-full flex justify-center items-center w-6 h-6 text-bold">
            <Check className="text-(--green) h-5 w-5 mx-auto my-auto" />
          </span>
          <span className="text-sm text-(--green)">Room Creation</span>
          <span className="h-0.5 w-20 bg-(--green) rounded-md"></span>
          {/* User */}
          <span className="bg-green-500/30 text-white rounded-full flex justify-center items-center w-6 h-6 text-bold">
            <Check className="text-(--green) h-5 w-5 mx-auto my-auto" />
          </span>
          <span className="text-sm text-(--green)">Personal Info</span>
          <span className="h-0.5 w-20 bg-(--green) rounded-md"></span>
          {/* Preferences */}
          <span className="bg-green-500/30 text-white rounded-full flex justify-center items-center w-6 h-6 text-bold">
            <Check className="text-(--green) h-5 w-5 mx-auto my-auto" />
          </span>
          <span className="text-sm text-(--green)">Preferences</span>
        </div>
      );

    case 5:
      return (
        <div className="flex flex-row gap-2 justify-center items-center">
          {/* User */}
          <span className="bg-(--green) text-white rounded-full text-center w-6 h-6 text-bold">
            1
          </span>
          <span className="text-sm">Personal Info</span>
          <span className="h-0.5 w-20 bg-gray-300 rounded-md"></span>
          {/* Preferences */}
          <span className="bg-gray-300 rounded-full text-center w-6 h-6 text-bold">
            2
          </span>
          <span className="text-sm">Preferences</span>
        </div>
      );
    case 6:
      return (
        <div className="flex flex-row gap-2 justify-center items-center">
          {/* User */}
          <span className="bg-green-500/30 text-white rounded-full flex justify-center items-center w-6 h-6 text-bold">
            <Check className="text-(--green) h-5 w-5 mx-auto my-auto" />
          </span>
          <span className="text-sm text-(--green)">Personal Info</span>
          <span className="h-0.5 w-20 bg-(--green) rounded-md"></span>
          {/* Preferences */}
          <span className="bg-(--green) text-white rounded-full text-center w-6 h-6 text-bold">
            2
          </span>
          <span className="text-sm text-(--green)">Preferences</span>
        </div>
      );
    case 7:
      return (
        <div className="flex flex-row gap-2 justify-center items-center">
          <span className="bg-green-500/30 text-white rounded-full flex justify-center items-center w-6 h-6 text-bold">
            <Check className="text-(--green) h-5 w-5 mx-auto my-auto" />
          </span>
          <span className="text-sm text-(--green)">Personal Info</span>
          <span className="h-0.5 w-20 bg-(--green) rounded-md"></span>
          {/* Preferences */}
          <span className="bg-green-500/30 text-white rounded-full flex justify-center items-center w-6 h-6 text-bold">
            <Check className="text-(--green) h-5 w-5 mx-auto my-auto" />
          </span>
          <span className="text-sm text-(--green)">Preferences</span>
        </div>
      );
  }
}
