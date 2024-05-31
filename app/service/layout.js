import NavbarPc from "../ui/general/NavbarPc";
import NavbarMobile from "../ui/general/NavbarMobile";
import Footer from "../ui/home/Footer";


export default function RootLayout({ children }) {
  return (
   <>
   <NavbarMobile />
   <NavbarPc />
   {children}
   <Footer />
   </>
  );
}
