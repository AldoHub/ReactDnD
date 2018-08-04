import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import Types from "./types";

const itemSource = {
  //When the dragging starts, beginDrag is called. 
  beginDrag(props) {
    console.log('dragging');
    return props.image;
  },
  //Optional. When the dragging stops, endDrag is called. For every beginDrag call, a corresponding endDrag call is guaranteed. You may call monitor.didDrop() to check whether or not the drop was handled by a compatible drop target.
  endDrag(props, monitor, component) {
   if(!monitor.didDrop()){
    return;
   }
   
   //use the function when the item is dropped
   return props.handleDrop(props.image.id);
  }
}
//
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class Image extends Component {
  render() {
    const { isDragging, connectDragSource, image } = this.props;
   //Call the DragSourceConnector methods inside your collecting function. This will pass the returned functions to your component as props
    return connectDragSource(
      
        <img id={this.props.id} src={image.name} className="item" />
     
    );
  }
}

//parameters
//type: Either a string, an ES6 symbol, or a function that returns either given the component's props. Only the drop targets registered for the same type will react to the items produced by this drag source

//spec: A plain JavaScript object with a few allowed methods on it. It describes how the drag source reacts to the drag and drop events.

//collect: Required. The collecting function. It should return a plain object of the props to inject into your component. It receives two parameters: connect and monitor.

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.

// const Types = {
//  CARD: 'card'
// };

// DragSource(Types.CARD, cardSource, collect)(Card);
export default DragSource('image', itemSource, collect)(Image);
