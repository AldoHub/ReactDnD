import React, { Component } from 'react';
import Image from "./image";

import axios from "axios";

import img1 from "../assets/malte-schmidt-474904-unsplash.jpg";
import img2 from "../assets/mohammadhosein-mohebbi-753832-unsplash.jpg";
import img3 from "../assets/roberto-delgado-webb-751763-unsplash.jpg";
import img4 from "../assets/taneli-lahtinen-752780-unsplash.jpg";
import img5 from "../assets/bogdan-glisik-751964-unsplash.jpg";
import img6 from "../assets/the-vantage-point-747696-unsplash.jpg";
import img7 from "../assets/alex-perez-753751-unsplash.jpg";
import img8 from "../assets/jamakassi-752445-unsplash.jpg";


class Container extends Component {
  
  state = {
    images: [
        { id: 1, name: img1 },
        { id: 2, name: img2 },
        { id: 3, name: img3 },
        { id: 4, name: img4 },
        { id: 5, name: img5 },
        { id: 6, name: img6 },
        { id: 7, name: img7 },
        { id: 8, name: img8 },
      ]
  }  


  //function that deletes the item being dropped
    deleteItem = (id) =>{
   
      this.setState(state => ({
        images: state.images.filter(image => image.id !== id)
      }));
    
      //getting the id to make an API call to Pokemon Api
      axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) =>{
      console.log(response.data);
      })
      .catch((e)=>{
        console.log("error");
      });
  
    
    }

  render() {
    return (
        <div className="item-container">
        {this.state.images.map((image, index) => (
          <Image key={image.id} id={image.id} image={image} handleDrop={(id) => this.deleteItem(id)}  />
        ))}
      </div>
    );
  }
}

export default Container;
