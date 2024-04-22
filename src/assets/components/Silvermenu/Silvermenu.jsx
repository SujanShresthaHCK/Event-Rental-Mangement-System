import React, { useState } from 'react';
import './Silvermenu.css';

function Silvermenu() {
  const foodCategories = ['Appetizers', 'Main Course', 'Desserts', 'Snacks'];
  const initialFoodItems = [
    { category: 'Appetizers', name: 'Bruschetta' },
    { category: 'Appetizers', name: 'Caprese Salad' },
    { category: 'Main Course', name: 'Grilled Salmon' },
    { category: 'Main Course', name: 'Pasta Primavera' },
    { category: 'Main Course', name: 'Roast Chicken' },
    { category: 'Main Course', name: 'Beef Stroganoff' },
    { category: 'Main Course', name: 'Vegetable Stir Fry' },
    { category: 'Desserts', name: 'Chocolate Cake' },
    { category: 'Desserts', name: 'Cheesecake' },
    { category: 'Snacks', name: 'Chicken Wings' },
    { category: 'Snacks', name: 'Vegetable Spring Rolls' },
    // Add more food items here
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [foodItems, setFoodItems] = useState(initialFoodItems);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleShowAllClick = () => {
    setSelectedCategory('');
  };

  const handleAddFoodItem = () => {
    const newItemName = prompt('Enter the name of the new food item:');
    if (newItemName) {
      const newItem = { category: selectedCategory, name: newItemName };
      setFoodItems([...foodItems, newItem]);
    }
  };

  const handleRemoveFoodItem = () => {
    const itemName = prompt('Enter the name of the food item to remove:');
    if (itemName) {
      const updatedItems = foodItems.filter((item) => item.name !== itemName);
      setFoodItems(updatedItems);
    }
  };

  const handleEditFoodItem = () => {
    const itemName = prompt('Enter the name of the food item to edit:');
    if (itemName) {
      const newName = prompt('Enter the new name for this food item:', itemName);
      if (newName) {
        const updatedItems = foodItems.map((item) => {
          if (item.name === itemName) {
            return { ...item, name: newName };
          }
          return item;
        });
        setFoodItems(updatedItems);
      }
    }
  };

  return (
    <div className="silver-menu">
      <div className="silver-header">
        <h2>Silver Menu</h2>
      </div>
      <div className="food-categories">
        <h3 className='black'>Food Categories</h3>
        <ol>
          {foodCategories.map((category, index) => (
            <li key={index} onClick={() => handleCategoryClick(category)}>
              {index + 1}. {category}
            </li>
          ))}
        </ol>
      </div>
      <div className="food-items">
        <h3 className='black'>Food Items</h3>
        <ol>
          {foodItems.map((item, index) => (
            (selectedCategory === '' || selectedCategory === item.category) && (
              <li key={index}>
                <div className="item-box">
                  <span className="item-number">{index + 1}</span>
                  {item.name}
                </div>
              </li>
            )
          ))}
        </ol>
        {selectedCategory !== '' && (
          <button onClick={handleShowAllClick}>Show All</button>
        )}
        <div className="food-items-buttons">
          <button onClick={handleAddFoodItem}>Add Food Item</button>
          <button onClick={handleEditFoodItem}>Edit Food Item</button>
          <button onClick={handleRemoveFoodItem}>Remove Food Item</button>
        </div>
      </div>
    </div>
  );
}

export default Silvermenu;



















