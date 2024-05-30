import NavbarMobile from "@/app/ui/general/NavbarMobile";
import NavbarPc from "@/app/ui/general/NavbarPc";
import Footer from "@/app/ui/home/Footer";
import HeroService from "@/app/ui/services/HeroService";
import IntroductionService from "@/app/ui/services/IntroductionService";
import OfferServices from "@/app/ui/services/OfferServices";
import PainPointsService from "@/app/ui/services/PainPointsService";
import StartToday from "@/app/ui/services/StartToday";
import WhyService from "@/app/ui/services/WhyService";


export default function EmailMarketing() {
  return (
    <main >
    <NavbarMobile />
    <NavbarPc />
    <HeroService />
    <IntroductionService />
    <WhyService />
    <OfferServices />
    <PainPointsService />
    <StartToday />
    <Footer />
    </main>
  );
}
