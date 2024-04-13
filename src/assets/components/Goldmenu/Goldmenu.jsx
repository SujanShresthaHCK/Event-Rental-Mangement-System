// Goldmenu.jsx
import React from 'react';

function Goldmenu() {
  // Dummy menu data for demonstration
  const menuItems = [
    { dish: 'Gold Special Soup', description: 'A rich and flavorful soup made with premium ingredients', available: true },
    { dish: 'Golden Chicken Curry', description: 'Tender chicken pieces cooked in a fragrant curry sauce', available: false },
    { dish: 'Golden Shrimp Scampi', description: 'Plump shrimp sautéed in garlic butter and white wine sauce', available: true },
    { dish: 'Golden Beef Tenderloin', description: 'Juicy beef tenderloin grilled to perfection, served with golden mashed potatoes', available: true },
    { dish: 'Golden Vegetarian Delight', description: 'Assorted seasonal vegetables stir-fried in a golden sauce', available: true },
  ];

  return (
    <div className="gold-menu-container">
      <h2>Gold Menu</h2>
      <div className="table-container">
        <table>
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

export default Goldmenu;


