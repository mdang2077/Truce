'use client';
import { useState } from 'react';
import BrokenCheckout from './components/BrokenCheckout';
import ContractSources from './components/ContractSources';
import DriftMatrix from './components/DriftMatrix';
import BobEvidenceTrail from './components/BobEvidenceTrail';
import SeverityImpact from './components/SeverityImpact';
import FixStrategy from './components/FixStrategy';
import PatchPanel from './components/PatchPanel';
import ContractTestPanel from './components/ContractTestPanel';
import TicketRouting from './components/TicketRouting';
import FixedCheckout from './components/FixedCheckout';
import PRSummary from './components/PRSummary';
import BobSidebar from './components/BobSidebar';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    { id: 0, name: 'Broken Checkout', component: <BrokenCheckout onNext={() => setCurrentScreen(1)} /> },
    { id: 1, name: 'Contract Sources', component: <ContractSources onNext={() => setCurrentScreen(2)} onBack={() => setCurrentScreen(0)} /> },
    { id: 2, name: 'Drift Matrix', component: <DriftMatrix onNext={() => setCurrentScreen(3)} onBack={() => setCurrentScreen(1)} /> },
    { id: 3, name: 'Bob Evidence Trail', component: <BobEvidenceTrail onNext={() => setCurrentScreen(4)} onBack={() => setCurrentScreen(2)} /> },
    { id: 4, name: 'Severity & Impact', component: <SeverityImpact onNext={() => setCurrentScreen(5)} onBack={() => setCurrentScreen(3)} /> },
    { id: 5, name: 'Fix Strategy', component: <FixStrategy onNext={() => setCurrentScreen(6)} onBack={() => setCurrentScreen(4)} /> },
    { id: 6, name: 'Patch Diff', component: <PatchPanel onNext={() => setCurrentScreen(7)} onBack={() => setCurrentScreen(5)} /> },
    { id: 7, name: 'Contract Test', component: <ContractTestPanel onNext={() => setCurrentScreen(8)} onBack={() => setCurrentScreen(6)} /> },
    { id: 8, name: 'Ticket Routing', component: <TicketRouting onNext={() => setCurrentScreen(9)} onBack={() => setCurrentScreen(7)} /> },
    { id: 9, name: 'Fixed & PR Summary', component: <><FixedCheckout /><PRSummary onBack={() => setCurrentScreen(8)} /></> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Bob Sidebar */}
      <BobSidebar currentScreen={currentScreen} totalScreens={screens.length} />
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium text-gray-600">
              Step {currentScreen + 1} of {screens.length}: {screens[currentScreen].name}
            </h2>
            <div className="text-sm text-gray-500">
              {Math.round(((currentScreen + 1) / screens.length) * 100)}% Complete
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentScreen + 1) / screens.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Screen */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {screens[currentScreen].component}
        </div>
      </div>
    </div>
  );
}

// Made with Bob
