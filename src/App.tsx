/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { WeeklyProgram } from './components/WeeklyProgram';
import { AITutorPage } from './components/AITutorPage';
import { EnzitoLunchTracker } from './components/EnzitoLunchTracker';
import { BottomNav, Tab } from './components/BottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  return (
    <div className="relative min-h-screen">
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'program' && <WeeklyProgram />}
      {activeTab === 'lunch' && <EnzitoLunchTracker />}
      {activeTab === 'tutor' && <AITutorPage />}
      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}
