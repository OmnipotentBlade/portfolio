import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToggleParagraph from "../util/ToggleParagraph";
import getRepoInfo from "../util/GetRepoInfo";
import Image from 'next/image';
import lock256 from 'public/icons/projects/256icon.png';
import team5599 from 'public/icons/projects/team5599.png';
import portfolio from '../icon.jpg';
import prgmmgr from 'public/icons/projects/prgmmgr.jpg';
import { LuExternalLink } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
    const description = "Electrical & Computer Engineering student passionate in Cybersecurity, Robotics, and Electronics.";

    return (
        <main className="font-sans bg-[url('/assets/backgroundproj.jpg/')] bg-fixed bg-center bg-cover h-auto">
            <NavBar page='Projects'/>
            <div className='p-4'>
                <div className='min-[896px]:flex justify-center'>
                    <div className='flex justify-center min-[896px]:justify-normal min-[960px]:px-8 min-[1152px]:px-32 py-3 min-[896px]:py-96'>
                        <div>
                            <h1 className='p-2 text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-blue-600'>Projects<span className='hidden md:inline blink bg-clip-text bg-gradient-to-b from-cyan-500 to-blue-600'>_</span></h1>
                            <h1 className='p-1 flex justify-center text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-600'>2021-2023</h1>
                        </div>
                    </div>
                    <div className='px-4 md:px-8 py-8 md:py-2'>
                        <div className='py-2 md:py-4 flex justify-center'>
                            <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-600' id='2023'>2023</h1>
                        </div>
                        <div className='p-4 my-5 bg-gray-900/90 outline outline-cyan-900/30 rounded-lg'>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <div className='hidden md:block p-1'>
                                        <Image src={portfolio} placeholder='blur' width={64} height={64} alt='Website' className='rounded-[14px]'/>
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden p-1'>
                                        <Image src={portfolio} placeholder='blur' width={48} height={48} alt='Website' className='rounded-lg'/>
                                    </div>
                                    <div className='flex items-center px-2 md:px-[10px] md:py-2'>
                                        <div>
                                            <h2 className='text-base md:text-xl font-semibold text-gray-300'>Portfolio Website v1</h2>
                                            <h2 className='text-sm md:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-l from-amber-400 to-amber-500'>This website!</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden md:block px-1 py-3'>
                                    <a href='https://github.com/OmnipotentBlade/portfolio' target='_blank' className='flex text-gray-200 font-mono text-sm items-center hover:brightness-90 transition-all'>
                                        <FaGithub size={28} className='mr-[10px]'/>
                                        View GitHub
                                        <LuExternalLink size={20} className='ml-3'/>
                                    </a>
                                </div>
                                {/* Mobile */}
                                <div className='md:hidden px-1 py-3'>
                                    <a href='https://github.com/OmnipotentBlade/portfolio' target='_blank' className='flex text-gray-200 font-mono text-sm items-center hover:brightness-90 transition-all'>
                                        <FaGithub size={28} className='mr-[10px]'/>
                                        <LuExternalLink size={20}/>
                                    </a>
                                </div>
                            </div>
                            <div className='px-4 pt-3 text-sm md:text-base'>
                                <div className='pb-2 md:pb-3'>
                                    <h3 className='text-gray-500'>July 2023</h3>
                                </div>
                                <div>
                                    <p className='text-gray-400 max-w-[548px]'>
                                        The first version of my personal portfolio website. Built with Next.js & TailwindCSS,
                                        and hosted on Vercel, this site hosts my skills, experience, projects, and methods to
                                        contact me. Fully open-source!
                                    </p>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex py-2 pt-5 font-mono text-xs md:text-sm overflow-x-auto'>
                                        <div className='flex mx-1 bg-black/60 rounded-xl md:w-[104px] h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>TypeScript</span>
                                        </div>
                                        <div className='flex mx-1 bg-black/60 rounded-xl md:w-[84px] h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>Next.js</span>
                                        </div>
                                        <div className='flex mx-1 bg-black/60 rounded-xl md:w-16 h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>React</span>
                                        </div>
                                        <div className='flex mx-1 bg-black/60 rounded-xl md:w-28 h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>TailwindCSS</span>
                                        </div>
                                        <div className='flex mx-1 bg-black/60 rounded-xl md:w-[72px] h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>Vercel</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 bg-gray-900/90 outline outline-cyan-900/30 rounded-lg'>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <div className='hidden md:block p-1'>
                                        <Image src={team5599} placeholder='blur' width={64} height={64} alt='Team5599' className='rounded-[14px]'/>
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden p-1'>
                                        <Image src={team5599} placeholder='blur' width={48} height={48} alt='Team5599' className='rounded-lg'/>
                                    </div>
                                    <div className='flex items-center px-2 md:px-[10px] md:py-2'>
                                        <div>
                                            <h2 className='text-lg md:text-xl font-semibold text-gray-300'>Andromeda</h2>
                                            <h2 className='text-sm md:text-xl font-semibold text-gray-400'>FRC Team 5599 Robot</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden md:block px-1 py-3'>
                                    <a href='https://github.com/Team5599/Robot2023' target='_blank' className='flex text-gray-200 font-mono text-sm items-center hover:brightness-90 transition-all'>
                                        <FaGithub size={28} className='mr-[10px]'/>
                                        View GitHub
                                        <LuExternalLink size={20} className='ml-3'/>
                                    </a>
                                </div>
                                {/* Mobile */}
                                <div className='md:hidden px-1 py-3'>
                                    <a href='https://github.com/Team5599/Robot2023' target='_blank' className='flex text-gray-200 font-mono text-sm items-center hover:brightness-90 transition-all'>
                                        <FaGithub size={28} className='mr-[10px]'/>
                                        <LuExternalLink size={20}/>
                                    </a>
                                </div>
                            </div>
                            <div className='px-4 pt-3 text-sm md:text-base'>
                                <div className='pb-2 md:pb-3'>
                                    <h3 className='text-gray-500'>Jan. 2023 - Apr. 2023</h3>
                                </div>
                                <div className='text-gray-400 max-w-[548px]'>
                                    <ToggleParagraph lines="4" text="Andromeda, Team 5599's 2023 robot for the FIRST Robotics Competition, includes program logic for controller input, robot commands, mechanisms, and a
                                        complete, fully autonomous mode of closed-loop robot self-control which uses advanced
                                        algorithms, calculations, and control theory practices. The project was in collaboration with the team’s dedicated
                                        software engineering division. This was the first robot in the history of the team that used the
                                        advanced “command-based” paradigm, which aided in the overall technical capabilities of the
                                        robot."
                                    />
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex py-2 pt-5 font-mono text-xs md:text-sm overflow-x-auto'>
                                        <div className='flex mx-1 bg-sky-900 rounded-xl md:w-14 h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>Java</span>
                                        </div>
                                        <div className='flex mx-1 bg-sky-900 rounded-xl md:w-[72px] h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>Gradle</span>
                                        </div>
                                        <div className='flex mx-1 bg-sky-900 rounded-xl md:w-[92px] h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>Robotics</span>
                                        </div>
                                        <div className='flex mx-1 bg-sky-900 rounded-xl md:w-[124px] h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200 whitespace-nowrap'>Comp. Vision</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-[28px] md:py-8 flex justify-center'>
                            <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-600' id='2022'>2022</h1>
                        </div>
                        <div className='p-4 bg-gray-900/90 outline outline-cyan-900/30 rounded-lg'>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <div className='hidden md:block p-1'>
                                        <Image src={lock256} placeholder='blur' width={64} height={64} alt='Lock256'/>
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden p-1'>
                                        <Image src={lock256} placeholder='blur' width={48} height={48} alt='Lock256' className='rounded-lg'/>
                                    </div>
                                    <div className='flex items-center px-2 md:px-[10px] py-2'>
                                        <h2 className='text-lg md:text-xl font-semibold text-gray-300'>Lock256</h2>
                                    </div>
                                </div>
                                <div className='hidden md:block px-1 py-3'>
                                    <a href='https://github.com/OmnipotentBlade/Lock256' target='_blank' className='flex text-gray-200 font-mono text-sm items-center hover:brightness-90 transition-all'>
                                        <FaGithub size={28} className='mr-[10px]'/>
                                        View GitHub
                                        <LuExternalLink size={20} className='ml-3'/>
                                    </a>
                                </div>
                                {/* Mobile */}
                                <div className='md:hidden px-1 py-3'>
                                    <a href='https://github.com/OmnipotentBlade/Lock256' target='_blank' className='flex text-gray-200 font-mono text-sm items-center hover:brightness-90 transition-all'>
                                        <FaGithub size={28} className='mr-[10px]'/>
                                        <LuExternalLink size={20}/>
                                    </a>
                                </div>
                            </div>
                            <div className='px-4 pt-3 text-sm md:text-base'>
                                <div className='pb-2 md:pb-3'>
                                    <h3 className='text-gray-500'>Oct. 2021 - Dec. 2022</h3>
                                </div>
                                <div>
                                    <p className='text-gray-400 max-w-[548px]'>
                                        Lock256 is a security-focused password manager utilizing the AES-256 encryption algorithm, which is
                                        implemented in a cybersecurity-conscious method, with a modern-style GUI that contains popular
                                        and convenient features.
                                    </p>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex py-2 pt-5 font-mono text-xs md:text-sm overflow-x-auto'>
                                        <div className='flex mx-1 bg-purple-600 rounded-xl md:w-14 h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>Java</span>
                                        </div>
                                        <div className='flex mx-1 bg-purple-600 rounded-xl md:w-16 h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>Maven</span>
                                        </div>
                                        <div className='flex mx-1 bg-purple-600 rounded-xl md:w-[100px] h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200 whitespace-nowrap'>Swing GUI</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-8 flex justify-center'>
                            <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-600' id='2021'>2021</h1>
                        </div>
                        <div className='p-4 mb-5 bg-gray-900/90 outline outline-cyan-900/30 rounded-lg'>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <div className='hidden md:block p-1'>
                                        <Image src={prgmmgr} placeholder='blur' width={64} height={64} alt='ProgramManager' className='rounded-[14px]'/>
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden p-1'>
                                        <Image src={prgmmgr} placeholder='blur' width={48} height={48} alt='ProgramManager' className='rounded-lg'/>
                                    </div>
                                    <div className='flex items-center px-2 md:px-[10px] py-2'>
                                        <h2 className='text-lg md:text-xl font-semibold text-gray-300'>ProgramManager</h2>
                                    </div>
                                </div>
                                <div className='hidden md:block px-1 py-3'>
                                    <a href='https://github.com/OmnipotentBlade/ProgramManager' target='_blank' className='flex text-gray-200 font-mono text-sm items-center hover:brightness-90 transition-all'>
                                        <FaGithub size={28} className='mr-[10px]'/>
                                        View GitHub
                                        <LuExternalLink size={20} className='ml-3'/>
                                    </a>
                                </div>
                                {/* Mobile */}
                                <div className='md:hidden px-1 py-3'>
                                    <a href='https://github.com/OmnipotentBlade/ProgramManager' target='_blank' className='flex text-gray-200 font-mono text-sm items-center hover:brightness-90 transition-all'>
                                        <FaGithub size={28} className='mr-[10px]'/>
                                        <LuExternalLink size={20}/>
                                    </a>
                                </div>
                            </div>
                            <div className='px-4 pt-3 text-sm md:text-base'>
                                <div className='pb-2 md:pb-3'>
                                    <h3 className='text-gray-500'>Jul. 2021 - Dec. 2021</h3>
                                </div>
                                <div>
                                    <p className='text-gray-400 max-w-[548px]'>
                                        ProgramManger is a simple command-line-based C++ program that is meant to house other simple
                                        command-line programs within it. A notable encapsulated program is the &quot;Password Manager&quot;, which
                                        eventually went on to be the early stages of Lock256 developement (my 2022 project).
                                    </p>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex py-2 pt-5 font-mono text-xs md:text-sm overflow-x-auto'>
                                        <div className='flex mx-1 bg-black/60 rounded-xl md:w-12 h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>C++</span>
                                        </div>
                                        <div className='flex mx-1 bg-black/60 rounded-xl md:w-12 h-6 items-center justify-center'>
                                            <span className='px-2 md:px-0 text-gray-200'>CLI</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-12'/>
                    </div>
                    
                </div>
                <h3 className='flex p-3 justify-end text-gray-400 font-semibold text-sm'>
                    Wes Hicks on
                    <a href='https://unsplash.com/photos/TDDPRyUe0LI' className='hover:brightness-110'>&nbsp;<u>Unsplash</u></a>
                </h3>
            </div>
            <Footer desc={description}/>
        </main>
    )
}