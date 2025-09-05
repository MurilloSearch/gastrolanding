import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
              Cuidado para su Salud Digestiva
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                Servicios de gastroenterología personalizados, a mano expertos para ayudarlo a sentirse de lo mejor. Su camino hacia el bienestar comienza aquí.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#contacto">
                  Agendar cita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href="#servicios">
                  Nuestros servicio
                </a>
              </Button>
            </div>
          </div>
          <div className='flex justify-center'>
          <div className="sm:h-120 md:h-100 lg:h-120 w-100 rounded-lg overflow-hidden shadow-2xl inline-block">
            <Image
              src="/drmurillo.png"
              alt="Dr. Murillo"
              width={500}
              height={700}
              className="object-contain"
              data-ai-hint="Dr. Sergio Murillo"
            />
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
