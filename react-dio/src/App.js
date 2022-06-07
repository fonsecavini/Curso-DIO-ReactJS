
import React, { Component } from 'react';
import Twitter from './Twitter';

class App extends Component {

  state = {
    loading: false,
    actived: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    })
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render () {
    const posts = [{
      title: 'title 1',
      description: 'description 1'
    },{
      title: 'title 2',
      description: 'description 2'
    }]

    return (
      <div>
        <button onClick={this.onRemove}>Remover component</button>
        {this.actived && (
          <Twitter posts={posts}/>
        )
        }
      </div>
    )
  }
}

export default App;
