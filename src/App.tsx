import React from 'react';
import { render } from "react-dom";
import logo from './logo.svg';
// import './App.scss';
// import  './App.scss';
import { HomePage,Demo,Profile } from './pages';
import {
  // BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/demo" element={<Demo />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
  );
}

export default App;
