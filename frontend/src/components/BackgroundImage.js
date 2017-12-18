import React, { Component } from 'react';
import '../App.css';
import { Jumbotron } from 'react-bootstrap';
import { BookForm } from './BookForm.js';

export class BackgroundImage extends Component {
  render() {
    const jumboStyle = {
        padding: 50,
        margin: 0,
        width: "100%",
        minHeight: "50%",
    }
      return(
        <div className="jumbotron background" style={jumboStyle}>
              <BookForm
                handleSubmit = {this.props.handleSubmit}
                handleAuthorChange = {this.props.handleAuthorChange}
                handleTitleChange = {this.props.handleTitleChange}
                handleCreateBook = {this.props.handleCreateBook}
                />
        </div>
      )
    }
  }
