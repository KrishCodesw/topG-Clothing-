"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full px-6 py-20 bg-black text-white text-center">
      <h2 className="text-3xl md:text-4xl boogaloo-regular font-display mb-4">
        Join the Inner Circle
      </h2>
      <p className="text-neutral-400 mb-6">
        Early access to new drops. No spam, ever.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full sm:flex-1 bg-neutral-900 border border-neutral-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-neutral-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white text-black px-6 py-3 rounded-xl font-medium tracking-wide"
        >
          Sign Up
        </motion.button>
      </form>
    </section>
  );
};

export default NewsletterSignup;
