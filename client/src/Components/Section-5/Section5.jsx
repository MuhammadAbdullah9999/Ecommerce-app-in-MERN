import img1 from './1.png';
import { useSpring, animated } from 'react-spring';
import { Waypoint } from "react-waypoint";
import { useState } from 'react';

function Section5() {

  const [inView, setInView] = useState(false);

  const springProps = useSpring({
    from: { scale: inView ? 0.1 : ''}, // Initial scale value
    to: { scale: inView ? 1.2 : '' }, // Final scale value

    // config: { duration: 500 },
    config: { tension: 100, friction: 10 }, // Adjust the spring animation behavior
   
  });

  return (
    <>
    <div className=' bg-slate-800 py-12 my-12 shadow-lg'>
    <div><p className='text-center lg:text-5xl sm:text-3xl text-white font-bold mb-16'>Why Us ?</p></div>

      <div className="w-full text-white flex justify-center gap-4 flex-wrap  ">

        <div className="w-80 flex flex-col items-center justify-between gap-16">
          <div className="flex flex-col items-center gap-2">
            <div>
              <p className="text-3xl font-medium">Exceptional Sound Quality</p>
            </div>
            <div>
              <p className="text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent varius commodo aliquam.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className='self-start'>
              <p className="text-3xl font-medium">Innovative Design</p>
            </div>
            <div>
              <p className="text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent varius commodo aliquam.
              </p>
            </div>
          </div>

        </div>
        <Waypoint onEnter={() => { setInView(true) }} bottomOffset="50%">
        <animated.div
        style={{
          ...springProps, // Add the animated spring style to the div
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          className='h-4/5 w-1/2'
          src={img1}
          alt='Earbuds'
        />
      </animated.div>
      </Waypoint>
         <div className="w-80 flex flex-col justify-between items-center gap-16">

          <div className="flex flex-col items-center gap-2">
            <div>
              <p className="text-3xl font-medium">Versatile and User-Friendly</p>
            </div>
            <div>
              <p className="text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent varius commodo aliquam.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div>
              <p className="text-3xl font-medium">Superior Build and Durability</p>
            </div>
            <div>
              <p className="text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent varius commodo aliquam.
              </p>
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}
export default Section5;
