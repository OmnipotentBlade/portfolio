'use client'
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'
import { useEffect, useState } from 'react';

const NavBar = ({page}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scroll = window.scrollY;
          const isNavbarScrolled = scroll > 0;
          setIsScrolled(isNavbarScrolled);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []
    );

    return (
        <div className={`${page!=='Home' ? null : 'fixed'} top-0 left-0 w-full z-[999] ${isScrolled ? 'backdrop-blur-[10px] ease-in' : ''}`}>
            {/* Mobile */}
            <div className='md:hidden flex font-mono p-4'>
                <FaBars size={30} className='invert'/>
                <div className='flex pt-[3px] pl-3 tracking-wide'>
                    <span className='px-1 pr-2 text-cyan-300'>Ahmed Osman</span>
                    <span className='pr-2 text-gray-200'>/</span>
                    <p className='text-blue-200'>{page}</p>
                </div>
            </div>
            <div className='hidden md:flex text-white font-mono max-w-[1240px] m-auto justify-center items-center p-3'>
                <ul className='flex'>
                    <li className='p-4 pr-6'>
                        <span className='text-cyan-300 tracking-wide'>Ahmed Osman</span>
                    </li>
                    <li className='p-4'>
                        <Link href='/' className={`group hover:brightness-90 relative ${page==='Home' ? 'text-blue-200' : ''}`}>
                            Home
                            <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/skills-experience' className={`group hover:brightness-90 relative ${page==='Skills/Experience' ? 'text-blue-200' : ''}`}>
                            Skills/Experience
                            <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/projects' className={`group hover:brightness-90 relative ${page==='Projects' ? 'text-blue-200' : ''}`}>
                            Projects
                            <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact' className={`group hover:brightness-90 relative ${page==='Contact' ? 'text-blue-200' : ''}`}>
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