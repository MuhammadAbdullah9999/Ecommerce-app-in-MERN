import "./App.css";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Body/Carousel";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
// import Carousel from "./Components/Carousel/Carousel";
// import Card from "./Components/FeaturedProducts/Card";
import CategorySection from "./Components/CategorySection/CategorySection";
// import CategorySlider from "./Components/CategorySection/CategorySlider";
import Section4 from "./Components/Section-4/Section-4";
import Section5 from "./Components/Section-5/Section5";
import Footer from "./Components/Footer/Footer";
import AllProducts from "./Components/Products/AllProducts/AllProducts";
import Headphone from "./Components/Products/Headphones/Headphone";
import Earbuds from "./Components/Products/Earbuds/Earbuds";
import Handfree from "./Components/Products/Handfree/Handfree";
import Speaker from "./Components/Products/Speakers/Speaker";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import CartItem from "./Components/CartItems/CartItem";
import Checkout from "./Components/Checkout/Checkout";
import GetItemFromCookie from "./Components/GetItemFromCookie/GetItemFromCookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <GetItemFromCookie></GetItemFromCookie>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel></Carousel>
                <FeaturedProducts></FeaturedProducts>
                <CategorySection></CategorySection>
                <Section4></Section4>
                <Section5></Section5>
              </>
            }
          ></Route>
          <Route path="/products/AllProducts" element={<AllProducts></AllProducts>}></Route>
          <Route path="/products/Headphone" element={<Headphone></Headphone>}></Route>
          <Route path="/products/Earbuds" element={<Earbuds></Earbuds>}></Route>
          <Route path="/products/Handfree" element={<Handfree></Handfree>}></Route>
          <Route path="/products/Speaker" element={<Speaker></Speaker>}></Route>
          <Route path="/products/productInfo" element={<ProductInfo></ProductInfo>}></Route> 
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>         
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
