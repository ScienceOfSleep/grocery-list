'use client'
import { useTransition } from "react"
import { checkItem, deleteItem } from "../utils/actions"
import styles from './ListItem.module.css'

const ListItem = ({ listItem }) => {
    const [isPending, startTransition] = useTransition()
    return <li className={styles.listItem}>
        {/* Content */}
        <span
            className={`${listItem.checked ? styles.checked : styles.item} ${styles.content}` } 
            onClick={() => startTransition(() => checkItem(listItem.id))}
        >
            {listItem.content}
        </span>
        {/* Delete */}
        <span
            onClick={() => startTransition(() => deleteItem(listItem.id))}
            className={styles.delete}
        >
            Delete
        </span>
    </li>
}

export default ListItem