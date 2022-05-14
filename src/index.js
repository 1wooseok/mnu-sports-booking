import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// User
import App from "./App";
import CalendarContainer from "./components/calendar/CalendarContainer";
import Facility from "./components/layout/facility";

// Admin
import AdminLogin from "./components/Admin/login/AdminLogin";
import AdminMain from "./components/Admin/layout/AdminMain";
import AdminSignUp from "./components/Admin/signup/AdminSignUp";
import AdminBookingContainer from "./components/Admin/booking/AdminBookingContainer";
import AdminFacilityContainer from "./components/Admin/facility/AdminFacilityContainer";
import AdminManageContainer from "./components/Admin/manage/AdminManageContainer";
import AdminMenu from "./components/Admin//layout/AdminMenu";

// New Admin
import ControlBooking from "./components/new-admin/ControlBooking";

// Context
import { FetchContextProvider } from "./context/fetchContext";

ReactDOM.render(
  <React.StrictMode>
    <FetchContextProvider>
      <BrowserRouter>
        <Routes>
          {/* User */}
          <Route path="/" element={<App />} />
          <Route path="/booking" element={<Facility />}>
            <Route path=":fno" element={<CalendarContainer />} />
            <Route index element={<Navigate replace to="/" />} />
          </Route>

          {/* Admin */}
          {/* <Route path="/admin" element={<AdminMain />}>
            <Route path="signup" element={<AdminSignUp />} />
            <Route path="login" element={<AdminLogin />} />
            <Route path="main" element={<AdminMenu />} />
            <Route path="booking" element={<AdminBookingContainer />} />
            <Route path="facility" element={<AdminFacilityContainer />} />
            <Route path="manage" element={<AdminManageContainer />} />
          </Route> */}

          {/* New Admin */}
          <Route path="admin" element={<ControlBooking />} />
          {/* 404 */}
          <Route
            path="*"
            element={
              <div>
                <p>404 Not Found</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </FetchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
