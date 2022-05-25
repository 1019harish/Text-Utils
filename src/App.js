import { useState } from 'react';
import './App.css';
import About from './components/About';
//import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';
/*import { BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
*/
function App() {
  const [mode , setMode] = useState('light') //whether dark mode is enabled or not 
  
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = "#044a7a";
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = "white";
    }
    }
    
    
  return (
  <>
   
         <Navbar title = 'TextUtils' about = "About" mode = {mode} toggleMode = {toggleMode} />
         <div className="container my-3"> 
          {/*<Switch>*/}
          {/*Route exact path="/about">
            <About />
  </Route>*/}
            {/*<Route exact path="/">*/}
              <Form heading = "Text Converter" mode = {mode}/>
         {/* </Route>
          </Switch>*/}
        </div>
        
   </>
  );
}

export default App;
