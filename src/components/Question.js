import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Question.css'
import MCQ from "./questions/MCQ";
import Blank from "./questions/Blank";

export default class Question extends Component {

    render() {
        let body;
        let images;
		if(this.props && this.props.question )
		{
			if(this.props.question["question_type"] === 'mcq')
			{
				body = <MCQ question={this.props.question}
									setAnswer={this.props.setAnswer}
				/>
			}
			else if(this.props.question["question_type"] === 'blank')
			{
				body = <Blank question={this.props.question}
								question_index={this.props.question_index}
								setAnswer={this.props.setAnswer}
				/>
			}
		}

            return (
                       <React.Fragment>
                           <div className={'image-box'}>
                               { images }
                           </div>
                           { body }
                       </React.Fragment>
        );
    }
}