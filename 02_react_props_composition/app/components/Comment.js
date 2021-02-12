import React, { Component } from 'react';

import UserInfo from './UserInfo';

export default class Comment extends Component {

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="Comment">
              <UserInfo user={this.props.author}></UserInfo>
              <div className="Comment-text">
                {this.props.text}
              </div>
              <div className="Comment-date">
                {formatDate(this.props.date)}
              </div>
            </div>
          );
        
    
        }
}

function formatDate(date) {
    return date.toLocaleDateString();
  }
