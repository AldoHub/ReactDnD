import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor){
    return{
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}


class Target2 extends Component {
  render() {
    const { connectDropTarget, hovered, image } = this.props;
    const backgroundColor = hovered ? '#8e54e9' : '';
    return connectDropTarget(
      <div className="target"  style={{ background: backgroundColor }}>
       <p>2</p>
      </div>
    );
  }
}

export default DropTarget("image", {}, collect)(Target2);
