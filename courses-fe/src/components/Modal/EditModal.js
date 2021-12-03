import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './style.scss';

export class EditModal extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
        this.handleModal = this.handleModal.bind(this);
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    };

    render() {
        return (
            <div>
                <Button className='edit-modal-btn'>
                    <svg onClick={this.handleModal} xmlns="http://www.w3.org/2000/svg" data-target="modal" data-toggle="#editModal" width="26" height="26" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                </Button>
                <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton>
                        Header
                    </Modal.Header>
                    <Modal.Body>
                        Body
                    </Modal.Body>
                    <Modal.Footer>
                        <Button id='closeBtn' onClick={this.handleModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};

export default EditModal;