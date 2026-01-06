//products page 
//will hardcode products for now later will attach to a backend 
"use client";

import {Heart, Share2} from "lucide-react";

import { useState } from "react";
import { BuyButton } from "@/components/buyButton";



interface Product {
  id: string;
  stripeProductId: string;
  name: string;
  price: string;
  image: string;
  description: string;
  details: string;
}

const products: Product [] = [
     {
        id: "1",
        stripeProductId: "leather-holster",
        name: "Leather shoulder Holster double case for iPhone 12-13-14-15 pro /max & wallet / RUGER LCP concealed carry",
        price: "685.65",
        image: "/iphone-Holster.avif",
        description: "Handcrafted Italian leather in rich espresso brown",
        details: "100% designed, cut, stitched and polished by hand the old fashion way in every little detail like polished edges & scratch proof lined interior for smartphone use."
  },
   {
        id: "2",
        stripeProductId: "sunglasses-case",
        name: "Leather glasses case Oxblood Red",
        price: "92.09",
        image: "/explorer-sunglasses-case-4_lowres.jpg",
        description: "Our glasses cases are designed by an ex-aviation engineer under specialized opticians guidance.",
        details: "Ideal for medium-sized glasses, these leather cases combine durability with sophistication. Each piece is handcrafted to cradle your frames securely while adding a refined touch to your accessories."
  },
   {
        id: "3",
        stripeProductId:"zlc-jacket",
        name: "Leather Jacket",
        price: "100.00",
        image: "/",
        description: "cool jacket.",
        details: "keeps you warm "
  },
];


export default function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]!);
    const[quantity, setQuantity] = useState<number>(1);

    return (
       <section className="pt-32 pb-20 px-4 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto">
            {/*Product grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Product Image */}  
            <div className="flex items-center justify-center bg-muted aspect-square overflow-hidden rounded-sm">
                <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
                />
            </div>
            {/* Product Details */}
            <div className="flex flex-col justify-center space-y-8">
                <div>
                    <p className="text-secondary text-sm tracking-widest uppercase mb-4">
                        Signiture Piece
                    </p>
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        {selectedProduct.name}
                    </h1>
                    <p className="text-foreground/60 mb-4 text-lg">
                        {selectedProduct.description}
                    </p>
                </div>
                {/* Price and Actions */}
                <div className="space-y-6 pt-8 border-t border-border">
                    <div className="flex items-baseline gap-3" >
                        <span className="font-serif text-4xl font-bold text-foreground">
                            ${selectedProduct.price}
                        </span>
                        <span className="text-sm text-foreground/60">
                        USD
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex items-center border border-border rounded-sm overflow-hidden">
                            <button 
                            onClick={()=> setQuantity(Math.max(1, quantity -1))}
                            className="px-4 py-2 text-foreground hover:bg-muted transition"
                            > 
                            -
                            </button>
                            <span className="px-6 py-2 text-foreground font-medium">{quantity}</span>
                             <button 
                            onClick={()=> setQuantity(quantity + 1)}
                            className="px-4 py-2 text-foreground hover:bg-muted transition"
                            > 
                            +
                            </button>
                        </div>
                        <button className="flex-1 bg-primary text-background font-semibold py-3 rounded-sm hover:bg-primary/90 transition">
                            Add to Cart
                        </button>
                         {selectedProduct.stripeProductId ? (
    <BuyButton productId={selectedProduct.stripeProductId} />
  ) : (
    <button
      disabled
      className="flex-1 bg-muted text-foreground/60 font-semibold py-3 rounded-sm cursor-not-allowed"
      title="Not connected to Stripe yet"
    >
      Buy Now (coming soon)
    </button>
  )}
                    </div>
                </div>
            </div>
            </div>
            {/* Product Selector */}
            <div className="pt-12 border-t border-border">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-8"> Other Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <button
                        key={product.id}
                        onClick={()=> { 
                            setSelectedProduct(product) 
                            setQuantity(1) 
                        }}
                        className={`text-left group transition ${
                            selectedProduct.id === product.id 
                            ? "opacity-100"
                            :"opacity-70 hover:opacity-100"
                        }`}
                        > 
                        <div className="bg-muted mb-4 overflow-hidden rounded-sm aspect-square">
                            <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                            />
                            </div>
                        <h3 className="font-serif font-bold text-foreground">
                            {product.name}
                        </h3>
                        <p className="text-sm text-foreground/60 mb-2">
                            {product.description}
                        </p>
                        <p className="font-bold text-foreground">
                            ${product.price}
                        </p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
       </section>
      
    )
}