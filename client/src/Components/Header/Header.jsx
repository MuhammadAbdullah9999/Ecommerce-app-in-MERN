import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet ,Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
import CartItem from '../CartItems/CartItem';


const Header = () => {

  const productLength = useSelector((state) => state.product.length);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open , setOpen]= useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleOpen=()=>{
    setOpen(!open);
  }

  return (
    <>
    
    <nav className="bg-white p-4">
      <div className="mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div className="text-blue-900 font-bold text-xl">Accessories</div>
          {/* Hamburger menu icon */}
          <div className='flex gap-4'>
          <div
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
    
            <svg
            
              className="w-6 h-6 text-blue-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"

            >
            <MenuIcon></MenuIcon>
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
           
      
        
          </div>
          <div className='block md:hidden'>
            <Badge badgeContent={productLength} color="primary"  className='cursor-pointer' onClick={toggleOpen}>
          <ShoppingCartIcon className='text-blue-800' ></ShoppingCartIcon>
        </Badge>
        </div>
        </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center`}
        >
          <ul className="md:flex md:space-x-8 font-medium">
            <li>
              <Link
                className="block text-blue-900 hover:text-slate-300 mt-4 md:inline-block md:mt-0"
                to='/'
              >
                Home
              </Link>
            </li>
            <li>
              <a
                className="block text-blue-900 hover:text-slate-300 mt-4 md:inline-block md:mt-0"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <Link
                className="block text-blue-900 hover:text-slate-300 mt-4 md:inline-block md:mt-0"
                to='/products/AllProducts'
              >
                Products
              </Link>
            </li>
            <li>
              <a
                className="block text-blue-900 hover:text-slate-300 mt-4 md:inline-block md:mt-0"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='flex gap-4 items-center'>
       
        <button className={`${
            isMenuOpen ? 'block mt-4 w-full' : 'hidden'
          } md:block rounded text-white bg-blue-800 w-[100px] h-10 hover:bg-blue-600 active:bg-blue-400 active:text-blue-900`}>Shop Now</button>
    <div className='hidden md:block'>
    <Badge badgeContent={productLength} color="primary"  className='cursor-pointer' onClick={toggleOpen}>
          <ShoppingCartIcon className='text-blue-800' ></ShoppingCartIcon>
        </Badge>
        </div>
    </div>
   
      </div>
    </nav>
 <div>
  {open &&( <CartItem handleOpen={toggleOpen}></CartItem>)}
     
    </div>  
    <Outlet></Outlet>
    </>
  );
};

export default Header;
