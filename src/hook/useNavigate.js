import { useHistory } from 'react-router-dom';

export function useNavigate() {
  const history = useHistory();

  const navigate = (url) => {
    history.push(url);
  }

  return navigate;
}