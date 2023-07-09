import Link from 'next/link';

const NavBar = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-5'>
            <div className='flex text-white font-mono max-w-[1240px] m-auto justify-center items-center p-3'>
                <ul className='flex'>
                    <li className='p-4'>
                        <Link href='/' className='group hover:brightness-90 relative text-blue-200'>
                            Home
                            <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='../about' className='group hover:brightness-90 relative'>
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