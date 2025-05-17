import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import {ROUTES} from "../Routes.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import Projects from "../pages/Projects.tsx";
import Dump from "../pages/Dump.tsx";
import Contact from "../pages/Contact.tsx";
import Error from "../pages/Error.tsx";

export default function App() {

    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <main className="flex-1">
                    <Routes>
                        <Route path={ROUTES.HOME} element={<Home/>}/>
                        <Route path={ROUTES.PROJECTS} element={<Projects/>}/>
                        <Route path={ROUTES.DUMP} element={<Dump/>}/>
                        <Route path={ROUTES.CONTACT} element={<Contact/>}/>
                        <Route path={ROUTES.ERROR} element={<Error/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
