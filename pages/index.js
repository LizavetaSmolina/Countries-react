import styles from '../styles/Home.module.css'
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import Countries from '../components/countries'

export default function Home() {
  return (
    <div>
      <Countries />
    </div>
  )
}
