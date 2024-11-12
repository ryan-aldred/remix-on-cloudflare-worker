import { CandlestickData, createChart, Time } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { ClientOnly } from "remix-utils/client-only";
import { HLOCV } from "~/utils/solanaTracker/types";
import colors from "tailwindcss/colors";

interface Props {
  data: HLOCV[];
}

export function Chart({ data }: Props) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !data.length) return;

    const chart = createChart(chartRef.current, {
      width: 800,
      height: 400,
      layout: {
        background: { color: colors.slate[900] },
        textColor: colors.slate[100],
      },
      grid: {
        vertLines: { color: colors.slate[800] },
        horzLines: { color: colors.slate[800] },
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: colors.sky[400],
      wickUpColor: colors.sky[400],
      downColor: colors.pink[500],
      wickDownColor: colors.pink[500],
      borderVisible: false,
    });
    const volumeSeries = chart.addHistogramSeries({
      priceFormat: { type: "volume" },
      priceScaleId: "",
    });

    volumeSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });

    // this works but need to fix types
    candlestickSeries.setData(data);
    volumeSeries.setData(
      data.map(({ time, volume, open, close }) => ({
        time,
        value: volume,
        color: open > close ? colors.pink[500] : colors.sky[500],
      }))
    );

    return () => {
      chart.remove();
    };
  }, [data]);

  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => <div ref={chartRef} />}
    </ClientOnly>
  );
}
