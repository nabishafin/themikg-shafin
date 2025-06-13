import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex gap-2.5 bg-black min-h-screen">
      <div className="w-[15%]">
        <Sidebar />
      </div>
      <div className="w-[85%] flex flex-col">
        <Header />
        <div className="p-4 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
