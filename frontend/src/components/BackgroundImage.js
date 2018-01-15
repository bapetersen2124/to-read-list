import React, { Component } from 'react';
import '../App.sass';
import { Jumbotron } from 'react-bootstrap';
import { BookForm } from './BookForm.js';

export class BackgroundImage extends Component {
  render() {
      return(
        <div className="jumbotron background jumbo-style">
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
