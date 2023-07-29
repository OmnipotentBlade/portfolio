import Link from 'next/link';
import Image from 'next/image';

const Footer = ({desc}) => {
    return (
        <footer className='bg-zinc-900/90 text-white font-mono p-4'>
            <div className='flex flex-col md:flex-row items-center md:justify-center'>
                <div className='p-2 md:w-96'>
                    <div className='flex'>
                        <p className='pr-3 md:pr-0 text-lg text-cyan-300 tracking-wide brightness-95'>Ahmed Osman</p>
                        {/* Mobile */}
                        <ul className='flex md:hidden brightness-75'>
                            <li className='px-2'>
                                <a href='https://www.linkedin.com/in/aosma/'>
                                    <Image src='/icons/socials/linkedinwhite.png' className='hover:brightness-90 transition' width={28} height={28} alt='LinkedIn Profile'/>
                                </a>
                            </li>
                            <li className='px-2'>
                                <a href='https://github.com/OmnipotentBlade'>
                                    <Image src='/icons/socials/githubwhite.png' className='hover:brightness-90 transition' width={28} height={28} alt='GitHub Profile'/>
                                </a>
                            </li>
                            <li className='px-[6px]'>
                                <a href='mailto:ahmed@aosman.app'>
                                    <Image src='/icons/socials/email.svg' className='hover:brightness-90 transition' width={30} height={30} alt='Email'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className='hidden md:flex w-[300px] md:w-auto leading-relaxed md:text-sm pt-3 md:py-3 brightness-90'>{desc}</p>
                    <div className='hidden md:block brightness-75'>
                        <ul className='flex'>
                            <li className='px-2'>
                                <a href='https://www.linkedin.com/in/aosma/'>
                                    <Image src='/icons/socials/linkedinwhite.png' className='hover:brightness-90 transition' width={28} height={28} alt='LinkedIn Profile'/>
                                </a>
                            </li>
                            <li className='px-2'>
                                <a href='https://github.com/OmnipotentBlade'>
                                    <Image src='/icons/socials/githubwhite.png' className='hover:brightness-90 transition' width={28} height={28} alt='GitHub Profile'/>
                                </a>
                            </li>
                            <li className='px-[6px]'>
                                <a href='mailto:ahmed@aosman.app'>
                                    <Image src='/icons/socials/email.svg' className='hover:brightness-90 transition' width={30} height={30} alt='Email'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex md:flex-none'>
                    <div className="py-4 px-2 md:pl-12">
                        <p className='tracking-wide brightness-95'>About</p>
                        <ul className='py-2 text-sm brightness-[.6]'>
                            <li className='p-[2px]'>
                                <Link href='/' className='group hover:brightness-90'>
                                    Home
                                    <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                                </Link>
                            </li>
                            <li className='p-[2px]'>
                                <Link href='/skills-experience#about' className='group hover:brightness-90'>
                                    About Me
                                    <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                                </Link>
                            </li>
                            <li className='p-[2px]'>
                                <Link href='/skills-experience#exp' className='group hover:brightness-90'>
                                    Skills/Experience
                                    <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                                </Link>
                            </li>
                            <li className='p-[2px]'>
                                <Link href='/projects' className='group hover:brightness-90'>
                                    Projects
                                    <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='py-4 px-2'>
                        <p className='tracking-wide brightness-95'>Contact</p>
                        <ul className='py-2 text-sm brightness-[.6]'>
                            <li className='p-[2px]'>
                                <Link href='/contact' className='group hover:brightness-90'>
                                    Contact Me
                                    <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-sm text-center brightness-50'>
                <p>Copyright © 2023 Ahmed Osman</p>
            </div>
        </footer>
    );
};

export default Footer;