'use client'

import { deleteAll } from "../utils/actions";
import { useTransition } from "react"

const DeleteButton = ({ listItems }) => {
    const [isPending, startTransition] = useTransition()
    return(
        <div
            onClick={() => startTransition(() => deleteAll(listItems))}
        >
            Delete All
        </div>
    )
}

export default DeleteButton