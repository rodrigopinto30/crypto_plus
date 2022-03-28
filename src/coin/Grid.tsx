import React from "react";
import {Text, Grid as ChakraGrid } from "@chakra-ui/react";
import { Coin } from "./type";
import CoinCard from "./CoinCard";
import axios from "axios";

interface Props{
    coins: Coin[];
}

const Grid: React.FC =() =>{

    const price :number = 12;

    const [coins, setCoins] = React.useState([]);

    const getData = async () =>{
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        console.log(res.data)
        setCoins(res.data);
      }
    
      React.useEffect(()=>{
       getData()
      }, []);

    return(

        <ChakraGrid 
            gap={6} 
            templateColumns="repeat(auto-fill, minmax(256px, 1fr))"
            width="100%"
        >
            
            {
                coins.map(coini =>(
                    <CoinCard key= {coini['id']} coin={coini} />
                    
                ))
            } 
        </ChakraGrid>
    )
}

export default Grid;