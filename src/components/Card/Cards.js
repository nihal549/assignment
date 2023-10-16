import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Cards.css';


function Cards() {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-image">
          <img src='https://img.freepik.com/premium-vector/money-icon-vector-dollar-symbol-sign_666746-34.jpg'/>
        </div>
        <div className="card-content">
          <p className='content-title'>Earnings</p>
          <p className="amount">$5,000</p>
          <p className='content-title'><span className='var-amount'>&uarr; 37.8%</span>this month</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="https://media.istockphoto.com/id/1206158892/vector/financial-document-icon.jpg?s=612x612&w=0&k=20&c=Fif71z3JGGCUOSSTMOwq3V14a3L8-L6V4qO3VP22UgA=" alt="Orders" />
        </div>
        <div className="card-content">
          <p className='content-title'>Orders</p>
          <p className="amount">$2.4k</p>
          <p className='content-title'><span style={{color:"red"}}>&darr; 2%</span>this month</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4uqNKwUZP3E58B1llFofdba0-6vGBheD-g&usqp=CAU" alt="Balance" />
        </div>
        <div className="card-content">
          <p className='content-title'>Balance</p>
          <p className="amount">$2.4k</p>
          <p className='content-title'><span style={{color:"red"}}>&darr; 2%</span>this month</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="https://cdn-icons-png.flaticon.com/512/2516/2516150.png" alt="Total Sales" />
        </div>
        <div className="card-content">
          <p className='content-title'>Total Sales</p>
          <p className="amount">$89k</p>
          <p className='content-title'><span className='var-amount'>&uarr; 11%</span>this month</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
