"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Footer() {
  const phrase = "If you enjoyed 💃 scrolling";
  const words = phrase.split(" ");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <footer
      ref={ref}
      className="pt-[10lvh] pb-[5lvh] pr-[5lvw] pl-[5lvw] flex flex-col gap-16"
    >
      <div className="min-h-lvh flex items-end">
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
      </div>
      <motion.div style={{ width }} className="border-t border-current" />
      <div className="flex flex-wrap gap-8">
        <div className="grow basis-40">
          <p className="h3 uppercase">github</p>
        </div>
        <div className="grow basis-80 flex flex-col gap-8">
          <div className="bg-white p-4 flex justify-between">
            <a
              href={"https://github.com/maelacudini/parallax.git"}
              className="h3 uppercase hover:text-slate-400 transition duration-300"
            >
              Check out the repo
            </a>
            <Image
              alt="arrow"
              src={"/arrow.svg"}
              height={15}
              width={15}
              loading="lazy"
            />
          </div>
          <p>
            Explore a captivating web project showcasing the parallax effect
            using <b>Next.js</b>, <b>Lenis</b>, and <b>Framer Motion</b>. This
            repository offers a dynamic visual experience, where elements move
            at different speeds, adding depth to the browsing journey.
          </p>
          <p>
            For inquiries or suggestions, visit my{" "}
            <a
              href={"https://maelacudini.com/"}
              className="hover:text-slate-400 transition duration-300"
            >
              <b>personal website</b>
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
