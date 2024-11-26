import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import ListEmails from "./views/ListEmails/ListEmails";
import EmailMaker from "./views/emailMaker/emailMaker";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listEmails" element={<ListEmails />} />
        <Route path="/emailMaker" element={<EmailMaker />} />
      </Routes>
    </Router>
  );
};

export default App;