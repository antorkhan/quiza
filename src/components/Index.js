import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dashboard from "./Dashboard";

export default class Index extends Component {
    state = {
        login: true
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header text-center"><h3>Mentors GED Mock</h3></div>
                            <div className="card-body">
                                <Dashboard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index/>, document.getElementById('app'));
}
