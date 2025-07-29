"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";
import React from "react";

const CTA = () => {
  return (
    <div className="w-full flex justify-center bg-black">
      <FeaturedProducts />
    </div>
  );
};

export default CTA;

type Product = {
  id: number;
  name: string;
  price: string;
  frontImg: string;
  hoverImg: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Vintage Shirt",
    price: "$149",
    frontImg: "hero7.png",
    hoverImg: "hero7.png",
  },
  {
    id: 2,
    name: "The OG Shirt",
    price: "$199",
    frontImg: "hero9.png",
    hoverImg: "hero9.png",
  },
  {
    id: 3,
    name: "Ultimate Jacket",
    price: "$89",
    frontImg: "hero8.png",
    hoverImg: "hero8.png",
  },
];

function FeaturedProducts() {
  return (
    <section className="w-full px-6 py-20 bg-black text-white">
      <h2 className="text-center text-4xl font-display mb-12">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative group overflow-hidden bg-neutral-900 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="aspect-square relative overflow-hidden">
              <motion.img
                src={product.frontImg}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <motion.img
                src={product.hoverImg}
                alt={`${product.name} Detail`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              />
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col items-center justify-between gap-2">
              <h3 className="text-3xl sm:text-2xl boogaloo-regular font-semibold text-center">
                {product.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
