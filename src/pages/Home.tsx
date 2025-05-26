import Skills from "../components/Skills.tsx";

export default function Home() {

    const cv: string = "https://drive.google.com/file/d/1U-cgapTYCQNTvKRFrYWroXPqoXk3A3e0/view?usp=drive_link";

    return (
        <div className="text-ctp-text text-center flex flex-col items-center">
            <h1 className="text-ctp-lavender-700 p-10 mb-5">
                Bienvenue !
            </h1>
            <div className="bg-ctp-mantle shadow-lg shadow-ctp-crust rounded-lg p-6 mb-8">
                <h2 className="text-xl md:text-2xl mb-5">Salut, moi c'est Estelle 👋</h2>
                <p className="max-w-2xl w-full mb-3">Je suis une développeuse full-stack sur Lyon qui adore s'investir
                    dans des projets concrets et utiles avec des défis techniques à relever, ce qui me permet d'être en
                    constante évolution.</p>
                <p>Je suis actuellement en préparation au titre de Conceptrice et Développeuse d'Applications.</p>
                <p className="text-ctp-lavender-700">Je suis disponible de suite pour une alternance (12-15 mois) sur
                    Lyon.</p>
            </div>
            <Skills/>
            <button onClick={() => window.open(cv, "_blank")}
                    className="bg-ctp-lavender-700 text-ctp-base font-bold py-2 px-4 rounded hover:bg-ctp-lavender-900 transition duration-300 ease-in-out m-8">
                Télécharger mon CV
            </button>

        </div>
    )
}