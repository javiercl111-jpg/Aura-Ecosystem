import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './modules/layout/Layout';
import Home from './modules/landing/Home';
import AuraHCMPage from './modules/products/AuraHCMPage';
import AuraSignaturePage from './modules/products/AuraSignaturePage';
import AuraIntelligencePage from './modules/products/AuraIntelligencePage';
import AuraMaintenancePage from './modules/products/AuraMaintenancePage';
import AuraControlCenterPage from './modules/products/AuraControlCenterPage';
import ExecutiveIntakePage from './modules/intake/ExecutiveIntakePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aura-hcm" element={<AuraHCMPage />} />
          <Route path="aura-signature" element={<AuraSignaturePage />} />
          <Route path="aura-intelligence" element={<AuraIntelligencePage />} />
          <Route path="aura-maintenance-os" element={<AuraMaintenancePage />} />
          <Route path="aura-control-center" element={<AuraControlCenterPage />} />
        </Route>
        
        {/* Rutas Públicas de Executive Intake */}
        <Route path="/diagnostico" element={<ExecutiveIntakePage />} />
        <Route path="/diagnostico/asesor/:commercialCode" element={<ExecutiveIntakePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
