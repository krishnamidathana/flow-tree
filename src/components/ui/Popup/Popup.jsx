import React from "react";
import "./Popup.css";
const Popup = ({ handleClose, data }) => {
  console.log(data);
  return (
    <div className="modal-backdrop">
      <div className="popup">
        <div className="popup-inner">
          <div className="popup-content">{data}</div>
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
