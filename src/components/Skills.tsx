import angular from "../assets/techs/angular.svg"
import axios from "../assets/techs/axios.svg"
import git from "../assets/techs/git.svg"
import html from "../assets/techs/html.svg"
import java from "../assets/techs/java.svg"
import jetbrains from "../assets/techs/jetbrains.svg"
import js from "../assets/techs/js.svg"
import node from "../assets/techs/node.svg"
import php from "../assets/techs/php.svg"
import postman from "../assets/techs/postman.svg"
import react from "../assets/techs/react.svg"
import spring from "../assets/techs/spring.svg"
import symfony from "../assets/techs/symfony.svg"
import tailwindcss from "../assets/techs/tailwindcss.svg";
import ts from "../assets/techs/ts.svg"
import vite from "../assets/techs/vite.svg"
import vscode from "../assets/techs/vscode.svg"

export default function Skills() {

    const icons = {
        langages: [
            {name: "HTML", icon: html},
            {name: "Java", icon: java},
            {name: "JavaScript", icon: js},
            {name: "PHP", icon: php},
            {name: "TypeScript", icon: ts},
        ],
        frameworks: [
            {name: "Angular", icon: angular},
            {name: "Node.js", icon: node},
            {name: "React", icon: react},
            {name: "Spring Boot", icon: spring},
            {name: "Symfony", icon: symfony},
            {name: "Tailwind CSS", icon: tailwindcss},
        ],
        autres: [
            {name: "Axios", icon: axios},
            {name: "Git", icon: git},
            {name: "JetBrains", icon: jetbrains},
            {name: "Postman", icon: postman},
            {name: "Vite", icon: vite},
            {name: "VS Code", icon: vscode}
        ]
    }
    return (
        <div className="flex flex-col items-center text-ctp-text">
            <h2 className="text-ctp-lavender-700 text-xl md:text-2xl mb-5">Compétences techniques</h2>
            <div className="flex flex-row flex-wrap gap-4 w-full justify-center">
                {Object.entries(icons).map(([category, items]) => (
                    <div
                        key={category}
                        className="bg-ctp-mantle shadow-lg rounded-lg p-6 flex flex-col items-center  max-w-xl mx-auto"
                    >
                        <h3 className="text-lg text-ctp-lavender-700 font-semibold mb-5">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {items.map((item) => (
                                <div key={item.name} className="flex flex-col items-center relative group">
                                    <img src={item.icon} alt={item.name} className="w-12 h-12 mb-1"/>
                                    <span
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-ctp-mantle text-ctp-text text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition pointer-events-none z-10"
                                    >
                {item.name}
            </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}