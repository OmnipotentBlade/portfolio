import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
    const description = "Electrical & Computer Engineering student passionate in Cybersecurity, Robotics, and Electronics.";
  
    return (
      <main className='bg-white'>
        <NavBar page='Skills/Experience'/>
        <div className='flex p-4 text-gray-900 items-center justify-start'>
            <div className='p-4'>
                <div className='p-4'>
                    <h2 className='font-semibold text-[40px]'>About Me</h2>
                    <div className='flex'>
                        <div className='flex p-4'>
                            <Image src='/assets/AhmedLinkedInPortrait.png' priority={true} width={150} height={150} alt='Ahmed Osman' className='rounded-full ring-2 ring-gray-400'/>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-3xl font-semibold'>Ahmed Osman</h2>
                            <p className='py-3'>Incoming Freshman @ NYIT, studying Electrical & Computing Engineering.</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-1/2 p-4 justify-center'>
                        <h2 className='font-semibold text-[40px] pb-4'>Experience</h2>
                        <div className='p-3 outline outline-gray-300 rounded-lg'>
                            <div>
                                <div className='flex justify-between'>
                                    <h3 className='pt-2 font-medium'>FIRST® Robotics Competition (FRC) Mentor</h3>
                                    <h3 className='p-2 font-[450]'>Bayside, NY</h3>
                                </div>
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
                        </div>
                    </div>
                    <div className='w-1/2 p-4'>
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
                    <h2 className='font-semibold text-[40px]'>Technical Skills</h2>
                </div>
                <div className='p-4'>
                    <h2 className='font-semibold text-[40px]'>Programming Languages</h2>

                </div>
            </div>
        </div>
        <Footer desc={description}/>
      </main>
    )
}
