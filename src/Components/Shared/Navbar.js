import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import img from '../Images/Cycle icon.png'
import CustomLink from './CustomeLink';

const Navbar = () => {
    let Links = [
        { name: "Review", link:"/review" },
        { name: "Dashboard", link: "/dashboard" },
        { name: "Blogs", link: "/blogs" },
        { name: "About", link: "/about" },
      ];
      let [open, setOpen] = useState(false);
    return (
        <div className='sticky top-0 left-0 z-50 font-[Poppins] py-6 text-center bg-gray-100 lg:px-24 px-4'>
            <div className='flex items-center justify-between'>
                <div className='cursor-pointer'>
                    <Link to="/"><img src={img} alt="" /></Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-2xl absolute right-6 top-6 cursor-pointer lg:hidden'>
                    <i className={`${open ? 'fa-solid fa-x' : 'fa-solid fa-bars'} text-gray-700`}></i>
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-8 absolute lg:static bg-gray-100 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'} lg:opacity-100`}>
                    {
                        Links.map(link => <li
                          className='px-4 text-xl lg:my-0 my-5 text-black'
                          key={link.name}>
                          <CustomLink to={link.link}>{link.name}</CustomLink>
                      </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;