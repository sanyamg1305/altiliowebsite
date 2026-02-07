
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import IndustryProblem from './pages/IndustryProblem';
import Solution from './pages/Solution';
import Stakeholders from './pages/Stakeholders';
import Philosophy from './pages/Philosophy';
import Technology from './pages/Technology';
import Governance from './pages/Governance';
import Vision from './pages/Vision';
import Join from './pages/Join';
import Privacy from './pages/Privacy';
import Commitments from './pages/Commitments';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem" element={<IndustryProblem />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/stakeholders" element={<Stakeholders />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/join" element={<Join />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/commitments" element={<Commitments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
