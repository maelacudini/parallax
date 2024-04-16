"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Footer() {
  const phrase = "If you enjoyed 💃 scrolling";
  const words = phrase.split(" ");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <footer
      ref={ref}
      className="min-h-lvh pt-[5lvh] pb-[5lvh] pr-[5lvw] pl-[5lvw] flex flex-col justify-end gap-16"
    >
      <div className="flex flex-wrap uppercase">
        {words.map((word, i) => {
          const y = useTransform(
            scrollYProgress,
            [0, 0.5],
            [0, Math.floor(Math.random() * -100) - 50]
          );
          return (
            <motion.div
              className="h1"
              key={i}
              style={{ y: y, color: i + 1 === words.length && "white" }}
            >
              {word}&nbsp;
            </motion.div>
          );
        })}
      </div>
      <motion.div style={{ width }} className="border-t border-current" />
      <div className="flex flex-wrap gap-8">
        <div className="grow basis-40">
          <p className="h3 uppercase">github</p>
        </div>
        <div className="grow basis-80 flex flex-col gap-8">
          <div className="bg-white p-4 flex justify-between">
            <Link
              href={"/"}
              className="h3 uppercase hover:text-slate-400 transition duration-300"
            >
              Check out the repo
            </Link>
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
