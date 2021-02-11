import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectQuestion } from '../action/selectQuestion';

class QuestionList extends React.Component{
    constructor(props){
        super(props);
        this.questions=this.props.questions
        console.log(`In constructor(props) ${this.props}`);
    }

    renderList(){
        return this.questions.map((question)=>{
            return (
                <div
                    className="card flex-fill pt-2 mt-2 list-group-item"
                    key={question.qid}
                    onClick={()=>this.props.selectQuestion(question)}
                >
                    {question.category} {question.qid} {question.question}
                </div>
            )
        })
    }

    render(){
        console.log('retrieving from store....', this.props.questions,'\nretrieved');
        return(
            <div className="container pt-2 mt-4">
                <div className="row row-cols-1 row-cols-md-4 row-cols-lg-3">
                    <div className="col-12 col-mb-4 col-lg-4 d-flex pt-3 mt-3">
                        <ul>
                            {this.renderList()}
                        </ul> 
                    </div>
                </div>
            </div>
        )
    }
    
}

function mapStateToProps(state){
    return{
        questions: state.allquestions
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectQuestion: selectQuestion}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(QuestionList)