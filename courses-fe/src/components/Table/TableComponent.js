import React, { useState } from 'react';
import './style.scss';
import data from '../mock-data.json';
import { EditModal } from '../Modal/EditModal';
import Switch from "react-switch";
import { FaBeer  } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState(data);
  const [checked, setChecked] = useState(false);
  const [addFormData, setAddFormData] = useState({
    email: "",
    lastName: "",
    firstName: ""
  })

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      email: addFormData.email,
      lastName: addFormData.lastName,
      firstName: addFormData.firstName
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return <div>
    <div className='switch-info-container'>
    <Switch onChange={() => setChecked(!checked)} checked={checked} />
    <div className='info-icon' data-tip={checked ? null : "switch to right to show table"}>{checked ? null : <FaBeer />}<ReactTooltip /></div>
    </div>
    { checked ? <div className='table-page-container'>
      <div className="input-container"><input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by..." /></div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Edit or remove</th>
          </tr>
        </thead>
        <tbody>
          {contacts.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (val.email.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return val;
            } else if (val.firstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return val;
            } else if (val.lastName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return val;
            };
            return false;
          }).map((contact) => (
            <tr>
              <td key="uniqueKey1">{contact.email}</td>
              <td key="uniqueKey2">{contact.lastName}</td>
              <td key="uniqueKey3">{contact.firstName}</td>
              <td key="uniqueKey4">
                <div className='delete-row'>
                  <svg
                    onClick={handleDeleteClick}
                    id="delete" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
                <div className='edit-row'>
                  <EditModal data={contact}>
                    <svg xmlns="http://www.w3.org/2000/svg" data-target="modal" data-toggle="#editModal" width="26" height="26" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                  </EditModal>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className='add-contact'>Add a contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="enter an email adress"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="lastName"
          required="required"
          placeholder="enter a Last Name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="firstName"
          required="required"
          placeholder="enter a First Name"
          onChange={handleAddFormChange}
        />
        <button className='submit' type="submit">Add</button>
      </form>
    </div> : null }
  </div>
}

export default TableComponent;