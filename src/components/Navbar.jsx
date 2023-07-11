'use client'
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const isNavbarScrolled = scrollTop > 0;
          setIsScrolled(isNavbarScrolled);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []
    );

    return (
        <div className={`fixed top-0 left-0 w-full z-[999] ${isScrolled ? 'backdrop-blur-[10px] ease-in' : ''}`}>
            {/* Mobile */}
            <div className='md:hidden flex font-mono p-4'>
                <FaBars size={30} className='invert'/>
                <p className='pt-[3px] pl-3 text-blue-200'>/Home</p>
            </div>
            <div className='hidden md:flex text-white font-mono max-w-[1240px] m-auto justify-center items-center p-3'>
                <ul className='flex'>
                    <li className='p-4'>
                        <Link href='/' className='group hover:brightness-90 relative text-blue-200'>
                            Home
                            <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/about' className='group hover:brightness-90 relative'>
                            About
                            <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/projects' className='group hover:brightness-90 relative'>
                            Projects/Experience
                            <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact' className='group hover:brightness-90 relative'>
                            Contact
                            <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;