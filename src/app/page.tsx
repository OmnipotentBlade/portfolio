import NavBar from '@/components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <NavBar/>
      <div>
        <Hero heading="Ahmed Osman" desc="Electrical & Computer Engineering student passionate in Cybersecurity, Robotics, and Electronics."/>
      </div>
      <Footer/>
    </main>
  )
}
