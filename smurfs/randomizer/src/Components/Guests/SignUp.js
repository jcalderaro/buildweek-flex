import React, {Component} from 'react';
import {register} from './authentication';

class signUp extends Component {
    constructor() {
        super()
        this.state = {
            first: '',
            last: '',
            phone: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            first: this.state.first,
            last: this.state.last,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            if(res) {
                this.props.history.push('/login')
            }
        })
    }

    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit = {this.onSubmit}>
                            <h1 className = "h3 mb-3 font-weight-normal">Welcome Back</h1>
                            <div className = "form-group">
                                <label htmlFor = "first">First Name</label>
                                <input type = "text"
                                    className = "form-control"
                                    name = "first"
                                    placeholder = "First Name"
                                    value = {this.state.first}
                                    onChange = {this.onChange}
                                    />
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "last">Last Name</label>
                                <input type = "text"
                                    className = "form-control"
                                    name = "last"
                                    placeholder = "Last Name"
                                    value = {this.state.last}
                                    onChange = {this.onChange}
                                    />
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "phone">Mobile Phone</label>
                                <input type = "text"
                                    className = "form-control"
                                    name = "phone"
                                    placeholder = "Phone Number"
                                    value = {this.state.phone}
                                    onChange = {this.onChange}
                                    />
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "email">Email</label>
                                <input type = "email"
                                    className = "form-control"
                                    name = "email"
                                    placeholder = "Your Email"
                                    value = {this.state.email}
                                    onChange = {this.onChange}
                                    />
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "password">Password</label>
                                <input type = "password"
                                    className = "form-control"
                                    name = "password"
                                    placeholder = "Password:"
                                    value = {this.state.password}
                                    onChange = {this.onChange}
                                    />
                            </div>
                            <button type = "submit"
                            className = "btn btn-lg btn-primary btn-block">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default signUp;