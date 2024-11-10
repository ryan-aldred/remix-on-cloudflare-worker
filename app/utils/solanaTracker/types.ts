export type SolanaTrackerEndpoint = ChartPath;
export type ChartPath = `chart/${string}`;

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
