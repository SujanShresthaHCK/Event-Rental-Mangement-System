import React from 'react';
import './Platiniummenu.css';

function PlatinumMenu() {
  const foodCategories = ['Appetizers', 'Main Course', 'Desserts', 'Snacks'];
  const foodItems = [
    'Escargot',
  'Foie Gras',
  'Filet Mignon',
  'Lobster Bisque',
  'Duck Confit',
  'Caviar',
  'Truffle Risotto',
  'Crème Brûlée',
  'Tarte Tatin',
  'Oysters Rockefeller',
  'Sushi Platter',
  // Add more food items here
  ];

  return (
    <div className="platinum-menu">
      <div className="platinum-header">
        <h2>Platinum Menu</h2>
      </div>
      <div className="food-categories">
        <h3>Food Categories</h3>
        <ol>
          {foodCategories.map((category, index) => (
            <li key={index}>
              {index + 1}. {category}
            </li>
          ))}
        </ol>
      </div>
      <div className="food-items">
        <h3>Food Items</h3>
        <ol>
          {foodItems.map((item, index) => (
            <li key={index}>
              <div className="item-box">
                <span className="item-number">{index + 1}</span>
                {item}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default PlatinumMenu;





