import img1 from "./bgRemoved/1.png";
import img2 from "./bgRemoved/2.png";
import img3 from "./bgRemoved/3.png";
import img4 from "./bgRemoved/5.png";
import img5 from "./bgRemoved/6.png";
import img6 from "./bgRemoved/7.png";
import img7 from "./bgRemoved/8.png";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import './Category.css'

function CategorySlider({ className }) {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const titles = [
    "Headphones",
    "Earbuds",
    "Speakers",
    "Handfree",
    "Airpods",
    "Headphones",
    "Earbuds",
  ];

  const [translation, setTranslation] = useState(0);

  const handleNext = () => {

    if (translation === -450) {
      setTranslation(translation + 450);
    } else {
      setTranslation(translation + -150);
    }
  };

  const handlePrevious = () => {
   
    if (translation === 0) {
      setTranslation(translation + -450);
    } else {
      setTranslation(translation + 150);
    }
  };

  

  return (
    <>
      <div className="flex gap-2 justify-between mx-6 md:flex sm:hidden">
        <div
          className='rounded-full bg-black w-16 h-16 my-4 cursor-pointer smooth border flex active:bg-white active:text-black'
          onClick={handlePrevious}
        >
          <ArrowBackIosIcon className="w-1/2 m-auto text-white" />
        </div>

        <div
          className='rounded-full bg-black w-16 h-16 my-4 cursor-pointer smooth border flex active:bg-white active:text-black'
          onClick={handleNext}
        >
          <ArrowForwardIosIcon className="w-1/2 m-auto text-white" />
        </div>
      </div>

      <div className="hideScrollbar w-full flex gap-4 overflow-x-auto snap-x-mandatory scroll-smooth">
        {images.map((img, index) => (
          <>
            <div
              style={{
                transform: `translateX(${translation}%)`,
                transition: "transform 0.8s ease",
              }}
              className={`${className} w-96 group h-auto shrink-0 flex flex-col gap-4 bg-slate-100 rounded-lg mx-4 px-8 pt-8 snap-start scroll-ml-4 overflow-hidden`}
            >
              <div>
                <h2 className="font-bold text-2xl">{titles[index]}</h2>
              </div>
              <div>
                <p className="text-slate-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="w-9/12 h-9/12 mt-8 self-end duration-300 transform scale-100 group-hover:scale-105">
                <img className="w-full h-60" src={img} alt=""></img>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
export default CategorySlider;
