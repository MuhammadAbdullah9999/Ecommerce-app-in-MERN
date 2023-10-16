import Products from "../Products";
import { useState, useEffect } from "react";
import axios from "axios";
import img from './6.png';

function Speaker() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products", {
          params: {
            Category: "Earbuds" 
          }
        }); 
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);
  return (
    <>
      <div>
      <Products data={products} title="Speakers" Img={img}></Products>
      </div>
    </>
  );
}
export default Speaker;
