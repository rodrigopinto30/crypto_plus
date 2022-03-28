import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './login/Login';
import Logout from './login/Logout';
import Profile from './profile/Profile';
import Home from './components/HomeScreen';
import { Center, Container, Text, Flex, Stack, Box, MenuList, MenuItem, Menu} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slider from './components/Slider';
import HomeScreen from './components/HomeScreen';
import {Route, Routes} from 'react-router-dom';
import Somos from './components/Somos';
import Noticia from './components/Noticia';
import Descripcion from './components/Descripcion';
import CoinScreen from './components/CoinScreen';
import axios from 'axios';

function App() {
  const {isAuthenticated} = useAuth0();

  const [coins, setCoins] = React.useState([]);

  const getCoins = async() =>{
    const values = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    setCoins(values.data);
  }

  React.useEffect(() =>{
    getCoins();
  }, [])

  return (
    <Flex direction="column" paddingBottom={!isAuthenticated ? "41em" : "0"} maxHeight={!isAuthenticated ? "40em" : "100%"} backgroundColor="#29051b" width="100%">
      <Navbar />

      <Stack width="100%" height="50%" direction="column" spacing={9}
        alignItems="center"
        
      >
        <Box marginTop="4%" marginBottom="3%" height="100%" width="80%">
          {!isAuthenticated ?
            <Text
              textAlign="center"
              marginLeft={0}
              paddingLeft={0}
              width="100%"
              fontSize="2em"
              textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.45em #ff43c5"
              color="#ff43c5"
            >
              Encontrá las mejores cotizaciones para tu inversión
            </Text>
          : 
            <Stack height="100%" direction="column" >
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/noticia" element={<Noticia />}/>
                <Route path='/somos' element={<Somos />} />
                <Route path="/descripcion" element={<Descripcion />} />
                <Route path="/coins/:id" element={<CoinScreen />} />
              </Routes>
            </Stack>
          
          }
        </Box>
        {isAuthenticated ? 
          <>

          </> 
          : 
            <Login />
          
        }
        
      
      </Stack>

      {!isAuthenticated ?
        <Stack 
            paddingTop="10em"
            direction="row"
            spacing={9}
            width="100%"
            justifyContent="center"
          > 
          // map
          {
            coins.map((coin) =>(
              <Text
              key={coin} 
              padding="1%"

              // Caract de texto              
              fontSize="0.9em"
              textShadow="0 0 0.125em hsl(0 0% 10% / 0.1), 0 0 0.45em #ff43c5"
              color="#ff43c5"

              // Caract de caja
              boxShadow="inset 0 0 0.1em #ff43c5, 0 0 0.3em #ff43c5"
              borderRadius=".5rem"
              backgroundColor="transparent"
              borderWidth={1}
              borderColor="#ff43c5"
              borderStyle="solid"
            > 
              {coin['id']}
            </Text>
            ))
          }
              
                
        </Stack>
        : 
          <Footer />
        
      }

    </Flex>
  );
}
//<Footer />
export default App;
