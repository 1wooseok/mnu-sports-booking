import { useEffect } from 'react';
import { registerNotifications, addListeners } from "../apis/noti/PushNoti";

export default function useRegisterNotifications() {
  let permissionStatus;
  useEffect(() => {
    // permissionStatus = registerNotifications();
    addListeners();
  })

  return permissionStatus;
}