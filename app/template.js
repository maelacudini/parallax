'use client'
import Lenis from "@studio-freight/lenis"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Template({ children }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end']
    })
    const bg = useTransform(scrollYProgress, [0, 0.5, 1], ['#d4d1c9', '#c9d4d2', '#c9cbd4'])

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => {
            lenis.destroy()
        }
    }, [])

    return <motion.div ref={ref} style={{ backgroundColor: bg, position: 'relative' }}>{children}</motion.div>
}