//import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import './App.css';
//import Home from './pages/Home';
//import ChecklistVistoria from './pages/ChecklistVistoria';

//import ReactDOM from "react-dom";

import Checklist from './components/Checklist';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header  />

      <Checklist  />

      <Footer  />
 
 {/*
  
  <BrowserRouter>
  <Switch>
      <Route path="/" element={Home}  />
      <Route path="/ChecklistVistoria" element={ChecklistVistoria}  />
    </Switch>
  </BrowserRouter>
*/}
    </div>
  );
}

export default App;
