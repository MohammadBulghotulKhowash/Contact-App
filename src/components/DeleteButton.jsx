/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function DeleteButton({ onDelete, id }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

export default DeleteButton;
