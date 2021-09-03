import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'
import { Stack } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react"

export const getStaticPaths = async () => {
    const api_url_all = await fetch(`https://restcountries.eu/rest/v2/all`);
    const data_all = await api_url_all.json();
    const paths = data_all.map((country) => {
        return {
            params: { name: country.name.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    var name = context.params.name;
    var api_url = null;
    if (context.params.name == 'Åland Islands'){
        api_url = await fetch(`https://restcountries.eu/rest/v2/callingcode/358`);
    }
    else if (context.params.name == 'Saint Barthélemy'){
        api_url = await fetch(`https://restcountries.eu/rest/v2/callingcode/590`);
    }
    else if (context.params.name == 'Réunion'){
        api_url = await fetch(`https://restcountries.eu/rest/v2/capital/Saint-Denis`);
    }
    else if (context.params.name == "Côte d'Ivoire"){
        api_url = await fetch(`https://restcountries.eu/rest/v2/callingcode/225`);
    }
    else if (context.params.name == 'Curaçao'){
        api_url = await fetch(`https://restcountries.eu/rest/v2/callingcode/599`);
    }
    else {
        api_url = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
    }
        const data = await api_url.json();
    
    return {
        props: {country: data}
    }
}

const Info = ({country}) => {

    let arr = []
    for (let i = 0; i < country[0].languages.length; i++) {
       arr.push(country[0].languages[i].name);
    }
    let lang = arr.join(', ')

    return (
        <div>
            <div className={styles.table}>
                <Stack direction="row" spacing={40}>
                    <h1 className={styles.name}><b>{country[0].name}</b><br/>{country[0].nativeName}</h1>
                    <Image width='200px' src={country[0].flag} />
                </Stack>
            </div>
            
            <Table className={styles.table} variant="striped" colorScheme="teal">
                <TableCaption>This article is about: {country[0].name}.</TableCaption>
                <Thead>
                    <Tr>
                    <Th>Facts & Figures</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                    <Td><b>Capital</b></Td>
                    <Td>{country[0].capital}</Td>
                    </Tr>
                    <Tr>
                    <Td><b>Population</b></Td>
                    <Td>{country[0].population}</Td>
                    </Tr>
                    <Tr>
                    <Td><b>Demonym</b></Td>
                    <Td>{country[0].demonym}</Td>
                    </Tr>
                    <Tr>
                    <Td><b>Numeric Code</b></Td>
                    <Td>{country[0].numericCode}</Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                    <Th>Geography</Th>
                    <Th></Th>
                    <Th>Currencies</Th>
                    <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                    <Td><b>Area</b></Td>
                    <Td>{country[0].area} sq km</Td>
                    <Td><b>Name of the official currency</b></Td>
                    <Td>{country[0].currencies[0].name}</Td>
                    </Tr>
                    <Tr>
                    <Td><b>Region and subregion</b></Td>
                    <Td>{country[0].region}, {country[0].subregion}</Td>
                    <Td><b>Code</b></Td>
                    <Td>{country[0].currencies[0].code}</Td>
                    </Tr>
                    <Tr>
                    <Td><b>Languages</b></Td>
                    <Td>{lang}</Td>
                    <Td><b>Symbol</b></Td>
                    <Td>{country[0].currencies[0].symbol}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </div>
    );
}

export default Info;

