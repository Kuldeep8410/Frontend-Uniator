import { House, Plus, LayoutGrid, Mail, Bell, Search } from 'lucide-react';
import SearchFunction from './search';
import { useState } from 'react';
import { BiExit } from 'react-icons/bi';
import CollaborativeEditorLanding from '../../Landingpage/part2';
import CategoryCards from './categories';
// import MakePosts from '../make-post';




export default function Mainnav({ FetchAllPost, Explore, Makepost }) {
    const [toggle, setToggle] = useState("posts");

    return (
        <div className="h-auto mt-10 mb-10">

            <div className=" left-4 top-15 navbar hidden sm:flex flex-col gap-3 bg-base-100 backdrop-blur-xl fixed z-20 content-center justify-center w-16 h-3/4 md:3/4 border border-gray-200/50 rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 ">


                <div className='hover:rounded-2xl hover:bg-black/30 p-2 items-cente border-gray-500 group relative'>
                    <button onClick={(e) => setToggle("home")}
                        className='cursor-pointer'><House color='gray' size={38} strokeWidth="1.5px" /></button>
                    <span className="absolute left-16 top-1/2 -translate-y-1/2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Home
                    </span>
                </div>

                <div className='hover:rounded-2xl hover:bg-black/30 p-2 items-cente ease-in border-gray-500 group relative'>
                    <button onClick={(e) => { setToggle(toggle == "categories" ? null : "categories") }}
                        className='cursor-pointer'><LayoutGrid color='gray' size={38} strokeWidth="1.5px" /></button>
                    <span className="absolute left-16 top-1/2 -translate-y-1/2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Categories
                    </span>
                </div>

                <div className='hover:rounded-2xl hover:bg-black/30 p-2 items-cente border-gray-500 group relative'>
                    <button
                        onClick={() => setToggle(toggle === "message" ? null : "message")}
                        className='cursor-pointer'><Mail color='gray' size={38} strokeWidth="1.5px" /></button>
                    <span className="absolute left-16 top-1/2 -translate-y-1/2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Messages
                    </span>
                </div>

                <div className='hover:rounded-2xl hover:bg-black/30 p-2 items-center border-gray-500 group relative'>
                    <button className='cursor-pointer'
                        onClick={() => setToggle(toggle === "search" ? null : "search")}

                    ><Search color='gray' size={38} strokeWidth="1.5px" /></button>
                    <span className="absolute left-16 top-1/2 -translate-y-1/2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Search
                    </span>
                </div>

                <div className='hover:rounded-2xl hover:bg-black/30 p-2 items-cente border-gray-500 group relative'>
                    <button className='cursor-pointer'><Bell color='gray' size={38} strokeWidth="1.5px" /></button>
                    <span className="absolute left-16 top-1/2 -translate-y-1/2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Notifications
                    </span>
                </div>

                <div className='bg-amber-500 rounded-2xl p-2 content-center justify-center items-center border-gray-500 group relative'>
                    <button onClick={(e) => { setToggle(toggle == "add new" ? null : "add new") }}
                        className='cursor-pointer'><Plus color='white' size={38} strokeWidth="1.5px" /></button>
                    <span className="absolute left-16 top-1/2 -translate-y-1/2 w-max bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Add New
                    </span>
                </div>

            </div>



            <div className="flex sm:hidden flex-row bg-black/90 backdrop-blur-xl fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 content-center justify-between items-center w-11/12 max-w-md h-20 border border-gray-200/50 rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 px-4">



                <div className='hover:rounded-2xl hover:bg-black/30 p-2 items-cente border-gray-500 group relative'>
                    <button onClick={(e) => setToggle("home")}
                        className='cursor-pointer'><House color='gray' size={38} strokeWidth="1.5px" /></button>
                    <span className="absolute left-16 top-1/2 -translate-y-1/2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Home
                    </span>
                </div>

                <div className='hover:rounded-2xl hover:bg-black/30 p-2 items-cente ease-in border-gray-500 group relative'>
                    <button
                        onClick={(e) => { setToggle(toggle == "categories" ? null : "categories") }}
                        className='cursor-pointer'><LayoutGrid color='gray' size={38} strokeWidth="1.5px" /></button>
                    <span className="absolute left-16 top-1/2 -translate-y-1/2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Message
                    </span>
                </div>

                <div className='bg-amber-500 rounded-full p-2 content-center justify-center items-center border-gray-500 group relative'>
                    <button onClick={(e) => { setToggle(toggle == "add new" ? null : "add new") }}
                        className='cursor-pointer'><Plus color='white' size={38} strokeWidth="1.5px" /></button>
                    <span className="absolute left-16 top-1/2 -translate-y-1/2 w-max bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Add New
                    </span>
                </div>

                <div className='hover:rounded-2xl hover:bg-black/30 p-2 items-cente border-gray-500 group relative'>
                    <button className='cursor-pointer'><Bell color='gray' size={38} strokeWidth="1.5px" /></button>
                    <span className="absolute left-16 top-1/2 -translate-y-1/2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Notifications
                    </span>
                </div>


            </div>


            {toggle === "search" ? (<SearchFunction />) : ""}
            {toggle === "home" ? (<CollaborativeEditorLanding />) : ""}
            {toggle === "categories" ? (<CategoryCards />) : ""}
{/*             {toggle === "add new" ? (<MakePosts />) : ""} */}
            {toggle === "message" ? (<FetchAllPost />) : ""}
            {toggle === "posts" ? (<FetchAllPost />) : ""}

        </div >
    )
}
