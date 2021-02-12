import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
}

ReactDOM.render(
   
        <div>
           <Comment date={comment.date} text={comment.text}
                        author={comment.author}>
            </Comment>
        </div>
    , 
    document.getElementById('app')
);