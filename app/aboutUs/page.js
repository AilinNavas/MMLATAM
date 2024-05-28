"use client"
import NavbarPc from '../ui/general/NavbarPc'
import NavbarMobile from "../ui/general/NavbarMobile";
import Footer from '../ui/home/Footer';
import Banner from '../ui/blog/Banner';
import OurTeam from '../ui/aboutUs/OurTeam';
import OurValues from '../ui/aboutUs/OurValues';
import OurMision from '../ui/aboutUs/OurMision';
import JoinUs from '../ui/aboutUs/JoinUs';
import Introduction from '../ui/aboutUs/Introduction';


export default function AboutUs() {

  return (
    <main >
      <NavbarPc />
      <NavbarMobile />
      <Banner text={'Experimente la diferencia que pueden marcar la pasión, la experiencia y la dedicación.'} />
      <Introduction />
      <OurTeam /> 
      <OurValues />
      <OurMision />
      <JoinUs />
      <Footer />
    </main>
  );
}
