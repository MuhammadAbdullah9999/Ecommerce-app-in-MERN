import { useState,useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { animated, useSpring } from "react-spring";
import { Waypoint } from "react-waypoint";

function FeaturedProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5000/products'); // Assuming your server is running on the same host as React
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const [inView, setInView] = useState(false);
  const props = useSpring({
    from: {
      transform: inView ? "translateY(100%)" : "translate(0%)", // Initial position outside the left end of the screen
    },
    to: {
      transform: inView ? "translateY(0%)" : "translate(0%)", // Final position at 0% (default position)
    },
    duration:500
  });

  return (

    <>

      <div className="my-20">
        <Waypoint onEnter={() => { setInView(true) }} bottomOffset="50%">
          <div className="text-center text-slate-700 my-20">
            <h1 className="font-extrabold text-4xl">Featured Products</h1>
          </div>
        </Waypoint>


        <animated.div style={props} className="flex flex-wrap justify-center gap-6">

        {products.map((data,index)=>(<>
            <Card img={data.img} category={data.category} name={data.name} price={data.price} id={data._id}></Card>
          </>))}
         
          </animated.div>

      </div>

    </>
  )
}
export default FeaturedProducts;