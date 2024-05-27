"use client"
import NavbarPc from '../ui/general/NavbarPc'
import NavbarMobile from "../ui/general/NavbarMobile";
import Footer from '../ui/home/Footer';
// import Image from 'next/image';
import Banner from '../ui/blog/Banner';
import OurTeam from '../ui/aboutUs/OurTeam';
import ConctactUs from '../ui/home/ConctactUs';
// import InfiniteCarousel from '../ui/aboutUs/InfiniteCarousel';
// import logo_1 from '@/public/react.svg'
// import logo_2 from '@/public/next.svg'
// import logo_3 from '@/public/tailwind.svg'
// import logo_4 from '@/public/js.svg'
// import logo_5 from '@/public/html.svg'
// import logo_6 from '@/public/css.svg'

// const logos = [
//   { src: logo_1, url: '/' },
//   { src: logo_2, url: '/' },
//   { src: logo_3, url: '/' },
//   { src: logo_4, url: '/' },
//   { src: logo_5, url: '/' },
//   { src: logo_6, url: '/' }
// ]

export default function AboutUs() {

  return (
    <main >
      <NavbarPc />
      <NavbarMobile />
      <Banner text={'Detrás de tu éxito dental, un equipo comprometido con la excelencia.'} />
      <OurTeam />
   {/* <div className='min-h-screen flex items-center justify-center'>
      <InfiniteCarousel logos= {logos} />
      </div> */}
      <ConctactUs />
      <Footer />
    </main>
  );
}
