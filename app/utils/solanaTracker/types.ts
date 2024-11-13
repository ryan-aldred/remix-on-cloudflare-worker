export type SolanaTrackerEndpoint = ChartPath | TokenPath;
export type ChartPath = `chart/${string}`;
export type TokenPath = `tokens/${string}`;

export type ChartType =
  | "1s"
  | "5s"
  | "15s"
  | "1m"
  | "3m"
  | "5m"
  | "15m"
  | "30m"
  | "1h"
  | "2h"
  | "4h"
  | "6h"
  | "8h"
  | "12h"
  | "1d"
  | "3d"
  | "1w"
  | "1mn";

export interface HLOC {
  open: number;
  close: number;
  low: number;
  high: number;
  time: number;
}

export interface HLOCV extends HLOC {
  volume: number;
}

export interface TokenInfo {
  token: {
    name: string;
    symbol: string;
    mint: string;
    uri: string;
    decimals: number;
    description: string;
    image: string;
    hasFileMetaData: boolean;
  };
  pools: {
    poolId: string;
    liquidity: {
      quote: number;
      usd: number;
    };
    price: {
      quote: number;
      usd: number;
    };
    tokenSupply: number;
    lpBurn: number;
    tokenAddress: string;
    marketCap: {
      quote: number;
      usd: number;
    };
    market: string;
    quoteToken: string;
    decimals: number;
    security: {
      freezeAuthority: null | string;
      mintAuthority: null | string;
    };
    lastUpdated: number;
    createdAt: number;
    deployer: null | string;
    txns: {
      sells: number;
      total: number;
      buys: number;
      volume: number;
    };
  }[];
  events: {
    [key in
      | "1m"
      | "5m"
      | "15m"
      | "30m"
      | "1h"
      | "2h"
      | "3h"
      | "4h"
      | "5h"
      | "6h"
      | "12h"
      | "24h"]: {
      priceChangePercentage: number;
    };
  };
  risk: {
    rugged: boolean;
    risks: string[];
    score: number;
    jupiterVerified: boolean;
  };
  buys: number;
  sells: number;
  txns: number;
}
