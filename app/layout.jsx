import { Navbar, Footer } from '@/components'
import './globals.css'
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({subsets: ['latin']})

export const metadata = {
  title: 'Easybank',
  description: 'Take Your Financial Life Online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}