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
                        Con el agua del Bitcoin en sus rodillas, Bukele sugiere "no mirar gráficos y disfrutar de la vida"
                    </Text>
                    <Text color="white">
                        Asumiendo una postura de "inversor zen", el presidente de El Salvador, Nayib Bukele, llamó este sábado a 
                        relativizar la tremenda caída en las cotizaciones del Bitcoin, señalando que la "paciencia es la clave" del universo 
                        critpo. Sucede que el Bitcoin, la criptomoneda de curso legal en ese país centroamericano, cayó esta 
                        semana por debajo del "piso imposible" de 20 mil dólares, en el marco de una corrida global que ya ha costado miles 
                        de millones de dólares a inversores de todo el planeta, y nadie arriesga a considerar todavía que esa caída 
                        este cerca de su "rebote".
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
                            Los críticos de Bitcoin dicen que el precio de BTC va a USD 0 esta vez, pero estas 
                            3 señales sugieren lo contrario

                        </Text>
                        <Text color="white">
                            Como un reloj, el inicio de un criptomercado bajista ha sacado a la luz a la multitud que opina que "Bitcoin 
                            está muerto" y que proclama alegremente el final de la criptomoneda más grande por capitalización de mercado.
                            <br/>
                            De hecho, los últimos meses han sido dolorosos para los inversores y el precio de BTC ha 
                            caído a un nuevo mínimo de 2022 a USD 20,100, pero es probable que las nuevas llamadas a la 
                            desaparición del activo sufran el mismo destino que las 452 predicciones anteriores que 
                            proclaman su muerte.
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
                            ¿Tenía razón Warren Buffett? Tres motivos por los que nunca compró Bitcoin    
                        </Text>
                        <Text color="white">
                            La caída del Bitcoin ha sido tan pronunciada que tras incluso tocó los 21,200 dólares por 
                            unidad, luego de un año complicado para las criptomonedas, las acciones, y los bonos. La 
                            capitalización del sector está por debajo del billón de dólares.
                            <br/>
                            Este principal activo digital acumula pérdidas de casi 70% desde sus máximos de noviembre, cuando
                            casi toca los 70,000 dólares. Con el rápido y alto crecimiento que reflejaba su precio, el activo 
                            digital se presentaba ante los inversionistas como una opción para grandes ganancias.
                        </Text>
                    </Stack>
            </Stack>
            
        </Box>
    )
}

export default Noticia;