import React from 'react';
import { FaArrowRightLong , FaArrowDownLong } from "react-icons/fa6";
import heroimg from '../assets/Heroimg.png';
import { Link } from 'react-scroll';



const Home = () => {
return (
    <div name ="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 py-10 md:flex-row'>
            <div className=' flex flex-col justify-center h-full'>

                <h2 className='text-3xl sm:text-4xl md:text-7xl font-bold text-white'>I'm a web developer</h2>

                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolorum corporis laboriosam tenetur recusandae. Dolorum officia mollitia dignissimos nobis, quidem vel vitae nam repellat porro quibusdam veniam? Reiciendis libero, dolor deleniti nulla hic itaque.
                </p>
                <div>
                    <Link to='Projects' smooth duration={700} className=' group flex gap-2 justify-center items-center px-6 py-3 hover:scale-105 duration-150 bg-gradient-to-r from-cyan-500 cursor-pointer to-blue-500 h-11 w-fit rounded-xl'>
                        Projects
                        <span className=' group-hover:rotate-90 duration-300'><FaArrowRightLong size={20}/></span>
                    </Link>
                </div>
            </div>

            <div className='m-0'>
                <img src={heroimg}
                alt="My profile pic" 
                className='rounded-2xl mx-auto w-2/3 md:w-full'
                />
            </div>
    
        </div>
    
    
    </div>

)
}

export default Home