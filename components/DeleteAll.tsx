'use client'

import { deleteAll } from "../utils/actions";
import { useTransition } from "react"
import styles from "./DeleteAll.module.css"

const DeleteButton = ({ listItems }) => {
    const [isPending, startTransition] = useTransition()
    return(
        <div
            onClick={() => startTransition(() => deleteAll(listItems))}
            className={styles.deleteAll}
        >
            Delete All
        </div>
    )
}

export default DeleteButton