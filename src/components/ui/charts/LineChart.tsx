
import React from "react";
import {
  Line,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface LineChartProps {
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
  className?: string;
}

export function LineChart({
  data,
  categories,
  index,
  colors = ["#3b82f6", "#f59e0b", "#22c55e"],
  valueFormatter = (value) => `${value}`,
  className,
}: LineChartProps) {
  return (
    <ChartContainer
      config={{}}
      className={className}
    >
      <RechartsLineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={index} />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Legend />
        {categories.map((category, i) => (
          <Line
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[i % colors.length]}
            activeDot={{ r: 8 }}
          />
        ))}
      </RechartsLineChart>
    </ChartContainer>
  );
}
