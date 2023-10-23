import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../Css/App.css'
function App() {
  return (
    <div>
      <NavBar />
      <div className="text-center">
        <h1>Rocco Ferrari</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
