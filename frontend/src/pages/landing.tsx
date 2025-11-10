import { Link } from "react-router";
import Button from "@/components/buttons";
import fireworks from "@/assets/landing/firework.svg"
import presents from "@/assets/landing/presents.svg"
import present from "@/assets/landing/present.svg"
import snowglobe from "@/assets/landing/snowglobe.svg"
import raindeers from "@/assets/Raindeers.svg"

export default function Landing(){
    return (
        <>
        <title>Secret Nick</title>
        <div className="relative flex flex-col justify-start items-center gap-26 h-full">
            <div className="z-10">
    <h1 className="font-(family-name:--roboto-font) font-bold text-black text-xl sm:text-4xl text-center mt-25">Make This Holiday Magical <br/> with Seecret Nick</h1>
    <p className="font-semibold text-center text-xl mt-2">It's a secret - don't tell who you're matched with! <br/>Use the wishlist or preferences to pick the perfect gift. <br/> Be ready for the big gift exchange!</p>
    </div>
    <div className="flex flex-col gap-4 justify-start items-center h-full w-full">
    <Link to={"/create"} className="w-full text-center"><Button text={"Create New Room"} variant="main"/></Link>
    <Link to={"/join"} className="w-full text-center"><Button text={"Join Existing Room"} variant="secondary" /></Link>
    </div>
        <img src = {fireworks} alt="fireworks" className="absolute left-3"/>
        <img src = {presents} alt="presents" className="absolute right-2"/>
        <img src = {raindeers} alt="raindeers" className="absolute right-1/2"/>
        <img src = {present} alt="present" className="absolute left-6 bottom-8"/>
        <img src = {snowglobe} alt="snowglobe" className="absolute right-10 bottom-8"/>
        <img src = {snowglobe} alt="snowglobe" className="absolute right-3/4 top-65 z-0"/>
        <img src = {fireworks} alt="fireworks" className="absolute left-3/4 top-65 z-0"/>
    </div>
    </>
)
}