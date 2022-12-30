import './App.scss';
import AuthLogSign from './Pages/LoginPage/AuthLogSign';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AuthLogSign/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
