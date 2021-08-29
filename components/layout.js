import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
    return (
        <div>
            <header className={styles.header}>
            </header>
            {children}
        </div>
    );
}

export default Layout;