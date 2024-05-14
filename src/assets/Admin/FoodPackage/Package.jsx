import React, { useState } from "react";
import Menu from "./Menu";
import "./Package.css";

const FoodPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleViewMenu = (packageType) => {
    setSelectedPackage(packageType);
  };

  const handleCloseMenu = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="dashboard-body">
      <h1 classname="head">
        Food Packages
      </h1>
      <div className="container-food-packages112">
        <div className="kathmandu-wrapper11">
          <div className="column11">
            <div className="food-package11">
              <div className="photo11">
                <img src="/images/Gold Package.jpg" alt="Package" />
              </div>
              <div className="package-details">
                <h2>Gold Package</h2>
                <button className="view-menu-btn" onClick={() => handleViewMenu('gold')}>View Gold Menu</button>
              </div>
            </div>
            <div className="food-package11">
              <div className="photo22">
                <img src="/images/Silver Package.jpg" alt="Package" />
              </div>
              <div className="package-details">
                <h2>Silver Package</h2>
                <button className="view-menu-btn" onClick={() => handleViewMenu('silver')}>View Silver Menu</button>
              </div>
            </div>
          </div>
          <div className="column22">
            <div className="food-package11">
              <div className="photo33">
                <img src="/images/Platinum Package.jpg" alt="Package" />
              </div>
              <div className="package-details">
                <h2>Platinum Package</h2>
                <button className="view-menu-btn" onClick={() => handleViewMenu('platinum')}>View Platinum Menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu isOpen={selectedPackage !== null} onClose={handleCloseMenu} packageType={selectedPackage} />
    </div>
  );
};

export default FoodPackages;






