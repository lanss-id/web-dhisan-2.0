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
                    <ul className="text-gray-400">
                        <li className="mb-4">
                            <a href="https://www.instagram.com/dhisanatelier/" className="hover:underline hover:text-primary ">Instagram</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline hover:text-primary">Facebook</a>
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
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                    <span className="sr-only">Instagram page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                    </svg>
                    <span className="sr-only">Twitter page</span>
                </a>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default footer