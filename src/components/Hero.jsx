'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const Hero = ({heading, desc}) => {
    const router = useRouter(); 

    return (
        <div className='h-screen bg-fixed bg-center bg-cover background'>
            <div className='flex items-center justify-center h-screen'>
                <div className='pl-6 text-white z-[2]'>
                    <h2 className='font-semibold heading text-5xl md:text-[54px] lg:text-[64px] xl:text-[68px] xl:w-[500px]'>{heading}</h2>
                    <div className='pb-8'>
                        <ul className='flex'>
                            <li className='px-4'>
                                <a href='https://www.linkedin.com/in/aosma/'>
                                    <Image src='/icons/socials/linkedinwhite.png' className='hover:brightness-90 transition' width={40} height={40} alt='LinkedIn Profile'/>
                                </a>
                            </li>
                            <li className='px-4'>
                                <a href='https://github.com/OmnipotentBlade'>
                                    <Image src='/icons/socials/githubwhite.png' className='hover:brightness-90 transition' width={40} height={40} alt='GitHub Profile'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className='py-5 font-thin w-[350px] desc leading-normal text-lg md:text-[24px] md:w-[360px] lg:text-[26px] lg:w-[410px] xl:text-[28px] xl:w-[450px]'>{desc}</p>
                    <div className='pt-6'>
                        <ul>
                            <li className='p-[6px]'>
                                <button className='flex button_about transition-all hover:brightness-110' onClick={() => router.push('about')}>
                                    <a className='py-3 pl-[18px] pr-[64.35px]'>About</a>
                                    <div className='py-3 pl-[110px]'>
                                        <Image src='/icons/other/ArrowRight.svg' width={38} height={38} alt='Go' className='invert'/>
                                    </div>
                                </button>
                            </li>
                            <li className='p-[6px]'>
                                <button className='flex button_exp_projects transition-all hover:brightness-125' onClick={() => router.push('/about#experience')}>
                                <a className='py-3 pl-[18px] pr-[0.5px]'>Experience</a>
                                    <div className='py-3 pl-[110px]'>
                                        <Image src='/icons/other/ArrowRight.svg' width={38} height={38} alt='Go' className='invert'/>
                                    </div>
                                </button>
                            </li>
                            <li className='p-[6px]'>
                                <button className='flex button_exp_projects transition-all hover:brightness-125' onClick={() => router.push('/projects')}>
                                <a className='py-3 pl-[18px] pr-[37.15px]'>Projects</a>
                                    <div className='py-3 pl-[110px]'>
                                        <Image src='/icons/other/ArrowRight.svg' width={38} height={38} alt='Go' className='invert'/>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='py-[-5px] p-3 pb-[100px]'>
                    <Image src='/AhmedLinkedInPortrait.png' width={380} height={380} alt='Ahmed Osman' className='imageportrait'/>
                </div>
            </div>
        </div>
    );
};

export default Hero;