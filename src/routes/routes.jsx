import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

// import Users from "../pages/Users";
// import Earning from "../pages/Earning";
// import InterestList from "../pages/InterestList";
// import Report from "../pages/Report";
// import Settings from "../pages/Settings";
import Dashboard from "../pages/dashboardpages/Dashboard ";

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
      // {
      //   path: "users",
      //   element: <Users />,
      // },
      // {
      //   path: "earning",
      //   element: <Earning />,
      // },
      // {
      //   path: "interest-list",
      //   element: <InterestList />,
      // },
      // {
      //   path: "report",
      //   element: <Report />,
      // },
      // {
      //   path: "settings",
      //   element: <Settings />,
      // },
    ],
  },
]);

export default routes;
