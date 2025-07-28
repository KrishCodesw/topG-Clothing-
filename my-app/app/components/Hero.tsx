"use client";
import { Split } from "lucide-react";
import SplitText from "./SplitText";
import CircularGallery from "./CircularGallery";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black">
      <CircularGallery
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.09}
      />
      <div className="text-white">Swipe Left or Right</div>
    </section>
  );
}
