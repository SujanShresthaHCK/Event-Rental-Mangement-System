import React from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import "./Buffet.css";

const Buffet = ({ onBack, onBuffetSelectClick }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = (buffetType) => {
    axios
      .get("http://localhost:9000/books?_sort=createdAt&_order=desc&_limit=1")
      .then((response) => {
        const latestData = response.data.data.pop(); // Get the last element of the data array
        const latestId = latestData._id; // Get the _id of the latest data
        axios
          .put(`http://localhost:9000/books/${latestId}`, {
            buffet: buffetType,
          })
          .then(() => {
            enqueueSnackbar("Buffet package selected successfully", {
              variant: "success",
            });
            // Call the onBuffetSelectClick function after selecting the buffet package
            onBuffetSelectClick();
          })
          .catch((error) => {
            enqueueSnackbar("Error selecting buffet package", {
              variant: "error",
            });
            console.log(error);
          });
      })
      .catch((error) => {
        enqueueSnackbar("Error retrieving latest data", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <section className="buffet-wrapper">
      <button onClick={onBack} className="backbtn">
        ⬅ Back
      </button>
      <div className="buffet-container">
        <h1
          style={{ color: "#846330", fontWeight: "400", marginBottom: "80px" }}
        >
          Buffet Selection
        </h1>
        <div className="buffetcontents">
          <div className="buffetpackages">
            <div className="goldpackage" style={{ display: "flex" }}>
              <img
                src="images/GoldPackage.jpg"
                alt=""
                className="buffetimages"
              />
              <div className="buffet-des">
                <h1>Gold Package</h1>
                <p>Per Person Rs. 3400</p>
                <p>
                  Items: Soup [3], Starters [11], Main Course [15], Dessert [5]
                </p>
                <button
                  className="select"
                  onClick={() => {
                    handleSaveBook("Gold Package");
                  }}
                >
                  Select
                </button>
              </div>
            </div>

            <div className="patiniumpackage" style={{ display: "flex" }}>
              <img
                src="images/SilverPackage.jpg"
                alt=""
                className="buffetimages"
              />
              <div className="buffet-des">
                <h1>Platinum Package</h1>
                <p>Per Person Rs. 2600</p>
                <p>
                  Items: Soup [1], Starters [7], Main Course [10], Dessert [3]
                </p>
                <button
                  className="select"
                  onClick={() => {
                    handleSaveBook("Platinum Package");
                  }}
                >
                  Select
                </button>
              </div>
            </div>
            <div className="silverpackage" style={{ display: "flex" }}>
              <img
                src="/images/PlatiniumPackage.jpg"
                alt=""
                className="buffetimages"
              />
              <div className="buffet-des">
                <h1>Silver Package</h1>
                <p>Per Person Rs. 2200</p>
                <p>Soup [1], Starters [5], Main Course [8], Dessert [2]</p>
                <button
                  className="select"
                  onClick={() => {
                    handleSaveBook("Silver Package");
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className="menuimg">
            <img src="images/menu.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buffet;
