
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom';




        
    
function App() {
 
  const [Mode, setMode] = useState("light");
  const togglemode =()=>{
    if(Mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#343a40';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
      return (
    <>
    
    <BrowserRouter>
    <Navbar title="S# Utilities" mode={Mode} togglemode={togglemode}  />
    <div className='container'>
      <Routes>
        <Route path='/TextForm' element={<TextForm heading="Enter the text to analyse below" mode={Mode}/>}></Route>
     
        <Route path='/About' element={<About mode={Mode}/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;