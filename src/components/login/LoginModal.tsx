import { FC } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const LoginModal: FC = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Modal
      onClose={() => navigate('/')}
      open
      size={'small'}
    >
      <Modal.Header>In order to access this page you need to login!</Modal.Header>
      <Modal.Actions>
        <Button color="red" onClick={() => navigate('/')}>
          Cancel
        </Button>
        <Button color="green" onClick={() => navigate('/login')}>
          Login
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default LoginModal;
