'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import {CiMail} from 'react-icons/ci'

const Hero = ({heading, desc}) => {
    const router = useRouter(); 

    return (
        <div className='bg-scroll md:bg-fixed bg-center bg-cover background'>
            <div className='flex items-center justify-center h-[120vh] md:h-screen'>
                <div className='justify-center md:pl-6 text-white z-[2]'>
                    {/* Mobile */}
                    <div className='flex justify-center md:hidden'>
                        <Image src='/assets/AhmedLinkedInPortrait.png' priority={true} width={200} height={200} alt='Ahmed Osman' className='imageportrait'/>
                    </div>
                    <div className='flex md:inline justify-center md:justify-normal'>
                        <h2 className='justify-center w-[320px] font-semibold heading text-[40px] min-[768px]:text-5xl min-[815px]:text-[54px] lg:text-[64px] xl:text-[68px] xl:w-[500px]'>{heading}</h2>
                    </div>
                    <div className='pb-4 md:pb-8'>
                        <ul className='flex justify-center md:justify-normal'>
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
                            <li className='px-3'>
                                <a href='mailto:ahmed@aosman.app'>
                                    <Image src='/icons/socials/email.svg' className='hover:brightness-90 transition' width={42} height={42} alt='Email'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex text-center md:text-left justify-center md:justify-normal'>
                        <p className='justify-center py-5 inline-block font-thin w-[338px] desc leading-normal text-lg md:text-[24px] md:w-[360px] lg:text-[26px] lg:w-[410px] xl:text-[28px] xl:w-[450px]'>{desc}</p>
                    </div>
                    <div className='pt-6 md:pb-0'>
                        <ul>
                            <li className='max-md:flex justify-center md:justify-normal p-[6px]'>
                                <button className='flex max-md:w-[300px] max-md:h-[58px] button_about transition-all hover:brightness-110' onClick={() => router.push('/skills-experience#about')}>
                                    <a className='py-3 pl-[18px] pr-[64.35px] max-md:text-2xl'>About</a>
                                    <div className='py-3 pl-[100px] md:pl-[110px]'>
                                        <Image src='/icons/other/ArrowRight.svg' width={38} height={38} alt='Go' className='invert'/>
                                    </div>
                                </button>
                            </li>
                            <li className='max-md:flex justify-center md:justify-normal p-[6px]'>
                                <button className='flex max-md:w-[300px] max-md:h-[58px] button_exp_projects transition-all hover:brightness-125' onClick={() => router.push('/skills-experience#exp')}>
                                    <a className='py-3 pl-[18px] pr-[0.5px] max-md:text-2xl'>Skills/Experience</a>
                                    <div className='py-3 pl-[42px] md:pl-[32px]'>
                                        <Image src='/icons/other/ArrowRight.svg' width={38} height={38} alt='Go' className='invert'/>
                                    </div>
                                </button>
                            </li>
                            <li className='max-md:flex justify-center md:justify-normal p-[6px]'>
                                <button className='flex max-md:w-[300px] max-md:h-[58px] button_exp_projects transition-all hover:brightness-125' onClick={() => router.push('/projects')}>
                                    <a className='py-3 pl-[18px] pr-[37.15px] max-md:text-2xl'>Projects</a>
                                    <div className='py-3 pl-[104px] md:pl-[110px]'>
                                        <Image src='/icons/other/ArrowRight.svg' width={38} height={38} alt='Go' className='invert'/>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='hidden md:block py-[-5px] p-3 pb-[100px]'>
                    <Image src='/assets/AhmedLinkedInPortrait.png' priority={true} width={380} height={380} alt='Ahmed Osman' className='imageportrait'/>
                </div>
            </div>
        </div>
    );
};

export default Hero;