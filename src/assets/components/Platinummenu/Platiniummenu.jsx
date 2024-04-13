// Platinummenu.jsx
import React from 'react';


function Platinummenu() {
  // Dummy menu data for demonstration
  const menuItems = [
    { dish: 'Platinum Deluxe Steak', description: 'A prime cut of steak served with truffle mashed potatoes and grilled asparagus', available: true },
    { dish: 'Platinum Seafood Tower', description: 'A tower of fresh seafood including lobster, crab legs, and shrimp, served with cocktail sauce', available: true },
    { dish: 'Platinum Vegetarian Risotto', description: 'Creamy risotto made with Arborio rice, mushrooms, and Parmesan cheese, topped with truffle oil', available: true },
    { dish: 'Platinum Chef\'s Special', description: 'A rotating selection of the chef\'s finest creations, made with premium ingredients', available: true },
    { dish: 'Platinum Chocolate Fondue', description: 'Decadent chocolate fondue served with assorted fruits and marshmallows for dipping', available: true },
  ];

  return (
    <div className="platinum-menu-container">
      <h2>Platinum Menu</h2>
      <div className="table-container">
        <table className="platinum-menu-table">
          <thead>
            <tr>
              <th>Dish</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item, index) => (
              <tr key={index}>
                <td>{item.dish}</td>
                <td>{item.description}</td>
                <td className={item.available ? 'available' : 'not-available'}>
                  {item.available ? 'Available' : 'Not Available'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Platinummenu;




