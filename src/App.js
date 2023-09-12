
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="WithTEXT" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About mode={mode} />}/>
            <Route exact path='/' element={<TextForms showAlert={showAlert} mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
