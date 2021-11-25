import React from 'react';
import {Button, Modal} from 'react-bootstrap';

export class ExampleModal extends React.Component {
    constructor() {
        super();
        this.state={
            show:false
        }
    this.handleModal = this.handleModal.bind(this);
    }
    handleModal(){
        this.setState({show:!this.state.show})
    };
    render() {
        return (
            <div>
                <Button onClick={this.handleModal}>Open Modal</Button>
                <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton>
                        Modal head part
                        </Modal.Header>
                    <Modal.Body>
                        Hi, React modal is here
                        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};

export default ExampleModal;