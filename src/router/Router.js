import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Layout
import Footer from "../components/layout/footer/Footer";

// Booking
import BookingPage from "../pages/BookingPage";
import ReserveForm from "../components/calendar/ReserveForm";

// Admin
import AdminLogin from "../components/new-admin/AdminLogin";
import AdminContainer from "../components/new-admin/AdminContainer";

// Login
import KakaoRedirectPage from '../pages/KakaoRedirectPage';

// Trash
import ModalContainer from '../components/modal/ModalContainer';

// Commnuity
import CommunityPage from "../pages/CommunityPage";
import PostPage from "../pages/PostPage";

// Actuvuty
import ActivityPage from "../pages/ActivityPage";

// Profile 
import ProfilePage from "../pages/ProfilePage";

// Band
import BandPage from "../pages/BandPage";

function Router() {
  return (
    <BrowserRouter>
      <ModalContainer />
      {/* <Header /> */}
      <Switch>
        <Route exact path="/reserve">
          <ReserveForm />
        </Route>
        <Route exact path="/booking/:fno">
          <BookingPage />
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
        <Route exact path="/band">
          <BandPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/profile/activity">
          <ActivityPage />
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