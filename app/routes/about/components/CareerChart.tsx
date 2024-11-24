import {
  ResponsiveContainer,
  LineChart,
  YAxis,
  XAxis,
  Line,
  Legend,
  ReferenceDot,
  Tooltip,
} from "recharts";
import colors from "tailwindcss/colors";

export function CareerChart({ data }: { data: any }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        height={600}
        width={800}
        data={data}
        margin={{ top: 30, bottom: 20, right: 20 }}
        className="bg-slate-900"
      >
        <YAxis
          domain={[0, 300]}
          yAxisId="left"
          stroke="#fff"
          tickLine={{ stroke: "#fff" }}
          tick={{ fill: "#fff" }}
        />
        <YAxis
          domain={[0, 180]}
          yAxisId="right"
          orientation="right"
          stroke="#fff"
          tickLine={{ stroke: "#fff" }}
          tick={{ fill: "#fff" }}
        />
        <XAxis
          dataKey="date"
          stroke="#fff"
          angle={-45}
          textAnchor="end"
          height={60}
        />
        <Line
          type="linear"
          dataKey="jobPostings"
          stroke={colors.sky[400]}
          dot={false}
          yAxisId="left"
        />
        <Line
          type="linear"
          dataKey="price"
          stroke={colors.pink[500]}
          dot={false}
          yAxisId="right"
        />
        <Legend
          payload={[
            {
              value: "Software Devloper Job Postings",
              type: "line",
              id: "jobPostings",
            },
            {
              value: "Shopify Share Price",
              type: "line",
              id: "price",
            },
          ]}
          wrapperStyle={{ paddingTop: "50px" }}
        />
        <ReferenceDot
          x="2020-09-01"
          y={75}
          yAxisId="left"
          fill={colors.pink[500]}
          label={{ value: "A", position: "center", fill: colors.white }}
        />
        <ReferenceDot
          x="2022-02-01"
          y={225}
          yAxisId="left"
          fill={colors.pink[500]}
          label={{ value: "B", position: "center", fill: colors.white }}
        />
        <ReferenceDot
          x="2022-05-20"
          y={220}
          yAxisId="left"
          fill={colors.pink[500]}
          label={{ value: "C", position: "center", fill: colors.white }}
        />
        <ReferenceDot
          x="2023-05-22"
          y={95}
          yAxisId="left"
          fill={colors.pink[500]}
          label={{ value: "D", position: "center", fill: colors.white }}
        />
        <Tooltip contentStyle={{ backgroundColor: "black" }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
