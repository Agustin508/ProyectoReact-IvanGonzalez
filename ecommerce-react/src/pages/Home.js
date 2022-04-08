import { Container } from "@mui/material"
import Cards from '../components/Cards/Cards'
import ItemCount from "../components/ItemCount/ItemCount"

const HomePage = () => {
    return(
        <Container className='container-general'>
            <Cards/>
        </Container>
    )
}

export default HomePage