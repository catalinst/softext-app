import { ReactElement } from 'react';
import Header from '../components/common/Header';
import InsuranceForm from '../components/dashboard/InsuranceForm';

const Dashboard = (): ReactElement => (
  <div className="page-container">
    <Header />
    <InsuranceForm />
  </div>
);

export default Dashboard;

