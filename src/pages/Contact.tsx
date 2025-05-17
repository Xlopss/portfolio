import Type from "../components/Type.tsx";
import ButtonMailTo from "../components/ButtonMailTo.tsx";

export default function Contact() {
    return (
        <div className="text-ctp-lavender-700 text-center">
            <div className="p-30 text-3xl">
                <Type/>
            </div>
            <div className="p-10 px-40">
                <p>Si vous avez envie de me contacter pour une alternance, un poste, un projet, une question ou simplement pour discuter,
                    n'hésitez pas à m'écrire.</p>
                <br/>
                <p>Je suis toujours ouverte aux nouvelles opportunités !</p>
            </div>
            <ButtonMailTo label="Me contacter" mailto="mailto:estelle@alleau.dev"/>
        </div>
    )
};