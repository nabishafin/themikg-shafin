import img from "../assets/image.png";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  DollarSign,
  Heart,
  BarChart2,
  Settings,
  User,
  FileText,
  Shield,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  LogOut,
} from "lucide-react";

const NavItem = ({
  icon,
  label,
  isActive,
  hasDropdown,
  isOpen,
  onClick,
  path,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (path) {
      navigate(path);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700/20 transition-colors ${
        isActive ? "bg-gradient-to-r from-[#23769D]  to-[#222222]" : ""
      }`}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
      {hasDropdown &&
        (isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
    </button>
  );
};

const SubNavItem = ({ icon, label, isActive, path }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => path && navigate(path)}
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700/20 transition-colors ${
        isActive ? "bg-gradient-to-r from-[#23769D]  to-[#222222]" : ""
      }`}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
    </button>
  );
};

export default function Sidebar() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to check if current path is active
  const isActive = (path) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/");
  };

  return (
    <div className="flex h-screen w-full flex-col bg-[#222222] p-3 md:m-3 m-0 rounded-md">
      {/* Logo Section */}
      <div className="border-b border-gray-600 pb-4">
        <div className="flex justify-center items-center py-5">
          <img className="w-36" src={img} alt="Logo" />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-1 mt-4 flex-1">
        <NavItem
          icon={<Home size={20} />}
          label="Dashboard"
          path="/dashboard"
          isActive={
            isActive("/dashboard") && location.pathname === "/dashboard"
          }
        />
        <NavItem
          icon={<Users size={20} />}
          label="Users"
          path="/dashboard/users"
          isActive={isActive("/dashboard/users")}
        />
        <NavItem
          icon={<DollarSign size={20} />}
          label="Earning"
          path="/dashboard/earning"
          isActive={isActive("/dashboard/earning")}
        />
        <NavItem
          icon={<Heart size={20} />}
          label="Interest List"
          path="/dashboard/interest-list"
          isActive={isActive("/dashboard/interest-list")}
        />
        <NavItem
          icon={<BarChart2 size={20} />}
          label="Report"
          path="/dashboard/report"
          isActive={isActive("/dashboard/report")}
        />
        <NavItem
          icon={<Settings size={20} />}
          label="Settings"
          hasDropdown
          isOpen={settingsOpen}
          isActive={isActive("/dashboard/settings")}
          onClick={() => setSettingsOpen(!settingsOpen)}
        />

        {/* Settings Submenu */}
        {settingsOpen && (
          <div className="ml-2 flex flex-col space-y-1 border-l-2 border-blue-600 pl-3">
            <SubNavItem
              icon={<User size={18} />}
              label="Profile"
              path="/dashboard/settings/profile"
              isActive={isActive("/dashboard/settings/profile")}
            />
            <SubNavItem
              icon={<FileText size={18} />}
              label="Terms & Service"
              path="/dashboard/settings/terms"
              isActive={isActive("/dashboard/settings/terms")}
            />
            <SubNavItem
              icon={<Shield size={18} />}
              label="Privacy Policy"
              path="/dashboard/settings/privacy"
              isActive={isActive("/dashboard/settings/privacy")}
            />
            <SubNavItem
              icon={<HelpCircle size={18} />}
              label="About Us"
              path="/dashboard/settings/about"
              isActive={isActive("/dashboard/settings/about")}
            />
          </div>
        )}
      </nav>

      {/* Logout Button */}
      <div className="border-t border-gray-600 pt-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-red-600/20 transition-colors"
        >
          <LogOut size={20} />
          <span className="flex-1 text-left">Log Out</span>
        </button>
      </div>
    </div>
  );
}
