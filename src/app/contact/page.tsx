import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function Contact() {
    const description = "Electrical & Computer Engineering student passionate in Cybersecurity, Robotics, and Electronics.";
  
    return (
        <main className="font-sans">
            <NavBar page='Contact'/>
            <div className="flex flex-col p-4 bg-[url('/assets/backgroundcontact.jpg/')] bg-scroll bg-center bg-cover h-[110vh] md:h-[80vh]">
                <div className='p-4 pb-2'>
                    <div className='flex justify-center items-center'>
                        <h1 className='flex justify-center px-6 py-8 pb-6 text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600'>Contact Me</h1>
                    </div>
                    <div className='flex justify-center pb-4'>
                        <ul className='flex justify-center md:justify-normal md:brightness-[.8]'>
                            <li className='px-4'>
                                <a href='https://www.linkedin.com/in/aosma/'>
                                    <Image src='/icons/socials/linkedinwhite.png' className='hover:brightness-[.7] transition' width={40} height={40} alt='LinkedIn Profile'/>
                                </a>
                            </li>
                            <li className='px-3'>
                                <a href='mailto:ahmed@aosman.app'>
                                    <Image src='/icons/socials/email.svg' className='hover:brightness-90 transition' width={42} height={42} alt='Email'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex p-4 justify-center items-center'>
                        <div className='p-4 md:w-1/2 lg:w-2/5 bg-gray-800/50 outline outline-cyan-900/70 rounded-xl'>
                            <div className='flex justify-between'>
                                <p className='p-2 text-gray-300 text-center font-inter text-lg md:text-xl'>
                                    If you want to get in touch with me, or have any questions, concerns, or inquiries,
                                    send me an email and I&apos;ll get back to you as soon as possible!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='h-10 w-px bg-gray-500'/>
                </div>
                <div className='flex p-4 pt-6 justify-center'>
                    <div>
                        <a href='mailto:ahmed@aosman.app' className='flex justify-center'>
                            <button className='p-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 outline outline-cyan-900/70 hover:brightness-110 transition-all'>
                                <div className='flex justify-between items-center'>
                                    <Image src={'/icons/socials/email.svg'} width={28} height={28} alt='Email'/>
                                    <span className='pl-2 text-white text-lg font-inter'>Get in Touch</span>
                                </div>
                            </button>
                        </a>
                        <div className='my-6'/>
                        <a href='https://linkedin.com/in/aosma' className='flex justify-center'>
                            <button className='p-3 rounded-lg outline outline-cyan-900/90 bg-slate-800/90 hover:brightness-110 transition-all'>
                                <div className='flex justify-between'>
                                    <Image src='/icons/socials/linkedincolor.png' width={22} height={22} alt='LinkedIn'/>
                                    <span className='pl-2 text-white font-inter'>LinkedIn</span>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                <h3 className='flex p-3 h-full items-end justify-end text-gray-500 font-semibold text-sm'>
                    Nathanaël Desmeules on
                    <a href='https://unsplash.com/photos/D2ID9aDRNu4' className='hover:brightness-110'>&nbsp;<u>Unsplash</u></a>
                </h3>
            </div>
            <Footer desc={description}/>
        </main>
    )
}
