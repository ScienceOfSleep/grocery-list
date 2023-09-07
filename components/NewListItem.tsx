import { newListItem } from "../utils/actions"

const NewListItem = ({}) => {
    return(
        <div>
            <form action={newListItem}>
                <input name="content" type="text" />
                <button type="submit">Add to list</button>
            </form>
        </div>
    )
}

export default NewListItem