import React, { useState } from 'react';

// FoodCategories component
const FoodCategories = ({ categories }) => (
  <div className="food-categories">
    <h2>Food Categories</h2>
    <div className="category-container">
      {categories.map(category => (
        <div key={category.id} className="category">
          <h3>{category.name}</h3>
          {/* Pass the 'dishes' array to FoodDishes */}
          <FoodDishes dishes={category.dishes} />
        </div>
      ))}
    </div>
  </div>
);

// FoodDishes component
const FoodDishes = ({ dishes }) => {
  const handleClick = (menuName) => {
    // Handle click event here
    console.log(`Clicked on menu: ${menuName}`);
    // You can perform any action you want here
  };

  return (
    <div className="food-dishes">
      {/* Ensure 'dishes' is an array before using 'map' */}
      {Array.isArray(dishes) && dishes.map(dish => (
        <div key={dish.id} className="dish">
          {/* Display the dish image */}
          <div className="dish-info">
            <img src={dish.image} alt={dish.name} className="dish-image" />
          </div>
          {/* Display the dish name and cost */}
          <div className="dish-details">
            <h4>{dish.name}</h4>
            <p className="dish-cost">{dish.cost}</p>
          </div>
          {/* Display the menu button with the menu name */}
          <button className="menu-button" onClick={() => handleClick(dish.menuName)}>
            {dish.menuName}
          </button>
        </div>
      ))}
    </div>
  );
};

// PackageTable component
const PackageTable = ({ packages }) => (
  <div className="package-table">
    <h2>Packages</h2>
    <table>
      <thead>
        <tr>
          <th>Package Id</th>
          <th>Package Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {packages.map(pkg => (
          <tr key={pkg.id} className="package-row">
            <td>{pkg.id}</td>
            <td>{pkg.name}</td>
            <td>{pkg.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// App component
const App = () => {
  const categories = [
    {
      id: 1,
      name: 'Category 1',
      dishes: [
        {
          id: 1,
          name: 'Silver Package',
          image: '/images/SilverPackage.jpg',
          cost: '$10000',
          menuName: 'Silver Menu'
        }
      ]
    },
    {
      id: 2,
      name: 'Category 2',
      dishes: [
        {
          id: 2,
          name: 'Gold package',
          image: '/images/GoldPackage.jpg',
          cost: '$20000',
          menuName: 'Gold Menu'
        }
      ]
    },
    {
      id: 3,
      name: 'Category 3',
      dishes: [
        {
          id: 3,
          name: 'Platinum package',
          image: '/images/PlatiniumPackage.jpg',
          cost: '$20000',
          menuName: 'Platinum Menu'
        }
      ]
    }
  ];

  const packages = [
    { id: 1, name: 'Silver package', price: '$10000' },
    { id: 2, name: 'Gold package', price: '$20000' },
    { id: 3, name: 'Platinium Package', price: '$20000' },
  ];

  return (
    <div className="app">
      <FoodCategories categories={categories} />
      <PackageTable packages={packages} />
    </div>
  );
};

export default App;


