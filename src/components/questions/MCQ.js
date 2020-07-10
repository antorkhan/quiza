import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Question extends Component {

    render() {
        return (
            <React.Fragment>
                <div className={"font-weight-normal question-test"}>{this.props.question.question_text}</div>
                <div>
                    {this.props.question.options.map((value,index)=>{
                        return <div className={'answer'} key={index}>
                                    <input type="radio"
                                               value={value}
                                               name="options"
                                               checked={this.props.question.answer === value}
                                               onChange={(event)=> this.props.setAnswer(value)}/> {value}
                                </div>
                    })}
                </div>
            </React.Fragment>
        );
    }
}