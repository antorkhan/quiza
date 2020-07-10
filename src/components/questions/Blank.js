import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Question extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={'font-weight-normal question-test'}>{this.props.question.question_text}</div>
                <div>
                    Your Answer Here: <input type="text"
                                             value={this.props.question["answer"]}
                                             onChange={(event)=> this.props.setAnswer(event.target.value)}
                />
                </div>
            </React.Fragment>
        );
    }
}

