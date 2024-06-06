import NavbarPc from "../ui/general/NavbarPc";
import NavbarMobile from "../ui/general/NavbarMobile";
import Footer from "../ui/home/Footer";
import Banner from "../ui/blog/Banner";


export default function RootLayout({ children }) {
  return (
   <>
   <NavbarMobile />
   <NavbarPc />
   <Banner text={'La trasformación es uno a uno'} />
   {children}
   <Footer />
   </>
  );
}
