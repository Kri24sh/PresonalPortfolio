import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {

  const links = [
    {
      id:1,
      child:(
        <>
        linkedin <FaLinkedin size={35}/>
        </>
      ),
      style:'rounded-tr-md',
      href:'https://www.linkedin.com/in/krish-vaswani-bb5701257'
    },

    {
      id:2,
      child:(
        <>
        GitHub<FaGithub size={35}/>
        </>
      ),
      href:'https://github.com/Kri24sh'
    },
    {
      id:3,
      child:(
        <>
        Mail <HiOutlineMail size={35}/>
        </>
      ),
      href:'mailto:krishvaswani2220@gmail.com'
    },

    {
      id:4,
      child:(
        <>
        Resume <BsFillPersonLinesFill size={35}/>
        </>
      ),
      href:'/Krish-resume.pdf',
      style:'rounded-br-md',
      download:true,
    },
  ]



  return (
    <div className=' hidden xl:flex flex-col left-0 fixed z-20 text-white top-[35%]'>
      <ul>

        {
          links.map((link)=>(
        <li key={link.id} className={' ml-[-100px] hover:ml-[-5px] hover:rounded-lg duration-500 flex justify-between w-40 item-center h-14 px-3 bg-slate-600' + ' ' + link.style}>
          <a href={link.href} className='flex justify-between items-center w-full text-xl'
          download={link.download}
          target='_blank'
          rel='noreferrer'
          >{link.child}</a>  
        </li>
          ))
        }



      </ul>
    </div>
  )
}

export default SocialLinks