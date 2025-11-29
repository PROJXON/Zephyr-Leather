//will hardcode featured products here for now
"use client";

import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string
  name: string
  price: string
  image: string
  description: string
}

const featuredProducts: Product [] = [
     {
        id: "1",
        name: "Leather shoulder Holster double case for iPhone 12-13-14-15 pro /max & wallet / RUGER LCP concealed carry",
        price: "685.65",
        image: "/iphone-Holster.avif",
        description: "Handcrafted Italian leather in rich espresso brown",
  },
   {
        id: "2",
        name: "Leather glasses case Oxblood Red",
        price: "92.09",
        image: "/explorer-sunglasses-case-4_lowres.jpg",
        description: "Our glasses cases are designed by an ex-aviation engineer under specialized opticians guidance.",
  },

];

export default function FeaturedProducts() {
    return (
        <section className="py-20 px-4 bg-background"> 
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            <p className="text-secondary text-sm tracking-widest uppercase mb-4">
                Curated Selection
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Signature Collection
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
                 Discover our most beloved pieces, each crafted with uncompromising attention to detail
            </p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) =>(
                <Link key={product.id} href={`/products/${product.id}`} className="group cursor-pointer">
                    <div className="relative w-full h-64 overflow-hidden">
                        <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                        />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                        {product.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3">
                        {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-foreground">{product.price}</span>
                        <span className="text-secondary text-sm tracking-widest uppercase">View</span>
                    </div>
                </Link>
            ))}

        </div>

        </section>

    )
};