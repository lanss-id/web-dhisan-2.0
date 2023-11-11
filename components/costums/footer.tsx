import React from 'react'
import { 
    Logo
} from "@/components/costums/icons";
import NextLink from 'next/link';
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";


const footer = () => {
  return (
    <footer className="px-7 border-t border-slate-800">
        <div className=" w-full py-6 lg:py-8">
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <NextLink href='/' className="flex items-center">
                    <Logo className='fill-black dark:fill-white'/>
                    <p className='ml-2 font-semibold tracking-wider'>Dhisan Atelier</p>
                </NextLink>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-400 space-y-4">
                        {siteConfig.navItems.map((item) => (
                            <li key={item.href}>
                                <Link isDisabled={item.class}  href={item.href} className='text-gray-400 hover:underline hover:text-primary'>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold tracking-wider text-primary uppercase dark:text-white">Our Social</h2>
                    <ul className="text-gray-400 space-y-4">
                        <li>
                            <Link href="https://www.facebook.com/Dhisanatelier" className="hover:underline hover:text-primary text-gray-400">Facebook</Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/dhisanatelier/" className="hover:underline hover:text-primary text-gray-400">Instagram</Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/company/dhisan-atelier/?trk=public_profile_topcard-past-company&originalSubdomain=id" className="hover:underline hover:text-primary text-gray-400">LinkedIn</Link>
                        </li>
                    </ul>
                </div>
                <div className='disabled:opacity-75'>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-gray-500">Blog</h2>
                    <ul className="text-gray-400 font-medium">
                        <li className="mb-4">
                            <Link isDisabled href="#" className="text-gray-600">Fasum</Link>
                        </li>
                        <li>
                            <Link isDisabled href="#" className="text-gray-600">Facade</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-cen4er">© 2023 <NextLink href="/" className="hover:underline">Dhisan Atelier</NextLink>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 items-center">
                <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Dhisanatelier" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                    <span className="sr-only">Facebook page</span>
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dhisanatelier/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                    <span className="sr-only">Instagram page</span>
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/dhisan-atelier/?trk=public_profile_topcard-past-company&originalSubdomain=id" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                    <span className="sr-only">Linkedin page</span>
                </Link>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default footer