import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Projects() {
    const description = "Electrical & Computer Engineering student passionate in Cybersecurity, Robotics, and Electronics.";
  
    return (
      <main className='bg-zinc-900/90'>
        <NavBar page='Projects'/>
        <div className="p-4">

        </div>
        <Footer desc={description}/>
      </main>
    )
  }
  