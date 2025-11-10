import styles from "./aiLoadingSpinner.module.css"
import clsx from "clsx"

export default function AiLoadingSpinner(){
    return (
        <span className="relative flex flex-row justify-center items-center gap-2">
        <span className={clsx("bg-(--green) w-2 h-2 rounded-full", styles.spinner1)}></span>
        <span className={clsx("bg-(--green) w-2 h-2 rounded-full", styles.spinner2)}></span>
        <span className={clsx("bg-(--green) w-2 h-2 rounded-full", styles.spinner3)}></span>
        </span>
    )
}