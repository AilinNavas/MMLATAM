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
      <Introduction />
      <OurTeam /> 
      <OurValues />
      <OurMision />
      <JoinUs />
      <Footer />
    </main>
  );
}
