import Logo from "../components/Logo.tsx";
import {ROUTES} from "../Routes.tsx";

export default function Navbar() {

    const navItems = [
        {name: "ACCUEIL", path: ROUTES.HOME},
        {name: "PROJETS", path: ROUTES.PROJECTS},
        {name: "LA DÉCHARGE", path: ROUTES.DUMP},
        {name: "CONTACT", path: ROUTES.CONTACT}
    ];
    const navLinks = navItems.map((item) => (
        <li key={item.name}>
            <a href={item.path} className="text-ctp-lavender-700 hover:text-ctp-lavender-900">
                {item.name}
            </a>
        </li>
    ));

    return (
        <>
            <header>
                <nav className=" flex px-20 py-5 justify-between">
                    <Logo />
                    <ul className="flex justify-end space-x-10 text-xl">
                        {navLinks}
                    </ul>
                </nav>
            </header>
        </>
    )
}