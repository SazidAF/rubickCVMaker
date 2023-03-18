import react from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./App.css";
import Auth from './components/Auth/Auth';
import Home from './components/home'
import Template from './components/Templates/template';

const App = () => {
  return (
    <GoogleOAuthProvider clientId='26781760471-fpcslbmirjbe7mdthjp8rds8fu7t1t2d.apps.googleusercontent.com'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path='/auth' exact Component={Auth} />
          <Route path='/template' exact Component={Template} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
