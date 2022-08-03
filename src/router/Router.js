import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Layout
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

// User
import CalendarContainer from "../components/calendar/CalendarContainer";
import Facility from '../components/layout/Facility';
import ReserveForm from "../components/calendar/ReserveForm";

// Admin
import AdminLogin from "../components/new-admin/AdminLogin";
import AdminContainer from "../components/new-admin/AdminContainer";

import ModalContainer from '../components/modal/ModalContainer';
import SocialLogin from "../components/login/SocialLogin";

function Router() {
  return (
    <BrowserRouter>
      <ModalContainer>
        <SocialLogin />
      </ModalContainer>
      <Header />
      <Switch>
        <Route exact path="/">
          <Facility />
        </Route>
        <Route exact path="/reserve">
          <ReserveForm />
        </Route>
        <Route exact path="/booking/:fno">
          <CalendarContainer />
        </Route>

        {/* New Admin */}
        <Route exact path="admin">
          <AdminLogin />
        </Route>
        <Route exact path="admin/login">
          <AdminLogin />
        </Route>
        <Route exact path="admin/manage">
          <AdminContainer />
        </Route>

        {/* 404 */}
        {/* <Route path="*">
          <div>404 Not Found</div>
        </Route> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;