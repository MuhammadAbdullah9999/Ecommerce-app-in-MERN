import { useSpring,config  } from "react-spring";
import { animated } from "react-spring";
import { useEffect,useState } from "react";

function InfiniteSlider(){
    const [stop,setStop]=useState(false);


    const props = useSpring({
      from: { x: stop ? -430 : 300 },
      to: { x: stop ? -430 : -430 },
      
      config: {
        duration: 15000,
      },
      loop: true, // Enable the reverse loop
    });
const hovered=()=>{
  setStop(true);
}
useEffect(()=>{

},[stop])

return(
    <>
    <div className={`w-[25.33vw] overflow-auto flex m-auto hover:${hovered}`} style={{overflow: "hidden"}}>
    <animated.div style={props} className="flex gap-6"><img class="w-full" src="https://picsum.photos/200" alt="Image 1" />
       <img class="w-full" src="https://picsum.photos/200" alt="no 1" /></animated.div> 
      </div>
    </>
)

}
export default InfiniteSlider;