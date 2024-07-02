import NavbarMobile from "../ui/general/NavbarMobile";
import NavbarPc from "../ui/general/NavbarPc";

export default function RootLayout({ children }) {
    return (
        <>
            <NavbarMobile />
            <NavbarPc />
            {children}
        </>
    );
}
