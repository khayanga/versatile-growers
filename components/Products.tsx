"use client";

import Image from "next/image";

const products = [
  {
    name: "Tomatoes",
    image: "/tomatoes.jpg",
    description:
      "Bright, juicy tomatoes grown using natural compost and drip irrigation for maximum flavor and freshness.",
  },
  {
    name: "Capsicum",
    image: "/capsicum.jpg",
    description:
      "Sweet and crunchy peppers perfect for salads, cooking, and roasting  grown with sustainable methods.",
  },
  {
    name: "Cucumbers",
    image: "/cucumber.jpg",
    description:
      "Cool, crisp cucumbers cultivated with natural pest control methods, ideal for hydration and fresh salads.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-24 px-6 bg-linear-to-b from-white to-green-50 overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />

      {/* Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 mb-6 text-orange-600 text-sm font-medium ">
          Fresh From Our Farm
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Our Products
        </h2>
        <p className="text-muted-foreground text-lg">
          We grow our vegetables with care and sustainable practices, ensuring
          you receive only the freshest, highest-quality produce straight from
          our fields.
        </p>
        
      </div>

      {/* Products Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.name}
            className="group relative rounded-3xl p-px bg-linear-to-br from-orange-500/40 via-green-500/40 to-transparent"
          >
            <div className="relative rounded-3xl bg-background overflow-hidden h-full">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Hover underline */}
                <div className="h-1 w-0 bg-linear-to-r from-orange-500 to-green-600 rounded-full group-hover:w-16 transition-all duration-500" />
              </div>

              {/* Floating badge
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-green-700 shadow">
                Fresh Produce
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
