import '@/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from "@/config/site";
import { Providers } from './providers'
import { Navbar } from '@/components/costums/navbar'
import Footer  from '@/components/costums/footer'
import {Poppins} from 'next/font/google'
import Head from 'next/head';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin-ext'],
  display: 'swap'
}) 
 
export const metadata: Metadata = {
  title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
  openGraph: {
    images: [{
        url: siteConfig.image,
    }],
    siteName: siteConfig.name,
    description: siteConfig.description,
    title: siteConfig.name,
    type: 'website',
    url: 'https://2p1p04cw-3000.asse.devtunnels.ms/'
  },
  twitter: {
    images: siteConfig.image
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth bg-black'>
      <body className={`bg-background text-foreground container ${poppins.className}`}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <Navbar />
            <main className={`flex flex-col items-center`}>
                {children}
            </main>
            <Footer />
          </Providers>
      </body>
    </html>
  )
}
