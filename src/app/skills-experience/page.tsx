import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from 'next/link';
import { FaJava, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiCplusplus, SiGnubash, SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

export default function Home() {
    const description = "Electrical & Computer Engineering student passionate in Cybersecurity, Robotics, and Electronics.";
  
    return (
      <main className='bg-white'>
        <NavBar page='Skills/Experience'/>
        <div className='flex p-4 text-gray-900 items-center justify-center'>
            <div className='p-4 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]'>
                <div className='p-4'>
                    <h2 className='font-semibold text-[40px]'>About Me</h2>
                    <div className='md:flex'>
                        <div className='flex md:inline justify-center md:justify-normal  md:py-6 px-2'>
                            <div className='w-32 h-32'>
                                <Image src='/assets/AhmedLinkedInPortrait.png' priority={true} width={150} height={150} alt='Ahmed Osman' className='rounded-full ring-2 ring-gray-400'/>
                            </div>
                        </div>
                        <div className='p-4'>
                            <h2 className='flex md:inline justify-center md:justify-normal text-3xl font-semibold'>Ahmed Osman</h2>
                            <p className='flex md:inline text-center md:text-normal py-3'>Hey there! I'm Ahmed, an incoming freshman studying Electrical & Computer Engineering at NYIT this fall. I'm extremely passionate about anything STEM, but my all-time favorite areas/fields  have to be CS, Cybersecurity, Robotics, and Electronics. During my free time, I also enjoy learning about technical topics, but I love playing piano and bass, running, playing sports, and competitively playing Smash. I also come back to my high school to mentor students in Robotics for FRC Team 5599, specifically Software Engineering and leadership topics.</p>
                            <div className='flex md:inline justify-center md:justify-normal py-1'>
                                <h2 className='font-medium'>For more information about me, please visit my
                                <Link href='/contact' className='text-blue-600 hover:brightness-90'> Contact </Link> 
                                page!</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-gray-500'></hr>
                <div className='pt-3 md:flex w-full'>
                    <div className='p-4 justify-center md:max-w-xl'>
                        <h2 className='font-semibold text-[40px] pb-4'>Experience</h2>
                        <div className='p-3 outline outline-gray-300 rounded-lg'>
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
                                    <li>
                                        Mentor members in designing, programming, wiring, and building multiple 100+ lb. robots in order to
                                        compete in FIRST Robotics city-wide and national competitions, helped organize fundraising
                                        campaigns for our team, helped sell items in the aforementioned campaigns, and taught
                                        members the foundations of programming in the Java programming language and advanced
                                        electronics using presentations, informative lectures and hands-on activities and simulations. In
                                        addition, managed global affairs and responsibilities of the team such as event planning, dates,
                                        and project management.
                                    </li>
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
                                        Lead members in designing, programming, wiring, and building multiple 100+ lb. robots in order to
                                        compete in FIRST Robotics city-wide and national competitions, helped organize fundraising
                                        campaigns for our team, helped sell items in the aforementioned campaigns, and taught
                                        members the foundations of programming in the Java programming language and advanced
                                        electronics using presentations, informative lectures and hands-on activities and simulations. In
                                        addition, managed global affairs and responsibilities of the team such as event planning, dates,
                                        and project management.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <h2 className='font-semibold text-[40px] pb-4'>Education</h2>
                        <div className='p-3 outline outline-gray-300 rounded-lg'>
                            <div>
                                <div className='flex justify-between'>
                                    <h3 className='pt-2 px-2 font-medium'>New York Institute of Technology</h3>
                                    <h3 className='p-2 font-[450]'>New York, NY</h3>
                                </div>
                                <h3 className='px-2 text-gray-500'>Electrical & Computer Engineering, B.S.</h3>
                                <h3 className='p-2 font-[450]'>Sep. 2023 - Jun. 2027</h3>
                            </div>
                        </div>
                        <div className='p-3 my-4 outline outline-gray-300 rounded-lg'>
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
                                    Team Co-Captain of FRC Robotics Team, Founder & President of Cybersecurity Club, Volunteer & Member of Cardozo Key Club, National Cyber League (NCL) Representative, BigFuture Ambassador
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <h2 className='font-semibold text-[40px]'>Recognitions/Awards</h2>
                    <div className='p-4 pt-6'>
                        <ul className='list-disc'>
                            <li className='flex'>
                                <div className='justify-center max-w-[54px]'>
                                    <Image src='/icons/other/ncl-logo.png' width={500} height={500} alt='NCL' className='flex'/>
                                    <div className='flex justify-center'>
                                        <div className='my-4 w-px h-28 bg-gray-500'/>
                                    </div>
                                </div>
                                <div className='px-4'>
                                    <h3 className='font-medium'>National Cyber League (NCL) Excellence Award</h3>
                                    <h3 className='text-gray-500'>Issued by Cyber Skyline - Nov. 2022</h3>
                                    <ul className='pl-4 list-disc'>
                                        <li>
                                            <p className='p-2'>
                                                Awarded in recognition of excellence in rigor during the National Cyber League Fall 2022
                                                Individual Game, ranking nationally in the top 500 players, placing 378/6675.
                                            </p>
                                        </li>
                                    </ul>
                                    <h3 className='pt-2 font-medium'>National Cyber League (NCL) High School Power Rankings</h3>
                                    <h3 className='text-gray-500'>Issued by Cyber Skyline - Dec. 2022</h3>
                                    <ul className='pl-4 list-disc'>
                                        <li>
                                            <p className='p-2'>
                                                Placed 9th nationally out of all high schools in the NCL Fall 2022 Power Rankings list for
                                                performance in the Fall 2022 Team Game.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='pt-6 flex'>
                                <div className='justify-center max-w-[54px]'>
                                    <Image src='/icons/other/collegeboard-logo.png' width={500} height={500} alt='CollegeBoard' className='rounded-lg'/>
                                </div>
                                <div className='px-4'>
                                    <h3 className='font-medium'>AP Scholar with Honor</h3>
                                    <h3 className='text-gray-500'>Issued by The College Board - Jul. 2023</h3>
                                    <ul className='pl-4 list-disc'>
                                        <li>
                                            <p className='p-2'>
                                                Granted to students who receive an average score of at least 3.25 on all AP Exams taken, and scores of 3 or higher on four or more of these exams.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='pt-6 flex'>
                                <div className='justify-center max-w-[54px]'>
                                    <Image src='/icons/other/bnchs-logo.jpeg' width={500} height={500} alt='BNCHS'/>
                                </div>
                                <div className='px-4'>
                                    <h3 className='font-medium'>Principal's Honor Roll</h3>
                                    <h3 className='text-gray-500'>Issued by Benjamin N. Cardozo High School - 2021, 2022</h3>
                                    <ul className='pl-4 list-disc'>
                                        <li>
                                            <p className='p-2'>
                                                Awarded for outstanding performance during the semester. (95+% GPA)
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='p-4'>
                    <h2 className='font-semibold text-[40px]'>Programming Languages</h2>
                    <div className='justify-center items-center'>
                        <h2 className='flex pt-4 font-semibold text-2xl justify-center'>Languages</h2>
                        <div className='flex p-4 justify-center items-center'>
                            <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <FaJava size={72}/>
                                <h3 className='pt-2 flex justify-center font-mono'>Java</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2021</h3>
                            </div>
                            <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <SiCplusplus size={72}/>
                                <h3 className='pt-2 flex justify-center font-mono'>C++</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2020</h3>
                            </div>
                            <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <FaPython size={72}/>
                                <h3 className='pt-2 flex justify-center font-mono'>Python</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2019</h3>
                            </div>
                            <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <SiGnubash size={72}/>
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
                    <div className='md:hidden pb-2 flex justify-center items-center'>
                        <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                            <div className='flex justify-center items-center h-[72px]'>
                                <SiJavascript size={60}/>
                            </div>
                            <h3 className='pt-2 flex justify-center font-mono'>JavaScript</h3>
                            <h3 className='pt-1 flex justify-center font-mono'>2022</h3>
                        </div>
                        <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                            <FaHtml5 size={72}/>
                            <h3 className='pt-2 flex justify-center font-mono'>HTML</h3>
                            <h3 className='pt-1 flex justify-center font-mono'>2016</h3>
                        </div>
                        <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                            <FaCss3Alt size={72}/>
                            <h3 className='pt-2 flex justify-center font-mono'>CSS</h3>
                            <h3 className='pt-1 flex justify-center font-mono'>2017</h3>
                        </div>
                    </div>
                    <div className='justify-center items-center'>
                        <h2 className='flex p-2 pb-0 font-semibold text-2xl justify-center'>Frameworks</h2>
                        <div className='flex p-4 justify-center items-center'>
                            <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <div className='flex justify-center items-center w-[72px] h-[72px]'>
                                    <SiNextdotjs size={64}/>
                                </div>
                                <h3 className='pt-2 flex justify-center font-mono'>Next.js</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2022</h3>
                            </div>
                            <div className='p-2 mx-[10px] outline outline-gray-300 rounded-lg'>
                                <div className='flex justify-center'>
                                    <SiTailwindcss size={72}/>
                                </div>
                                <h3 className='pt-2 flex justify-center font-mono'>TailwindCSS</h3>
                                <h3 className='pt-1 flex justify-center font-mono'>2023</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <h2 className='font-semibold text-[40px]'>Technical Skills</h2>
                </div>
            </div>
        </div>
        <Footer desc={description}/>
      </main>
    )
}
