type incomingTypes = {
  text: string;
  variant: "main" | "secondary" | "inactive";
};

export default function Button({ text, variant }: incomingTypes) {
  switch (variant) {
    case "main":
      return <MainButton text={text} />;
    case "secondary":
        return <SecondaryButton text={text} />
    case "inactive":
        return <InactiveButton text={text} />
  }
}

function MainButton({ text }: { text: string }) {
  return (
    <button
      className="sm:text-xl text-md rounded-md font-(family-name:--roboto-font) bg-linear-to-t from-[#2C5134] to-[#2C5134] w-full max-w-100
         hover:from-red-500 hover:to-[#CC3332] transition-color duration-150 font-semibold py-2 px-5 text-zinc-100 cursor-pointer shadow-md/30 hover:shadow-sm text-shadow-2xs"
    >
      {text}
    </button>
  );
}

function SecondaryButton({ text }: { text: string }) {
  return (
    <button
      className="w-full max-w-100 sm:text-xl text-md rounded-md font-(family-name:--roboto-font) border-[#2C5134] border bg-transparent hover:bg-linear-to-t hover:from-[#2C5134] hover:to-[#2C5134]
         from-red-500 to-[#CC3332] transition-color duration-150 font-semibold py-2 px-5 hover:text-zinc-100 cursor-pointer shadow-md/30 hover:shadow-sm text-shadow-2xs "
    >
      {text}
    </button>
  );
}

function InactiveButton({ text }: { text: string }) {
  return (
    <button
      className="w-full max-w-100 sm:text-xl text-md rounded-md font-(family-name:--roboto-font) border-[#2C5134] border bg-gray-300
       transition-color duration-150 font-semibold py-2 px-5 cursor-default shadow-sm text-shadow-2xs"
    >
      {text}
    </button>
  );
}
