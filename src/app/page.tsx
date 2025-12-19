//landing page 
//import nav bar 
//import footer 
//import featured products 
//import footer 
import Hero from "../components/hero";
import FeaturedProducts from "../components/featured-products";
import Image from "next/image";


//fetch products from stripe  

export default  function Home() : JSX.Element  {

  return (
   <div>
    <Hero />
    <FeaturedProducts/>
   </div>
  );
}
