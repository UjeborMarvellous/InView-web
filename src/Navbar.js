import React from "react";
import { FaSistrix } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import {RiFlashlightLine} from "react-icons/ri"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {HiOutlineCollection} from "react-icons/hi"
import {BiUser} from "react-icons/bi"

const Nav = () => {

    return ( 
        <nav className="name">
            {/* <img src={img1} alt="loading..." className="w-full absolute" /> */}
            <div className="pb-4 ml-8 mr-8" >
                {/* firstnav */}
                <div className="nav1 flex">
                    <ul className=" mr-auto flex space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide" id="flex">
                        <a href="" className="text-white text-xl ml-16 pt-4 hover:text-yelloe-700 hover:text-4xl"><FaHome/></a>
                        <a href="" className="text-white text-xl ml-16 pt-4 hover:text-yelloe-700 hover:text-4xl"><RiFlashlightLine/></a>
                        <a href="" className="text-white text-xl ml-16 pt-4 hover:text-yelloe-700 hover:text-4xl"><AiOutlineCheckCircle/></a>
                        <a href="" className="text-white text-xl ml-16 pt-4 hover:text-yelloe-700 hover:text-4xl"><HiOutlineCollection/></a>
                        <a href="" className="text-white text-xl ml-16 pt-4 hover:text-yelloe-700 hover:text-4xl"><FaSistrix/></a>
                        <a href="" className="text-white text-xl ml-16 pt-4 hover:text-yelloe-700 hover:text-4xl"><BiUser/></a>
                    </ul>
                    <label className="text-6xl font-bold text-white" id="text-white">!NView</label>
                </div>
                {/* secondnav */}
                <div className="flex whitespace-nowrap">
                    <ul className="flex mr-auto space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                        <li className="text-white text-xl pt-4 hover:border-white hover:border-b-2 hover:duration-75 hover:p-0"><a href="#">Trending</a></li>
                        <li className="text-white text-xl pt-4 hover:border-white hover:border-b-2 hover:duration-75 hover:p-0"><a href="#">Top Rated</a></li>
                        <li className="text-white text-xl pt-4 hover:border-white hover:border-b-2 hover:duration-75 hover:p-0"><a href="#">Action</a></li>
                        <li className="text-white text-xl pt-4 hover:border-white hover:border-b-2 hover:duration-75 hover:p-0"><a href="#">Comedy</a></li>
                        <li className="text-white text-xl pt-4 hover:border-white hover:border-b-2 hover:duration-75 hover:p-0"><a href="#">Horror</a></li>
                        <li className="text-white text-xl pt-4 hover:border-white hover:border-b-2 hover:duration-75 hover:p-0"><a href="#">Romance</a></li>
                        <li className="text-white text-xl pt-4 hover:border-white hover:border-b-2 hover:duration-75 hover:p-0"><a href="#">Mystery</a></li>
                        <li className="text-white text-xl pt-4 hover:border-white hover:border-b-2 hover:duration-75 hover:p-0"><a href="#">Wrestling</a></li>
                        <li className="text-white text-xl pt-4 hover:border-white hover:border-b-2 hover:duration-75 hover:p-0"><a href="#">Boxing</a></li>
                        <li className="pr-24 text-white text-xl pt-4 hover:border-white hover:border-b-2 hover:duration-75 hover:p-0 "><a href="#">Animation</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Nav;