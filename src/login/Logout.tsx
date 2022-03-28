import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const Logout: React.FC = () =>{

    const {logout} = useAuth0();

    return (
        <Button    
            backgroundColor="transparent"
            color="#ff43c5"
            boxShadow="inset 0 0 0.5em #ff43c5, 0 0 0.2em #ff43c5"
            borderWidth="1%"
            borderColor="#ff43c5"
            borderRadius="full"
            onClick={()=> logout({returnTo: window.location.origin})}
            _hover={{
                backgroundColor: "#ff43c5",
                color: "#29051b",
                textShadow:"0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.45em #ff43c5",
            }}
        > 
            Salir 
        </Button>);
}

export default Logout;