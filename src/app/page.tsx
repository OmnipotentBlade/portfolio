import NavBar from '@/components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer'

export default function Home() {
  const description = "Electrical & Computer Engineering student passionate in Cybersecurity, Robotics, and Electronics.";

    return (
        <main className='bg-zinc-900/90'>
            <NavBar page='Home'/>
            <Hero heading="Ahmed Osman" desc={description}/>
            <Footer desc={description}/>
        </main>
    )
}
