import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredEmail : '',
      isError: false,
      isSubmitted: false,
      submittedEmail: ''
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const email = this.state.enteredEmail ;
    this.validate(email)

    if (!this.state.isError) {
      this.setState({
        submittedEmail: email,
      });
    }

    this.setState({ enteredEmail: '', isSubmitted: true})
  };

  onInputChange = (e) => {
    this.setState({ enteredEmail: e.target.value, isSubmitted: false, isError: false });
  };

  validate = (enteredEmail) => {
    console.log(isEmail(enteredEmail));;
    if (!isEmail(enteredEmail)) {
      this.setState({isError: true})
    };
  }

  render() {
    return(
      <div>
        < form onSubmit={this.onFormSubmit} >
          < input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.enteredEmail}
            onChange={this.onInputChange}
          />

        <span>&nbsp;</span>

        <span>
          <span>&nbsp;</span>
          {!this.state.isError && this.state.isSubmitted &&
            <span>{this.state.submittedEmail} has been added to our email list!</span>
          }
          {this.state.isError && this.state.isSubmitted &&
            <span style={{color:'red'}}>Email is invalid!</span>
          }
        </span>

        < /form>
      </div>
    )
  }
}
