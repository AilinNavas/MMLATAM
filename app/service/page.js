import NavbarMobile from "../ui/general/NavbarMobile";
import NavbarPc from "../ui/general/NavbarPc";

export default function Service() {
  return (
    <main >
      <NavbarPc />
      <NavbarMobile />
      <div className='h-screen bg-black text-white flex items-center justify-center'>
        Pagina en construccion
      </div>
    </main>
  );
}
