import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

export class SocialPop extends Component{
  constructor(props){
    super(props);
  }

  click(e) {
    console.log('clickeroo');
    e.preventDefault();
  }

  customEvent(e) {
    console.log('wtf');
  }

  render(){
    return(
      <div>
        <a data-for='social' data-event='click' data-tip>Follow Us</a>
        <ReactTooltip globalEventOff='click' id='social'>
          <span>
            <ul>
              <span>
                <li><img className='social-images book-list-display'src='../../assets/facebook.png' /></li>
                <li><img className='social-images book-list-display' src='../../assets/twitter.png' /></li>
                <li><img className='social-images book-list-display' src='../../assets/instagram.png' /></li>
              </span>
            </ul>
          </span>
        </ReactTooltip>
      </div>
    )
  }
}
