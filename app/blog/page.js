import Blog from '../ui/blog/Blog';
import Banner from '../ui/blog/Banner';
import NavbarMobile from '../ui/general/NavbarMobile';
import NavbarPc from '../ui/general/NavbarPc';
import Footer from '../ui/home/Footer';


export default function BlogPage() {
  return (
    <main >
      <NavbarMobile />
      <NavbarPc />
      <Banner text={'Ideas que inspiran y un futuro digital que promete.'} />
      <Blog />
      <Footer />
    </main>
  );
}
