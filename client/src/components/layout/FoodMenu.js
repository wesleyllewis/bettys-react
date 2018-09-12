import React from 'react';

export default () => {
  return (
    <div className="container">
      <div className="foodmenu mb-5">
        <h1 className="text-center mt-3">FOOD</h1>
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-center m-3">Cheeseburger - $9</h5>
            <h5 className="text-center m-3">Hamburger - $8.50</h5>
            <h5 className="text-center m-3">Chicken & Swiss - $6.25</h5>
            <h5 className="text-center m-3">Wings - $9</h5>
            <h5 className="text-center m-3">BLT - $5</h5>
          </div>
          <div className="col-md-4 mb-md-1">
            <h5 className="text-center m-3">French Fries - $4</h5>
            <h5 className="text-center m-3">Onion Rings - $5.50</h5>
            <h5 className="text-center m-3">Nachos - $5.50</h5>
            <h5 className="text-center m-3">Corndog - $3</h5>
            <h5 className="text-center m-3">Chicken Tenders - $7.25</h5>
          </div>
          <div className="col-md-4">
            <h5 className="text-center m-3">Ham & Cheese - $5</h5>
            <h5 className="text-center m-3">Sliders & Chips - $7.00</h5>
            <h5 className="text-center m-3">Grilled Cheese - $3.00</h5>
            <h5 className="text-center m-3">Hot Dog - $3.00</h5>
            <h5 className="text-center m-3">Pizza w/2 Toppings - $11.00</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
