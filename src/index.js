import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import KakaoChannel from "./apis/KakaoChannel";

// User
import App from "./App";
import CalendarContainer from "./components/calendar/CalendarContainer";
import Facility from "./components/layout/facility";
import ReserveForm from "./components/calendar/ReserveForm";

// Admin
import AdminLogin from "./components/new-admin/AdminLogin";
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
          <Route path="reserve" element={<ReserveForm />} />
          <Route path="/booking" element={<Facility />}>
            <Route path=":fno" element={<CalendarContainer />} />
            <Route index element={<Navigate replace to="/" />} />
          </Route>

          {/* New Admin */}
          <Route path="admin" element={<AdminLogin />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin/manage" element={<AdminContainer />} />

          {/* 404 */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </FetchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
