//nav bar component
//lucide icons 
//use useState for menu 

"use client";

import Link from "next/link";
import { useState } from "react";
import {Menu, X, ShoppingCart} from "lucide-react"; 


export default function Navbar (): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="fixed top-0 bg-background/95 backdrop-blur z-50 w-full border-b border-border ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-2xl font-bold text-foreground">
                    <span className="text-xl font-bold text-foreground"> ZEPHYR </span>
                    </Link>
                    {/* Desktop menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        <Link href="/" className="text-sm text-foreground/80 hover:text-foreground transition">
                        Home 
                        </Link>
                        <Link href="/products" className="text-sm text-foreground/80 hover:text-foreground transition">
                        Products 
                        </Link>
                    </div>
                    {/* Cart and mobile */}
                    <div className="flex items-center gap-4">
                        <Link href={'/checkout'} className="flex items-center gap-2 text-foreground hover:text-primary transition">
                        <ShoppingCart size={20} />
                        <span className="text-sm hidden sm:inline "> Checkout </span>
                        </Link>
                        <button onClick={()=> setIsOpen(!isOpen)} className="text-foreground md:hidden">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
            </div>
        </nav>
    );
}