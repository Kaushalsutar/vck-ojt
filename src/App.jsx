import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import './styles/Pages.css'; 
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from './pages/ContactPage';
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import CoursesPage from './pages/CoursesPage';
import { useState } from 'react';
import DeveloperInfoPopup from './components/Popup/DeveloperInfoPopup';
const App = () => {
          const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return (
            <>
            <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Kaushal Uttam Sutar"
          studentPhotoUrl="/Images/ks.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
             <Router>
               <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/admission" element={<AdmissionPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/course" element={<CoursesPage />} />
               </Routes>
             </Router>
             <div>
              <ChatbotComponent/>
             </div>
            </>
    );
}

export default App;