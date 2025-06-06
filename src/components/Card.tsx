interface CardProps {
    title: string,
    description: string,
    stack: string
}

export default function Card({title, description, stack}: CardProps) {
    return (
        <div
            className="bg-ctp-mantle shadow-lg hover:shadow-2xl shadow-ctp-crust rounded-lg p-6 max-w-md w-full mx-auto my-6 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
            <h2 className="text-2xl text-ctp-lavender-700 p-3">{title}</h2>

            <br/>
            <p className="text-ctp-text p-2">{description}</p>
            <br/>
            <p className="text-ctp-text p-2">{stack}</p>
        </div>
    );
}