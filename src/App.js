import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Navbar />
        <Content />
      </div>
      <div className='musicControl'>
            Music Control
      </div>
    </div>
  );
}

export default App;
