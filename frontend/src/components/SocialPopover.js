import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

export class SocialPop extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <a data-tip data-for='social' place='top' effect='solid' event='click'></a>
        <ReactTooltip id='social'>
          <div>
            <span>
              <ul>
                <li><img src='../../assets/facebook.png' /></li>
                <li><img src='../../assets/twitter.png' /></li>
                <li><img src='../../assets/instagram.png' /></li>
              </ul>
            </span>
          </div>
        </ReactTooltip>
      </div>
    )
  }
}
