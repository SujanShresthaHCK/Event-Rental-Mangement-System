import React from 'react';
import './Silver.css'; // Import CSS file for styling

const SilverMenu = () => {
  return (
    <div className="silver-menu">
      <h2>Silver Menu</h2>
      <div className="menu-container">
        <div className="dish-info11">
          {/* Table structure for displaying variety dishes */}
          <table className="dish-table11">
            <thead>
              <tr>
                <th>ID</th>
                <th>Dish</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {/* Each dish in Silver Menu */}
              <tr>
                <td>1</td>
                <td>Grilled Salmon</td>
                <td>Grilled salmon fillet served with lemon butter sauce and roasted vegetables</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Beef Stroganoff</td>
                <td>Tender beef strips cooked with mushrooms, onions, and sour cream sauce, served over egg noodles.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Caesar Salad</td>
                <td>Traditional Caesar salad with romaine lettuce and Caesar dressing</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Margherita Pizza: Classic</td>
                <td>Italian pizza topped with tomato sauce, fresh mozzarella cheese, tomatoes, and basil leaves.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Chicken Alfredo Pasta</td>
                <td> Creamy Alfredo sauce tossed with fettuccine pasta and grilled chicken breast.</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Garlic Butter Shrimp</td>
                <td>Succulent shrimp cooked in garlic butter sauce, served with steamed rice.</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Vegetable Lasagna</td>
                <td> Layers of lasagna noodles, marinara sauce, assorted vegetables, and melted cheese, baked to perfection.</td>
              </tr>
              {/* Add more dishes here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SilverMenu;


