import React from 'react';
import './PlatiniumMenu.css'; // Import CSS file for styling

const PlatinumMenu = () => {
  return (
    <div className="platinum-menu-container">
      <h2>Platinum Menu</h2>
      <div className="platinum-menu-content">
        <div className="platinum-dish-info">
          {/* Table structure for displaying variety dishes */}
          <table className="platinum-dish-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Dish</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {/* Each dish in Platinum Menu */}
              <tr>
                <td>1</td>
                <td>Grilled Salmon</td>
                <td>Fresh salmon fillet grilled to perfection, served with rice pilaf and steamed asparagus.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Seafood Paella</td>
                <td>Spanish-style rice dish cooked with shrimp, clams, mussels, and chorizo, seasoned with saffron.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rack of Lamb</td>
                <td>Tender rack of lamb seasoned with herbs and garlic, roasted to perfection, served with mint jelly.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Beef Tenderloin</td>
                <td>Prime beef tenderloin steak grilled to your liking, served with mashed potatoes and roasted vegetables.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Truffle Risotto</td>
                <td>Creamy risotto rice cooked with truffle oil, mushrooms, and parmesan cheese.</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Crab Stuffed Lobster Tail</td>
                <td>Lobster tail filled with savory crab meat stuffing, baked until golden brown, served with drawn butter.</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Tiramisu</td>
                <td>Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlatinumMenu;


