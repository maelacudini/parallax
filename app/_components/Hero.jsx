"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const phrase = "Super smooth parallax scrolling effect";
  const words = phrase.split(" ");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const padding = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["0rem 0rem", "0rem 2rem"]
  );

  return (
    <section
      ref={ref}
      className="min-h-lvh pt-[5lvh] pb-[5lvh] pr-[5lvw] pl-[5lvw] flex flex-col justify-between"
    >
      <motion.div style={{ padding }} className="flex justify-between">
        <p className="h3 uppercase">smoooth</p>
        <p className="h3 uppercase">scroll</p>
      </motion.div>

      <div className="flex flex-wrap uppercase">
        {words.map((word, i) => {
          const y = useTransform(scrollYProgress, [0, 1], [0, i * -100 - 50]);
          const ySpring = useSpring(y, {
            stiffness: 1000,
            damping: 200,
          });
          return (
            <motion.div
              className="h1"
              key={i}
              style={{ y: ySpring, color: i + 1 === words.length && "white" }}
            >
              {word}&nbsp;
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
