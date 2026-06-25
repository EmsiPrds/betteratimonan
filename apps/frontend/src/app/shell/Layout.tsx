import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '@/modules/landing';

export function Layout() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Future routes */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}
