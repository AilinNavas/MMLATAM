import NavbarPc from '../ui/general/NavbarPc'
import NavbarMobile from '../ui/general/NavbarMobile';
import Blog from '../ui/blog/Blog';
import Banner from '../ui/blog/Banner';
import Footer from '../ui/home/Footer';

export default function BlogPage() {
  return (
    <main >
      <NavbarPc />
      <NavbarMobile />
      <Banner text={'Ideas que inspiran y un futuro digital que promete.'} />
      <Blog />
      <Footer />
    </main>
  );
}
