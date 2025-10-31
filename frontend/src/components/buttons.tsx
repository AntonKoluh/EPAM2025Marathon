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
      className="rounded-4xl bg-(--green) h-12 text-2xl font-bold text-gray-100 hover:bg-(--green)/80 shadow-md/40 hover:shadow-sm cursor-pointer w-full max-w-2xl"
    >
      {text}
    </button>
  );
}

function SecondaryButton({ text }: { text: string }) {
  return (
    <button
      className="rounded-4xl bg-(--white) h-12 text-2xl font-bold text-(--green) hover:bg-(--green)/80 shadow-md/40 hover:shadow-sm cursor-pointer w-full max-w-2xl"
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
