import LoginModal from '../components/login/LoginModal';
import { useAppSelector } from '../redux/hooks';

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAppSelector((state) => state.user.authenticated)

  if (!auth) {
    return (
      <LoginModal />
    );
  }

  return children;
}

export default RequireAuth;
