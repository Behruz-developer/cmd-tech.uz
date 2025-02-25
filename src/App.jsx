import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav/Nav';
import Upcoming from './Components/Upcoming/Upcoming';
import Tags from './Components/Tags/Tags';
import Products from './Components/Products/Products';
import Card from './Components/Card/Card';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loading/Loading';

const App = () => {
  const [showComponents, setShowComponents] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
      setShowComponents(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLoading && <Loading />}
      {showComponents && (
        <>
          <Nav />
          <Upcoming />
          <Tags />
          <Products />
          {/* <Card /> */}
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
