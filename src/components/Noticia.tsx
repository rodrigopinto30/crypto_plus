import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Noticia: React.FC = () =>{
    return(
        <Box marginBottom="4%">
            <Stack direction="column" spacing={8}>
                <Text fontSize="3em" color="#6c404a" marginBottom="2%">
                    Notcias
                </Text>
                <Stack 
                    marginBottom="1%"
                    direction="column"                  
                    borderTopWidth="0.1em"
                    borderTopStyle="solid"
                    borderTopColor="whiteAlpha.100"
                    
                >
                    <Text 
                        fontWeight="bold"
                        color="white"
                        fontSize="2em"
                        marginBottom="1%"
                        paddingBottom="0%"
                        paddingTop="1%"
                    >
                        El Bitcoin rompió la marca de USD 42.000: cuál es el nuevo factor que vuelve a 
                        impulsar al mundo “cripto”
                    </Text>
                    <Text color="white">
                        El Bitcoin rompió este martes la marca de los USD 42.000 con la noticia de que el fondo de 
                        cobertura Bridgewater Associates de Ray Dalio está listo para invertir en la criptomoneda más importante
                        del mundo. El precio de Bitcoin llegó a subir al mediodía un 4% a 42.571 dólares.

                        En la última semana, el Bitcoin sube un 8% y ahora vuelve a superar la barrera de USD 42.000 por primera
                        vez desde el 3 de marzo, cuando el mercado “cripto” acusó el impacto de la inestabilidad financiera 
                        global por la invasión rusa a Ucrania.
                    </Text>
                </Stack>

                <Stack 
                    direction="column"                  
                    borderTopWidth="0.1em"
                    borderTopStyle="solid"
                    borderTopColor="whiteAlpha.100"                
                >
                        <Text 
                            fontWeight="bold"
                            color="white"
                            fontSize="2em"
                            marginBottom="1%"
                            paddingBottom="0%"
                            paddingTop="1%"
                        >
                            Precio Bitcoin y criptomonedas: por qué es la única que vuelve a bajar

                        </Text>
                        <Text color="white">
                            Al abrir esta semana, el precio de Bitcoin, la criptomoneda más grande del mundo, vuelve a estar 
                            en caída, aunque esta vez más leve. No es así en el caso de Ethereum que presentó una caída en el 
                            precio. Por su parte, BNB, el token nativo de la red Binance también presentó saldo 
                            positivo en las últimas 24 horas. Las altcoins XRP, Luna y ADA también crecieron casi un 5%.
                        </Text>
                    </Stack>

                    <Stack
                        direction="column"                  
                        borderTopWidth="0.1em"
                        borderTopStyle="solid"
                        borderTopColor="whiteAlpha.100"                    
                    >
                        <Text 
                            fontWeight="bold"
                            color="white"
                            fontSize="2em"
                            marginBottom="1%"
                            paddingBottom="0%"
                            paddingTop="1%"
                        >
                            Bitcoin y las criptomonedas: los inversores pierden el miedo y todas vuelven a subir
                        </Text>
                        <Text color="white">
                            En el día de ayer, en un movimiento diferente al habitual, Bitcoin se estancaba en su precio 
                            intradiario mientras que el mercado de monedas alternativas se revalorizaba. Las principales altcoins
                            superaron a las principales criptomonedas. A excepción de las monedas estables, todos los principales 
                            tokens digitales cotizaron al alza hoy martes. XRP aumentó un 7 por ciento, seguido de un aumento del 6 
                            por ciento en Cardano. Avalanche saltó un 5 por ciento, mientras que Ethereum y Shiba Inu sumaro casi un 
                            4 por ciento cada uno. 
                        </Text>
                    </Stack>
            </Stack>
            
        </Box>
    )
}

export default Noticia;