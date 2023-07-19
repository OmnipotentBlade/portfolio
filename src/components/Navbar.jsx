'use client'
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { useEffect, useState } from 'react';

const NavBar = ({page}) => {
    const [nav, setNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleNav = () => {setNav(!nav);}

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
        <div className={`${page!=='Home' ? 'bg-zinc-900/90' : 'fixed'} top-0 left-0 w-full z-[999] ${isScrolled ? 'backdrop-blur-[10px]' : ''} ${nav ? 'bg-zinc-900 md:bg-transparent transition-all' : 'transition-all'}`}>
            {/* Mobile Menu */}
            <div className={`fixed left-0 top-[62px] w-[65%] h-72 rounded-br-xl ${nav ? 'visible bg-zinc-900/90 transition-all' : 'invisible transition-all'}`}>
                <div className={`p-4 text-white font-mono ${nav ? 'transition-all' : 'hidden transition-all'}`}>
                    <ul className='p-2 pb-3'>
                        <span className='text-gray-400'>About</span>
                        <li className='pt-2 pl-4'>
                            <Link href='/' className={`relative ${page==='Home' ? 'text-blue-200' : ''}`}>
                                Home
                                <span className='absolute opacity-0 transition-opacity'>_</span>
                            </Link>
                        </li>
                        <li className='pt-2 pl-4'>
                            <Link href='/skills-experience' className={`group hover:brightness-90 relative ${page==='Skills/Experience' ? 'text-blue-200' : ''}`}>
                                Skills/Experience
                                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                            </Link>
                        </li>
                        <li className='pt-2 pl-4'>
                            <Link href='/projects' className={`group hover:brightness-90 relative ${page==='Projects' ? 'text-blue-200' : ''}`}>
                                Projects
                                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className='p-2 pt-3'>
                        <span className='text-gray-400'>Contact Me</span>
                        <li className='pt-2 pl-4'>
                            <Link href='/contact' className={`group hover:brightness-90 relative ${page==='Contact' ? 'text-blue-200' : ''}`}>
                                Contact
                                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Mobile Navbar */}
            <div className='md:hidden flex font-mono p-4'>
                <div onClick={handleNav} className='hover:brightness-90 ease-in'>
                    {nav ? 
                        <GrClose size={30} className='invert'/>
                    :
                        <FaBars size={30} className='invert'/>
                    }
                </div>
                <div className='flex pt-[3px] pl-3 tracking-wide'>
                    <span className='px-1 pr-2 text-cyan-300'>Ahmed Osman</span>
                    <span className='pr-2 text-gray-200'>/</span>
                    <p className={`text-blue-200 ${page.length > 10 ? 'text-sm pt-[2px]' : null}`}>{page}</p>
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