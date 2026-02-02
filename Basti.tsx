
import React from 'react';
import { STUDENTS } from '../constants';
import Dashboard from '../components/Dashboard';

const BastiPage: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const data = STUDENTS.find(s => s.id === 'basti')!;
  return <Dashboard student={data} onLogout={onLogout} />;
};

export default BastiPage;
