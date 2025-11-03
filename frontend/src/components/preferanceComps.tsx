import clsx from "clsx";
import { useState } from "react";

type wishType = {
  id: number;
  value: string;
  link: string;
};

type incomingProps = {
  wish: wishType;
  setWish: React.Dispatch<React.SetStateAction<wishType[]>>;
};

export function PreferenceWish({ wish, setWish }: incomingProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWish((prev) =>
      prev.map((item) =>
        item.id === wish.id
          ? { ...item, value: e.target.value }
          : item
      )
    );
  }
  return (
    <div className="h-12">
      <input
        type="text"
        className="rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl h-7"
        onChange={handleChange}
      />
      </div>
  );
}

export function PreferenceLink({ wish, setWish }: incomingProps) {
  const [error, setError] = useState<string>("");
  const urlRegex = /^(https?:\/\/\S*)?$/;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!urlRegex.test(e.target.value)) {
      setError("Url must either be valid or an empty string")
    } else {
      setError("")
    }
    setWish((prev) =>
      prev.map((item) =>
        item.id === wish.id
          ? { ...item, link: e.target.value }
          : item
      )
    );
  }
  return (
    <div className="h-12">
    <input
      type="text"
      className={clsx("rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl h-7", 
        error != "" ? "outline-red-600 outline-2" : "outline-0"
      )}
      onChange={handleChange}
    />
    <span className="text-[10px] text-red-600">{error != "" ? (error) : ""}</span>
    </div>
  );
}
