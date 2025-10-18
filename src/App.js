import React from 'react'
import Navbar from './components/navbar';  // lowercase 'n' matching the file name
import Hero from './components/hero';
import Analytics from './components/analytics';
import Newsletter from './components/newsletter';
import Cards from './components/card';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
