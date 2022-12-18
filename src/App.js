import React from "react";
import Header from "./components/Header";
import Contain from "./components/Contain"
import Footer from './components/Footer'
function App() {
  return (
    <div className="container">

      <div className="header">
        <Header />
      </div>
      <div className="contain">
        <Contain />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>

  );
}

export default App;
