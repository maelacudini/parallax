"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Wooo() {
  const word = "woooo";
  const letters = word.split("");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  return (
    <section
      ref={ref}
      className="min-h-lvh pt-[5lvh] pb-[5lvh] pr-[5lvw] pl-[5lvw] flex justify-center items-center overflow-hidden"
    >
      <div className="flex">
        {letters.map((letter, i) => {
          const yPari = useTransform(
            scrollYProgress,
            [0, 1],
            [Math.random() * 100 - 50, 0]
          );
          const yDispari = useTransform(
            scrollYProgress,
            [0, 1],
            [Math.random() * -100 - 50, 0]
          );

          return (
            <motion.p
              key={i}
              style={{
                color: i % 2 && "white",
                y: i % 2 ? yPari : yDispari,
              }}
              className="h1 uppercase"
            >
              {letter}&nbsp;
            </motion.p>
          );
        })}
      </div>
    </section>
  );
}
