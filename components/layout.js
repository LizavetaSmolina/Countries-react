import styles from '../styles/Home.module.css'
import { Image } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"

const Layout = ({ children }) => {
    return (
        <div>
            <header className={styles.header}>
            <Link href='/'><Image boxSize="30px" src="https://image.flaticon.com/icons/png/512/814/814513.png" display = 'inline-block'/></Link>        Countries of the World
            </header>
            {children}
        </div>
    );
}

export default Layout;