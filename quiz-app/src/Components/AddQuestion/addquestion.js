import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Questions from '../../questionsList';
class AddQuestion extends React.Component{
    constructor(){
        super();
        this.state={
            questions:Questions,
            qid:null,
            question:'',
            op1:'',
            op2:'',
            op3:'',
            op4:'',
            key:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        alert(`Question ${this.state.qid} added!`);
        //Updating the Array of Questions.
        this.setState({
            questions:[...this.state.questions,]
        })
    }

    render(){
        return (
            <div className="container">
                <div className="jumbotron bg">
                
                    <Modal.Dialog>
                        <Modal.Header className="mdl-head text-light">
                            Add Question to Questionnare
                        </Modal.Header>
                        
                            <form onSubmit={this.handleSubmit}>
                                <Modal.Body>
                                    <label>
                                        <div className="input-group flex-nowrap">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="addon-wrapping">Q.ID:</span>
                                            </div>
                                            <input type="number" name="qid" className="flex-fill" value={this.state.qid} onChange={this.handleChange}/>
                                        </div>                            
                                    </label>
                                    <label>
                                        <div className="input-group flex-nowrap">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="addon-wrapping">Question:</span>
                                            </div>
                                            <input type="text" name="question" className="flex-fill" value={this.state.question} onChange={this.handleChange}/>
                                        </div>                            
                                    </label>
                                    <label>
                                        <div className="input-group flex-nowrap">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="addon-wrapping">Option 1:</span>
                                            </div>
                                            <input type="text" name="op1" className="flex-fill" value={this.state.op1} onChange={this.handleChange}/>
                                        </div>                            
                                    </label>
                                    <label>
                                        <div className="input-group flex-nowrap">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="addon-wrapping">Option 2:</span>
                                            </div>
                                            <input type="text" name="op2" className="flex-fill" value={this.state.op2} onChange={this.handleChange}/>
                                        </div>                            
                                    </label>
                                    <label>
                                        <div className="input-group flex-nowrap">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="addon-wrapping">Option 3:</span>
                                            </div>
                                            <input type="text" name="op3" className="flex-fill" value={this.state.op3} onChange={this.handleChange}/>
                                        </div>                            
                                    </label>
                                    <label>
                                        <div className="input-group flex-nowrap">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="addon-wrapping">Option 4:</span>
                                            </div>
                                            <input type="text" name="op4" className="flex-fill" value={this.state.op4} onChange={this.handleChange}/>
                                        </div>                            
                                    </label>
                                    <label>
                                        <div className="input-group flex-nowrap">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="addon-wrapping">Key:</span>
                                            </div>
                                            <input type="text" name="key" className="flex-fill" value={this.state.key} onChange={this.handleChange}/>
                                        </div>                            
                                    </label>
                                </Modal.Body>
                            
                            <Modal.Footer>
                                <input type="submit" value="Submit" className="btn pbutton text-light"/>
                            </Modal.Footer>
                            </form>
                    </Modal.Dialog>
                </div>
                <Modal.Dialog id="isVisible">
                    <Modal.Header className="mdl-head text-light">Added Question</Modal.Header>
                    <Modal.Body>
                        <div className="input-group flex-nowrap">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">Q{this.state.qid}:</span>
                            </div>
                            <input type="textarea" name="question" className="flex-fill" value={this.state.question} disabled/>
                        </div>
                        <div className="input-group flex-nowrap">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">Op1:</span>
                            </div>
                            <input type="textarea" name="question" className="flex-fill" value={this.state.op1} disabled/>
                        </div>
                        <div className="input-group flex-nowrap">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">Op2:</span>
                            </div>
                            <input type="textarea" name="question" className="flex-fill" value={this.state.op2} disabled/>
                        </div>
                        <div className="input-group flex-nowrap">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">Op3:</span>
                            </div>
                            <input type="textarea" name="question" className="flex-fill" value={this.state.op3} disabled/>
                        </div>
                        <div className="input-group flex-nowrap">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">Op4:</span>
                            </div>
                            <input type="textarea" name="question" className="flex-fill" value={this.state.op4} disabled/>
                        </div>
                        <div className="input-group flex-nowrap">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">Key:</span>
                            </div>
                            <input type="textarea" name="question" className="flex-fill" value={this.state.key} disabled/>
                        </div>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
            
        )
    }
}

export default AddQuestion;