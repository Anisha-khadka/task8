
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';

import "./style.css"
import Login from './Pages/Login';
import Home from './Pages/Home';

import Cleaning from './Pages/Cleaning';

import About from './Pages/About';
import Register from './Pages/Register';

function App() {
  return (
    <>
  
    <Header/>
 
  
    <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/about' Component={About}/>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>
      <Route path='/cleaning' Component={Cleaning}/>

      

    </Routes>
    <Footer/>

    
    </>
  );
}

export default App;
