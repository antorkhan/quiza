import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from "./Question";
import ScoreBoard from "./ScoreBoard";
import axios from 'axios'

export default class Dashboard extends Component {

    setAnswer = (answered_value) => {
        console.log(answered_value);
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
            this.setState({is_finished: true})
        }
    };
	
    componentDidMount() {
        console.log('mounted');
        axios.patch('http://localhost:8080/api/exam',{id: 1})
			 .then(
				(res) => {
					let str = ''
					console.log(res.data);
					this.setState(JSON.parse(res.data ));
				}
			 )
    };

    render() {
		let dashboard_content;
		if(this.state)
		{
			if(this.state.is_finished)
			{
				dashboard_content  = <ScoreBoard questions = {this.state.questions}/>
			}
			else
			{
							dashboard_content  =<div>
						<Question question={this.state.questions[this.state.current_question]}
								  setAnswer={this.setAnswer}/>
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
			}

				

		} 
		else
		{
			dashboard_content = <div className={'text-center'}>Loading!</div>
		}
		
        return (
            <div className={'container mt-5'}>
				{ dashboard_content }
            </div>
        );
    }
}