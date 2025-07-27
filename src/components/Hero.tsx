import Link from "next/link";

export default function Hero() {
    return (
        <section id="inicio" className="min-h-[30vh] flex flex-col justify-center items-center text-center pt-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Dr. Sergio Adrián Murillo Sainz</h1>
            <Link href="#contacto">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200">
                    Contacto                </button>
            </Link>
        </section>
    );
}