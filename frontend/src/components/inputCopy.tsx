import { Copy, CopyCheck } from "lucide-react"
import { useState } from "react"

export default function InputCopy({link} : {link: string}) {
    const [personalCopied, setPersonalCopied] = useState(false)

    function handlePersonalCopy() {
        navigator.clipboard.writeText(link);
        setPersonalCopied(true)
    }

    return (
            <div className="w-full flex flex-row justify-center items-center bg-(--gray) rounded-sm">
            <input
              type="text"
              className="rounded-sm p-1 text-black bg-(--gray) border-border border-3 w-full max-w-xl border-r-0 rounded-r-none"
              value={link}
              name="personalLink"
              disabled={true}
            />
            {personalCopied ? (
              <CopyCheck
                className="p-0.5 border-border border-3 rounded-sm border-l-0 rounded-l-none w-9 h-9 cursor-pointer text-(--green)"
                onClick={handlePersonalCopy}
              />
            ) : (
              <Copy
                className="p-0.5 border-border border-3 rounded-sm border-l-0 rounded-l-none w-9 h-9 cursor-pointer hover:bg-(--green) hover:text-white transition-all duration-200"
                onClick={handlePersonalCopy}
              />
            )}
            </div>
    )
}