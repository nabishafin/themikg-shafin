import React from "react";
import { Card, CardContent } from "@/components/ui/card"; // shadcn/ui theke
import { Users, LineChart } from "lucide-react"; // lucide-react icons

const StatsCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Users Card */}
        <Card className="bg-gradient-to-b from-[#282828] to-black">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <Users className="h-14 w-14 text-white" />
              <div>
                <p className="text-white text-3xl font-medium">Total User</p>
                <p className="text-cyan-400 text-2xl font-semibold">52,300</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Profit Card */}
        <Card className="bg-gradient-to-b from-[#282828] to-black">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <LineChart className="h-14 w-14 text-white" />
              <div>
                <p className="text-white text-lg font-medium">Total Profit</p>
                <p className="text-cyan-400 text-2xl font-bold">$2,300</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsCard;
