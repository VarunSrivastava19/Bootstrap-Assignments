import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';

class Result extends React.Component{
    render() {
        return (
            <Modal.Dialog className="border border-success">
                <Modal.Header className="h3 bg-success text-light">Result</Modal.Header>
                <Modal.Body>
                    <div className="h4 text-center">You are passed!</div>
                    <p className="text-center lead">You selected Correct Option <code className="h5">Manhatten</code></p>
                </Modal.Body>
            </Modal.Dialog>
        )
    }
}

export default Result;