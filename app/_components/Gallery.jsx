"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { images } from "../_utils/data";
import Image from "next/image";
import { useRef } from "react";

export default function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xLeft = useTransform(scrollYProgress, [0, 1], [250, -500]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-250, 500]);
  const y = useTransform(scrollYProgress, [0, 1], ["0rem", "50rem"]);
  const xLeftSpring = useSpring(xLeft);
  const xRightSpring = useSpring(xRight);

  return (
    <section ref={ref} className="overflow-hidden pt-[5lvh] pb-[5lvh]">
      {images.map((img, i) => {
        return (
          <motion.div
            key={i}
            className="flex overflow-hidden"
            style={{
              x: i % 2 ? xLeftSpring : xRightSpring,
              justifyContent: i % 2 ? "flex-end" : "flex-start",
            }}
          >
            <motion.div
              style={{ y: y }}
              className="relative h-[80rem] w-[30rem] mt-[-50rem]"
            >
              <Image
                alt={img.title}
                src={img.img}
                key={i}
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute left-2/4 top-2/4 translate-y-[-50%] translate-x-[-50%] flex flex-col gap-4 text-center">
                <p className="h3 uppercase">{img.title}</p>
                <p className="h2">{img.emoji}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
