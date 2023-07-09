import Link from 'next/link';

const NavBar = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-5'>
            <div className='flex text-white max-w-[1240px] m-auto justify-between items-center p-3'>
                <Link href='/'>Home</Link>
                <ul className='flex'>
                    <li>
                        <Link href='../about'>About</Link>
                    </li>
                    <li>
                        <Link href='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;