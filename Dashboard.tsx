
import React from 'react';
import { Student } from '../types';

interface DashboardProps {
  student: Student;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ student, onLogout }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center">
            <i className="fas fa-chart-line text-white"></i>
          </div>
          <div>
            <h2 className="font-bold text-slate-100 leading-tight">Vibecoding</h2>
            <p className="text-xs text-slate-400">Portal de {student.name}</p>
          </div>
        </div>
        
        <button 
          onClick={onLogout}
          className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
        >
          <span>Salir</span>
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full gap-6">
        
        {/* Motivational Card */}
        <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
              <i className="fas fa-quote-left"></i>
              Mensaje del día
            </h3>
            <p className="text-xl md:text-2xl font-light italic text-slate-200">
              "{student.quote}"
            </p>
          </div>
          <i className="fas fa-rocket absolute bottom-[-20px] right-[-20px] text-8xl text-indigo-500/10 -rotate-12"></i>
        </div>

        {/* Dashboard Title & Stats Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-slate-100">
            Visualización Power BI
          </h1>
          <div className="flex gap-4">
             <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               Reporte en Vivo
             </span>
             <span className="text-xs bg-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/20 flex items-center gap-2">
               <i className="fas fa-mobile-alt"></i>
               Optimizado Móvil
             </span>
          </div>
        </div>

        {/* Power BI Container */}
        <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col min-h-[500px] md:min-h-[700px]">
          <div className="flex-1 relative w-full h-full">
            <iframe
              title={`PBI ${student.name}`}
              className="absolute inset-0 w-full h-full"
              src={student.pbiUrl}
              frameBorder="0"
              allowFullScreen={true}
            />
          </div>
          {/* Mobile warning/info footer */}
          <div className="bg-slate-800/50 px-4 py-2 text-[10px] text-slate-500 flex justify-between">
            <span>Power BI Embedded Service</span>
            <span>Vibecoding © 2024</span>
          </div>
        </div>
      </main>

      {/* Global Footer (Visible on mobile) */}
      <footer className="p-6 text-center text-slate-600 text-sm">
        <p>Inspirando la nueva generación de data analysts.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
