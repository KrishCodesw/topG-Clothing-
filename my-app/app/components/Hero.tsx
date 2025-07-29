"use client";
import { Split } from "lucide-react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import CircularGallery from "./CircularGallery";
import AnimatedList from "./AnimatedList";

export default function Hero() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];
  return (
    <section className="relative w-full h-screen  items-center justify-center bg-black">
      <CircularGallery
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.09}
      />
      <motion.div className="text-white text-center text-3xl md:text-5xl font-semibold">
        <SplitText
          text="Swipe Right to have a perfect match for your clothes !"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </motion.div>
      <DrawCircleText />
    </section>
  );
}

const DrawCircleText = () => {
  return (
    <div className="grid place-content-center bg-emerald-950 px-4 py-24 text-yellow-50">
      <h1 className="max-w-2xl text-center text-5xl leading-snug">
        <span className="relative"></span>{" "}
      </h1>
    </div>
  );
};
