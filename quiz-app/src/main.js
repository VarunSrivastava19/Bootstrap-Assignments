import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
class Main extends React.Component{
    render() {
        return (
            <Modal.Dialog className="border border-primary">
                <Modal.Header className="bg-dark text-light">
                    Q>Where is Wall Street?
                </Modal.Header>
                <Modal.Body>
                <form className="col-12 form">
                            <div className="col">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" id="opt1" name="option"/>
                                    </div>
                                    <input type="text" className="form-control" disabled value="New Delhi"/>
                                </div>
                            </div>
                            <div class="col">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" id="opt2" name="option"/>
                                    </div>
                                    <input type="text" className="form-control" disabled value="Venice"/>
                                </div>
                            </div>
                            <div class="col">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" id="opt3" name="option"/>
                                    </div>
                                    <input type="text" className="form-control" disabled value="Barcelona"/>
                                </div> 
                            </div>
                            <div class="col">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" id="opt4" name="option"/>
                                    </div>
                                    <input type="text" className="form-control" disabled value="Manhatten"/>
                                </div>
                            </div>
                        </form>
                </Modal.Body>
                <Modal.Footer className="bg-light text-dark">
                    <Button variant="secondary">Previous</Button>
                    <Button variant="primary">Next</Button>
                </Modal.Footer>

            </Modal.Dialog>

        )
    }
}

export default Main;