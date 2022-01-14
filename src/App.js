import './App.css';
import React from 'react';
import Home from './Home';
export default class App extends React.Component {
 
 state={
  show: false,
 }
 
 showPerson = (prev) => {
  this.setState({
    ...prev, show: !this.state.show,
  });
};

  render() {
    return (
     <>
     {this.state.show && (
       <Home/>)}
        <button onClick={this.showPerson} className='btn'>{(this.state.show === true) ? "Hide" : "Show"}</button>

      </>
    );
  }
}

