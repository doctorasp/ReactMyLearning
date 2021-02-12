import React, { Component } from 'react';


export default class Avatar extends Component {

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <img className="Avatar"
                src={this.props.user.avatarUrl}
                alt={this.props.user.name}/>
            </div>
        );
    }
}