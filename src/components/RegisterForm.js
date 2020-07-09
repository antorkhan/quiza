import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

export default class RegisterForm extends Component {
    state = {
        password_not_match_message: '',
        registration_status: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        password_confirm: ''
    };
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        if(this.state.password == this.state.password_confirm)
        {
            this.setState({
                first_name: '',
                last_name: '',
                password_not_match_message: '',
                email: '',
                phone: '',
                password: '',
                password_confirm: ''
            });
            axios.post('/student',this.state)
                .then(response => {
                    console.log(response['data']['success']);
                    if (response['data']['success'])
                    {
                        this.setState({
                            registration_status: 'Registration Successful.'
                        }) ;
                    }
                    else
                    {

                    }
                });
        }
        else
        {
            this.setState({
                password_not_match_message: 'Passwords Do Not Match.'
            }) ;
        }


    };

    // x = 'Register';
    render() {
        return (
            <div>
                <div>Enter Your Information below</div>
                <div>
                    <form>
                        <input type={"text"}
                               name={"first_name"}
                               placeholder={"First Name"}
                               value={this.state.first_name}
                               onChange={e => this.change(e)}
                               className={"form-control m-3"}/>
                        <input type={"text"}
                               name={"last_name"}
                               placeholder={"Last Name"}
                               value={this.state.last_name}
                               onChange={e => this.change(e)}
                               className={"form-control m-3"}/>
                        <input type={"text"}
                               name={"email"}
                               placeholder={"Enter Email"}
                               value={this.state.email}
                               onChange={e => this.change(e)}
                               className={"form-control m-3"}/>
                        <input type={"text"}
                               name={"phone"}
                               placeholder={"Enter phone number"}
                               value={this.state.phone}
                               onChange={e => this.change(e)}
                               className={"form-control m-3"}/>
                        <label className={"m-3"}>{this.state.password_not_match_message}</label>
                        <input type={"password"}
                               name={"password"}
                               value={this.state.password}
                               onChange={e => this.change(e)}
                               placeholder={"Enter Password here."}
                               className={"form-control m-3"}/>

                        <input type={"password"}
                               name={"password_confirm"}
                               value={this.state.password_confirm}
                               onChange={e => this.change(e)}
                               placeholder={"Enter Password again"}
                               className={"form-control m-3"}/>
                    </form>
                </div>

                <div className={"m-3"}>
                    <button className={"btn btn-primary"}
                            onClick={e => this.onSubmit(e)}>Register
                    </button>
                </div>
                <div className={"text-center"}>{this.state.registration_status}</div>
            </div>


        );
    }
}