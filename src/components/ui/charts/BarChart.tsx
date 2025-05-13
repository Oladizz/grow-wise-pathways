
import React from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface BarChartProps {
  data: any[];
  index: string;
  categories: string[];
  colors?: string[];
  valueFormatter?: (value: number) => string;
  className?: string;
}

export function BarChart({
  data,
  index,
  categories,
  colors = ["#3b82f6", "#f59e0b", "#22c55e"],
  valueFormatter = (value) => `${value}`,
  className,
}: BarChartProps) {
  return (
    <ChartContainer
      config={{}}
      className={className}
    >
      <RechartsBarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey={index} />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Legend />
        {categories.map((category, i) => (
          <Bar 
            key={category}
            dataKey={category}
            fill={colors[i % colors.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </RechartsBarChart>
    </ChartContainer>
  );
}
