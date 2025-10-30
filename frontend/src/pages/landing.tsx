import { Link } from "react-router";
import Button from "../components/buttons";

export default function Landing(){
    return (
        <div className="flex flex-col justify-start items-center gap-26 h-full">
    <h1 className="font-(family-name:--roboto-font) font-bold text-black text-xl sm:text-2xl text-center">Make you secret santa gift exchanges as easy as it gets!</h1>
    <div className="flex flex-col gap-4 justify-start items-center h-full w-full">
    <Link to={"/create"} className="w-full text-center"><Button text={"Create New Room"} variant="main"/></Link>
    <Link to={"/join"} className="w-full text-center"><Button text={"Join Existing Room"} variant="secondary" /></Link>
    </div>
    </div>
)
}