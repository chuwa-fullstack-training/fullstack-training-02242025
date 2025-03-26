import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
