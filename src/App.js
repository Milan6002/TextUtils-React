import { useState } from "react";
import "./App.css";
// import AboutUs from "./Componnent/AboutUs";
import Navbar from "./Componnent/Navbar";
import TextForm from "./Componnent/TextForm";
import Alert from "./Componnent/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggletext] = useState('Enable Dark mode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const [myStyle,setStyle] = useState({
    color: "#f8f9fa",
    background: "#282828",
   
  })
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#212529";
      setToggletext("Enable Light Mode");
      showAlert("Dark mode is applied", "success");
      setStyle({
        color : "#282828",
        background : "#f8f9fa "
      });
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "#f8f9fa";
      setToggletext("Enable Dark Mode");
      showAlert("Light mode is applied", "success");
      setStyle({
        color: "#f8f9fa",
        background: "#282828"
      });
    }
  }


  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutTitle="About TextUtils" mode={mode} toggleMode={toggleMode} toggleText={toggleText} />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={<AboutUs myStyle={myStyle}/>}/> */}
          {/* <Route path="/" element={<TextForm heading="Try Text Utils - Word Counter,Charcter Counter,Remove Extra Space" mode={mode} toggleMode={toggleMode} showAlert={showAlert} myStyle={myStyle}/>}/> */}
          <TextForm heading="Try Text Utils - Word Counter,Charcter Counter,Remove Extra Space" mode={mode} toggleMode={toggleMode} showAlert={showAlert} myStyle={myStyle}/>

        {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

