import * as React from "react";

interface CardProps {
    title: string,
    description: string,
    stack: string
    children?: React.ReactNode
}

export default function Card({title, description, stack, children}: CardProps) {
    return (
        <div
            className="bg-ctp-mantle shadow-lg hover:shadow-2xl shadow-ctp-crust rounded-lg p-6 max-w-md w-full mx-auto my-6 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
            <h2 className="text-2xl text-ctp-lavender-700 p-3">{title}</h2>

            <br/>
            <p className="text-ctp-text p-2 gap-4">{description}</p>
            <p className="text-ctp-text p-2 gap-4" >{stack}</p>
            <div className="flex flex-row justify-center items-center gap-4">
                {children}
            </div>
        </div>
    );
}