import react from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <GoogleOAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/auth' exact Component={Auth} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
