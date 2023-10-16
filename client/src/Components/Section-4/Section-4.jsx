import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';

function Section4() {
    return (
        <>
            <div className="bg-slate-300 my-[15%] py-40">
                <div><p className="lg:text-5xl sm:text-3xl font-bold text-center pb-20">Experience Stremlined Shopping With Us</p></div>

                <div className="w-full h-auto flex justify-center flex-wrap lg:gap-4 sm:gap-8">

                    <div className='flex flex-col items-center gap-2 w-[380px]'>
                        <p className="text-3xl font-medium ">Free Delivery</p>
                        <div className='text-5xl'><LocalShippingIcon fontSize='large'></LocalShippingIcon></div>
                        <div className='text-xl p-2 text-center'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit purus quis quam.</p></div>
                    </div>

                    <div className='flex flex-col items-center gap-4 w-96'>
                    <p className="text-3xl font-medium ">Return Anytime</p>
                        <div className='text-5xl'><AssignmentReturnIcon fontSize='large'></AssignmentReturnIcon></div>
                        <div className='text-xl p-2 text-center'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit purus quis quam.</p></div>
                    </div>

                    <div className='flex flex-col items-center gap-4 w-96'>
                    <p className="text-3xl font-medium ">Self Pickup</p>
                        <div className='text-5xl'><LocalShippingIcon fontSize='large'></LocalShippingIcon></div>
                        <div className='text-xl p-2 text-center'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit purus quis quam.</p></div>
                    </div>

                  
                </div>
            </div>
        </>
    );
}
export default Section4;
