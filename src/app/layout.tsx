import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Header } from '@/components'
import AppProvider from '@/store/AppProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nike'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
