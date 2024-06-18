// import AboutUs from "./ui/home/AboutUs";
import ConctactUs from "./ui/home/ConctactUs";
import Footer from "./ui/home/Footer";
import Data from "./ui/home/Data";
import Hero from "./ui/home/Hero";
import NavbarPc from "./ui/general/NavbarPc";
import Services from "./ui/home/Services";
import Testimonials from "./ui/home/Testimonials";
import NavbarMobile from "./ui/general/NavbarMobile";
import Tecnologies from "./ui/home/Tecnologies";

export default function Home() {
  return (
    <main >
      <NavbarMobile />
      <NavbarPc />
      <Hero />
      {/* <AboutUs /> */}
      <Services />
      <Tecnologies />
      <Data />
      <Testimonials />
      <ConctactUs />
      <Footer />

    </main>
  );
}
