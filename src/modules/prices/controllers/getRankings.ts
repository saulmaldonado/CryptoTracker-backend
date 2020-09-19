import { redis } from '../../..';
import { CoinRanking, PricePayload } from '../prices';
import { fetchPrices } from './helpers/fetchCoinPrices';

export const getRankings = async (limit: number): Promise<CoinRanking[]> => {
  const res = await redis.get('rankings');
  let coins: PricePayload[] = [];

  if (!res) {
    coins = await fetchPrices({ limit });
  } else {
    coins = JSON.parse(res);
  }

  return coins.map(({ coinID, name }, index) => ({
    ranking: index + 1,
    coinID,
    name,
  }));
};