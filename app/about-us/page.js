"use client"
import Banner from '../ui/blog/Banner';
import OurTeam from '../ui/aboutUs/OurTeam';
import OurValues from '../ui/aboutUs/OurValues';
import OurMision from '../ui/aboutUs/OurMision';
import JoinUs from '../ui/aboutUs/JoinUs';
import Introduction from '../ui/aboutUs/Introduction';
import NavbarMobile from '../ui/general/NavbarMobile';
import NavbarPc from '../ui/general/NavbarPc';
import Footer from '../ui/home/Footer';


export default function AboutUs() {

  return (
    <main >
      <NavbarMobile />
      <NavbarPc />
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
