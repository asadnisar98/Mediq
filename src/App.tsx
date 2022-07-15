import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import Orderlist from './orderlist';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/orders" replace />} />
              <Route path="/orders" element={<Orderlist />} />
          </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
