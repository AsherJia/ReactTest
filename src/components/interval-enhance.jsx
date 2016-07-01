import React, { Component } from 'react';

export let IntervalEnhance = ComponsedComponent => class extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 0
    };
  }

  componentDidMount = () => {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  }

  render() {
    return(
      <div>
        <ComponsedComponent { ...this.props } { ...this.state } />
        <p className="large-12 column">
          <strong>Time elapsed for interval: </strong>
          {this.state.seconds} ms
        </p>
      </div>
    );
  }
}
