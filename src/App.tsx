import './App.scss';
import AuthLogSign from './Pages/LoginPage/AuthLogSign';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/DashboardPage/Dashboard';


const App: React.FC = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AuthLogSign/>} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
