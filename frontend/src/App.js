import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Checkbox from 'rc-checkbox';
import { BookItem } from './components/BookItem.js';
import { BookForm } from './components/BookForm.js';
import { BackgroundImage } from './components/BackgroundImage.js';
import { NavBar } from './components/NavBar.js';
import { Footer } from './components/Footer.js';
import { SocialPop } from './components/SocialPopover.js';
import _ from 'lodash';
import FaCaretUp from 'react-icons/lib/fa';
import FaCaretDown from 'react-icons/lib/fa/caret-down';



const images = [
  "/assets/image-steel.png",
  "/assets/image-aqua.png",
  "/assets/image-rose.png",
  "/assets/image-yellow.png"
]

const books = [
  {
    id: 1,
    title: "The Graybar Hotel: Stories",
    author: "Curtis Dawkins",
    image: _.sample(images),
    completed: false,
    votes: 0
  },
  {
    id: 2,
    title: "Beneath a Scarlet Sky",
    author: "Mark Sullivan",
    image: _.sample(images),
    completed: false,
    votes: 0
  },
  {
    id: 3,
    title: "Sing, Unburied, Sing",
    author: "Jesmyn Ward",
    image: _.sample(images),
    completed:false,
    votes: 0
  }
]

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books : []
    };
  }

  componentDidMount() {
    this.setState({books : books});
  };

  handleComplete = (i) => {
    const booksClone = [...this.state.books]
    booksClone[i].completed = !booksClone[i].completed

    this.setState({books : booksClone});
  };

  handleCreateBook = (book) => {
    const booksClone = [...this.state.books]
    booksClone.push(book)

    this.setState({books : booksClone});
    };

  handleBookUpvote = (bookId) => {
      const nextBooks = this.state.books.map((book) => {
        console.log(book.id, bookId)
        if (book.id === bookId) {
          return Object.assign({}, book, {
            votes: book.votes + 1,
          });
        } else {
          return book;
        }
      });
      this.setState({
        books: nextBooks,
      });
  }

  handleBookDownvote = (bookId) => {
    const nextBooks = this.state.books.map((book) => {
      console.log(book.id, bookId)
      if (book.id === bookId) {
        return Object.assign({}, book, {
          votes: book.votes - 1,
        });
      } else {
        return book;
      }
    });
    this.setState({
      books: nextBooks,
    });
  }

  render() {
    return (
      <div className="App body-background">
        < NavBar />
        < BackgroundImage
          handleCreateBook = {this.handleCreateBook}
        />

          {(this.state.books.sort((a,b) => (
            b.votes - a.votes
          ))).map((book, i) => {
            return(
              <BookItem
                  key = {'bookitem' + i}
                  book = {book}
                  i = {i}
                  id = {book.id}
                  votes = {book.votes}
                  handleComplete = {this.handleComplete.bind(this)}
                  handleBookUpvote = {this.handleBookUpvote.bind(this)}
                  handleBookDownvote = {this.handleBookDownvote.bind(this)}
              />
             )
          })
        }
      < Footer />
      </div>
    );
  }
}

export default App;
