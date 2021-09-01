import {useState, useEffect} from 'react'
import { List, ListItem } from '@chakra-ui/layout';
import styles from '../styles/Home.module.css'
import { Link } from "@chakra-ui/react"

const Countries = () => {

    

    const [countries, setCountries] = useState([]);

    const gettingCountries = async (event) => {
        const api_url = await fetch(`https://restcountries.eu/rest/v2/all`);
        const data = await api_url.json();
        const countries = data;
        setCountries(countries);
    }

    useEffect(() => {
        gettingCountries();
      }, []);
    

    return (
        <div>
            <List spacing={1} className={styles.list}>
                {countries.map((country) => (
                    <ListItem key={country.id}>
                        <Link href={'/' + country.name}>
                            {country.name}
                        </Link>
                        
                    </ListItem>
                ))}
            </List>
            
        </div>
    );
}

export default Countries;