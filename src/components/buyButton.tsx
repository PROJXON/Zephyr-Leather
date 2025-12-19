"use client";

type BuyButtonProps = {
    productId: string;
};

export function BuyButton ({productId}: BuyButtonProps){
    const handleCheckout = async () =>{
        const res = await fetch ("/api/checkout", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({productId}),
        });
        const data = await res.json();

        if (data?.url){
            window.location.href = data.url;
        } else {
            console.error("checkout failed", data)
        }
    };
    return (
        <button 
        onClick= {handleCheckout}
         className="px-6 py-3 bg-black text-white rounded hover:opacity-90"
        >
            Buy now 
        </button>
    )



}