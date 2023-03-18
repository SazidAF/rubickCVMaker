import react from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./App.css";
import Auth from './components/Auth/Auth';
import Home from './components/home'
import Dashboard from './components/dashboard';
import Experience 
 from './components/experience';
import Education from './components/education';
import Templates from './components/templates';
import DemoCv from './components/demo';
const App = () => {
  return (
    <GoogleOAuthProvider clientId='26781760471-fpcslbmirjbe7mdthjp8rds8fu7t1t2d.apps.googleusercontent.com'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path='/auth' exact Component={Auth} />
          <Route path="/dashboard" element={<Dashboard/>} ></Route>
          <Route path="/experience" element={<Experience/>} ></Route>
          <Route path="/education" element={<Education/>} ></Route>
          <Route path="/template" element={<Templates/>} ></Route>
          <Route path="/demo" element={<DemoCv/>} ></Route>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
