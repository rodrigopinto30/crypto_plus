import { Box, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Somos: React.FC = () =>{
    return(
        <Center paddingBottom="9%">
            <Stack direction="column">
                <Stack direction="column">
                    <Text fontSize="3em" color="#6c404a" marginBottom="2%">¿Quiénes somos?</Text>
                    <Text color="white">
                        CoinPlus es una plataforma digital que +90.000 personas en Latinoamérica eligen para potenciar sus 
                        inversiones. Es un punto de partida que va más allá de una pagina criptomonedas. Integra productos, pagos 
                        u otras transferencia con diferentes canales.

                        Gracias a su tecnología, CoinPlus se adapta a cada tipo de requerimientos permitiendo que cada experiencias sea 
                        única, así como también dando la posibilidad de instalar aplicaciones y realizar consultas a medida. Todo esto 
                        con el acompañamiento de un excelente equipo de atención al cliente.
                    </Text>
                </Stack>
                <Stack direction="column">
                    <Text color="white">
                        A pesar de que últimamente se ha aumentado la seguridad y la protección a los usuarios, no hay que olvidar de 
                        seguir todas las recomendaciones de seguridad previamente aaceptadas.
                    </Text>
                </Stack>
            </Stack>
        </Center>
    )
}

export default Somos;