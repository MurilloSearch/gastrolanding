'use client';

export default function Navbar() {
    return (

        <nav className='fixed top-0 w-full bg-white shadow z-50'>
            <ul className='flex justify-center gap-8 p-4 text-gray-700 font-medium'>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#experiencia">Experiencia</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    );
};

