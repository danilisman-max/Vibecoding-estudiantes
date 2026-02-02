
import React from 'react';
import { STUDENTS } from '../constants';
import Dashboard from '../components/Dashboard';

const CarnePage: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const data = STUDENTS.find(s => s.id === 'carne')!;
  return <Dashboard student={data} onLogout={onLogout} />;
};

export default CarnePage;
