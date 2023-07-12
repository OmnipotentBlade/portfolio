import NavBar from '@/components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer'

export default function Home() {
  const description = "Electrical & Computer Engineering student passionate in Cybersecurity, Robotics, and Electronics.";

  return (
    <main className='bg-zinc-900/90 bg-fixed'>
      <NavBar page='Home'/>
      <div>
        <Hero heading="Ahmed Osman" desc={description}/>
      </div>
      <Footer desc={description}/>
    </main>
  )
}
