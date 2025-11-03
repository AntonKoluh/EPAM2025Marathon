import { Link, Outlet } from "react-router";
import santaHat from "./assets/santaHat.svg";
import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import santa from "@/assets/Raindeers.svg";
import { useRef } from "react";

function App() {
  function raindeer(e: React.MouseEvent<HTMLImageElement>) {
    e.preventDefault()
    const randomH = Math.floor(Math.random() * (100 - 0 + 1)) + 10;
    if (santaRef.current && wrapperRef.current) {
      santaRef.current.style.transform = "scaleX(1)"
      wrapperRef.current.style.right = "-100vw";
    }
    setTimeout(() => {
      if (santaRef.current && wrapperRef.current) {
        santaRef.current.style.transform = "scaleX(-1)"
        wrapperRef.current.style.top = `${randomH}vh`;
        wrapperRef.current.style.right = "100vw";
      }
    }, 2600);
  }

  const wrapperRef = useRef<HTMLDivElement>(null);
  const santaRef = useRef<HTMLImageElement>(null);

  return (
    <div className="relative bg-[url('./assets/bg-main.png')] bg-cover bg-center w-full h-screen py-5 z-0 flex flex-col justify-start items-center overflow-x-hidden">
      <div className="absolute right-full duration-2500" ref={wrapperRef}>
      <img
        src={santa}
        alt=""
        className=""
        ref={santaRef}
      />
      </div>
      <div className="relative h-fit w-full max-w-4xl mx-auto border-zinc-300 border-0 min-h-175 rounded-md bg-zinc-100 shadow-xl z-10 flex flex-col justify-start items-center my-4">
        <Link to={"/"} className="w-full">
          <header
            className="relative w-full h-10 bg-linear-to-t from-red-700 to-[#CC3332] rounded-t-md flex justify-center items-center
        text-xl sm:text-2xl text-zinc-100 font-(family-name:--chrismas-font) tracking-wider"
          >
            <img
              src={santaHat}
              alt="Santa hat img"
              className="absolute w-10 h-10 bottom-4 left-97 hover:border border-green-500 rounded-md z-50"
              onClick={raindeer}
            />
            Saint Nick's Jolly Gift Exchange
          </header>
        </Link>
        <div className="py-2 transition-all duration-300 w-full h-full">
          <Outlet />
        </div>
        <Toaster />
        <footer className="text-[8px] mt-auto p-1 text-left w-full border-t ">
          Made By: Koluh Anton for EPAM Marathon 2025
        </footer>
      </div>
    </div>
  );
}

export default App;
