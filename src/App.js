import React, { Component } from 'react';
import ComponentC from './ComponentC';
import { UserContext } from './userContext';

class App extends Component {
  render() {
    return (
      <UserContext.Provider value="Darshan">
        <ComponentC />
      </UserContext.Provider>
    );
  }
}

export default App;
