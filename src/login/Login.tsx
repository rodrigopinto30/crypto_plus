import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Center, Container, Flex } from "@chakra-ui/react";
import { scaleCorrectors } from "framer-motion/types/projection/styles/scale-correction";

const Login: React.FC =() =>{

    const {loginWithRedirect} = useAuth0();

    return( 
        <Center 
            height="60%" 
            width="40%" 
            marginLeft="50%"
        >
            <Button
                padding={8}
                textShadow="0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.45em #ff43c5"
                fontFamily="body"
                fontSize="2rem" 
                color="#ff43c5"

                height="25%"
                width="30%"
                boxShadow="inset 0 0 0.5em #ff43c5, 0 0 0.5em #ff43c5"
                borderRadius=".25rem"
                backgroundColor="transparent"
                borderWidth={5}
                borderColor="#ff43c5"
                borderStyle="solid"
                position="relative"
                transition="backgroundColor 100ms linear"
                onClick={() => loginWithRedirect()}

                _before={{
                    pointerEvents: "none",
                    content: `""`,
                    position: "absolute",
                    background: "#ff43c5",
                    top: "120%",
                    left: "0%",
                    width: "100%",
                    height: "100%",

                    transform: "perspective(1em) rotateX(40deg) scale(1, 0.35)",
                    filter: "blur(1em)",
                    opacity: "0.7"
                }}

                _after={{
                    content: `""`,
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                   // boxShadow: "0 0 2em 0.5em green",
                    opacity: "0",
                    backgroundColor: "#29051b",
                    zIndex: "-1",
                    //transition: "opacity 1000ms linear"
                    
                }}                

                _hover={{
                    backgroundColor: "#ff43c5",
                    color: "#29051b",
                    textShadow:"0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.45em #ff43c5",
                    //textShadow:"none"
                }}
            >
                Login
            </Button>
        </Center>

        
        )
}

export default Login;