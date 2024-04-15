import React from 'react';
import './Silvermenu.css';

function Silvermenu() {
  const foodCategories = ['Appetizers', 'Main Course', 'Desserts', 'Snacks'];
  const foodItems = [
    'Bruschetta', 'Caprese Salad', 'Grilled Salmon', 'Pasta Primavera', 
    'Roast Chicken', 'Beef Stroganoff', 'Vegetable Stir Fry', 'Chocolate Cake', 
    'Cheesecake', 'Chicken Wings', 'Vegetable Spring Rolls', 
    // Add more food items here
  ];

  return (
    <div className="silver-menu">
      <div className="silver-header">
        <h2>Silver Menu</h2>
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

export default Silvermenu;

















