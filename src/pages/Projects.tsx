import Card from "../components/Card.tsx";

export default function Projects() {
    return (
        <div className="text-ctp-text text-center">
            <h1 className="text-ctp-lavender-700 p-5">Projets</h1>
            <p>Voici un aperçu des projets réalisés seule ou en équipe
                <div className="flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-6 mt-6">
                    <Card title="Portfolio"
                          description="Conception et développement de ce portfolio"
                          stack="React, TypeScript & Vite"/>
                    <Card title="-En cours-"
                          description="Conception et développement d'une application mobile à destination des Conservateurs-Restaurateurs d'art répondant à un besoin de centralisation et partage de protocoles scientifiques"
                          stack="React Native, Expo & ExpressJS"/>
                    <Card title="BigBuzz"
                          description="Développement d'un jeu éducatif de type quizz configurable pour une plateforme d'apprentissage SaaS"
                            stack="React, TypeScript, Vite, Symfony & Doctrine"/>
                </div>
            </p>
        </div>
    )
};