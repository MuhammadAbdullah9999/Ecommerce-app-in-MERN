import React, { useRef } from "react";
import CategorySlider from "./CategorySlider";
import { animated, useSpring } from "react-spring";
// import { TranslateXAnim } from "../Body/Animation";
import { Waypoint } from "react-waypoint";

function CategorySection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = React.useState(false);

  // const TranslateAnim = TranslateXAnim("translateX(-150%)", "translateX(0%)");

  const springProps = useSpring({
    from: {
      transform: inView ? "translateX(-150%)" : "translateX(0%)", // Initial position outside the left end of the screen or at 0% (default position) based on 'inView'
      opacity: inView ? 0 : 1, // Initial opacity 0 or 1 based on 'inView'
    },
    to: {
      transform: inView ? "translateX(0%)" : "translateX(-150%)", // Final position at 0% or outside the left end of the screen based on 'inView'
      opacity: inView ? 1 : 0, // Final opacity 1 or 0 based on 'inView'
    },
    delay: 300,
// Adding opacity to fade in/out the section along with the translation
  });

  const handleWaypointEnter = () => {
    setInView(true);
  };

  return (
    <>
      <div>
        <h1 className="m-4 font-bold text-4xl text-slate-700">
          Shop By Category
        </h1>
      </div>

      <Waypoint onEnter={handleWaypointEnter} bottomOffset="40%">
        <animated.div ref={sectionRef} style={springProps}>
          <div className="my-6">
            <CategorySlider />
          </div>
        </animated.div>
      </Waypoint>
    </>
  );
}

export default CategorySection;
