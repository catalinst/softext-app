import { FC } from 'react';
import { Button, Container, Divider } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/userSlice';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const count = useAppSelector((state) => state.insurances.count)

  const handleLogOut = (): void => {
    dispatch(logOut());
    navigation('/');
  };

  return (
    <Container fluid>
      <div className="auth-header">
        <div>My offers: {count}</div>
        <Button
          color="google plus"
          content="Log Out"
          onClick={handleLogOut}
        />
      </div>
      <Divider />
    </Container>
  );
};

export default Header;

