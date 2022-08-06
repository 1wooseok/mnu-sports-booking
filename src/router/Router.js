import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Layout
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";

// User
import CalendarContainer from "../components/calendar/CalendarContainer";
import Facility from '../components/layout/Facility';
import ReserveForm from "../components/calendar/ReserveForm";

// Admin
import AdminLogin from "../components/new-admin/AdminLogin";
import AdminContainer from "../components/new-admin/AdminContainer";

// Login
import KakaoRedirectPage from '../pages/KakaoRedirectPage';

// Trash
import ModalContainer from '../components/modal/ModalContainer';
import SocialLogin from "../components/login/SocialLogin";


// Profile 
import ProfilePage from "../pages/ProfilePage";

// Commnuity
import CommunityPage from "../pages/CommunityPage";
import PostPage from "../pages/PostPage";

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
        <Route exact path="/oauth/kakao/callback">
          <KakaoRedirectPage />
        </Route>
        <Route exact path="/community">
          <CommunityPage />
        </Route>
        <Route exact path="/community/:postId">
          <PostPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
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