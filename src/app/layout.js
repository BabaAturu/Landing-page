import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AppNexus - Your All-in-One Mobile Companion',
  description: 'Fast, secure and powerful — AppNexus brings you the best experience with smart features, offline support and a simple design. Download official APK.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
