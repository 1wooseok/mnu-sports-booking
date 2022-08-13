import { PushNotifications, Token, PushNotificationSchema, ActionPerformed } from '@capacitor/push-notifications';

export const registerNotifications = async () => {
  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === 'granted') {
    return 'granted';
  }

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions();
  }

  if (permStatus.receive !== 'granted') {
    alert('User denied permissions!');
  }

  await PushNotifications.register();
}

export const addListeners = async () => {
  // await PushNotifications.register();

  await PushNotifications.addListener('registration',
    (token: Token) => {
      console.info('Registration token: ', token.value);
    }
  );

  await PushNotifications.addListener('registrationError', (err) => {
    console.error('Registration error: ', err.error);
  });

  // silent push ( while running in foreground)
  // push알림을 보내면 다운됨... firebase 설정 문제일까?
  await PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
    const props: PushNotificationSchema = {
      id: notification.id,
      title: notification.title,
      body: notification.body,
      data: notification.data,
    }
    alert(JSON.stringify(props));
    console.log('Push notification received: ', notification);
  });

  // https://enappd.com/blog/firebase-push-notification-in-ionic-react-capacitor/111/#35d2:~:text=message%20to%20user-,addListener(,-%E2%80%98pushNotificationActionPerformed%E2%80%99%2C%C2%A0%E2%80%A6)%E2%80%8A%E2%80%94%E2%80%8AThis
  await PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
    console.log('Push notification action performed', notification.actionId, notification.inputValue);
  });
}

// export const getDeliveredNotifications = async () => {
//   const notificationList = await PushNotifications.getDeliveredNotifications();

//   console.log('delivered notifications', notificationList);
// }