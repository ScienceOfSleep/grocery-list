import ListItem from "./ListItem"

const GroceryList = ({ listItems }) => {
    return(
        <div>
            {listItems.map(listItem => (
                <ListItem listItem={listItem} key={listItem.id}/>
            ))}
        </div>
    )
}

export default GroceryList