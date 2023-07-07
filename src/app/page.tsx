import Image from 'next/image';
import Hero from '../components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <div>
        <Hero heading="Ahmed Osman"
              desc="Electrical & Computer Engineering student passionate in Cybersecurity, Robotics, and Electronics."
        />
      </div>
    </main>
  )
}
