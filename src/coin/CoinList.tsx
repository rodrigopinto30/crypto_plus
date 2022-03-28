import { Stack } from "@chakra-ui/react";
import React from "react";
import Grid from './Grid';
import {Coin} from './type';

// interface Props{
//     coins: Coin[]
// }

const CoinList: React.FC =() =>{
    return(
        <Stack direction="column" spacing={6}>
            <Grid 
                //coins={coins}
            />
        </Stack>
    )
}

export default CoinList;