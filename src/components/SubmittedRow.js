import React from "react";

const SubmittedRow = ({ contact, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SubmittedRow;
