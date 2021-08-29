import {useState, useEffect} from 'react'
import { List, ListItem } from '@chakra-ui/layout';
import styles from '../styles/Home.module.css'

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
                    <ListItem key={country.id}>{country.name}</ListItem>
                ))}
            </List>
            
        </div>
    );
}

export default Countries;