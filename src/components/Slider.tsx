import {Image,  Box, Container, Stack, Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";


const Slider: React.FC = () =>{
    
    return(
        <Flex 
            height="13em"
            marginBottom="6%"
        >
            <Stack  
                justifyContent="center"
                spacing="0"
                direction="column" 
                width="100%" 
                height="100%" 
                boxShadow="inset 0 0 0.5em #ff43c5, 0 0 0.5em #ff43c5"
                borderRadius=".25rem"
                backgroundColor="transparent"
                borderWidth={1}
                borderColor="#ff43c5"
                borderStyle="solid"
                color="white"
            >
                <Heading
                    textShadow="0 0 2em hsl(0 0% 100% / 0.5), 0 0 0.45em #ff43c5"
                    fontFamily="body"
                    fontSize="4rem" 
                    color="#ff43c5"
                    textAlign="center"
                > Coinplus </Heading>
                <Heading 
                    textShadow="0 0 2em hsl(0 0% 100% / 0.5), 0 0 0.45em #ff43c5"
                    fontFamily="body"
                    fontSize="4rem" 
                    color="#ff43c5"
                    textAlign="center"
                > Potencia tus inversiones </Heading>
            </Stack>
        </Flex>
    )
}

export default Slider;