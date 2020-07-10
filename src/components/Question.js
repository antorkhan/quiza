import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Question.css'
import MCQ from "./questions/MCQ";
import Blank from "./questions/Blank";

export default class Question extends Component {

    render() {
        let question;
        let images;
        if(this.props.question["question_type"] === 'mcq')
        {
            question = <MCQ question={this.props.question}
                                setAnswer={this.props.setAnswer}
            />
        }
        else if(this.props.question["question_type"] === 'blank')
        {
            question = <Blank question={this.props.question}
                            question_index={this.props.question_index}
                            setAnswer={this.props.setAnswer}
            />
        }
            return (
                       <React.Fragment>
                           <div className={'image-box'}>
                               { images }
                           </div>
                           { question }
                       </React.Fragment>
        );
    }
}