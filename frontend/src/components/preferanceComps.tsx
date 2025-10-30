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
          ? { ...item, value: e.target.value } // update only this one
          : item
      )
    );
  }
  return (
      <input
        type="text"
        className="rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl h-7"
        onChange={handleChange}
      />
  );
}

export function PreferenceLink({ wish, setWish }: incomingProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWish((prev) =>
      prev.map((item) =>
        item.id === wish.id
          ? { ...item, link: e.target.value } // update only this one
          : item
      )
    );
  }
  return (
    <input
      type="text"
      className="rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl h-7"
      onChange={handleChange}
    />
  );
}
