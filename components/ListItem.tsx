'use client'
import { useTransition } from "react"
import { checkItem } from "../utils/actions"
import styles from './ListItem.module.css'

const ListItem = ({ listItem }) => {
    const [isPending, startTransition] = useTransition()
    return <div
    className={`${listItem.checked ? styles.checked : styles.item}` } 
    onClick={() => startTransition(() => checkItem(listItem.id))}>
        {listItem.content}
    </div>
}

export default ListItem