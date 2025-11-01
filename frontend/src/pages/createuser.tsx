import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import clsx from "clsx";

type dataType = {
  fn: string;
  ln: string;
  email: string;
  adress: string;
  phone: string;
  maxPrice?: number;
  roomName?: string;
  welcomingMsg?: string;
};
type incomingProps = {
  data: dataType;
  setData: React.Dispatch<React.SetStateAction<dataType>>;
  room: boolean;
  setState: React.Dispatch<React.SetStateAction<"user" | "pref" | "finish">>;
};

export default function CreateUser({
  data,
  setData,
  room,
  setState,
}: incomingProps) {
  const [errors, setErrors] = useState({
    fn: "",
    ln: "",
    phone: "",
    email: "",
    adress: "",
  });

  function updateForm(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) {
    switch (field) {
      case "fn":
        setData((prev) => ({ ...prev, fn: e.target.value }));
        if (e.target.value.length < 3) {
          setErrors((prev) => ({
            ...prev,
            fn: "Name must be 3 chars or longer",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            fn: "",
          }));
        }
        break;
      case "ln":
        setData((prev) => ({ ...prev, ln: e.target.value }));
        if (e.target.value.length < 3) {
          setErrors((prev) => ({
            ...prev,
            ln: "Last name must be 3 chars or longer",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            ln: "",
          }));
        }
        break;
      case "phone":
        setData((prev) => ({ ...prev, phone: e.target.value }));
        if (e.target.value.length != 9) {
          setErrors((prev) => ({
            ...prev,
            phone: "Invalid number",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            phone: "",
          }));
        }
        break;
      case "email":
        setData((prev) => ({ ...prev, email: e.target.value }));
        const emailRegex = /^(?:[^\s@]+@[^\s@]+\.[^\s@]+)?$/;
        if (!emailRegex.test(e.target.value)) {
          setErrors((prev) => ({
            ...prev,
            email: "Invalid email",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            email: "",
          }));
        }
        break;
      case "adress":
        setData((prev) => ({ ...prev, adress: e.target.value }));
        if (e.target.value.length === 0) {
          setErrors((prev) => ({
            ...prev,
            adress: "Adress cannot be empty",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            adress: "",
          }));
        }
        break;
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (data.adress.length === 0) {
      setErrors((prev) => ({
        ...prev,
        adress: "Adress cannot be empty!",
      }));
      return;
    }
    for (const value of Object.values(errors)) {
      if (value != "") return;
    }
    setState("pref");
  }

  function checkForm() {
    if (data.fn === "" || data.ln === "" || data.adress === "" || data.phone === "") return true
    return false
  }

  return (
    <>
      <form className="flex flex-col gap-4 p-5 w-full" onSubmit={handleSubmit}>
        <h2 className="text-3xl">Add Your Details</h2>
        <p>Secret Nick needs to know where you live!</p>
        <div className="flex flex-col sm:flex-row w-full jusify-between gap-8">
          <div className="flex flex-col w-full">
            <p>
              First name<span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className={clsx(
                "rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl",
                errors.fn ? "border-red-700" : "border-border"
              )}
              value={data.fn}
              onChange={(e) => updateForm(e, "fn")}
            />
            {errors.fn ? (
              <span className="text-red-700 text-sm!">{errors.fn}</span>
            ) : null}
          </div>
          <div className="flex flex-col w-full">
            <p>
              Last name<span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className={clsx(
                "rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl",
                errors.ln ? "border-red-700" : "border-border"
              )}
              value={data.ln}
              onChange={(e) => updateForm(e, "ln")}
            />
            {errors.ln ? (
              <span className="text-red-700 text-sm!">{errors.ln}</span>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full jusify-between gap-8">
          <div className="flex flex-col w-full">
            <p>
              Phone number<span className="text-red-600">*</span>
            </p>
            <div className="flex flex-row justify-center items-center">
            <p className={clsx(
                "rounded-sm p-1 text-black bg-(--gray) border-border border-3 border-r-0 rounded-r-none",
                errors.phone ? "border-red-700" : "border-border"
              )}>+380</p>
            <input
              type="number"
              className={clsx(
                "rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl border-l-0 rounded-l-none focus:outline-0",
                errors.phone ? "border-red-700" : "border-border"
              )}
              value={data.phone}
              onChange={(e) => updateForm(e, "phone")}
            />
            </div>
            {errors.phone ? (
              <span className="text-red-700 text-sm!">{errors.phone}</span>
            ) : null}
          </div>
          <div className="flex flex-col w-full">
            <p>Email</p>
            <input
              type="text"
              className={clsx(
                "rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl",
                errors.email ? "border-red-700" : "border-border"
              )}
              value={data.email}
              onChange={(e) => updateForm(e, "email")}
            />
            {errors.email ? (
              <span className="text-red-700 text-sm!">{errors.email}</span>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <p>
            Adress so you can get your gift!
            <span className="text-red-600">*</span>
          </p>
          <textarea
            className={clsx(
              "rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full resize-none",
              errors.adress ? "border-red-700" : "border-border"
            )}
            value={data.adress}
            onChange={(e) => updateForm(e, "adress")}
          />
          {errors.adress ? (
            <span className="text-red-700 text-sm!">{errors.adress}</span>
          ) : null}
        </div>
        <button
          type="submit"
          className={clsx("rounded-4xl bg-(--green) h-12 text-xl text-gray-100 hover:bg-(--green)/80 shadow-md/40 hover:shadow-sm cursor-pointer", 
            checkForm() ? "bg-gray-500 hover:bg-gray-500 hover:shadow-md/40! cursor-default!" : ""
          )}
          disabled={checkForm()}
        >
          Continue
        </button>
        {room ? (
          <Link
            to={"/create"}
            className="flex flex-row justify-center items-center text-(--green) mt-2 hover:underline"
          >
            <ArrowLeft className="w-8 h-4" /> Back to the previous step
          </Link>
        ) : null}
      </form>
    </>
  );
}
