import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../login/Logout";
import { Stack, Image, Text } from "@chakra-ui/react";

const Profile: React.FC = () =>{

    const {user, isAuthenticated, isLoading} =  useAuth0();

    if(isLoading){ return <div> Loading... </div>}

    return(
        <Stack 
            alignItems="center"
            alignContent="center"
            width="28%" 
            height="100%"
            direction="row"
        >
            <Image 
                boxSize="40px"
                borderRadius="full"
                src={user?.picture} alt={user?.name}
            />
            <Stack direction="column" spacing={0}>
                <Text fontSize="80%" color="white">{user?.name}</Text>
                <Text fontSize="80%" color="white">{user?.email}</Text>
            </Stack>
            <Logout />
        </Stack>
    );
}

export default Profile;