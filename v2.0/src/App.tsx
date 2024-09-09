import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import './App.css';

import { About } from '@Components/layout/AboutSection';
import { CTA } from '@Components/layout/CTA';
import { Footer } from '@Components/layout/Footer';
import { Header } from '@Components/layout/Header';
import { HeroSection } from '@Components/layout/HeroSection';
import { ServicesSection } from '@Components/layout/ServicesSection';
import { Soluction } from '@Components/layout/SolutionSection';
import { WhatsappChat } from '@Components/ui/WhatsappChat';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
        <Header />
        <HeroSection />
        <About />
        <Soluction />
        <ServicesSection />
        <CTA />
        <Footer />
        <WhatsappChat />
      </div>
    </>
  );
}

export default App
