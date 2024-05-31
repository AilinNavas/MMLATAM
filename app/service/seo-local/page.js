import HeroService from "@/app/ui/services/HeroService";
import IntroductionService from "@/app/ui/services/IntroductionService";
import OfferServices from "@/app/ui/services/OfferServices";
import PainPointsService from "@/app/ui/services/PainPointsService";
import StartToday from "@/app/ui/services/StartToday";
import WhyService from "@/app/ui/services/WhyService";
import serviceDescriptionAll  from '../../ui/data/ServiceDescriptionAll'


export default function SeoLocalPage() {
  const service = serviceDescriptionAll.find(service => service.serviceName === "Local SEO");
  return (
    <main >
     
     <HeroService nameService={service.serviceName} colorService={service.colorService} descriptiveTitle={service.descriptiveTitle} />
      <IntroductionService nameService={service.serviceName} serviceIntroduction={service.serviceIntroduction} />
      <WhyService nameService={service.serviceName} summaryService={service.summaryService} serviceBenefits={service.serviceBenefits} />
      <OfferServices introductionOffer={service.introductionOffer} tactics={service.tactics} />
      <PainPointsService painPoints={service.painPoints} />
      <StartToday goals={service.goals} startToday={service.startToday}/>
  
    </main>
  );
}

