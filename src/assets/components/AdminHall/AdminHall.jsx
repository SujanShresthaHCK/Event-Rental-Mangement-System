import React from 'react'
import './Hall.css'

const AdminHall = ({ onImageClick, onAddHallClick, onRemoveHallClick  }) => {
  return (
    <section className="hall-wrapper1">
      {/* <button onClick={onBack}>⬅ Back</button> */}
      <div className="hall-container1">
  <h1 className="hall-title">Halls</h1>
  <div className="hall">
    <div className="hallkathmandu1">
      <img src="/images/HallKathmandu.jpg" alt="" className="hallimages1" onClick={onImageClick} />
      <h1 className="hall-name1">Hall Kathmandu</h1>
      <p className="hall-info1">Capacity 600 - 1000</p>
      <p className="hall-cost1">Cost: $2000 per day</p> 
      {/* Add buttons for adding and removing hall */}
      <div className="hall-actions">
              <button className="add-hall-button" onClick={onAddHallClick}>Add</button>
              <button className="remove-hall-button" onClick={onRemoveHallClick}>Remove</button>
            </div>
    </div>
    <div className="hallbhaktapur1">
      <img src="/images/HallBhaktapur.jpg" alt="" className="hallimages1" onClick={onImageClick} />
      <h1 className="hall-name1">Hall Bhaktapur</h1>
      <p className="hall-info1">Capacity 450 - 800</p>
      <p className="hall-cost1">Cost: $2000 per day</p> 
      {/* Add buttons for adding and removing hall */}
      <div className="hall-actions">
              <button className="add-hall-button" onClick={onAddHallClick}>Add</button>
              <button className="remove-hall-button" onClick={onRemoveHallClick}>Remove</button>
            </div>
    </div>
  </div>
  <div className="hall">
    <div className="hallpatan1">
      <img src="/images/HallPatan.jpg" alt="" className="hallimages1" onClick={onImageClick} />
      <h1 className="hall-name1">Hall Patan</h1>
      <p className="hall-info1">Capacity 200 - 500</p>
      <p className="hall-cost1">Cost: $2000 per day</p>
      {/* Add buttons for adding and removing hall */}
      <div className="hall-actions">
              <button className="add-hall-button" onClick={onAddHallClick}>Add</button>
              <button className="remove-hall-button" onClick={onRemoveHallClick}>Remove</button>
            </div>
    </div>
    <div className="hallkritipur1">
      <img src="/images/HallKritipur.jpeg" alt="" className="hallimages1" onClick={onImageClick} />
      <h1 className="hall-name1">Hall Kritipur</h1>
      <p className="hall-info1">Capacity 100 - 250</p>
      <p className="hall-cost1">Cost: $2000 per day</p>
      {/* Add buttons for adding and removing hall */}
      <div className="hall-actions">
              <button className="add-hall-button" onClick={onAddHallClick}>Add</button>
              <button className="remove-hall-button" onClick={onRemoveHallClick}>Remove</button>
            </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default AdminHall;