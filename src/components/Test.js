import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Test extends Component {
    render() {
        // console.log('why??');
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header text-center"><h3>Mentors GED Mocks</h3></div>
                            <div className="card-body">Choose a courses something changes</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('test')) {
    ReactDOM.render(<Test />, document.getElementById('test'));1
}
