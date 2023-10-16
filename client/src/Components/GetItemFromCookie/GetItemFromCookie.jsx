import { useDispatch } from "react-redux";
import { addProduct } from "../../state";
import {useCookies } from "react-cookie";
import axios from "axios";
import { useEffect } from "react";

function GetItemFromCookie(){
    const [cookies] = useCookies(["product"]);
    const dispatch = useDispatch();

    // console.log(cookies.product[0].productId);
useEffect(()=>{
    if(cookies.product){
        cookies.product.map(async(item)=>{
            const response=await axios.get('http://localhost:5000/products/productInfo', {
                params: {
                  id: item.productId
                },
              });
              const product={
                id:response.data._id,
                name:response.data.name,
                price:response.data.price,
                img:response.data.img,
                category:response.data.category,
                color:item.productColor,
                quantity:item.productQuantity
              }
            console.log(product);
            dispatch(addProduct(product));
    
        })
    }
},[])

   
    return(
        <>

        </>
    )

}
export default GetItemFromCookie;