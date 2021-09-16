import Carousel, {autoplayPlugin, slidesToShowPlugin,Dots }  from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import slide1 from "../assets/Slider/1.jpeg";
import slide2 from "../assets/Slider/2.jpeg";
import slide3 from "../assets/Slider/3.jpeg";
import slide4 from "../assets/Slider/4.jpeg";
import slide5 from "../assets/Slider/5.jpeg";
import React, { Component } from "react";
import "./Slider.css"




export default class Slider extends Component {
    constructor() {
        super()
        this.state = {
          value: 0,
          slides: [
            (<img src={slide1} />),
            (<img src={slide2} />),
            (<img src={slide3} />),
            (<img src={slide4} />),
            (<img src={slide5} />)
          ],
        }
        this.onchange = this.onchange.bind(this);
      }
    
    
      onchange(value) {
        this.setState({ value });
      }
    
  render() {
    return (
      //   <Carousel
      //     // arrowLeft={<Icon className="icon-example" name="arrow-left" />}
      //     // arrowRight={<Icon className="icon-example" name="arrow-right" />}
      //     // addArrowClickHandler
      //     arrows

      //   >
      //     <img src={slide1} />
      //     <img src={slide2} />
      //     <img src={slide3} />
      //     <img src={slide4} />
      //     <img src={slide5} />

      //   </Carousel>
      <div>
      <Carousel className="slider"
        plugins={[
            'clickToChange',
          "centered",
          "infinite",
          "arrows",
          
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
        },
            {
                resolve : autoplayPlugin,
            option : {
                interval:2000,
            }
        },
         
          
        ]}
        itemWidth={1250}
        animationSpeed={1000}
        value={this.state.value}
        slides={this.state.slides}
        onChange={this.onchange}
        offset={10}
        
      />
       
        <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
     
      
  </div>
    );
  }
}
