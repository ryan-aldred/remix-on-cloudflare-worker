import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { SolanaTracker } from "~/utils/solanaTracker/index.server";

export const loader: LoaderFunction = async ({ params, context }) => {
  // in other project i dont do this, idk the different
  if (!params.id) throw new Error("no params.id");
  const chartData = await SolanaTracker.chartData(
    {
      token: params.id,
      type: "1h",
      fromTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
    context.cloudflare.env.SOLANA_TRACKER_API_KEY
  );

  return {
    chartData,
  };
};
export default function Token() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      Tokens
      <div>{data?.chartData[0].high}</div>
    </div>
  );
}
