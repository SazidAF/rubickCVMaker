import react from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./App.css";
import Auth from './components/Auth/Auth';
import Home from './components/home'

const App = () => {
  return (
    <GoogleOAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path='/auth' exact Component={Auth} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
