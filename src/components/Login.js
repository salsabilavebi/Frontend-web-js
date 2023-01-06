import React,  { Component } from "react";

import { LoginUser } from "../features/authSlice";


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    LoginUser(user).then(res => {
      if (res) {
        this.props.history.push('/')
      }
    })
  }
  render() {
    return(
  
        <div className="Auth-form-container">
        <div  className="Auth-form">
        <form onSubmit={this.onSubmit} >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          </form>
      </div>
      </div>
     
    
  );  
};
};
export default Login;

