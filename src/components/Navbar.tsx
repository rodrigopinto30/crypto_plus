import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Container, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Profile from "../profile/Profile";
import {Link, NavLink} from 'react-router-dom';

const Navbar: React.FC =() =>{

    const {isAuthenticated} = useAuth0();
    
    return(
        <Box marginTop="2%" height="8%" alignItems="center">
                <Stack paddingLeft="2%" direction="row" justifyContent="space-between">
                    <NavLink to={"/"}>
                        <Text
                            textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.45em #ff43c5"
                            color="#ff43c5" 
                            width="max-content"
                            cursor="pointer"
                            fontWeight="bold"
                        > 
                            COINPLUS
                        </Text>
                    </NavLink>
                {isAuthenticated ?
                        <Stack  direction="row" width="70%" spacing={5}>
                            <Link to="/Noticia">
                                <Button
                                    textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.45em #ff43c5"
                                    color="#ff43c5"
                                    boxShadow="inset 0 0 0.5em #ff43c5, 0 0 0.5em #ff43c5"
                                    borderRadius=".25rem"
                                    backgroundColor="transparent"
                                    borderWidth="1%"
                                    borderColor="#ff43c5"
                                    textDecorationLine="none"
                                    _hover={{
                                        backgroundColor: "#ff43c5",
                                        color: "#29051b",
                                        textShadow:"0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.45em #ff43c5",
                                    }}
                                > NOTICIAS</Button>
                            </Link>
                            <Link to="/Somos"> 
                                <Button
                                    textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.45em #ff43c5"
                                    color="#ff43c5"
                                    boxShadow="inset 0 0 0.5em #ff43c5, 0 0 0.5em #ff43c5"
                                    borderRadius=".25rem"
                                    backgroundColor="transparent"
                                    borderWidth="1%"
                                    borderColor="#ff43c5"
                                    textDecorationLine="none"
                                    _hover={{
                                        backgroundColor: "#ff43c5",
                                        color: "#29051b",
                                        textShadow:"0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.45em #ff43c5",
                                    }}
                            > 
                                ¿QUIÉNES SOMOS?
                            </Button> 
                            </Link>
                            <Link to="/Descripcion"> 
                                <Button
                                    marginRight="9em"
                                    textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.45em #ff43c5"
                                    color="#ff43c5"
                                    boxShadow="inset 0 0 0.5em #ff43c5, 0 0 0.5em #ff43c5"
                                    borderRadius=".25rem"
                                    backgroundColor="transparent"
                                    borderWidth="1%"
                                    borderColor="#ff43c5"
                                    textDecorationLine="none"
                                    _hover={{
                                        backgroundColor: "#ff43c5",
                                        color: "#29051b",
                                        textShadow:"0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.45em #ff43c5",
                                    }}
                                > 
                                    DESCRIPCIÓN
                                </Button> 
                            </Link>
                            <Profile />
                        </Stack>
                        :
                        <></>    
                }
                </Stack>
        </Box>
    )
}

export default Navbar;