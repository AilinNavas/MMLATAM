import NavbarMobile from "@/app/ui/general/NavbarMobile";
import NavbarPc from "@/app/ui/general/NavbarPc";
import HeroService from "@/app/ui/services/HeroService";
import IntroductionService from "@/app/ui/services/IntroductionService";
import WhyService from "@/app/ui/services/WhyService";


export default function EmailMarketing() {
  return (
    <main >
    <NavbarMobile />
    <NavbarPc />
    <HeroService />
    <IntroductionService />
    <WhyService />
    </main>
  );
}
