import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

// import Users from "../pages/Users";
// import Earning from "../pages/Earning";
// import InterestList from "../pages/InterestList";
// import Report from "../pages/Report";
// import Settings from "../pages/Settings";
import Dashboard from "../pages/dashboardpages/Dashboard ";
import Users from "../pages/dashboardpages/Users";
import Earning from "../pages/dashboardpages/Earning";
import Report from "../pages/dashboardpages/Report";
import InterestList from "../pages/dashboardpages/InterestList";
import Profile from "../pages/dashboardpages/Profile";
import Terms from "../pages/dashboardpages/Terms";

const routes = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LogIn />,
  // },
  // {
  //   path: "/forgot-password",
  //   element: <ForgotPassword />,
  // },
  // {
  //   path: "/verification", // Fixed typo
  //   element: <VerificationPage />,
  // },
  // {
  //   path: "/reset-password", // Fixed naming convention
  //   element: <PasswordReset />,
  // },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "earning",
        element: <Earning />,
      },
      {
        path: "interest-list",
        element: <InterestList />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "settings/profile",
        element: <Profile />,
      },
      {
        path: "settings/terms",
        element: <Terms />,
      },
      {
        path: "report",
        element: <Report />,
      },
    ],
  },
]);

export default routes;
