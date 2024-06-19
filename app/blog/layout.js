"use client"
import Banner from "../ui/blog/Banner";
import NavbarMobile from "../ui/general/NavbarMobile";
import NavbarPc from "../ui/general/NavbarPc";

export default function RootLayout({ children }) {
    return (
        <>
            <NavbarMobile />
            <NavbarPc />
            <Banner text={'Descubrí ideas que inspiran y un futuro digital que promete'} />
            {children}
        </>
    );
}
