// Silvermenu.jsx
import React from 'react';
import './Silvermenu.css';

function Silvermenu() {
  // Dummy menu data for demonstration
  const menuItems = [
    { dish: 'Grilled Salmon', description: 'Freshly grilled salmon fillet served with lemon butter sauce', available: true },
    { dish: 'Pasta Primavera', description: 'Pasta tossed with fresh vegetables and marinara sauce', available: false },
    { dish: 'Roast Chicken', description: 'Tender roast chicken with garlic mashed potatoes and seasonal vegetables', available: true },
    { dish: 'Beef Stroganoff', description: 'Tender beef strips cooked in creamy mushroom sauce served over egg noodles', available: true },
    { dish: 'Vegetable Stir Fry', description: 'Assorted vegetables stir-fried in a savory sauce, served with steamed rice', available: true },
  ];

  return (
    <div>
      <h2>Silver menu</h2>
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
  );
}

export default Silvermenu;




