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
  //   constructor() {
  //       super()
  //       this.state = {
  //         value: 0,
  //         slides: [
  //           (<img src={slide1} />),
  //           (<img src={slide2} />),
  //           (<img src={slide3} />),
  //           (<img src={slide4} />),
  //           (<img src={slide5} />)
  //         ],
  //       }
  //       this.onchange = this.onchange.bind(this);
  //     }
    
    
  //     onchange(value) {
  //       this.setState({ value });
  //     }
    
  render() {
    return (
      <div id="carouselExampleIndicators" class="carousel slide crs" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide5} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
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
  //     <div>
  //     <Carousel className="slider"
  //       plugins={[
  //           'clickToChange',
  //         "centered",
  //         "infinite",
  //         "arrows",
          
  //         {
  //           resolve: slidesToShowPlugin,
  //           options: {
  //             numberOfSlides: 2,
  //           },
  //       },
  //           {
  //               resolve : autoplayPlugin,
  //           option : {
  //               interval:2000,
  //           }
  //       },
         
          
  //       ]}
  //       itemWidth={1250}
  //       animationSpeed={1000}
  //       value={this.state.value}
  //       slides={this.state.slides}
  //       onChange={this.onchange}
  //       offset={10}
        
  //     />
       
  //       <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
     
      
  // </div>
    );
  }
}
