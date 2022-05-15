import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// User
import App from "./App";
import CalendarContainer from "./components/calendar/CalendarContainer";
import Facility from "./components/layout/facility";
import Login from "./components/login/login";

// Admin
import AdminLogin from "./components/Admin/login/AdminLogin";
import AdminSignUp from "./components/Admin/signup/AdminSignUp";
import AdminContainer from "./components/new-admin/AdminContainer";

// Context
import { FetchContextProvider } from "./context/fetchContext";

ReactDOM.render(
  <React.StrictMode>
    <FetchContextProvider>
      <BrowserRouter>
        <Routes>
          {/* User */}
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="/booking" element={<Facility />}>
            <Route path=":fno" element={<CalendarContainer />} />
            <Route index element={<Navigate replace to="/" />} />
          </Route>

          {/* New Admin */}
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin/signup" element={<AdminSignUp />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin/manage" element={<AdminContainer />} />

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
