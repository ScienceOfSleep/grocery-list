import ListItem from "./ListItem"
import styles from "./GroceryList.module.css"

const GroceryList = ({ listItems }) => {
    return(
        <ul className={styles.list}>
            {listItems.map(listItem => (
                <ListItem listItem={listItem} key={listItem.id}/>
            ))}
        </ul>
    )
}

export default GroceryList