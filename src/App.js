import React, { Component } from 'react';
import './App.css';

class App extends Component {
  foo2() {
    return 'Bars';
  }

  render() {
    // # Without JSX
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'Hi Everyone!!')
    // );

    const name = 'John Doe';
    const loading = false;
    const showName = true;
    const foo = () => 'Bar';

    // if (loading) {
    //   return <h4>Loading...</h4>;
    // }

    return (
      <div className='App'>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <>
            <h1>Hi {showName && name}!</h1>
            <h1>Hi {1 + 2}!</h1>
            <h1>Hi {name.toUpperCase()}!</h1>
            <h1>Hi {foo()}!</h1>
            <h1>Hi {this.foo2()}!</h1>
          </>
        )}
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
