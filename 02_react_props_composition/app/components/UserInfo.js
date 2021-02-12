import React, { Component } from 'react';

import Avatar from './Avatar'

export default class UserInfo extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="UserInfo">
            <Avatar user={this.props.user} />
          <div className="UserInfo-name">
            {this.props.user.name}
          </div>
        </div>

        );
    }
};
