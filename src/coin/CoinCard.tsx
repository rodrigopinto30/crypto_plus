import { Box,Image, Container, Stack, Text  } from "@chakra-ui/react";
import React from "react";
import { Coin} from "./type";
import {ImArrowUpRight2} from 'react-icons/im';
import {ImArrowDownRight2} from 'react-icons/im';
import { Link, NavLink } from "react-router-dom";

interface Props{
    coin: Coin
}

const CoinCard: React.FC<Props> =({coin}) =>{
    return(
       <NavLink to={`/coins/${coin.id}`}>
        <Stack 
            height="10em"
            direction="column"
            boxShadow="inset 0 0 0.5em #ff43c5, 0 0 0.5em #ff43c5"
            borderRadius=".25rem"
            backgroundColor="transparent"
        >
            <Stack 
                spacing={4}
                direction="row">
                <Image
                    padding={3}
                    boxSize="90px" 
                    borderRadius="full" 
                    src={coin['image']}
                />
                <Stack
                    spacing={0}
                    height="90%"
                    width="60%"
                    direction="column"
                    paddingTop="4%"
                >
                    <Stack 
                        padding="1% 0%"
                        spacing={3} direction="row">
                        <Text   
                            width="fit-content"
                            fontWeight="bold"
                            fontSize="1em"
                            height="100%"
                            textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                            color="#f1f3f4"
                            whiteSpace = "nowrap"
                            //overflow = "initial"
                            textOverflow="ellipsis"
                        >
                            {coin['name']}
                        </Text>
                        <Text 
                            //padding="3% 0%"
                            alignItems="center"
                            width="20%" 
                            textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.45em #f1f3f4"
                            color="#f1f3f4"
                        >
                            {coin['symbol']}
                        </Text>
                    </Stack>
                    <Text 
                        height="50%"
                        textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.45em #f1f3f4"
                        color="#f1f3f4"
                    > Price:  {coin['current_price']} </Text>
                </Stack>
            </Stack>
            <Stack width="90%" height="50%" direction="row">
                <Stack padding="0% 2%" spacing={0} direction="column" width="80%">
                    <Text 
                        paddingLeft="5%"
                        width="100%"
                        textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.45em #f1f3f4"
                        color="#f1f3f4"
                    > Market cap: {coin['market_cap']} </Text>
                    <Text 
                        paddingLeft="5%"
                        width="100%"
                        textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.45em #f1f3f4"
                        color="#f1f3f4"
                    > Ranking: {coin['market_cap_rank']}</Text>
                </Stack>
                <Text
                    
                >
                    {coin.price_change_percentage_24h < 0 ?
                        <ImArrowDownRight2 color="red" size={40}/>
                        :
                        <ImArrowUpRight2 color="green" size={40}/>
                    }
                </Text>
            </Stack>
        </Stack>
        </NavLink>
    );
}

export default CoinCard;