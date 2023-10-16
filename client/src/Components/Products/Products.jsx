import Card from "../FeaturedProducts/Card";
import img1 from "./6.png";
import { Link } from "react-router-dom";

function Products( {data,title, Img}) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-around gap-8 p-4 bg-slate-600 text-white rounded-lg m-8">
        <div className="w-[580px] h-full flex flex-col justify-center gap-4">
          <p className="sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {title}
          </p>
          <p className="sm:text-md md:text-lg text-slate-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
            enim ut metus dapibus egestas.
          </p>
        </div>
        <div className="">
          <img className="w-60" src={Img} alt=""></img>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-center lg:justify-start">
        <div className="flex flex-col md:ml-4 gap-2 lg:w-52 mb-4">
          <p className="font-bold">Products Category</p>
          <hr></hr>
          <div className="flex lg:flex-col flex-wrap gap-4 text-lg cursor-pointer">
            <Link to='/products/AllProducts' className="text-blue-800 font-bold">All products</Link>
            <Link to='/products/Headphone' className="hover:text-blue-800">Headphone</Link>
            <Link to='/products/Earbuds' className="hover:text-blue-800">Earbuds</Link>
            <Link to='/products/Speaker' className="hover:text-blue-800">Speakers</Link>
            <Link to='/products/Handfree' className="hover:text-blue-800">Handfree</Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 lg:w-3/4 ml-8">
          {data.map((data, index) => (
            <>
              <Card
                className='md:w-64'
                img={data.img}
                category={data.category}
                name={data.name}
                price={data.price}
                id={data._id}
              ></Card>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
export default Products;
