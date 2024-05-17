import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import "./BanquetHalls.css";
import Modal from "./Modal";

const BanquetHalls = () => {
  const [loading, setLoading] = useState(false);
  const [hallData, setHallData] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  const fetchHallData = async () => {
    try {
      setLoading(true);
      const hallsResponse = await axios.get(
        "http://localhost:9000/halls?_sort=createdAt&_order=desc"
      );
      const halls = hallsResponse.data.data;
      setHallData(halls);
      setLoading(false);
      enqueueSnackbar("Hall data retrieved successfully", {
        variant: "success",
      });
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Error retrieving hall data", { variant: "error" });
      console.error("Error fetching hall data:", error);
    }
  };

  useEffect(() => {
    fetchHallData();
  }, []);

  const handleAddHall = (formData) => {
    // Handle adding a new hall here (e.g., make POST request to backend)
    console.log("Adding a new hall:", formData);
    // Close the modal after adding
    setShowAddModal(false);
  };

  const handleEditHall = (formData) => {
    // Handle editing the hall here (e.g., make PUT request to backend)
    console.log("Editing hall:", formData);
    // Close the modal after editing
    setShowEditModal(false);
  };

  return (
    <div className="dashboard-body">
      <h1 className="dashboard-heading">Banquet Halls</h1>
      <div className="container-halls">
        {hallData.map((hall, index) => (
          <div key={index} className={`halls hall-${hall.name.toLowerCase().replace(/\s+/g, "-")}`}>
            <img src={`/images/${hall.name}.jpg`} alt={hall.name} className="hallimg" />
            <div className="hallDes">
              <h1>{hall.name}</h1>
              <p>
                Capacity: {hall.minCapacity} - {hall.maxCapacity}
                <br />
                Price per Shift: {hall.priceShift}
                <br />
                Price per Day: {hall.priceDay}
              </p>
            </div>
          </div>
        ))}
        <div className="action-buttons">
          <button className="primarybtn" onClick={() => setShowAddModal(true)}>
            Add Hall
          </button>
          <button className="primarybtn" onClick={() => setShowEditModal(true)}>
            Edit Hall
          </button>
        </div>
        <Modal
          title="Add Hall"
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddHall}
        />
        <Modal
          title="Edit Hall"
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          onSubmit={handleEditHall}
          formData={editFormData}
        />
      </div>
    </div>
  );
};

export default BanquetHalls;


