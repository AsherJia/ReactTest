import React, { Component, PropTypes } from 'react';
import Person from './Person.jsx';

class UserManagerPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      age :"",
      persons:[]
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value});
  }

  handleClick = (event) => {
    const { name, age } = this.state;

    this.setState({
      name:"",
      age :"",
      persons:this.state.persons.concat([{name:name,age:age}])
    })
  }

  render = () => {
    const { name, age, persons } = this.state;

    return (
      <div>
        <span>姓名:</span><input value={ name } name="name" onChange={ this.handleChange }></input>
        <span>年龄:</span><input value={ age } name="age" onChange={ this.handleChange }></input>
        <input type="button" onClick={ this.handleClick } value="确认"></input>
        { persons.map((person,index)=>(
          <Person key={ index } name={ person.name } age={ person.age }></Person>
        ))}
      </div>
    )
  }
}

export default UserManagerPanel;
