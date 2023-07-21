import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portrait from 'public/assets/AhmedLinkedInPortrait.png';
import Image from "next/image";
import Link from 'next/link';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiGnubash, SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import ToggleParagraph from "../util/ToggleParagraph";

export default function SkillsExp() {
    const description = "Electrical & Computer Engineering student passionate in Cybersecurity, Robotics, and Electronics.";

    return (
      <main className='bg-white'>
        <NavBar page='Skills/Experience'/>
        <div className='flex p-4 text-gray-900 items-center justify-center'>
            <div className='md:p-4 lg:px-24 xl:px-72'>
                <div className='p-4'>
                    <h2 className='flex md:block pb-4 md:pb-0 justify-center md:justify-normal font-semibold text-3xl md:text-[40px]' id='about'>About Me</h2>
                    <div className='md:flex p-4'>
                        <div className='flex md:block justify-center md:justify-normal md:py-6 px-2'>
                            <div className='w-32 h-32'>
                                <Image src={portrait} priority={true} placeholder='blur' width={150} height={150} alt='Ahmed Osman' className='rounded-full ring-2 ring-gray-400'/>
                            </div>
                        </div>
                        <div className='p-4'>
                            <h2 className='flex md:block justify-center md:justify-normal text-2xl md:text-3xl font-semibold'>Ahmed Osman</h2>
                            <p className='flex md:block text-center md:text-start text-sm md:text-base py-3'>Hey there! I&apos;m Ahmed, an incoming freshman studying Electrical & Computer Engineering at NYIT this Fall. I&apos;m extremely passionate about anything STEM, but my all-time favorite areas/fields  have to be CS, Cybersecurity, Robotics, and Electronics. During my free time, I also enjoy learning about technical topics, but I love playing piano and bass, running, playing sports, and competitively playing Smash. I also come back to my high school to mentor students in Robotics for FRC Team 5599, specifically Software Engineering and leadership topics.</p>
                            <div className='flex md:block text-center md:text-start py-1'>
                                <h2 className='font-medium text-sm md:text-base'>
                                    For more information about me, please visit my
                                    <Link href='/contact' className='text-blue-600 hover:brightness-90'> Contact </Link> 
                                    page!
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-gray-500 mx-4 md:mx-0'/>
                <div className='justify-center'>
                    <div className='p-4 pt-6 justify-center'>
                        <h2 className='flex pb-4 md:pb-8 md:block justify-center md:justify-normal font-semibold text-3xl md:text-[40px]' id='exp'>Experience</h2>
                        <div className='p-3 outline outline-gray-300 rounded-lg text-sm md:text-base'>
                            <div>
                                <div className='flex justify-between'>
                                    <h3 className='pt-2 font-medium'>FIRST® Robotics Competition (FRC) Mentor</h3>
                                    <h3 className='pt-2 font-[450]'>Bayside, NY</h3>
                                </div>
                                <h3>Team 5599 - &quot;The Sentinels&quot;</h3>
                                <h3 className='font-[450]'>Jun. 2023 - <span className='italic'>current</span></h3>
                            </div>
                            <div className='flex p-4'>
                                <ul className='pl-2 list-disc'>
                                    {/* <li>
                                        <ToggleParagraph text='Mentor members in designing, programming, wiring, and building multiple 100+ lb. robots in order to
                                            compete in FIRST Robotics city-wide and national competitions, helped organize fundraising
                                            campaigns for our team, helped sell items in the aforementioned campaigns, and taught
                                            members the foundations of programming in the Java programming language and advanced
                                            electronics using presentations, informative lectures and hands-on activities and simulations. In
                                            addition, managed global affairs and responsibilities of the team such as event planning, dates,
                                            and project management.'
                                        />
                                    </li> */}
                                </ul>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <h3 className='pt-2 font-medium'>FIRST® Robotics Competition (FRC) Team Co-Captain</h3>
                                    <h3 className='pt-2 font-[450]'>Bayside, NY</h3>
                                </div>
                                <h3 className='text-gray-500'>Leader of Programming, Electronics, and Pneumatics</h3>
                                <h3 className='font-[450]'>Oct. 2021 - Jun. 2023</h3>
                            </div>
                            <div className='flex p-4'>
                                <ul className='pl-2 list-disc'>
                                    <li>
                                        <ToggleParagraph lines="3" text='Lead members in designing, programming, wiring, and building multiple 100+ lb. robots in order to
                                            compete in FIRST Robotics city-wide and national competitions, helped organize fundraising
                                            campaigns for our team, helped sell items in the aforementioned campaigns, and taught
                                            members the foundations of programming in the Java programming language and advanced
                                            electronics using presentations, informative lectures and hands-on activities and simulations. In
                                            addition, managed global affairs and responsibilities of the team such as event planning, dates,
                                            and project management.'
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 md:pt-6'>
                        <h2 className='flex md:block justify-center md:justify-normal font-semibold text-3xl md:text-[40px] pb-4'>Education</h2>
                        <div className='justify-center md:pt-4'>
                            <div className='p-2 md:p-3 outline outline-gray-300 rounded-lg text-sm md:text-base'>
                                <div>
                                    <div className='flex justify-between'>
                                        <h3 className='pt-2 px-2 font-medium'>New York Institute of Technology</h3>
                                        <h3 className='p-2 font-[450]'>New York, NY</h3>
                                    </div>
                                    <h3 className='px-2 text-gray-500'>Electrical & Computer Engineering, B.S.</h3>
                                    <h3 className='p-2 font-[450]'>Sep. 2023 - Jun. 2027</h3>
                                </div>
                            </div>
                            <div className='p-2 md:p-3 my-4 outline outline-gray-300 rounded-lg text-sm md:text-base'>
                                <div>
                                    <div className='flex justify-between'>
                                        <h3 className='pt-2 px-2 font-medium'>Benjamin N. Cardozo High School</h3>
                                        <h3 className='p-2 font-[450]'>Bayside, NY</h3>
                                    </div>
                                    <h3 className='px-2 text-gray-500'>PLTW Computer Science Program/Track</h3>
                                    <h3 className='p-2 font-[450]'>Sep. 2019 - Jun. 2023</h3>
                                </div>
                                <div className='flex p-2 px-4'>
                                    <ul className='pl-2 list-disc'>
                                        <li>
                                            Team Co-Captain of FRC Robotics Team 5599, Founder & President of Cybersecurity Club, Volunteer & Member of Cardozo Key Club, National Cyber League (NCL) Representative, BigFuture Ambassador
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <h2 className='flex pb-2 md:block justify-center md:justify-normal font-semibold text-3xl md:text-[40px]'>Recognitions/Awards</h2>
                    <div className='p-2 pt-6 md:py-8 md:px-10'>
                        <ul className='list-disc'>
                            <li className='flex text-[15px] md:text-base'>
                                {/* Mobile */}
                                <div className='md:hidden justify-center'>
                                    <Image src='/icons/other/collegeboard-logo.png' width={48} height={48} alt='CollegeBoard' className='rounded-lg'/>
                                </div>
                                <div className='hidden md:block justify-center'>
                                    <Image src='/icons/other/collegeboard-logo.png' width={54} height={54} alt='CollegeBoard' className='rounded-lg'/>
                                </div>
                                <div className='px-4 max-w-[290px] md:max-w-2xl'>
                                    <h3 className='font-medium'>AP Scholar</h3>
                                    <div className='text-gray-500 md:flex'>
                                        <h3>Issued by The College Board</h3>
                                        <h3 className='hidden md:inline'>&nbsp;-&nbsp;</h3>
                                        <h3>Jul. 2023</h3>
                                    </div>
                                    <ul className='pt-2 pl-5 md:pl-8 list-disc'>
                                        <li>
                                            <p className='text-sm md:text-[15px]'>
                                                Awarded in demonstration of outstanding college-level achievement through their performance on multiple AP Exams.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='pt-6 flex'>
                                {/* Mobile */}
                                <div className='md:hidden justify-center'>
                                    <Image src='/icons/other/ncl-logo.png' width={48} height={48} alt='NCL'/>
                                </div>
                                <div className='hidden md:block justify-center'>
                                    <Image src='/icons/other/ncl-logo.png' width={54} height={54} alt='NCL'/>
                                </div>
                                <div className='px-4 max-w-[290px] md:max-w-2xl text-[15px] md:text-base'>
                                    <h3 className='font-medium'>National Cyber League (NCL) High School Power Rankings</h3>
                                    <div className='text-gray-500 md:flex'>
                                        <h3>Issued by Cyber Skyline</h3>
                                        <h3 className='hidden md:inline'>&nbsp;-&nbsp;</h3>
                                        <h3>Dec. 2022</h3>
                                    </div>
                                    <ul className='pt-2 pl-5 md:pl-8 list-disc'>
                                        <li>
                                            <p className='text-sm md:text-[15px]'>
                                                Placed 9th nationally out of all high schools in the NCL Fall 2022 Power Rankings list for
                                                performance in the Fall 2022 Team Game.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='flex pt-6'>
                                {/* Mobile */}
                                <div className='md:hidden justify-center'>
                                    <Image src='/icons/other/ncl-logo.png' width={48} height={48} alt='NCL'/>
                                </div>
                                <div className='hidden md:block justify-center'>
                                    <Image src='/icons/other/ncl-logo.png' width={54} height={54} alt='NCL'/>
                                </div>
                                <div className='px-4 max-w-[290px] md:max-w-2xl text-[15px] md:text-base'>
                                    <h3 className='font-medium'>National Cyber League (NCL) Excellence Award</h3>
                                    <div className='text-gray-500 md:flex'>
                                        <h3>Issued by Cyber Skyline</h3>
                                        <h3 className='hidden md:inline'>&nbsp;-&nbsp;</h3>
                                        <h3>Nov. 2022</h3>
                                    </div>
                                    <ul className='pt-2 pl-5 md:pl-8 list-disc'>
                                        <li>
                                            <p className='text-sm md:text-[15px]'>
                                                Awarded in recognition of excellence in rigor during the National Cyber League Fall 2022
                                                Individual Game, ranking nationally in the top 500 players, placing 378/6675.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='pt-6 flex text-[15px] md:text-base'>
                                {/* Mobile */}
                                <div className='md:hidden justify-center'>
                                    <Image src='/icons/other/bnchs-logo.jpeg' width={48} height={48} alt='BNCHS'/>
                                </div>
                                <div className='hidden md:block justify-center'>
                                    <Image src='/icons/other/bnchs-logo.jpeg' width={54} height={54} alt='BNCHS'/>
                                </div>
                                <div className='px-4 max-w-[290px] md:max-w-2xl'>
                                    <h3 className='font-medium'>Principal&apos;s Honor Roll</h3>
                                    <div className='text-gray-500 md:flex'>
                                        <h3>Issued by Benjamin N. Cardozo High School</h3>
                                        <h3 className='hidden md:inline'>&nbsp;-&nbsp;</h3>
                                        <h3>2021 & 2022</h3>
                                    </div>
                                    <ul className='pt-2 pl-5 md:pl-8 list-disc'>
                                        <li>
                                            <p className='text-sm md:text-[15px]'>
                                                Awarded for outstanding performance during the semester. (100.12 GPA)
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='p-2 text-sm'>
                    <h2 className='flex pb-4 md:block justify-center md:justify-normal font-semibold text-[26px] md:text-[40px]'>Programming Languages</h2>
                    <div className='justify-center items-center'>
                        <h2 className='flex pt-4 text-gray-500 font-semibold text-xl md:text-2xl justify-center'>Languages</h2>
                        <div className='flex p-4 justify-center items-center'>
                            <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <div className='hidden md:inline'>
                                    <FaJava size={72}/>
                                </div>
                                {/* Mobile */}
                                <div className='md:hidden'>
                                    <FaJava size={48}/>
                                </div>
                                <h3 className='pt-2 flex justify-center font-mono'>Java</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2021</h3>
                            </div>
                            <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <div className='hidden md:inline'>
                                    <SiCplusplus size={72}/>
                                </div>
                                {/* Mobile */}
                                <div className='md:hidden'>
                                    <SiCplusplus size={48}/>
                                </div>
                                <h3 className='pt-2 flex justify-center font-mono'>C++</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2020</h3>
                            </div>
                            <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <div className='hidden md:inline'>
                                    <FaPython size={72}/>
                                </div>
                                {/* Mobile */}
                                <div className='md:hidden'>
                                    <div className='flex justify-center items-center'>
                                        <FaPython size={48}/>
                                    </div>
                                </div>
                                <h3 className='pt-2 flex justify-center font-mono'>Python</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2019</h3>
                            </div>
                            <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <div className='hidden md:inline'>
                                    <SiGnubash size={72}/>
                                </div>
                                {/* Mobile */}
                                <div className='md:hidden'>
                                    <SiGnubash size={48}/>
                                </div>
                                <h3 className='pt-2 flex justify-center font-mono'>Bash</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2022</h3>
                            </div>
                            <div className='hidden md:inline m-1 w-8 h-px bg-gray-500'/>
                            <div className='hidden md:inline p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <div className='flex justify-center items-center h-[72px]'>
                                    <SiJavascript size={60}/>
                                </div>
                                <h3 className='pt-2 flex justify-center font-mono'>JavaScript</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2022</h3>
                            </div>
                            <div className='hidden md:inline p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <FaHtml5 size={72}/>
                                <h3 className='pt-2 flex justify-center font-mono'>HTML</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2016</h3>
                            </div>
                            <div className='hidden md:inline p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <FaCss3Alt size={72}/>
                                <h3 className='pt-2 flex justify-center font-mono'>CSS</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2017</h3>
                            </div>
                        </div>
                    </div>
                    {/* Mobile */}
                    <div className='md:hidden pb-2 flex justify-center items-center'>
                        <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                            <div className='flex justify-center items-center h-[48px]'>
                                <SiJavascript size={42}/>
                            </div>
                            <h3 className='pt-2 flex justify-center font-mono'>JavaScript</h3>
                            <h3 className='pt-1 flex justify-center font-mono'>2022</h3>
                        </div>
                        <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                            <FaHtml5 size={48}/>
                            <h3 className='pt-2 flex justify-center font-mono'>HTML</h3>
                            <h3 className='pt-1 flex justify-center font-mono'>2016</h3>
                        </div>
                        <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                            <FaCss3Alt size={48}/>
                            <h3 className='pt-2 flex justify-center font-mono'>CSS</h3>
                            <h3 className='pt-1 flex justify-center font-mono'>2017</h3>
                        </div>
                    </div>
                    <div className='md:flex md:justify-center'>
                        <div className='justify-center items-center'>
                            <h2 className='flex p-2 pb-0 text-gray-500 font-semibold text-xl md:text-2xl justify-center'>Frameworks</h2>
                            <div className='flex p-4 justify-center items-center'>
                                <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                    <div className='hidden md:inline'>
                                        <div className='flex justify-center items-center w-[72px] h-[72px]'>
                                            <SiNextdotjs size={64}/>
                                        </div>
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden'>
                                        <div className='flex justify-center items-center'>
                                            <SiNextdotjs size={48}/>
                                        </div>
                                    </div>
                                    <h3 className='pt-2 flex justify-center font-mono'>Next.js</h3>
                                    <h3 className='pt-1 flex justify-center font-mono'>2022</h3>
                                </div>
                                <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                    <div className='hidden md:inline'>
                                        <div className='flex justify-center'>
                                            <SiTailwindcss size={72}/>
                                        </div>
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden'>
                                        <div className='flex justify-center'>
                                            <SiTailwindcss size={48}/>
                                        </div>
                                    </div>
                                    <h3 className='pt-2 flex justify-center font-mono'>TailwindCSS</h3>
                                    <h3 className='pt-1 flex justify-center font-mono'>2023</h3>
                                </div>
                            </div>
                        </div>
                        <div className='justify-center items-center'>
                            <h2 className='flex p-2 pb-0 text-gray-500 font-semibold text-xl md:text-2xl justify-center'>Version Control</h2>
                            <div className='flex p-4 justify-center items-center'>
                                <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                    <div className='hidden md:inline'>
                                        <div className='flex justify-center items-center'>
                                            <FaGitAlt size={72}/>
                                        </div>
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden'>
                                        <div className='flex justify-center items-center'>
                                            <FaGitAlt size={48}/>
                                        </div>
                                    </div>
                                    <h3 className='pt-2 flex justify-center font-mono'>Git</h3>
                                    <h3 className='pt-1 flex justify-center font-mono'>2021</h3>
                                </div>
                                <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                    <div className='hidden md:inline'>
                                        <div className='flex justify-center'>
                                            <FaGithub size={72}/>
                                        </div>
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden'>
                                        <div className='flex justify-center'>
                                            <FaGithub size={48}/>
                                        </div>
                                    </div>
                                    <h3 className='pt-2 flex justify-center font-mono'>GitHub</h3>
                                    <h3 className='pt-1 flex justify-center font-mono'>2021</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='p-4'>
                    <h2 className='flex md:block justify-center md:justify-normal font-semibold text-3xl md:text-[40px]'>Technical Skills</h2>
                    <div>
                        
                    </div>
                </div> */}
            </div>
        </div>
        <Footer desc={description}/>
      </main>
    )
}
