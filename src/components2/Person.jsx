import React, { Component } from 'react';
import pureRender from "pure-render-decorator"

class PersonOrigin extends Component {
  componentWillReceiveProps = (newProps) => {
    console.log(`我新的props的name是${newProps.name}，age是${newProps.age}。我以前的props的name是${this.props.name}，age是${this.props.age}是我要re-render了`);
  }

  render = () => {
    const { name, age } = this.props;
    console.error('render......');

    return (
      <div>
        <span>姓名:</span>
        <span>{name}</span>
        <span> age:</span>
        <span>{age}</span>
      </div>
    )
  }
}

export default pureRender(PersonOrigin);
