import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Question extends Component {

    render() {
        return (
           <React.Fragment>
               <div><h3>{this.props.question.question_text}</h3></div>
               <div>
                   {this.props.question.options.map((value,index)=>{
                       return <div key={index}>
                           <h4><input type="radio"
                                      value={value}
                                      name="options"
                                      checked={this.props.question.answer === value}
                                      onChange={(event)=> this.props.setAnswer(value)}/> {value}</h4>
                       </div>
                   })}
               </div>
           </React.Fragment>
        );
    }
}

if (document.getElementById('question')) {
    ReactDOM.render(<Question />, document.getElementById('question'));
}
