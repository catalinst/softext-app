import { ReactElement } from 'react';
import Header from '../components/common/Header';
import ProfileDetails from '../components/profile/ProfileDetails';

const MyProfile = (): ReactElement => (
  <div className="page-container">
    <Header />
    <ProfileDetails />
  </div>
);

export default MyProfile;

