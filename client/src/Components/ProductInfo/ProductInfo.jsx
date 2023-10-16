import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { addProduct,editProduct,removeProduct } from "../../state";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";



function ProductInfo() {

  const [cookies, setCookie] = useCookies(["product"]);


  const location = useLocation();
  const [state] = useState(location.state.key);
  const [productInfo, setProductInfo] = useState();
  const [quantity, setQuantity] = useState(1);
  // const [img,setImg] = useState(null)

  const dispatch = useDispatch();

  const stateProducts = useSelector((state) => state.product);
  // console.log(stateProducts[0].product.id);
// console.log(state);
  useEffect(() => {
    async function fetchProductInfo() {
      try {
        const response = await axios.get(
          "http://localhost:5000/products/productInfo",
          {
            params: {
              id: state,
            },
          }
        );
        setProductInfo(response.data);                
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProductInfo();
  }, []);

  const handleQuantityChange = (action) => {
    if (action === "add") {
      setQuantity(quantity + 1);
    } else if (action === "remove" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const [color, setColor] = useState("Blue");
  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const handleAddToCart = async() => {
    
    for(const products of stateProducts ){
      if(products.product.id===productInfo._id){
        const product={
          id:productInfo._id,
          quantity:quantity
        }
dispatch(editProduct(product));
const existingCart = cookies.product || [];

// Find the index of the product in the cart based on its ID
const productIndex = existingCart.findIndex((product) => product.productId === productInfo._id);

if (productIndex !== -1) {
  // If the product with the specified ID is found, update its quantity
  existingCart[productIndex].productQuantity += quantity;

  // Update the 'product' cookie with the updated cart
  setCookie('product', existingCart);

  // You can also update your component state if needed
  // setState(existingCart);
} 
return;        

      }
    }
    const product={
      id:productInfo._id,
      name:productInfo.name,
      price:productInfo.price,
      img:productInfo.img,
      category:productInfo.category,
      color:color,
      quantity:quantity
    }
    const existingCart = cookies.product || [];
    // console.log(existingCart);

    const cookie={
      productId:product.id,
      productColor:product.color,
      productQuantity:product.quantity
    }

    existingCart.push(cookie);
    setCookie('product', existingCart); 
    // setCookie("user", product.id);

    // const response=await axios.get("http://localhost:5000/addToCart",{
    //   withCredentials: true,
    //   params:{
    //     product:product.id,
    //   },
    // },
      
      // withCredentials: true,
     
    // }
    // );
    // if(response){
    //   console.log(response);

    // }

    dispatch(addProduct(product));
   
  }

  const getCookie=async()=>{
    const response=await axios.get('http://localhost:5000/getCookie',
    {
      withCredentials: true,
    }
    );
    console.log(response)
  }

  return (
    <>
      {(productInfo) ? (
        <div className="flex md:justify-around sm:justify-center sm:gap-4 flex-wrap m-12">
          <div className=" w-[420px]">
              <img
              className=" rounded-lg"
              // src={`data:${productInfo.img.contentType};base64,${Buffer.from(
              //   productInfo.img.data.data
              // ).toString("base64")}`}
              src={window.URL.createObjectURL(new Blob([Int8Array.from(productInfo.img.data.data)], {type: productInfo.img.contentType }))}
              alt="Product"
            ></img>
          </div>
          <div className="flex flex-col gap-8 md:w-96 sm:w-full">
            {/* <p className="text-slate-600 text-xl font-bold">{productInfo.category}</p> */}
            <p className="text-2xl text-slate-800 font-semibold">
              {productInfo.name}
            </p>
            <p className="text-slate-600 ">
              Description: {productInfo.description}
            </p>
            <p className="text-slate-800 font-semibold">
              Price: {productInfo.price} USD
            </p>

        <div className="flex flex-wrap gap-2">
            <div className="flex gap-4 items-center">
              <div
                className="w-10 h-10 text-center pt-1.5 bg-blue-800 text-white rounded-full cursor-pointer active:bg-slate-200 active:text-blue-900"
                onClick={() => handleQuantityChange("remove")}
              >
                <RemoveIcon></RemoveIcon>
              </div>
              <input
                className="h-8 w-16 text-center pt-1 border-2 border-blue-900 rounded-sm"
                for="quantity"
                type="number"
                value={quantity}
              />
              <div
                className="w-10 h-10 text-center pt-1.5 bg-blue-800 text-white rounded-full cursor-pointer active:bg-slate-200 active:text-blue-900"
                onClick={() => handleQuantityChange("add")}
              >
                <AddIcon></AddIcon>
              </div>
            </div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">color</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={color}
                label="color"
                onChange={handleChange}
              >
                <MenuItem value="Red">Red</MenuItem>
                <MenuItem value="Blue">Blue</MenuItem>
                <MenuItem value="White">White</MenuItem>
              </Select>
            </FormControl>
            </div>

            <div className="text-center"><button className="bg-blue-800 p-3 w-full text-slate-200 rounded-xl active:text-blue-900 active:bg-slate-200" onClick={handleAddToCart}>Add To Cart</button></div>
          </div>
        </div>
      ) : (
        <p>Loading product information...</p>
      )}
{productInfo ? (
     <div className="flex flex-col w-1/2 m-auto shadow-2xl p-12 gap-4 my-4 rounded-lg">
     <h1 className="text-2xl font-bold">Description</h1>
     <p className="leading-8">{productInfo.description}</p>
     <p className="leading-8">{productInfo.description}</p>
     <p className="leading-8">{productInfo.description}</p>
   </div>
) : (
    <p>Loading product Info ...</p>
)}
<button onClick={getCookie}>Get cookie</button>
     
    </>
  );
}
export default ProductInfo;
