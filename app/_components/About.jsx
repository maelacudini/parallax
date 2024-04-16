"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { aboutData } from "../_utils/data";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.floor(Math.random() * -100) - 25]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.floor(Math.random() * -50) - 25]
  );
  const width = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="min-h-lvh pt-[5lvh] pb-[5lvh] pr-[5lvw] pl-[5lvw] flex flex-wrap-reverse items-center gap-16"
    >
      <article className="grow basis-40 flex flex-col gap-8">
        <motion.p className="h3 uppercase" style={{ y: y1 }}>
          let me explain
        </motion.p>
        <motion.p style={{ y: y2 }}>
          Experience the captivating allure of a simple parallax scroll effect,
          as seen in numerous Awwwards-winning websites. Built with Next.js,
          Lenis, and Framer Motion, this implementation promises seamless
          interactivity and super fast performance.
        </motion.p>
      </article>
      <article className="grow basis-96 overflow-hidden flex flex-col gap-4">
        {aboutData.map((data, i) => {
          const x = useTransform(
            scrollYProgress,
            [0, 0.5],
            [(i + 1) * 50 + 25, 0]
          );
          const spring = useSpring(x);
          return (
            <motion.div
              key={i}
              style={{ x: spring }}
              className="flex flex-col gap-4"
            >
              <div className="flex gap-4 justify-between items-center">
                <p className="h3 uppercase">
                  0{i + 1}. {data.title}
                </p>
                <Image
                  alt="arrow"
                  src={"/arrow.svg"}
                  height={15}
                  width={15}
                  loading="lazy"
                />
              </div>
              <motion.div
                style={{ width }}
                className="border-t border-current"
              />
            </motion.div>
          );
        })}
      </article>
    </section>
  );
}
