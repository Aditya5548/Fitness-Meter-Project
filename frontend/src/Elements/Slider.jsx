import React from 'react';
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import img1 from '../assets/pic1.webp'
import img2 from '../assets/jimpic5.jpg'
import img3 from '../assets/jimpic2.jpg'
function Slider(){
    useGSAP(()=>{
        gsap.from('.smiddile',{
            x:2000,
            scale:0.1,
            duration:0.5,
            
          })
      })
    return (
        <>
        <br /><br /><br /><br />
        <div className="row justify-content-center">
            <div className="col-8 slider">
<div id="carouselExampleDark" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10">
      <img src={img1} class="d-block w-100 simg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="10">
      <img src={img2} class="d-block w-100 simg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="10">
      <img src={img3} class="d-block w-100 simg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      </div>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div></div>
       
        </>
        
    );
}

export default Slider;
 