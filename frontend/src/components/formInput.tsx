export default function Input({placeholder = "", value, state} : {placeholder?: string, value: string, state:React.Dispatch<React.SetStateAction<string>>}){
    return (
        <input type="text" placeholder={placeholder} className="
        bg-zinc-200 rounded-md text-xl px-2 py-1 text-black focus:outline-0
        "
        value={value}
        onChange={(e) => state(e.target.value)}/>
    )
}