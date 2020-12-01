import React, { Component } from 'react';
import Login from './Login';
import Product from './Product';
import './product.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthanticated: false,
      email: '',
      password: '',
      responseData: '',
      productData: []
    }
    this.submit = this.submit.bind(this);
    this.products = this.products.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("authToken") || ''){
      this.setState({
        isAuthanticated: true
      });
      this.products();
    } 
  }

  submit(data) {
    this.setState({
      email: data.email,
      password: data.password
    });

    fetch('https://run.mocky.io/v3/2ba975e3-59bf-4c6e-9a2d-d51e9f722495', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({email: this.state.email, password: this.state.password})
    }).then(response => response.json())
      .then(result => {
        localStorage.setItem("authToken", result.data.authToken);
        this.setState({
          isAuthanticated: true,
          responseData: result.data
        });
        this.products();
      }, (error) => {
        console.log(error);
        this.setState({
          isAuthanticated: false,
          responseData: ""
        });
      });
  }

  products() {
    fetch('https://run.mocky.io/v3/1fbd9867-53fd-4666-9356-7af9810f7ab5')
    .then(response => response.json())
    .then(result => {
      this.setState({
        productData: result.products
      });
    });
  }

  render() {
    const authenticated = this.state.isAuthanticated;
    console.log(this.state.productData);
      return (
        <div className="App">
          {authenticated ? <Product productArray = {this.state.productData}/> : <Login submit = {this.submit}/>}
        </div>
      );
  }
}

export default App;
