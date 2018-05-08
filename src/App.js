import React, { Component } from 'react';

import Post from './components/Post';

import posts from './posts.json';

class App extends Component {
  render() {
    return (
      <div>
        { posts.map(({ title, description, image }, index) => (
              <Post 
                key={index}
                title={title}
                description={description}
                image={image}
              />
            )
        ) 
        }
        
      </div>
    );
  }
}

export default App;
