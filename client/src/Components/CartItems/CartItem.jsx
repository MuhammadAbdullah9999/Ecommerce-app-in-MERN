import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../state";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


function CartItem({ handleOpen }) {
  const navigate=useNavigate();
  const [cookies, setCookie] = useCookies(["product"]);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  // console.log(product);

  const removeItem = (e) => {
    const id = e.target.id;
    dispatch(removeProduct(id));
    console.log(cookies);
    const filteredCookie = cookies.product.filter((product) => product.productId !== id);
    console.log(filteredCookie);
    // const existingCart = cookies.product || [];

    setCookie("product",filteredCookie);
  };

const handleCheckout=()=>{
  handleOpen();
  navigate('/checkout');
}

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={() => handleOpen()}></div>
      <div
        className="bg-white p-4 w-full md:w-1/2 lg:w-1/3 h-full overflow-y-auto relative z-10 rounded-xl"
        style={{ maxHeight: "80vh" }} // Set a max height to allow scrolling if content exceeds
      >
        {product.length === 0 ? (
          <p className="text-center font-semibold m-4 text-xl">No items in Cart !!!</p>
        ) : (
          <div>
            {product.map((item) => (
              <div key={item.product.id} className="border mb-4">
                <img
                  className="float-left w-1/3"
                  src={window.URL.createObjectURL(
                    new Blob([Int8Array.from(item.product.img.data.data)], {
                      type: item.product.img.contentType,
                    })
                  )}
                  alt="product"
                ></img>
                <div className="flex flex-col pl-8">
                  {/* <p>
                    <span className="font-semibold">Category: </span>
                    {item.product.category}
                  </p> */}
                  <p className="mt-2">
                    {/* <span className="font-semibold">Name: </span> */}
                    {item.product.name}
                  </p>
                  <p>
                    {/* <span className="font-semibold">Price: </span> */}
                    {item.product.price}
                    <span className="font-semibold"> $</span>
                  </p>
                  <p>
                    <span className="font-semibold">Quantity: </span>
                    {item.product.quantity}
                  </p>
                  <p>
                    {/* <span className="font-semibold">Color: </span> */}
                    {item.product.color}
                  </p>
                  <button
                    className="w-20 rounded-md p-1 bg-red-600 text-white active:text-red-800 active:bg-white my-2 "
                    id={item.product.id}
                    onClick={removeItem}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        
        <button
          onClick={handleCheckout}
          className={`mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ${
            product.length === 0 ? "opacity-50" : ""
          }`}
          disabled={product.length === 0}
        >
          Checkout
        </button>
 
      </div>
    </div>
  );
}

export default CartItem;
