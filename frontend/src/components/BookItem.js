import React, { Component } from 'react';
import { App } from '../App.js';
import Checkbox from 'rc-checkbox';
import FaCaretUp from 'react-icons/lib/fa/caret-up';
import FaCaretDown from 'react-icons/lib/fa/caret-down';

export class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed : false,
      votes: this.props.book.votes
    }
  }

  render() {
    return(
        <div className = "book-list-display list-text col-md-3">
        <div>&nbsp;</div>
          <div>
            <span className = "col-md-2"><img src= {this.props.book.image} className = "book-image"/></span>
            <div>&nbsp;</div>
              <div>
                  <Checkbox className="list-text" onClick = {() => this.props.handleComplete(this.props.i)}
                      checked = {this.props.book.completed ? 1 : 0}
                  />
                <span>&nbsp;</span>{this.props.book.title}
              <span className = "col-md-1">
                <div>
                  {this.props.book.author}
                </div>
              </span>
                <span className="vote-text" onClick = {() => this.props.handleBookUpvote(this.props.book.id)}><FaCaretUp/>{this.props.book.votes}</span>
                <span className="vote-text" onClick = {() => this.props.handleBookDownvote(this.props.book.id)}><FaCaretDown/></span>
                <div>&nbsp;</div>
            </div>
          </div>
        </div>
    )
  }
}
