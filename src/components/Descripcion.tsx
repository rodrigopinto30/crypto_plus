import { Box, Center, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Descripcion: React.FC = () =>{
    return(
        <Box height="100%" paddingBottom="11%">
            <Stack direction="column" spacing={9}>
                <Text fontSize="3em" color="#6c404a" marginBottom="2%"> Descripción</Text>
                <Stack direction="column">
                    <Text color="white"> Este proyecto fue elaborado utilizando las siguientes tecnologías: </Text>
                    <UnorderedList color="white" paddingLeft="2%">
                        <ListItem> TypeScript </ListItem>
                        <ListItem> React JS </ListItem>
                        <ListItem> Chakra-UI </ListItem>
                    </UnorderedList>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Descripcion;