import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/modal/logo";
import styled from "styled-components";
// import useRegisterNotifications from "../../hook/useRegisterNotifications";
import { PushNotifications } from '@capacitor/push-notifications';

const facilities = [
  {
    fno: 1,
    name: "풋살장",
    place: "공대 근처",
    placeUrl: "www.naver.com",
    maxHour: 2,
  },
  {
    fno: 29,
    name: "테니스장",
    place: "공대 근처",
    placeUrl: "www.naver.com",
    maxHour: 2,
  },
  {
    fno: 34,
    name: "족구장",
    place: "간호대 앞",
    placeUrl: "www.adfsd.com",
    maxHour: 2,
  },
  {
    fno: 36,
    name: "대운동장",
    place: "editTest",
    placeUrl: "editTest",
    maxHour: 3,
  },
];

export default function Facility() {
  // const permissionStatus = useRegisterNotifications();
  /////////////////////
  useEffect(() => {
    PushNotifications.checkPermissions().then((res) => {
      if (res.receive !== 'granted') {
        PushNotifications.requestPermissions().then((res) => {
          if (res.receive === 'denied') {
            alert('Push Notification permission denied');
          }
          else {
            alert('Push Notification permission granted');
            register();
          }
        });
      }
      else {
        register();
      }
    });
  }, []);

  const register = () => {
    console.log('Initializing HomePage');

    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token) => {
        alert("Device Registered : ", JSON.stringify(token));
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification) => {
        alert('Received(foreground): ', JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification) => {
        alert('Received(backGround): ', JSON.stringify(notification));
      }
    );
  }

  ///////////////////
  return (
    <StAppContainer>
      <Logo />
      {facilities.map((facility, idx) => (
        <StAppLink
          className={idx === 0 ? "able" : "__disable"}
          key={idx}
          to={`/booking/${facility.fno}`}
        >
          {facility.name}
        </StAppLink>)
      )}
    </StAppContainer>
  );
}

const StAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const StAppLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: calc(100vh / 4);

  color: black;
  font-size: large;

  background-color: ${(props) => (props.className === "__disable" ? "#929292" : "#F5F4F2")};
  border-bottom: 1px solid gray;

  opacity: 0.6;
  transition: 0.3s;

  font-weight: ${(props) => (props.className === "__disable" ? "normal" : "bold")};
  text-decoration: ${(props) => (props.className === "__disable" ? "line-through" : "none")};

  .able {
    background-color: "red";
    &:hover {
      transition: 0.35;
      opacity: 1;
      background-color: white;
      font-size: 20px;
    }
  }
`;