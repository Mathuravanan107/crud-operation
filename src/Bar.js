import React, { Component } from 'react'

export default class Bar extends Component {
  state={
    count:0,
  }
  increated=()=>{
    this.setState({
      count:this.state.count+1
    })
    }

  render() {
    return (
      <div>
        <h4>Butten  was clicked{this.state.count}</h4>
        <button onClick={this.increated}>Click</button>
      </div>
    )
  }
}
