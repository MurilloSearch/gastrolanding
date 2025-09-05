'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

export default function Contact() {

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Contacto</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="h-full shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Nuestra ubicación</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=31.332264,-110.945707`}
                className="w-full h-full" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dr. Murillo"
              ></iframe>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <div className="space-y-4 text-lg">
              <h3 className="font-headline text-2xl font-semibold">Información de contacto</h3>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Edificio Rosa, Av. Alvaro Obregon 19-Suite E, Fundó Legal, Centro, 84030 Heroica Nogales, Sonora.</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <a href="tel:+526311260958" className="text-blue-600 underline">+52 (631) 126-0958</a>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="font-medium">Lunes - Viernes</p>
                    <p className="text-base text-muted-foreground">9:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Sábado</p>
                    <p className="text-base text-muted-foreground">9:00 AM - 1:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Domingo</p>
                    <p className="text-base text-muted-foreground">Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[plugin.current]}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/calle1.jfif"
                      alt="Front of the clinic building"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-[3/2]"
                      data-ai-hint="clinic building"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/calle2.jfif"
                      alt="Side view of the clinic"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-[3/2]"
                      data-ai-hint="clinic side"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/dentro.jfif"
                      alt="Street view of the clinic"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-[3/2]"
                      data-ai-hint="clinic street"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );





  /*
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
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=31.332264,-110.945707`}
            title="Ubicación del Dr. Murillo">
          </iframe>
        </div>
      </div>
    </section>
  );*/
}
