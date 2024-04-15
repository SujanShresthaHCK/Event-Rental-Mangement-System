import React from 'react';
import './Goldemenu.css'; // Assuming you have a GoldMenu.css file with the Silver Menu styles

function GoldMenu() {
  const foodCategories = ['Appetizers', 'Main Course', 'Desserts', 'Snacks'];
  const foodItems = [
    'Avocado Toast',
  'Caesar Salad',
  'Grilled Steak',
  'Spaghetti Carbonara',
  'Lemon Herb Roast Chicken',
  'Seafood Paella',
  'Vegetable Lasagna',
  'Tiramisu',
  'Key Lime Pie',
  'Buffalo Wings',
  'Mozzarella Sticks',
  // Add more food items here
  ];

  return (
    <div className="gold-menu">
      <div className="gold-header">
        <h2>Gold Menu</h2>
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

export default GoldMenu;



