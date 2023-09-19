import { ReactElement } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const Home = (): ReactElement => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="page-container">
      <Header as="h1" textAlign="center">Welcome</Header>
      <Container textAlign="center">
        <div style={{ margin: '1rem 0' }}>
          Continue to {' '}
          <strong
            onClick={() => navigate('/login')}
            className="underline-pointer"
          >
            Login
          </strong>
        </div>
        <strong
          onClick={() => navigate('/dashboard')}
          className="underline-pointer"
        >
          Or start creating your offers
        </strong>
      </Container>
    </div>
  );

};
export default Home;

