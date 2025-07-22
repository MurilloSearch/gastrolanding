export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-grey-60" >Contacto</h2>
        <p className="text-lg text-gray-700 mb-4">
          Agenda tu consulta con el Dr. Murillo.
        </p>
        <div className="text-gray-700 mb-6">
          <p><strong>Dirección:</strong> Edificio Rosa, Av. Alvaro Obregon 19-Suite E, Fundó Legal, Centro, 84030 Heroica Nogales, Sonora.</p>
          <p><strong>Teléfono:</strong> <a href="tel:+526311260958" className="text-blue-600 underline">+52 (631) 126-0958</a></p>
          <p><strong>Horario:</strong> Lunes a Viernes, 9:00 am - 5:00 pm</p>
          <p>Sabado: 9:00 am - 1:00 pm</p>
          <p>Domingo: Cerrado</p>
        </div>
        <div className="w-full h-64 md:h-96">
          <iframe
            className="w-full h-full border-0 rounded"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com.mx/maps/place/Av.+Alvaro+Obregon+19-Suite+13,+Fund%C3%B3+Legal,+Centro,+84000+Heroica+Nogales,+Son./@31.3323207,-110.9462326,19z/data=!3m1!4b1!4m5!3m4!1s0x86d6ad219d7d4a29:0x2b5c312f06dee49!8m2!3d31.3323207!4d-110.9455889?hl=es&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D&key=AIzaSyCCpBe7IxRVRWxHsObROJz0fHyc276qTQ4">
          </iframe>
        </div>
      </div>
    </section>
  );
}