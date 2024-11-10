import { ChartType, ChartPath, HLOCV, SolanaTrackerEndpoint } from "./types";

export class SolanaTracker {
  private static baseUrl = "https://data.solanatracker.io";

  static async chartData(
    {
      token,
      type,
      fromTime,
      toTime,
    }: {
      token: string;
      type: ChartType;
      fromTime?: Date;
      toTime?: Date;
    },
    apiKey: string
  ) {
    const path: ChartPath = `chart/${token}`;
    const time_from = fromTime
      ? this.timeInSeconds(fromTime).toString()
      : undefined;
    const time_to = toTime ? this.timeInSeconds(toTime).toString() : undefined;

    const data = (await this.fetchData(apiKey, path, {
      type,
      time_from,
      time_to,
    })) as Record<"oclhv", HLOCV[]>;

    return data.oclhv;
  }

  private static async fetchData(
    apiKey: string,
    endpoint: SolanaTrackerEndpoint,
    params?: Record<string, string | undefined>
  ) {
    if (!apiKey) throw new Error("SOLANA_TRACKER_API_KEY is missing");

    const url = new URL(this.baseUrl);
    url.pathname = endpoint;

    if (params) {
      Object.entries(params).map(
        ([key, value]) => value && url.searchParams.append(key, value)
      );
    }

    const res = await fetch(url.toString(), {
      headers: {
        "x-api-key": apiKey,
      },
    });

    if (!res.ok)
      throw new Error("Solana Tracker Request failed", {
        cause: { status: res.status, msg: res.statusText },
      });

    return await res.json();
  }

  private static timeInSeconds(time: Date) {
    return Math.floor(time.getTime() / 1000);
  }
}
