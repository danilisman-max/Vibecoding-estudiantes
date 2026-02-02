
import React from 'react';
import { STUDENTS } from '../constants';
import Dashboard from '../components/Dashboard';

const MarinaPage: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const data = STUDENTS.find(s => s.id === 'marina')!;
  return <Dashboard student={data} onLogout={onLogout} />;
};

export default MarinaPage;
