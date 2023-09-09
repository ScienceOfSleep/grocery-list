import { newListItem } from "../utils/actions"
import styles from "./NewListItem.module.css"

const NewListItem = ({}) => {
    return(
        <div className={styles.stickyFooter}>
            <form action={newListItem}>
                <input 
                    name="content" 
                    type="text" 
                    className={styles.input}
                />
                <button
                    type="submit"
                    className={styles.button}
                >
                    Add to list
                </button>
            </form>
        </div>
    )
}

export default NewListItem