import React, { useState } from 'react';
import './Goldemenu.css'; // Assuming you have a GoldMenu.css file with the Gold Menu styles

function GoldMenu() {
  const foodCategories = ['Appetizers', 'Main Course', 'Desserts', 'Snacks'];
  const foodItemsData = [
    { category: 'Appetizers', name: 'Avocado Toast' },
    { category: 'Appetizers', name: 'Caesar Salad' },
    { category: 'Main Course', name: 'Grilled Steak' },
    { category: 'Main Course', name: 'Spaghetti Carbonara' },
    { category: 'Main Course', name: 'Lemon Herb Roast Chicken' },
    { category: 'Main Course', name: 'Seafood Paella' },
    { category: 'Main Course', name: 'Vegetable Lasagna' },
    { category: 'Desserts', name: 'Tiramisu' },
    { category: 'Desserts', name: 'Key Lime Pie' },
    { category: 'Snacks', name: 'Buffalo Wings' },
    { category: 'Snacks', name: 'Mozzarella Sticks' },
    // Add more food items here
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [foodItems, setFoodItems] = useState(foodItemsData);

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
    <div className="gold-menu">
      <div className="gold-header">
        <h2>Gold Menu</h2>
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

export default GoldMenu;






