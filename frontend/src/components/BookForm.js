import React, { Component } from 'react';
import '../App.css';
import _ from 'lodash';

const images = [
  "/assets/image-steel.png",
  "/assets/image-aqua.png",
  "/assets/image-rose.png",
  "/assets/image-yellow.png"
]

export class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      image: _.sample(images),
      votes: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.currentTarget.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleCreateBook({title: this.state.title, author: this.state.author, image: this.state.image, votes: this.state.votes})
    this.setState({
      title: "",
      author: ""
    })
  };

  render() {
    return(
      <div className = "row">
        <div className = "col-md-4"></div>
          <div className = "col-md-4 formBackground">
            <form className = "formStyle jumbotron-text">
              <h2>Lets Add One.</h2>
              <div>&nbsp;</div>
              <div>
                <table >
                  <tbody>
                    <tr>
                      <td><label>Title</label></td>
                      <td><input value = {this.state.title} name = "title" type = "text" onChange = {this.handleChange} /></td>
                    </tr>
                    <tr>
                      <td><label>Author</label></td>
                      <td><input value = {this.state.author} name = "author" type="text" onChange = {this.handleChange} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>&nbsp;</div>
              <button className="button-style" onClick = {this.handleSubmit.bind(this)} type = "submit">Submit</button>
            </form>
          </div>
        <div className = "col-md-4"></div>
      </div>
    )
  }
}
