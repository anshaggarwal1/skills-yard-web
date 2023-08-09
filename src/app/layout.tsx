import { Suspense } from 'react'
import './globals.css'
import type { Metadata } from 'next'
import Loading from './Loading'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import WhatsAppButton from '@/components/Whatsapp'


export const metadata: Metadata = {
  title: 'Skills Yard',
  description: 'Skills Yard Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </head>
      <body >
        <Loader>
        <Suspense fallback={<Loading />}>
        <Header/>
        <WhatsAppButton/>
          {children}
        <Footer/>
        </Suspense>
        </Loader>
      </body>
    </html>
  )
}
