import Image from 'next/image';

const Hero = ({heading, desc}) => {
    return (
        <div className='h-screen bg-fixed bg-center bg-cover background'>
            <div className='flex items-center justify-center h-screen'>
                <div className='p-5 text-white z-[2]'>
                    <h2 className='font-semibold heading'>{heading}</h2>
                    <div className='pb-8'>
                        <ul className='flex'>
                            <li className='px-4'>
                                <a href='https://www.linkedin.com/in/aosma/'>
                                    <Image src='/icons/linkedinwhite.png' width={40} height={40} alt='LinkedIn Profile'/>
                                </a>
                            </li>
                            <li className='px-4'>
                                <a href='https://github.com/OmnipotentBlade'>
                                    <Image src='/icons/githubwhite.png' width={40} height={40} alt='GitHub Profile'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className='py-5 font-thin desc'>{desc}</p>
                    <div className='pt-6'>
                        <ul>
                            <li className='p-[6px]'>
                                <button className='flex button_about'>
                                    <a className='py-3 pl-[18px] pr-[64.35px]'>About</a>
                                    <div className='py-3 pl-[110px]'>
                                        <Image src='/icons/other/ArrowRight.svg' width={38} height={38} alt='Go' className='invert'/>
                                    </div>
                                </button>
                            </li>
                            <li className='p-[6px]'>
                                <button className='flex button_exp_projects'>
                                <a className='py-3 pl-[18px] pr-[0.5px]'>Experience</a>
                                    <div className='py-3 pl-[110px]'>
                                        <Image src='/icons/other/ArrowRight.svg' width={38} height={38} alt='Go' className='invert'/>
                                    </div>
                                </button>
                            </li>
                            <li className='p-[6px]'>
                                <button className='flex button_exp_projects'>
                                <a className='py-3 pl-[18px] pr-[37.15px]'>Projects</a>
                                    <div className='py-3 pl-[110px]'>
                                        <Image src='/icons/other/ArrowRight.svg' width={38} height={38} alt='Go' className='invert'/>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='py-[-5px]'>
                    <Image src='/AhmedLinkedInPortrait.png' width={400} height={400} alt='Ahmed Osman' className='imageportrait'/>
                </div>
            </div>
        </div>
    );
};

export default Hero;