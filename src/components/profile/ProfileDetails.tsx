import { FC } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Container, Divider, Header, List, Segment } from 'semantic-ui-react';
import { useAppSelector } from '../../redux/hooks';

const ProfileDetails: FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const { insurances, primes } = useAppSelector((state) => state.insurances);
  const { rca, casco } = insurances;

  return (
    <Container fluid>
      <div
        className="underline-pointer orders"
        onClick={() => navigate('/dashboard')}
      >
        Create insurance
      </div>
      <Header>My primes</Header>
      <List animated bulleted>
        {primes.map((prime, idx) => (
          <List.Item key={idx}>{prime}</List.Item>
        ))}
      </List>
      <Divider />
      <Header>My insurances/offers</Header>
      {rca.map(({ firstName, lastName, model, licenseNumber, productionYear }, idx) => (
        <Segment key={idx}>
          <div>Type:RCA</div>
          <div>Last Name: {lastName}</div>
          {firstName && <div>First Name: {firstName}</div>}
          <div>Model: {model}</div>
          <div>Licence Number: {licenseNumber}</div>
          <div>Production Year: {productionYear}</div>
        </Segment>
      ))}
      {casco.map(({ firstName, lastName, chassisSeries, nrKilometers }, idx) => (
        <Segment key={idx}>
          <div>Type: CASCO</div>
          <div>Last Name: {lastName}</div>
          {firstName && <div>First Name: {firstName}</div>}
          <div>Chassis Series: {chassisSeries}</div>
          <div>Number of km: {nrKilometers}</div>
        </Segment>
      ))}
    </Container>
  );
};

export default ProfileDetails
