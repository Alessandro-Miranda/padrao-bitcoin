import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import './App.css';

import { Header } from '@Components/layout/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      
    </>
  );
}

export default App
