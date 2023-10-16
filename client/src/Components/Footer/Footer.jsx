import { Outlet } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="bg-slate-900 text-white py-20">
                <div className="flex justify-around flex-wrap gap-8">

                    <div className="w-80 flex flex-col justify-around gap-8">
                        <div><p className="text-2xl font-bold">Cresendo</p></div>
                        <div><p className="text-slate-300">Suspendisse quis sodales nunc. Sed ligula enim, mattis ut sem id, mollis sagittis sapien</p></div>
                        <div><p className="text-lg font-bold">Join Us Today!</p></div>
                        <div>  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your Email" type="text" name="search" />
                        </div>
                        <button className="w-1/3 rounded-lg bg-blue-800 p-2">Subcribe</button>
                        <div><p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p></div>
                    </div>


                    <div className="flex flex-col gap-6">
                        <div><p className="font-bold">Pages</p></div>
                        <div className="w-80 flex flex justify-between">

                        <div className="flex flex-col gap-4">
                            <a className="hover:text-slate-400" href="#1">Home</a>
                            <a className="hover:text-slate-400" href="#1">Products</a>
                            <a className="hover:text-slate-400" href="#1">About</a>
                            <a className="hover:text-slate-400" href="#1">Contact Us</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a className="hover:text-slate-400" href="#1">Shop</a>
                            <a className="hover:text-slate-400" href="#1">Product Category</a>
                            <a className="hover:text-slate-400" href="#1">Policies</a>
                            <a className="hover:text-slate-400" href="#1">Blog</a>
                        </div>

                            </div>

                    </div>
                </div>
            </div>
            
            <div className="bg-slate-800 text-white text-center p-2"><p>Powered by <span className="text-blue-500">Google</span></p></div>
        <Outlet></Outlet>
        </>
    )
}
export default Footer;