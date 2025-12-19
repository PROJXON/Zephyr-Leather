//temp hard coded products data 
 
// const products =[
//     {
//         id: string;
//         name: string;
//         price: number; 

//     }
// ];

//  

//helper to return HTTP responses 
import { NextResponse } from "next/server";
//returns serverside stripe client 
import {stripe} from "@/lib/stripe"; 
//imports local products 
import { products } from "@/data/products";

//create Route handler (post request) to api/checkout 

export async function POST ( req: Request){
//create a try catch if anything fails it jumps to catch 
    try {
        //reads json body sent from frontend 
        const {productId} = await req.json();
        //looking for the matching product id if matched set equal
        const product = products.find((p) => p.id === productId)
        //if not found send error invailid 
        if (!product){
            return NextResponse.json({error: "Invalid productId"}, {status: 400});   
        }
        //create stripr checkout session -> calls stripe API 
        const session =await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: [
                {
                    price: product.stripePriceId,
                     // currently hardcoded for demo/MVP; future versions can pass user-selected quantity
                    quantity: 1,
                }
            ],
                  success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
                  cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
        });
        return NextResponse.json({url: session.url});
    } catch (err) {
        console.error(err);
        return NextResponse.json({error: "checkout failed"}, {status: 500})

    }
}




