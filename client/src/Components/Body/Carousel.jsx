import man1 from "../Images/man1.png";
import { animated } from "react-spring";
import { OpacityAnim, TranslateXAnim } from "./Animation";
import './styles.css'

function Carousel() {
  const opacityAnim = OpacityAnim(0, 1);
  const textTranslateAnim = TranslateXAnim(
    "translateX(-150%)",
    "translateX(0%)"
  );
  const imgTranslateAnim = TranslateXAnim("translateX(150%)", "translateX(0%)");
  return (
    <>
      <div className="m-[4%]">
        <animated.div style={opacityAnim}>
          {" "}
          <div className="svg-background w-full bg-blue-800 rounded-lg h-auto flex lg:justify-around justify-center flex-wrap lg:gap-8 md:gap-4 ">

            <div className=" w-[590px] p-4">
              <animated.div
                style={textTranslateAnim}
                className="w-full h-full flex flex-col justify-center sm:gap-4 md:gap-8 pl-6"
              >
                <p className="md:text-5xl sm:text-3xl font-bold text-white">
                  Elevate Your Audio Journey
                </p>
                <p className="text-2xl md:block text-slate-300">
                  Eexpereince Sound in its purest form
                </p>
                <div className="flex gap-8 mt-4">
                  <button className="bg-white p-2 rounded-lg text-blue-800 font-bold active:bg-blue-900 active:text-white">
                    Shop Now
                  </button>
                  <a className="p-2 text-xl text-white font-bold">Learn More</a>
                </div>
              </animated.div>
            </div>

            <animated.div style={imgTranslateAnim} className="lg:w-1/3 w-full">
              <img
                src={man1}
                alt="Headphone"
                className="w-full h-full"
              ></img>
            </animated.div>

          </div>
        </animated.div>
      </div>
    </>
  );
}
export default Carousel;
