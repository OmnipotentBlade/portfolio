import 'styles/globals.css'
import { Red_Hat_Text } from 'next/font/google'

const redhattext = Red_Hat_Text({ subsets: ['latin'] })

export const metadata = {
  title: "Ahmed Osman's Portfolio",
  description: "Ahmed Osman's Portfolio Website",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={redhattext.className}>{children}</body>
    </html>
  )
}
