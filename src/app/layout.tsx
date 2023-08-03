import 'styles/globals.css';
import { Red_Hat_Text } from 'next/font/google';
import { Inter } from 'next/font/google';

const redhattext = Red_Hat_Text({ subsets: ['latin'] });
const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "Ahmed Osman",
  description: "Ahmed Osman's Portfolio Website, built with Next.js and TailwindCSS, hosted on Vercel.",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${redhattext.className} bg-zinc-900`}>{children}</body>
    </html>
  )
}
