import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
    const description = "Electrical & Computer Engineering student passionate in Cybersecurity, Robotics, and Electronics.";
  
    return (
      <main className='bg-zinc-900/90'>
        <NavBar page='Skills/Experience'/>
        <div className='flex text-white items-center justify-center'>
            <div className='p-4'>
                <h2 className='text-5xl'>Skills</h2>
            </div>
        </div>
        <Footer desc={description}/>
      </main>
    )
}
