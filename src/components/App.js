import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import ToDoList from '../containers/ToDoList'

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     lists: []
  //   }
  // }

  // addIdea = (newInfo) => {
  //   const newIdea = {

  //   }
  // }


  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
