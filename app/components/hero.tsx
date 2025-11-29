//hero will render on landing page 

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image */}
             <div
             className="absolute inset-0 z-0"
             style={{
                 backgroundImage: 'url("/zephyr_nlva-6 (1)_lowres_lowres.jpg")',
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 opacity: 0.25,
        }}
      />
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto px-4 text-center"> 
                <div className="space-y-6">
                    <p className="text-secondary text-sm tracking-widest uppercase">
                        Handcrafted Excellence
                    </p>
                    <h1 className="font-serif text-5xl sm:text-7xl font-bold text-foreground leading-tight">
                        Designed for Flight Made for life
                    </h1>
                    <p className="text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto">
                         Each piece tells a story of meticulous craftsmanship, premium materials, and timeless design. Experience the 
                         luxury of authentic leather goods.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a href="/products" className="px-8 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition rounded-sm">
                        Explore Collection
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
