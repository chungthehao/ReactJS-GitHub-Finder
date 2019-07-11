import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // # Without JSX
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'Hi Everyone!!')
    // );

    return (
      <div className='App'>
        <h1>Hi Everyone!</h1>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hi Everyone!</h1>
//     </div>
//   );
// }

export default App;
