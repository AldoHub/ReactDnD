import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Container from "./components/container";
import Target from "./components/target";
import Target2 from "./components/target2";

//Drag and drop
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';


class App extends Component {
  
  render() {
    return (
      <div className="app">
        <Container />
        <div>
          <Target />
          <Target2 />
        </div>
      </div>
    );
  }
}

//To use DropTarget, don't forget to wrap the top-level component of your app in a DragDropContext.
export default DragDropContext(HTML5Backend)(App);
