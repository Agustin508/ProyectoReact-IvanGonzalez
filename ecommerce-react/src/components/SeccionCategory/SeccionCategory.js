import { Container } from "@mui/material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import './SeccionCategory.css'


const SeccionCategory = () => {
    return(
        <Container className='container-general'>
            <li>
                <Button>
                    <Link to={'/auto'} className='ButtonCategory'>auto</Link>
                </Button>
            </li>
            <li>
                <Button>
                    <Link to={'/camioneta'} className='ButtonCategory'>camioneta</Link>
                </Button>
            </li>
        </Container>
    )
}

export default SeccionCategory