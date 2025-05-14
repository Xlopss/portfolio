import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

export default function App() {

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-1">
                <h1 className="text-ctp-lavender-700 text-center">Estelle Alleau</h1>
            </main>
            <Footer/>
        </div>
    )
}
