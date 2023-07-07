import Image from 'next/image';

const Hero = ({heading, desc}) => {
    return (
        <div className='h-screen bg-fixed bg-center bg-cover background'>
            <div className='flex items-center justify-center h-screen'>
                <div className='p-5 text-white z-[2] ml-[-2rem] mt-[-2rem]'>
                    <h2 className='font-semibold heading'>{heading}</h2>
                    <div>
                        <ul className='flex'>
                            <li className='p-2'>
                                <a href='https://www.linkedin.com/in/aosma/'>
                                    <Image src='/icons/linkedinwhite.png' width={40} height={40} alt='LinkedIn Profile' />
                                </a>
                            </li>
                            <li className='p-2'>
                                <a href='https://github.com/OmnipotentBlade'>
                                    <Image src='/icons/githubwhite.png' width={40} height={40} alt='GitHub Profile' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className='py-5 font-thin desc'>{desc}</p>
                    <div>
                        <ul>
                            <li className='p-[6px]'>
                                <button className=' button_about'>About</button>
                            </li>
                            <li className='p-[6px]'>
                                <button className='px-8 py-2 button_exp_projects'>Experience</button>
                            </li>
                            <li className='p-[6px]'>
                                <button className='px-8 py-2 button_exp_projects'>Projects</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;