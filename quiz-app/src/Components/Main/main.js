import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Question from '../Question/question';
import Questions from '../../questionsList';
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            questions:Questions
        }
    }

    render() {
        return(
            <div className="container">
                <div className="jumbotron bg">
                    <Question questions={this.state.questions} length={this.state.questions.length}/>
                </div>
            </div>
        )
    }
}

export default Main;
