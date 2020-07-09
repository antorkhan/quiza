import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class ScoreBoard extends Component {
    state = {
        correct_answers: ['27.63', '1/8', '10a+3', '300 inches', '10.00'],
        total_score: 0,
    };

    componentDidMount() {
        var total_correct = 0;
        this.state.correct_answers.map((answer, index) => {
            {
                if (answer === this.props.questions[index].answer) {
                    total_correct++;
                }
            }
        });
        this.setState({total_score: total_correct})
    }

    render() {
        return (
            <React.Fragment>
                <div className={'text-center'}><h3>Test Ended</h3></div>
                <div>
                    {
                        this.state.correct_answers.map((answer, index) => {
                            {
                                return <div className={'p-2 m-2 border'}>
                                    <div>Question: {this.props.questions[index].question_text}</div>
                                    <div>Correct Answer: <b>{answer}</b></div>
                                    <div>Your Answer: <b>{this.props.questions[index].answer}</b></div>
                                </div>
                            }
                        })
                    }
                </div>
                <div className={'p-2 m-2'}><h4>Total score is <b>{this.state.total_score}</b></h4></div>
            </React.Fragment>
        );
    }
}