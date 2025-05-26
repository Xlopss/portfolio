import Logo from "../components/Logo.tsx";
import {ROUTES} from "../Routes.tsx";
import {useState} from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const navItems = [
        {name: "ACCUEIL", path: ROUTES.HOME},
        {name: "PROJETS", path: ROUTES.PROJECTS},
        // {name: "LA DÉCHARGE", path: ROUTES.DUMP},
        {name: "CONTACT", path: ROUTES.CONTACT}
    ];
    const navLinks = navItems.map((item) => (
        <li key={item.name}>
            <a href={item.path} className="text-ctp-text hover:text-ctp-lavender-900 transition duration-300 ease-in-out">
                {item.name}
            </a>
        </li>
    ));

    return (
        <>
            <header>
                <nav className="flex px-6 md:px-20 py-5 justify-between items-center bg-ctp-base">
                    <a href={ROUTES.HOME}>
                        <Logo />
                    </a>
                    <ul className="hidden md:flex space-x-10 text-xl">
                        {navLinks}
                    </ul>
                    <button
                        className="md:hidden text-ctp-lavender-700"
                        onClick={() => setOpen(!open)}
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" className="bg-ctp-base">
                            <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                    {open && (
                        <ul className="absolute top-20 left-0 w-full bg-ctp-base flex flex-col items-center space-y-6 py-6 shadow-lg md:hidden z-50">
                            {navItems.map(item => (
                                <li key={item.name}>
                                    <a
                                        href={item.path}
                                        className="text-ctp-text hover:text-ctp-lavender-900 text-xl transition duration-300 ease-in-out"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </nav>
            </header>
        </>
    )
}