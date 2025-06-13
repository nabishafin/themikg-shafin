import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboardpages/Dashboard ";
import Users from "../pages/dashboardpages/Users";
import Earning from "../pages/dashboardpages/Earning";
import Report from "../pages/dashboardpages/Report";
import InterestList from "../pages/dashboardpages/InterestList";
import Profile from "../pages/dashboardpages/Profile";
import Terms from "../pages/dashboardpages/Terms";
import PrivacyPolicy from "../pages/dashboardpages/PrivacyPolicy";
import About from "../pages/dashboardpages/About";
import SignInPage from "../pages/auth/SignInPage";
import ForgotPassword from "../pages/auth/ForgotPassword";
import VerifyCode from "../pages/auth/VerifyCode";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verification", // Fixed typo
    element: <VerifyCode />,
  },
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
        path: "settings/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/about",
        element: <About />,
      },
    ],
  },
]);

export default routes;
