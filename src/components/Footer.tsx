import { Text, Stack, Center, Container, Link } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () =>{

    return(
        <Stack 
            borderTopStyle="solid"
            direction="row"
            spacing={9}
            width="100%"
            alignItems="center"
            alignContent="center"
            textAlign="center"
            color="#6c404a"
            fontWeight="bold"
            paddingBottom="3%"
        >
            <Stack direction="column" width="33%">
                <Link href="#" display="block" paddingTop={2}> Explorar </Link>
                <Link href="#" display="block" paddingTop={2}> Preguntas frecuentes</Link>
                <Link href="#" display="block" paddingTop={2}> Soporte</Link>
            </Stack>
            <Stack direction="column" width="33%">
                <Link href="#" display="block" paddingTop={2}> Términos de uso</Link>
                <Link href="#" display="block" paddingTop={2}> Políticas de privacidad</Link>
                <Link href="#" display="block" paddingTop={2}> Comunidad</Link>
            </Stack>
            <Stack direction="column" width="33%">
                <Link href="#" display="block" paddingTop={2}> Facebook</Link>
                <Link href="#" display="block" paddingTop={2}> Twitter</Link>
                <Link href="#" display="block" paddingTop={2}> Instagram</Link>
            </Stack>
        </Stack>
    )
}

export default Footer;