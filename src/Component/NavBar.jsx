import React, { useState } from 'react'
import { FaBars ,FaTimes} from "react-icons/fa";
import { Link } from 'react-scroll';
const NavBar = () => {

    const [nav,setnav] = useState(false);

    const links = [
        {id:1 ,Links:"home",},
        {id:2 ,Links:"about",},
        {id:3 ,Links:"Projects",},
        {id:4 ,Links:"Skills",},
        {id:5 ,Links:"contact",},
    ]


return (
    <>
    <nav className=' z-30 flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>

    <h1 className=' h-full flex flex-col justify-center text-7xl font-great ml-2' >krish</h1>


    <ul className=' hidden md:flex' >
        {
            links.map(({id , Links})=>(
                <li key={id} className=' px-4 cursor-pointer capitalize text-lg font-semibold text-gray-500 hover:scale-105 duration-200'><Link to={Links} smooth duration={500}>{Links}</Link></li>
            ))
        }
    </ul>

        <div onClick={()=>{setnav(!nav)}} className=' flex md:hidden  px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 z-10 duration-200'>
        {nav?<FaTimes size={35}/>:<FaBars size={35}/>} 

        </div>
        

        {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        {
            links.map(({id , Links})=>(
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={()=>{setnav(!nav)}} to={Links} duration={500} smooth >{Links}</Link></li>
            ))
        }
        </ul>

        )}



    </nav>
    </>
)
}

export default NavBar
