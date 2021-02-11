import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Questions from '../../questionsList';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            questions:Questions
        }
    }
    render(){
        return(
            <div className="jumbotron bg">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 row-cols-lg-3">
                        {
                            this.state.questions.categories.map((category)=>{
                                return (
                                    <div className="col-12 col-mb-4 col-lg-4 d-flex pt-3 mt-3">
                                        <div className="card flex-fill">
                                            <div className="card-header">
                                                <img className="card-img-top" src={category.img} alt="Image Cap"/>
                                                <h5 className="card-title">{category.name}</h5>
                                            </div>
                                            <div className="card-text">{category.name}</div>
                                            <div className="card-footer">
                                                <a href="#" className="btn pbutton text-light">Load quiz</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}