export default function Services() {
    return (

        <section id="servicios" className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Servicios</h2>
                <p className="text-lg text-gray-700 mb-10">
                    Ofrecemos atención especializada para el diagnóstico, tratamiento y seguimiento de enfermedades del aparato digestivo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-800">
                    <ul className="space-y-4">
                        <li>✔ Endoscopía digestiva alta</li>
                        <li>✔ Colonoscopía</li>
                        <li>✔ Cirugía laparoscópica</li>
                        <li>✔ Tratamiento de reflujo gástrico</li>
                    </ul>
                    <ul className="space-y-4">
                        <li>✔ Atención a enfermedades del hígado y vesicula</li>
                        <li>✔ Diagnóstico de cáncer gastrointestinal</li>
                        <li>✔ Tratamiento de úlceras y gastritis</li>
                        <li>✔ Consultas preventivas y seguimiento</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}