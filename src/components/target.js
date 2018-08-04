import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor){
  //Required. The collecting function. It should return a plain object of the props to inject into your component  
  return{
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}


class Target extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;

    const backgroundColor = hovered ? '#ffc837' : '';
    
    //Call the DropTargetConnector's dropTarget() method inside your collecting function. This will pass the returned function to your component as a prop
    return connectDropTarget(
      <div className="target" style={{ background: backgroundColor }}>
        <p>1</p>
      </div>
    );
  }
}

export default DropTarget("image", {}, collect)(Target);
