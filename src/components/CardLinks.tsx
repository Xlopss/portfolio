interface CardLinksProps {
    svg: string;
    alt?: string;
    link: string;
}

export default function CardLinks({ svg, alt, link}: CardLinksProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg max-w-md w-full mx-auto my-6 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
        >
            <img src={svg} alt={alt} className="w-12 h-12 mb-4" />
        </a>
    );
}