import '@/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from "@/config/site";
import { Providers } from './providers'
import { Navbar } from '@/components/costums/navbar'
import Footer  from '@/components/costums/footer'
import {Poppins} from 'next/font/google'
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin-ext'],
  display: 'swap'
}) 
 
export const metadata: Metadata = {
  metadataBase: new URL('https://dhisanatelier.co' ?? 'https://2p1p04cw-3000.asse.devtunnels.ms/'),
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
    images: '/public/metadata-og-min.png',
  },
  twitter: {
    images: '/public/metadata-og-min.png',
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
            <main>
                {children}
                <Analytics/>
            </main>
            <Footer />
          </Providers>
      </body>
    </html>
  )
}
