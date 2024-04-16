import About from "./_components/About";
import Footer from "./_components/Footer";
import Gallery from "./_components/Gallery";
import Hero from "./_components/Hero";
import Woo from "./_components/woo";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Footer />
      <Woo />
    </main>
  )
}
