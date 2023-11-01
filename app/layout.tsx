import '@/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from "@/config/site";
import { Providers } from './providers'
import { Navbar } from '@/components/costums/navbar'
import Footer  from '@/components/costums/footer'
import {Poppins} from 'next/font/google'

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
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-background text-foreground container ${poppins.className}`}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <Navbar />
            <main className={`min-h-screen flex flex-col items-center`}>
                {children}
            </main>
            <Footer />
          </Providers>
      </body>
    </html>
  )
}
