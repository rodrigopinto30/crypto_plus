import { Image, Box, Stack, Text, Container } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { ImArrowDownRight2, ImArrowUpRight2 } from "react-icons/im";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const CoinScreen: React.FC= () =>{
    const price: number = 10054.3;
    const {id} = useParams();
    const[coin, setCoin] = React.useState({
        circulating_supply: 0,
        current_price: 0,
        id: "",
        image: "",
        market_cap: 0,
        market_cap_rank: 0,
        max_supply: 0,
        name: "",
        symbol: "",
        price_change_percentage_24h: 0,
        total_supply: 0,
        total_volume: 0,
    });
    const[loading, setLoading] = React.useState(false);

    const getData = async () =>{
        

        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids='+ id +'&order=market_cap_desc&per_page=1&page=1&sparkline=false')
            //'https://api.coingecko.com/api/v3/coins/' + id

        console.log(id)
        setCoin(res.data);
        console.log(coin)
    }
  
    React.useEffect(()=>{
        getData()
    }, []);


    const Loading =()=>{
        return(
            <>
                Loading...
            </>
        )
    }

    const ShowCoin =()=>{
        return(
            <>
                <Stack spacing={20} height="2xl">
                    <Stack 
                        boxShadow="inset 0 0 0.5em #ff43c5, 0 0 0.5em #ff43c5"
                        borderRadius="full"
                        direction="row" 
                        justifyContent="space-between"
                        padding="1% 1%"
                    >
                        <Stack 
                            alignItems="center"
                            direction="row">
                            <Image
                                src="https://assets.econsultancy.com/images/resized/0004/6445/screen_shot_2014-04-02_at_11.54.33-blog-full.png"
                                borderRadius="full"
                                boxSize="80px"
                                padding={3}
                            />
                            <Text
                                fontWeight="bold"
                                fontSize="3em"
                                width="fit-content"
                                height="100%"
                                textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                color="#f1f3f4"
                            >
                                {
                                    coin.id
                                }
                            </Text>
                            <Text 
                                borderRadius="full"
                                padding="1% 3%"
                                height="40%"
                                backgroundColor="gray.200"
                            >{coin.symbol}</Text>
                        </Stack>
                        <Stack 
                            justifyContent="end"
                            width="50%"
                            spacing={5}
                            alignItems="center"
                            direction="row">
                            <Text padding="1% 1%" height="60%" width="10%" borderRadius="full" backgroundColor="whiteAlpha.300"> 
                                {coin.price_change_percentage_24h < 0 ?
                                    <ImArrowDownRight2 color="red" size={40}/>
                                    :
                                    <ImArrowUpRight2 color="green" size={40}/>
                                }
                            </Text>
                            <Text
                                padding="0% 4%"
                                textAlign="center"
                                width="max-content"
                                borderRadius="full"
                                fontSize="3em"
                                fontWeight="bold"
                                color={coin.price_change_percentage_24h > 0 ? "green.400": "red.400"}
                                backgroundColor="whiteAlpha.300"
                            > $ {coin.current_price} </Text>
                        </Stack>
                    </Stack>

                    <Stack 
                        boxShadow="inset 0 0 0.5em #ff43c5, 0 0 0.5em #ff43c5"
                        padding="4%"
                       // borderRadius="3%"
                        direction="row"
                        //backgroundColor="whiteAlpha.300"
                        justifyContent="space-between" 
                        height="50%"
                    >
                        <Stack direction="column" spacing={20}>
                            <Stack spacing={0} direction="column">
                                <Text
                                    color="#89646c"
                                   // color="#f1f3f4"
                                   // textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                >Cap. de Mercado</Text>
                                <Text 
                                    color="#f1f3f4"
                                    textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                    fontSize="2em"
                                >
                                    {coin.market_cap}
                                </Text>
                            </Stack>
                            <Stack spacing={0} direction="column">
                                <Text
                                    color="#89646c"
                                    // color="#f1f3f4"
                                    // textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                >Ranking de cap. de Mercado</Text>
                                <Text 
                                    color="#f1f3f4"
                                    textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                    fontSize="2em"
                                >
                                    # {coin.market_cap_rank}
                                </Text>
                            </Stack>
                        </Stack>
                        <Stack direction="column" spacing={20}>
                            <Stack direction="column" spacing={0}>
                                <Text
                                    color="#89646c"
                                    // color="#f1f3f4"
                                    // textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                >Acciones en circulación</Text>
                                <Text 
                                    color="#f1f3f4"
                                    textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                    fontSize="2em"
                                > {coin.circulating_supply} </Text>
                            </Stack>
                            <Stack direction="column" spacing={0}>
                                <Text
                                    color="#89646c"
                                    // color="#f1f3f4"
                                    // textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                >Total de acciones</Text>
                                <Text 
                                    color="#f1f3f4"
                                    textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                    fontSize="2em"
                                > {coin.total_supply} </Text>
                            </Stack>
                            {/* <Stack direction="column" spacing={0}>
                                <Text
                                    color="#f1f3f4"
                                    textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                >Acciones máximas</Text>
                                <Text 
                                    color="#f1f3f4"
                                    textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                    fontSize="2em"
                                >5454</Text>
                            </Stack> */}
                        </Stack>
                        <Stack direction="column" spacing={20}>
                            <Stack direction="column" spacing={0}>
                                <Text
                                    color="#89646c"
                                    // color="#f1f3f4"
                                    // textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                >Porcentaje de cambio (24hs) </Text>
                                <Text 
                                    fontSize="2em"
                                    color="#f1f3f4"
                                    textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                > {coin.price_change_percentage_24h} </Text>
                            </Stack>
                            <Stack direction="column" spacing={0}>
                                <Text
                                    color="#89646c"
                                    // color="#f1f3f4"
                                    // textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                >Volumen total</Text>
                                <Text
                                    color="#f1f3f4"
                                    textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.1em #f1f3f4"
                                    fontSize="2em"
                                > {coin.total_volume} </Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </>
        )
    }

    return(
        <Box>
            {loading ? <Loading /> : <ShowCoin />}
            

        </Box>
    )
}

export default CoinScreen;

