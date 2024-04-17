import React from 'react';
import './AdminFood.css';
import { useNavigate } from 'react-router-dom';

// FoodCategories component
const FoodCategories = ({ categories }) => (
  <div className="food-categories">
    <h2 className='food'>Food Packages</h2>
    <div className="category-container">
      {categories.map(category => (
        <div key={category.id} className="category">
          <h3 className='black'>{category.name}</h3>

          <FoodDishes dishes={category.dishes} />
        </div>
      ))}
    </div>
  </div>
);

// FoodDishes component
const FoodDishes = ({ dishes }) => {
  const navigate = useNavigate();

  return (
    <div className="food-dishes">
      {Array.isArray(dishes) && dishes.map(dish => (
        <div key={dish.id} className="dish">
          <div className="dish-info">
            <img src={dish.image} alt={dish.name} className="dish-image" />
          </div>
          <div className="dish-details">
            <h4>{dish.name}</h4>
            <p className="dish-cost">{dish.cost}</p>
          </div>
          {dish.name === 'Silver Package' && (
            <button className="menu-button" onClick={() => navigate('/silver')}>
              {dish.menuName}
            </button>
          )}
          {dish.name === 'Gold package' && (
            <button className="menu-button" onClick={() => navigate('/gold')}>
              {dish.menuName}
            </button>
          )}
          {dish.name === 'Platinum package' && (
            <button className="menu-button" onClick={() => navigate('/platinium')}>
              {dish.menuName}
            </button>
          )}
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
          <th>Id</th>
          <th>Food Id</th>
          <th>category Id</th>
          <th>package</th>
        </tr>
      </thead>
      <tbody>
        {packages.map(pkg => (
          <tr key={pkg.id} className="package-row">
            <td>{pkg.id}</td>
            <td>{pkg.Food_Id}</td>
            <td>{pkg.Category_Id}</td>
            <td>{pkg.package_Id}</td>
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
      name: 'Packages 1',
      dishes: [
        {
          id: 1,
          name: 'Silver Package',
          image: '/images/SilverPackage.jpg',
          cost: '$10000',
          menuName: 'Silver package'
        }
      ]
    },
    {
      id: 2,
      name: 'Packages 2',
      dishes: [
        {
          id: 2,
          name: 'Gold package',
          image: '/images/GoldPackage.jpg',
          cost: '$20000',
          menuName: 'Gold Package'
        }
      ]
    },
    {
      id: 3,
      name: 'Packages 3',
      dishes: [
        {
          id: 3,
          name: 'Platinum package',
          image: '/images/PlatiniumPackage.jpg',
          cost: '$20000',
          menuName: 'Platinum Package'
        }
      ]
    }
  ];

  const packages = [
    { id: 2, Food_Id: 1, Category_Id:1, package_Id: 2 },
    { id: 3, Food_Id: 2, Category_Id:5, package_Id: 2},
    { id: 4, Food_Id: 4, Category_Id:1, package_Id: 2 },
  ];

  return (
    <div className="app">
      <FoodCategories categories={categories} />
      <PackageTable packages={packages} />
    </div>
  );
};

export default App;
