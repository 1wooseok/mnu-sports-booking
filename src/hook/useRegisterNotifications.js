import { useEffect } from 'react';
import { registerNotifications, addListeners } from "../apis/noti/PushNoti";
import { isPlatform } from '@ionic/react';

export default function useRegisterNotifications() {
  if (isPlatform('hybrid')) {
    let permissionStatus;

    useEffect(() => {
      permissionStatus = registerNotifications();
      if (permissionStatus === 'granted') {
        addListeners();
      }
    })

    return permissionStatus;
  }

  return null;
}