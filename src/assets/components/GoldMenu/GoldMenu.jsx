import React from 'react';
import './GoldMenu.css'; // Import CSS file for styling

const GoldMenu = () => {
  return (
    <div className="gold-menu-container">
      <h2>Gold Menu</h2>
      <div className="gold-menu-content">
        <div className="gold-dish-info">
          {/* Table structure for displaying variety dishes */}
          <table className="gold-dish-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Dish</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {/* Each dish in Gold Menu */}
              <tr>
                <td>1</td>
                <td>Filet Mignon</td>
                <td>Tender beef tenderloin steak cooked to perfection, served with mashed potatoes and sautéed vegetables.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lobster Risotto</td>
                <td>Creamy risotto rice cooked with lobster meat, white wine, and parmesan cheese.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Veal Piccata</td>
                <td>Tender veal cutlets cooked in a lemon butter sauce with capers, served with pasta.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Shrimp Scampi</td>
                <td>Juicy shrimp sautéed in garlic butter sauce, served over linguine pasta.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Beef Wellington</td>
                <td>Beef tenderloin coated with pâté and duxelles, wrapped in puff pastry and baked until golden brown.</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Crème Brûlée</td>
                <td>Classic French dessert consisting of rich custard topped with caramelized sugar.</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Chocolate Lava Cake</td>
                <td>Decadent chocolate cake with a gooey molten chocolate center, served with vanilla ice cream.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GoldMenu;


