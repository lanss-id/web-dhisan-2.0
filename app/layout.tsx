import '@/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from "@/config/site";
import { Providers } from './providers'
import { Navbar } from '@/components/costums/navbar'
import Footer  from '@/components/costums/footer'
import {Poppins} from 'next/font/google'
import React from 'react';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin-ext'],
  display: 'swap'
}) 
 
export const metadata: Metadata = {
  
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000/'),
  title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
  keywords:['Arsitektur', 'developer', 'design', 'interior', 'exterior'],
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon.ico",
	},
  openGraph: {
    type: 'website',
    title: siteConfig.name,
    siteName: siteConfig.name,
    description: siteConfig.description,
    images: siteConfig.image,
  },
  twitter: {
    images: siteConfig.image
  },
  applicationName: 'Dhisan Company Profile'
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
            <main className={``}>
                {children}
            </main>
            <Footer />
          </Providers>
      </body>
    </html>
  )
}
