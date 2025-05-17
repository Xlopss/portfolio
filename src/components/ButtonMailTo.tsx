import {Link} from "react-router-dom";

export default function ButtonMailTo({mailto, label}: { mailto: string, label: string }) {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
            className="bg-ctp-lavender-700 text-ctp-base font-bold py-2 px-4 rounded hover:bg-ctp-lavender-900 transition duration-300 ease-in-out"
        >
            {label}
        </Link>
    );
}
