export interface Coin{
    circulating_supply: number;
    current_price: number;
    id: string;
    image: string;
    market_cap: number;
    market_cap_rank: number;
    max_supply: number;
    name: string;
    symbol: string;
    price_change_percentage_24h: number;
    total_supply: number;
    total_volume: number;
}