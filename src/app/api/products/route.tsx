//products api route 

//import nextresponse 
import {NextResponse} from "next/server";
//import products data 
import { products } from "@/data/products";

//GET request handler
export function GET(){
     console.log("GET /api/products hit", products.length);
    return NextResponse.json(products);
}