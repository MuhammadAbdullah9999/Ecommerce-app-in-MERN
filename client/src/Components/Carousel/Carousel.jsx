
import './Carousel.css'
import { useState ,useEffect} from "react";

import img1 from '../Images/1.png'
import img2 from '../Images/2.png'
import img3 from '../Images/3.png'
import img4 from '../Images/4.png'

const images=[img1,img2,img3,img4]

function Carousel(){

    
    // const [currentIndex, setCurrentIndex] = useState(0);
  
    // const goToNextSlide = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };
  
    // const goToPrevSlide = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // };
  

    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      // Automatically change the image every 3 seconds
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
   
   
    return(
       
  // <div className="carousel-container">
      //   <div className="carousel-slide">
      //     {images.map((image, index) => (
      //       <div
      //         key={index}
      //         className={`slide ${index === currentIndex ? 'active' : ''}`}
      //         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      //       >
      //         <img src={image} alt={`${index}`} />
      //       </div>
      //     ))}
      //   </div>
      //   <div className="carousel-buttons">
      //     <button onClick={goToPrevSlide}>Previous</button>
      //     <button onClick={goToNextSlide}>Next</button>
      //   </div>
      // </div>

         <div className="carousel-container w-1/3 m-auto relative overflow-hidden rounded-md">
      <div
        className="carousel-slide flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide flex-none opacity-0 ${index === currentIndex ? 'active opacity-100' : ''}`}
          >
            <img src={image} alt={`Image ${index}`} className="image w-full h-80vh rounded-md shadow-md object-cover object-center" />
          </div>
        ))}
      </div>
      <div className="carousel-buttons absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full z-10">
        <button onClick={goToPrevSlide} className="button p-2 cursor-pointer">
          Previous
        </button>
        <button onClick={goToNextSlide} className="button p-2 cursor-pointer">
          Next
        </button>
      </div>
    </div>
        
    )
}
export default Carousel;