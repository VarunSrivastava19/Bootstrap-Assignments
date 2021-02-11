import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
class Main extends React.Component{
    render() {
        return (
            <Modal.Dialog>
                <Modal.Header className="mdl-head text-light">
                    Q{'>'}Who owned Wall Street?
                </Modal.Header>
                <Modal.Body>
                <form className="col-12 form">
                            <div className="col">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" id="opt1" name="option"/>
                                    </div>
                                    <input type="text" className="form-control" disabled value="Elon Musk"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" id="opt2" name="option"/>
                                    </div>
                                    <input type="text" className="form-control" disabled value="Jeff Bezos"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" id="opt3" name="option"/>
                                    </div>
                                    <input type="text" className="form-control" disabled value="Dr. Strange"/>
                                </div> 
                            </div>
                            <div className="col">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" id="opt4" name="option"/>
                                    </div>
                                    <input type="text" className="form-control" disabled value="Redditors"/>
                                </div>
                            </div>
                        </form>
                </Modal.Body>
                <Modal.Footer className="bg-light">
                    <a className="btn pbutton text-light" href="#">Previous</a>
                    <a className="btn sbutton text-light" href="#">Next</a>
                </Modal.Footer>

            </Modal.Dialog>

        )
    }
}

export default Main;