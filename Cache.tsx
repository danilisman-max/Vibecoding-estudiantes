
import React from 'react';
import { STUDENTS } from '../constants';
import Dashboard from '../components/Dashboard';

const CachePage: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const data = STUDENTS.find(s => s.id === 'cache')!;
  return <Dashboard student={data} onLogout={onLogout} />;
};

export default CachePage;
