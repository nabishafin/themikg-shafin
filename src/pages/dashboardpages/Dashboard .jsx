import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, ChartNoAxesCombined } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

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

const Dashboard = () => {
  return (
    <div className=" bg-black ">
      <div className=" mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Total Users Card */}
          <Card className="bg-gradient-to-b from-[#282828] to-black ">
            <CardContent className="p-6">
              <div className="">
                <div className="flex items-center justify-between ">
                  <div className="">
                    <Users className="h-14 w-14 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-3xl font-medium">
                      Total User
                    </p>
                    <p className="text-cyan-400 text-2xl font-semibold">
                      52,300
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Total Profit Card */}
          <Card className="bg-gradient-to-b from-[#282828] to-black">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <ChartNoAxesCombined className="h-14 w-14 text-white" />
                </div>
                <div>
                  <p className="text-white text-lg font-medium">Total Profit</p>
                  <p className="text-cyan-400 text-2xl font-bold">$2,300</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Earnings Chart */}
        <Card className="bg-gradient-to-b from-[#282828] to-black border-gray-700 ">
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
    </div>
  );
};

export default Dashboard;
