
import React from "react";
import {
  Pie,
  PieChart as RechartsPieChart,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface PieChartProps {
  data: any[];
  index: string;
  valueKey: string;
  colors?: string[];
  className?: string;
}

export function PieChart({
  data,
  index,
  valueKey,
  colors = ["#3b82f6", "#f59e0b", "#22c55e", "#a855f7", "#ec4899"],
  className,
}: PieChartProps) {
  return (
    <ChartContainer
      config={{}}
      className={className}
    >
      <RechartsPieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <Pie
          data={data}
          dataKey={valueKey}
          nameKey={index}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label={(entry) => entry[index]}
          labelLine={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltipContent />} />
        <Legend />
      </RechartsPieChart>
    </ChartContainer>
  );
}
