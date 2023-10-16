import { Buffer } from 'buffers';  
import {useNavigate} from 'react-router-dom';

function Card({category,name,price,img,className,id}){

const blob = new Blob([Int8Array.from(img.data.data)], {type: img.contentType });

const image = window.URL.createObjectURL(blob);

  const key=id;
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/products/productInfo',{state:{key}})
  }
    return(
        <>

        <div className={`${className} w-72 h-96 flex flex-col bg-slate-200 rounded-lg shadow-sm group scale-100 hover:scale-105 overflow-hidden transition-all duration-300 my-4 cursor-pointer`
      }onClick={handleClick}>
        <div className="w-full h-3/5 duration-300 overflow-hidden">
          <img
            className='w-[99%] m-auto h-[99%] transform scale-100 group-hover:scale-105 duration-500 rounded-lg'
            // src={`data:${img.contentType};base64, ${Buffer.from(img.data.data).toString('base64')}`}
            src={image}
            alt=''
          />
        </div>
        <div className='w-full flex flex-col h-2/5 imgs-start pl-4 pt-4 gap-2'>
          <div><h4 className='font-bold mt-2 text-gray-400'>{category}</h4></div>
          <div><h4 className='text-xl'>{name}</h4></div>
          <div><h4 className='text-blue-500'>USD {price}$</h4></div>
        </div>
      </div>
      


      
        </>
    )

}
export default Card;