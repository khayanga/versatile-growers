"use client";

import Image from "next/image";

const products = [
  {
    name: "Tomatoes",
    image: "/tomatoes.jpg",
    description:  "Bright, juicy tomatoes grown using natural compost and drip-irrigation for maximum flavor.",
  },
  {
    name: "Capsicum",
    image: "/capsicum.jpg",
    description: "Sweet and crunchy peppers perfect for salads, cooking and roasting.",
  },
  {
    name: "Cucumbers",
    image: "/cucumber.jpg",
    description:  "Cool, crisp cucumbers grown with natural pest control methods – perfect for hydration and salads.",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24 px-6 bg-gray-50 overflow-hidden">
     

      <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold text-primary mb-4">Our Products</h2>
        <p className="text-gray-600 text-lg">
          We grow our vegetables with love and care, ensuring you receive only the freshest, highest-quality produce straight from our fields.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-64 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
