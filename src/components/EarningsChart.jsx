import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";

const EarningsChart = () => {
  const earningsData = [
    { month: "Jan", earnings: 3.2 },
    { month: "Feb", earnings: 4.1 },
    { month: "Mar", earnings: 6.8 },
    { month: "Apr", earnings: 8.24 },
    { month: "May", earnings: 7.1 },
    { month: "Jun", earnings: 7.8 },
    { month: "Jul", earnings: 2.9 },
    { month: "Aug", earnings: 1.8 },
    { month: "Sep", earnings: 6.2 },
    { month: "Oct", earnings: 8.1 },
    { month: "Nov", earnings: 7.3 },
    { month: "Dec", earnings: 6.9 },
  ];

  return (
    <div>
      <Card className="bg-gradient-to-b from-[#282828] to-black border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white text-xl">Earnings</CardTitle>
            <Select defaultValue="2025">
              <SelectTrigger className="w-20 bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600">
                <SelectItem value="2023" className="text-white">
                  2023
                </SelectItem>
                <SelectItem value="2024" className="text-white">
                  2024
                </SelectItem>
                <SelectItem value="2025" className="text-white">
                  2025
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={earningsData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                  tickFormatter={(value) => `$${value}k`}
                  domain={[0, 10]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "1px solid #374151",
                    color: "#ffffff",
                    fontSize: "14px",
                  }}
                  formatter={(value) => [`$${value}k`, "Earnings"]}
                  labelStyle={{ color: "#a1a1aa" }}
                />
                <Bar
                  dataKey="earnings"
                  fill="#06B6D4"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EarningsChart;
