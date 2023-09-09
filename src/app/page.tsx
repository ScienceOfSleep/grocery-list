import Image from 'next/image'
import styles from './page.module.css'
import db from '../../utils/db'
import GroceryList from '../../components/GroceryList'
import DeleteButton from '../../components/DeleteAll'

const getData = async () => {
  const listItems = await db.listItem.findMany({})
  return listItems
}

const Home = async () => {
  const listItems = await getData()
  return (
    <main>
      <DeleteButton listItems={listItems}/>
      <GroceryList listItems={listItems}/>
    </main>
  )
}

export default Home
