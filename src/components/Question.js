import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MCQ from "./questions/MCQ";
import Blank from "./questions/Blank";

export default class Question extends Component {

    render() {
        let question;
        if(this.props.question["question_type"] === 'mcq')
        {
            question = <MCQ question={this.props.question}
                                question_index={this.props.question_index}
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
               { question }
           </React.Fragment>
        );
    }
}

if (document.getElementById('question')) {
    ReactDOM.render(<Question />, document.getElementById('question'));
}
