import { checkAdminLogin } from "../../apis/api";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function useAdminLoginState() {
  const navigate = useNavigate();

  useEffect(() => {
    async function isLogin() {
      try {
        const res = await checkAdminLogin();
        if(res.status === 200) return;
        navigate('/admin/login', { replace : true })
      } catch (err) {
        console.log(err);
      }
    }
    isLogin();
  })
}