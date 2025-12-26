//nav bar component
//lucide icons 
//use useState for menu 

"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {Menu, X, ShoppingCart} from "lucide-react"; 


export default function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

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
                        <a className="font-normal text-neutral-700 hover:text-black transition">About Us</a>
                        <a className="font-normal text-neutral-700 hover:text-black transition">Products</a>
                    </div>

                    {/* right Cart ICON */}
                    <div className="flex items-center">
                        <button className="flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 font-normal text-white hover:bg-neutral-800 transition">
                            Cart
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
