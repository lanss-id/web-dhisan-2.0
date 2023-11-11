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
  metadataBase: new URL('https://dhisanatelier.co'),
  title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
  keywords:['Arsitektur', 'developer', 'design', 'interior', 'exterior', 'dhisan', 'atelier', 'dhisan atelier'],
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
    images: 'https://cdn.discordapp.com/attachments/725228007501070336/1170759591693394021/metadata-og.png?ex=655a35d6&is=6547c0d6&hm=98326de7e199c799bf9efcd7c78121dc2f499565db3edaf7c660b44e8c915d35&',
  },
  twitter: {
    images: 'https://cdn.discordapp.com/attachments/725228007501070336/1170759591693394021/metadata-og.png?ex=655a35d6&is=6547c0d6&hm=98326de7e199c799bf9efcd7c78121dc2f499565db3edaf7c660b44e8c915d35&',
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
