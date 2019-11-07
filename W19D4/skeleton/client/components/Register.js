import React from "react";
import { REGISTER_USER } from "../src/mutations";
import { Mutation } from "react-apollo";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleSubmit(registerUser, e) {
    e.preventDefault();
    const { name, email, password } = this.state;
    registerUser({
      variables: {
        name,
        password,
        email
      }
    }).then(() => this.setState({
      name: "",
      email: "",
      password: ""
    }));
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  updateCache(cache, { data }) {
    console.log(data);
    // here we can write directly to our cache with our returned mutation data
    cache.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  }

  render() {
    let { name, password, email } = this.state;
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          console.log(data)
          const { token } = data.register;
          localStorage.setItem("auth-token", token);
        }}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(registerUser, data) => (
          <div>
            <form
              onSubmit={ e => this.handleSubmit(registerUser, e) }
            >
              <input
                type="text"
                value={ name }
                onChange={ this.update("name") }
                placeholder="Name"
              />
              <input
                type="text"
                value={ email }
                onChange={ this.update("email") }
                placeholder="Email"
              />
              <input
                type="password"
                value={ password }
                onChange={ this.update("password") }
                placeholder="Password"
              />
              <input
                type="submit"
                value="Register User"
              />
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}