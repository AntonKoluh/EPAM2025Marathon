import { Link, Outlet } from "react-router";
import santaHat from "./assets/santaHat.svg"
import './App.css'

function App() {
  function raindeer(){
    console.log("add raindeer")
  }

  return (
    <div className="bg-[url('./assets/bg-main.png')] bg-cover bg-center w-full h-screen py-5 z-0">
      <div className="relative w-full max-w-3xl mx-auto border-zinc-300 border-2 h-full max-h-screen rounded-md bg-zinc-100 shadow-xl z-10 flex flex-col justify-start items-center">
        <Link to={"/"} className="w-full">
        <header className="relative w-full h-10 bg-linear-to-t from-red-700 to-[#CC3332] rounded-t-md flex justify-center items-center
        text-xl sm:text-2xl text-zinc-100 font-(family-name:--chrismas-font) tracking-wider"
        >
          <img src={santaHat} alt="Santa hat img" className="absolute w-10 h-10 bottom-4 left-97 hover:border border-green-500 rounded-md z-50" onClick={raindeer}/>
          Saint Nick's Jolly Gift Exchange
          </header>
        </Link>
        <div className="py-2 transition-all duration-300 w-full h-full">
        <Outlet />
        </div>
        <footer className="text-[8px] mt-auto p-1 text-left w-full border-t ">Made By: Koluh Anton for EPAM Marathon 2025</footer>
      </div>
    </div>
  )
}

export default App
