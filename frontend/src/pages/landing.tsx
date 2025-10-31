import { Link } from "react-router";
import Button from "../components/buttons";

export default function Landing(){
    return (
        <div className="flex flex-col justify-start items-center gap-26 h-full">
            <div>
    <h1 className="font-(family-name:--roboto-font) font-bold text-black text-xl sm:text-4xl text-center mt-25">Make This Holiday Magical <br/> with Seecret Nick</h1>
    <p className="font-semibold text-center text-xl mt-2">It's a secret - don't tell who you're matched with! <br/>Use the wishlist or preferences to pick the perfect gift. <br/> Be ready for the big gift exchange!</p>
    </div>
    <div className="flex flex-col gap-4 justify-start items-center h-full w-full">
    <Link to={"/create"} className="w-full text-center"><Button text={"Create New Room"} variant="main"/></Link>
    <Link to={"/join"} className="w-full text-center"><Button text={"Join Existing Room"} variant="secondary" /></Link>
    </div>
    </div>
)
}