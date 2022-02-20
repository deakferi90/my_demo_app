import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalExample = (props) => {
    return (
        <div>
            <Modal show={props.show}>
                <Modal.Header closeButton onClick={props.onHide}>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalExample;