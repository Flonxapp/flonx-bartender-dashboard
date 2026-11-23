import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";

import Login from "../Auth/Login";
import JoinAs from "../Auth/JoinAs";
import RegisterVerify from "../Auth/RegisterVerify";
import CompleteProfile from "../Auth/CompleteProfile";
import ForgetPass from "../Auth/ForgetPass";
import Verify from "../Auth/Verify";
import ResetPass from "../Auth/ResetPass";

import MyShifts from "../page/myShift/MyShifts";
import ShiftDetails from "../page/myShift/ShiftDetails";
import VenueDetails from "../page/myShift/VenueDetails";
import Notification from "../page/Notification/Notification";
import VenueProfile from "../page/venuwProfile/VenueProfile";
import MyProfile from "../page/venuwProfile/MyProfile";
import UpdateVenyeProfile from "../page/venuwProfile/UpdateVenyeProfile";
import AccountSetting from "../page/venuwProfile/AccountSetting";
import PassWordChange from "../page/venuwProfile/PassWordChange";
import HelpSupport from "../page/helpSupport/HelpSupport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Dashboard /> },

      // shifts
      { path: "/dashboard/shifts", element: <MyShifts /> },
      { path: "/dashboard/shifts/details/:id", element: <ShiftDetails /> },
      {
        path: "/dashboard/shifts/venueDetails/:id",
        element: <VenueDetails />,
      },

      { path: "/dashboard/notifications", element: <Notification /> },

      // profile & settings
      { path: "/dashboard/profile", element: <VenueProfile /> },
      { path: "/dashboard/myProfile", element: <MyProfile /> },
      { path: "/dashboard/UpdateProfile", element: <UpdateVenyeProfile /> },
      { path: "/dashboard/accountSetting", element: <AccountSetting /> },
      { path: "/dashboard/change_password", element: <PassWordChange /> },

      { path: "/dashboard/HelpSupport", element: <HelpSupport /> },

      // old links
      {
        path: "/dashboard/VenueProfile",
        element: <Navigate to="/dashboard/profile" replace />,
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/joinAs", element: <JoinAs /> },
  { path: "/registerVerify", element: <RegisterVerify /> },
  {
    path: "/completeProfile",
    element: (
      <ProtectedRoute>
        <CompleteProfile />
      </ProtectedRoute>
    ),
  },
  { path: "/forgot-password", element: <ForgetPass /> },
  { path: "/verification", element: <Verify /> },
  { path: "/reset-password", element: <ResetPass /> },
]);
