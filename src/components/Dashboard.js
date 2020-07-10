import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from "./Question";
import ScoreBoard from "./ScoreBoard";

export default class Dashboard extends Component {
    state = {
        total_question: 5,
        current_question: 0,
        questions: [
            {
                question_text: 'The shirt you want to buy is 15% off from $32.50. How much will your shirt be?',
                options: ['27.63', '30.00', '17.50', '37.38'],
                answer: '',
                serial: 0,
                question_type: 'mcq'
            },
            {
                question_text: 'Solve: 5/8 – 1 /2',
                options: ['1/4', '1/8', '1/2', '10/16'],
                answer: '',
                serial: 1,
                question_type: 'mcq'
            },
            {
                question_text: 'Simplify and combine like terms of the following expression: 3(2a+1) + 4a',
                options: ['2a+1+12a', '6a+3+4a', '10a+3', '7a+8a2'],
                answer: '',
                serial: 2,
                question_type: 'mcq'
            },
            {
                question_text: 'Calculate the surface area of sphere with a radius of 5 inches. (4πr2)',
                options: ['341 inches', '314 inches', '25 inches', '300 inches'],
                answer: '',
                serial: 3,
                question_type: 'mcq'
            },
            {
                question_text: 'Jack has twelve dollars in his pocket on Monday, three dollars on Tuesday, ten dollars on Wednesday, eight dollars on Thursday, and two dollars on Friday. What is the average amount of money Jack has in his pocket during the week?',
                options: ['10.00', '35.00', '8.00', '7.00'],
                answer: '',
                serial: 4,
                question_type: 'blank'
            }
        ],
        is_finished: true,
    };
    setAnswer = (answered_value) => {
        this.setState(state => {
            const list = state.questions.map(item => {
                if (item.serial === this.state.current_question) {
                    item.answer = answered_value
                }

            });
            return {
                list,
            };
        });

    };
    nextQuestion = () => {
        if (this.state.current_question < this.state.total_question - 1) {
            let next_question = this.state.current_question + 1;
            this.setState({current_question: next_question})
        }
    };

    previousQuestion = () => {
        if (this.state.current_question > 0) {
            let next_question = this.state.current_question - 1;
            this.setState({current_question: next_question})
        }
    };
    finishTest = () => {
        if (window.confirm('Are you sure you want to finish the test?')) {
            this.setState({is_finished: false})
        }
    };

    render() {
        return (
            <div className={'container-fluid'}>
                {(!this.state.is_finished) ? <ScoreBoard questions = {this.state.questions}/> :
                    <Question question={this.state.questions[this.state.current_question]}
                              question_index={this.state.current_question}
                              setAnswer={this.setAnswer}/>}

                <hr/>
                <div className={'row'}>
                    <div className={'col-2 '}>
                        <button
                            className={'btn ' + (this.state.current_question > 0 ? 'btn-primary' : 'btn-secondary disabled')}
                            onClick={this.previousQuestion}> Previous
                        </button>
                    </div>
                    <div className={'col-2 offset-8'}>
                        <button
                            className={'btn ' + (this.state.current_question < this.state.total_question - 1 ? 'btn-primary' : 'btn-secondary disabled')}
                            onClick={this.nextQuestion}> Next
                        </button>
                    </div>
                    <div className={'col-12 text-center'}>
                        <button className={'btn btn-success'} onClick={this.finishTest}>Finish Test</button>
                    </div>
                </div>
            </div>


        );
    }
}