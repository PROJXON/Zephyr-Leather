//nav bar component
//lucide icons 
//use useState for menu 


"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {Menu, X, ShoppingCart} from "lucide-react"; 


export default function Navbar() {
    //state for mobile menu
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = (): void => setIsOpen(false);

    return (
        <nav className="--background w-full border-b border-neutral-200">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative flex h-20 items-center justify-between">
                    {/* left ICON */}
                    <div className="flex items-center">
                        <Image
                            src="/ZL-transparent.png"
                            alt="Zephyr Leather logo"
                            width={200}
                            height={120}
                            className="object-contain"
                        />
                    </div>

                    {/* center - absolutely centered so it stays visually centered */}
                    <div className="absolute left-1/2 hidden md:flex transform -translate-x-1/2 items-center space-x-10">
                    <Link href="/#about-us" className="font-normal text-neutral-700 hover:text-black transition">
                        About Us
                    </Link>
                    <Link href="/#featured-products" className="font-normal text-neutral-700 hover:text-black transition">
                        Products
                    </Link>
                    </div>
                    
                    {/* right Cart ICON */}
                    <div className="items-center hidden md:flex">
                        <button className="flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 font-normal text-white hover:bg-neutral-800 transition">
                            <ShoppingCart className="h-5 w-5" />
                            Cart
                        </button>
                    </div>
                    {/* mobile menu button */ }
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex items-center"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                {/* mobile menu dropdown */}
                {isOpen && (
                   
            <div className=" md:hidden bg-white p-3 shadow-sm ">
              <div className="flex flex-col gap-1">
                <Link
                  href="/#about-us"
                  onClick={closeMenu}
                  className=" px-3 py-2 text-neutral-700 hover:text-black transition"
                >
                  About Us
                </Link>

                <Link
                  href="/#featured-products"
                  onClick={closeMenu}
                  className=" px-3 py-2 text-neutral-700 hover:text-black transition"
                >
                  Products
                </Link>

                <button
                  onClick={() => {
                    closeMenu();
                    // TODO: route to cart page or open cart drawer
                  }}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-black px-4 py-2.5 font-normal text-white hover:bg-neutral-800 transition"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Cart
                </button>
              </div>
            </div>
          
                )}
            </div>
        </nav>
    );
}
