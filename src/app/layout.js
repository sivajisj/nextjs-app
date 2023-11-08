import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/footer'
import { ThemeProvider } from '../../context/ThemeContext'
import AuthProvider from '@components/authProvider/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App SJ',
  description: 'let"s explore the digital world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>


        
            <div className='container'>
            <Navbar/>
            {children}
            <Footer/>
            </div>
            
            </AuthProvider>

        </ThemeProvider>
        
        </body>
       
    </html>
  )
}
