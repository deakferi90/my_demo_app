import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './style.scss';

export const EditModal = (props) => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const ref = useRef();

    const handleModal = () => {
        setShow(!show)
    };

    const handleChangeEvent = () => {
        return setLastName(lastName) || setFirstName(firstName) || setEmail(email);
    }

    // const updateComponentName = (email, lastName, firstName, component) => {
    //     const newEmail = component;
    //     if(lastName && lastName !== ''){
    //         newEmail.email = email;
    //     }
    //     const newLastName = component;
    //     if(lastName && lastName !== ''){
    //         newLastName.lastName = lastName;
    //     }
    //     const newFirstName = component;
    //     if(firstName && firstName !== ''){
    //         newFirstName.firstName = lastName;
    //     }
    //     return newEmail || newLastName || newFirstName;
    // };

    const editTable = () => {
        console.log('edit table');
		//const component = updateComponentName(email, lastName, firstName, props.component);
        //return component;
		//props.save(component);
	};

    return (
        <div>
            <Button className='edit-modal-btn'>
                <svg onClick={() => handleModal()} xmlns="http://www.w3.org/2000/svg" data-target="modal" data-toggle="#editModal" width="26" height="26" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
            </Button>
            <Modal show={show} onHide={() => handleModal()}>
                <Modal.Header closeButton>
                    Edit
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='email'><label>Email</label>
                            <input
                                type="email"
                                name="email"
                                ref={ref}
                                required="required"
                                placeholder="enter an email adress"
                                defaultValue={props.data.email}
                                onChange={(e) => handleChangeEvent(e.target.value)}
                            /></div>
                        <div><label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                ref={ref}
                                required="required"
                                placeholder="enter a Last Name"
                                defaultValue={props.data.lastName}
                                editable='true'
                                onChange={(e) => handleChangeEvent(e.target.value)}
                            /></div>
                        <div><label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                ref={ref}
                                required="required"
                                placeholder="enter a First Name"
                                defaultValue={props.data.firstName}
                                onChange={(e) => handleChangeEvent(e.target.value)}
                            /></div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button id='saveBtn' onClick={() => editTable()}>Save</Button>
                    <Button id='closeBtn' onClick={() => handleModal()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditModal;