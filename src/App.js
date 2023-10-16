import React from 'react';
import Sidebar from "./components/SideBar/Sidebar";
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Card/Cards';
import BarPieChartComponent from './components/GraphCards/BarPieChartComponent';
import ProductCard from './components/ProductCard/ProductCard';
import "./App.css"
function App() {
  return (
    <div className="app-container">
    <Sidebar />
    <div className="content">
      <Navbar />
      <Cards/>
      <BarPieChartComponent/>
      <ProductCard/>
    </div>
  </div>
  );
}

export default App;
