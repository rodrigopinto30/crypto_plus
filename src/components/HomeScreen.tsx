import { Box, Center, Grid as ChakraGrid, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import CoinList from '../coin/CoinList';
import { Coin } from '../coin/type';
import Slider from './Slider';

const HomeScreen: React.FC =()=>{

    const [cryptoValue, setCryptovalue] = React.useState([]);

    React.useEffect(()=>{
        axios.get('')
        .then((resp)=>{
            setCryptovalue(resp.data);    
        })
        .catch(error => console.log(error))
    },[])


    return (
        <Stack 
            marginTop="3%" 
            direction="column" 
            //backgroundColor="whiteAlpha.300"
            height="100%"
        >
            <Slider />
            { /*<FilterCoin active={filter} onChange={setFilter}/> */}
            <CoinList 
                //  coins={FilterCoin}
            /> 
        </Stack>)
}

export default HomeScreen;

