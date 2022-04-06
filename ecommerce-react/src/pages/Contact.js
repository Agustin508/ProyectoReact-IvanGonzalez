import { Container } from "@mui/material"
import { Button } from '@mui/material';

const ContactPage = () => {
    return(
        <Container className="container-general">
            <h1>Contacto</h1>
            <form>
                <input type="text" placeholder="Nombre"></input>
                <input type="text" placeholder="Apellido"></input>
                <input type="mail" placeholder="mail"></input>
                <Button type="submit">Enviar</Button>
            </form>
        </Container>
    )

}

export default ContactPage