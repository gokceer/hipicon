import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
  
    this.setState({
        [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let temp = {
      email: this.state.email,
      password: this.state.password,
    }

    this.props.submit(temp);

    this.setState({
      email: '',
      password: ''
    });
}

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          <div className="form-inner">
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input required type="email" name="email" id="email"
                value={this.state.email}
                onChange={this.handleChange}/>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input required type="password" name="password" id="password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
    );
  }
}

export default Login;