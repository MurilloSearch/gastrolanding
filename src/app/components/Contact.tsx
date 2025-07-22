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
            src="https://www.google.com/maps/embed/v1/place?q=Nogales,+AZ&key=AIzaSyCCpBe7IxRVRWxHsObROJz0fHyc276qTQ4">
          </iframe>
        </div>
      </div>
    </section>
  );
}