import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { CandlestickData, Time } from "lightweight-charts";
import { Chart } from "~/components/chart";
import { SolanaTracker } from "~/utils/solanaTracker/index.server";
import { HLOCV, TokenInfo } from "~/utils/solanaTracker/types";

const chartData = [
  {
    open: 0.3123166392641602,
    close: 0.3123166392641602,
    low: 0.23371189186412644,
    high: 0.37601552938443605,
    volume: 52341150.50691434,
    time: 1731301200,
  },
  {
    open: 0.3123166392641602,
    close: 0.3614801847019596,
    low: 0.3123166392641602,
    high: 0.4195192565659077,
    volume: 500785024.6639411,
    time: 1731304800,
  },
  {
    open: 0.3614801847019596,
    close: 0.38579655176543143,
    low: 0.33338271605641295,
    high: 0.405634396440686,
    volume: 298408785.16632134,
    time: 1731308400,
  },
  {
    open: 0.38579655176543143,
    close: 0.364596568840207,
    low: 0.33581106269064487,
    high: 0.4107525043888177,
    volume: 149054236.00826076,
    time: 1731312000,
  },
  {
    open: 0.364596568840207,
    close: 0.37232999089026897,
    low: 0.3579362104993509,
    high: 0.4498517330523097,
    volume: 82260396.37109593,
    time: 1731315600,
  },
  {
    open: 0.37232999089026897,
    close: 0.3891175330397573,
    low: 0.37232999089026897,
    high: 0.4883795128764209,
    volume: 52492751.81484764,
    time: 1731319200,
  },
  {
    open: 0.3891175330397573,
    close: 0.4372085401149975,
    low: 0.3891175330397573,
    high: 0.4802626165046257,
    volume: 125880840.10555238,
    time: 1731322800,
  },
  {
    open: 0.4372085401149975,
    close: 0.4531162060491276,
    low: 0.3947041836099365,
    high: 0.463171682502554,
    volume: 71300984.64399076,
    time: 1731326400,
  },
  {
    open: 0.4531162060491276,
    close: 0.3988521278366272,
    low: 0.3739618233253444,
    high: 0.4531162060491276,
    volume: 69146707.36244917,
    time: 1731330000,
  },
  {
    open: 0.3988521278366272,
    close: 0.4048669143546653,
    low: 0.39556341279416435,
    high: 0.4393799983354882,
    volume: 40772651.96585051,
    time: 1731333600,
  },
  {
    open: 0.4048669143546653,
    close: 0.4295934528542679,
    low: 0.39604526026446885,
    high: 0.45950523464884857,
    volume: 39459528.37784975,
    time: 1731337200,
  },
  {
    open: 0.4295934528542679,
    close: 0.4054423739831314,
    low: 0.3823911207611639,
    high: 0.451976410577787,
    volume: 15790334.76704139,
    time: 1731340800,
  },
  {
    open: 0.4054423739831314,
    close: 0.38404319605245957,
    low: 0.38404319605245957,
    high: 0.40973959442347774,
    volume: 5092699.740274842,
    time: 1731344400,
  },
  {
    open: 0.38404319605245957,
    close: 0.3977330242465391,
    low: 0.37667454036007,
    high: 0.40369959692923313,
    volume: 23434384.560575422,
    time: 1731348000,
  },
  {
    open: 0.3977330242465391,
    close: 0.3890012283800723,
    low: 0.34120916092560793,
    high: 0.3977330242465391,
    volume: 8715184.644721208,
    time: 1731351600,
  },
  {
    open: 0.3890012283800723,
    close: 0.3565635281703799,
    low: 0.3235416179137107,
    high: 0.39282259497554045,
    volume: 24702597.757932443,
    time: 1731355200,
  },
  {
    open: 0.3565635281703799,
    close: 0.37117815863029857,
    low: 0.3530123930907074,
    high: 0.39009378068911627,
    volume: 5713233.039367613,
    time: 1731358800,
  },
  {
    open: 0.37117815863029857,
    close: 0.3683787706939251,
    low: 0.35141125369701476,
    high: 0.3821782654798573,
    volume: 4085167.7635295773,
    time: 1731362400,
  },
  {
    open: 0.3683787706939251,
    close: 0.37638862000736806,
    low: 0.3574995955941938,
    high: 0.39430855990664126,
    volume: 5131469.971518112,
    time: 1731366000,
  },
  {
    open: 0.37638862000736806,
    close: 0.3921191180896,
    low: 0.37638862000736806,
    high: 0.4768697039736875,
    volume: 13575135.154940087,
    time: 1731369600,
  },
  {
    open: 0.3921191180896,
    close: 0.4367883899979079,
    low: 0.3921191180896,
    high: 0.4512768693738362,
    volume: 5664371.525392758,
    time: 1731373200,
  },
  {
    open: 0.4367883899979079,
    close: 0.4239014589958977,
    low: 0.40691913381221706,
    high: 0.4409355013042866,
    volume: 5510023.088812342,
    time: 1731376800,
  },
  {
    open: 0.4239014589958977,
    close: 0.41845958859018845,
    low: 0.4151401825704101,
    high: 0.46391343745660923,
    volume: 6155713.328864368,
    time: 1731380400,
  },
  {
    open: 0.41845958859018845,
    close: 0.4718929746629144,
    low: 0.41845958859018845,
    high: 0.5168234299610018,
    volume: 11225144.331597786,
    time: 1731384000,
  },
  {
    open: 0.4718929746629144,
    close: 0.5165851217463481,
    low: 0.4718929746629144,
    high: 0.5460960523286863,
    volume: 23150838.357855566,
    time: 1731387600,
  },
];

const tokenInfo = {
  token: {
    name: "HARAMBE",
    symbol: "HARAMBE",
    mint: "Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP",
    uri: "https://bafkreid4w525uxvn5ep4hanxrraqi2r2gbuwri6imxcovir46xqk75ttey.ipfs.nftstorage.link",
    decimals: 9,
    description:
      "Harambe on Solana\nTG: t.me/HarambeCommunity\n\nsorry guys dev just wanted a better entry",
    image:
      "https://image.solanatracker.io/proxy?url=https%3A%2F%2Fbafkreiae6jhnm6fnankuwimzwwjumpdqnpk5jvlnwpxe2quprgvswzgipq.ipfs.nftstorage.link",
    hasFileMetaData: true,
  },
  pools: [
    {
      poolId: "2BJKy9pnzTDvMPdHJhv8qbWejKiLzebD7i2taTyJxAze",
      liquidity: {
        quote: 13920.042645482,
        usd: 2845051.7580286087,
      },
      price: {
        quote: 0.0002634608530592058,
        usd: 0.053847519167701224,
      },
      tokenSupply: 998955724.2762239,
      lpBurn: 99,
      tokenAddress: "Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP",
      marketCap: {
        quote: 263185.7272861907,
        usd: 53791287.510648824,
      },
      market: "raydium",
      quoteToken: "So11111111111111111111111111111111111111112",
      decimals: 9,
      security: {
        freezeAuthority: null,
        mintAuthority: null,
      },
      lastUpdated: 1731479567635,
      createdAt: 1721760533688,
      deployer: null,
      txns: {
        sells: 208021,
        total: 381475,
        buys: 173454,
        volume: 9147874807,
      },
    },
    {
      poolId: "C2gpTALX9LKN5kKktckYXbmKicB5Z867QNJ3ypemWb94",
      liquidity: {
        quote: 486.291468174,
        usd: 100325.76575139715,
      },
      price: {
        quote: 0.00027172677302,
        usd: 0.05605937665452655,
      },
      tokenSupply: 998955724.2762239,
      lpBurn: 0,
      tokenAddress: "Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP",
      marketCap: {
        quote: 271443.0153460551,
        usd: 56000835.20839621,
      },
      market: "orca",
      quoteToken: "So11111111111111111111111111111111111111112",
      decimals: 9,
      security: {
        freezeAuthority: null,
        mintAuthority: null,
      },
      lastUpdated: 1731478632183,
      createdAt: 1721760533693,
      deployer: null,
      txns: {
        buys: 10309,
        total: 20746,
        sells: 10437,
        volume: 47505890,
      },
    },
    {
      poolId: "2y5Mzgs8TAEgweThA7coc8VXRHKymN9UkatCvLZQ3ucM",
      liquidity: {
        quote: 276.086886906,
        usd: 56960.859722012996,
      },
      price: {
        quote: 0.00027704529867,
        usd: 0.05715859442299491,
      },
      tokenSupply: 998955724.2762239,
      lpBurn: 0,
      tokenAddress: "Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP",
      marketCap: {
        quote: 276755.98698990146,
        usd: 57098905.09043382,
      },
      market: "orca",
      quoteToken: "So11111111111111111111111111111111111111112",
      decimals: 9,
      security: {
        freezeAuthority: null,
        mintAuthority: null,
      },
      lastUpdated: 1731478750843,
      createdAt: 1721760533698,
      deployer: null,
      txns: {
        buys: 3879,
        total: 7621,
        sells: 3742,
        volume: 3286514,
      },
    },
    {
      poolId: "3Btp6dhy58zt9WQtjPkQTuqusJ42E7yG7zxTuxpVpvWL",
      liquidity: {
        quote: 0.005801772,
        usd: 1.0721224907392013,
      },
      price: {
        quote: 0.00012585696747,
        usd: 0.023257391956354508,
      },
      tokenSupply: 999087659.5644112,
      lpBurn: 0,
      tokenAddress: "Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP",
      marketCap: {
        quote: 125742.14307374806,
        usd: 23236173.297246385,
      },
      market: "orca",
      quoteToken: "So11111111111111111111111111111111111111112",
      decimals: 9,
      security: {
        freezeAuthority: null,
        mintAuthority: null,
      },
      lastUpdated: 1722272314219,
      createdAt: 1721760533702,
      deployer: null,
      txns: {
        buys: 0,
        sells: 0,
        total: 0,
        volume: 0,
      },
    },
  ],
  events: {
    "1m": {
      priceChangePercentage: -0.941476561522369,
    },
    "5m": {
      priceChangePercentage: -1.3596918725618008,
    },
    "15m": {
      priceChangePercentage: -2.1170648257682823,
    },
    "30m": {
      priceChangePercentage: -4.785155800882994,
    },
    "1h": {
      priceChangePercentage: -4.057246496256356,
    },
    "2h": {
      priceChangePercentage: -12.098036143666297,
    },
    "3h": {
      priceChangePercentage: -4.2349820315584275,
    },
    "4h": {
      priceChangePercentage: -2.5437635691512255,
    },
    "5h": {
      priceChangePercentage: -7.323599211805706,
    },
    "6h": {
      priceChangePercentage: -17.94825101380929,
    },
    "12h": {
      priceChangePercentage: 0.9341596346706729,
    },
    "24h": {
      priceChangePercentage: 5.3685332097497,
    },
  },
  risk: {
    rugged: false,
    risks: [],
    score: 0,
    jupiterVerified: true,
  },
  buys: 0,
  sells: 0,
  txns: 0,
};

export const loader: LoaderFunction = async ({ params, context }) => {
  // in other project i dont do this, idk the different
  if (!params.id) throw new Error("no params.id");
  // const chartData = await SolanaTracker.chartData(
  //   {
  //     token: params.id,
  //     type: "1h",
  //     fromTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
  //   },
  //   context.cloudflare.env.SOLANA_TRACKER_API_KEY
  // );

  // const tokenInfo = await SolanaTracker.tokenInfo(
  //   params.id,
  //   context.cloudflare.env.SOLANA_TRACKER_API_KEY
  // );

  return {
    chartData,
    tokenInfo,
  };
};
export default function Token() {
  const data = useLoaderData<typeof loader>() as {
    chartData: HLOCV[];
    tokenInfo: TokenInfo;
  };

  console.log("tokenInfo", data.tokenInfo);

  return (
    <div className="flex flex-col items-center">
      <h2>{data.tokenInfo.token.name}</h2>
      <Chart data={data.chartData} />
    </div>
  );
}
