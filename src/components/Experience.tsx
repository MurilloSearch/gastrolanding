import { Award, School, Sparkles } from 'lucide-react';
import Image from 'next/image';


const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              Experiencia y empatía
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
Con años de formación especializada y un compromiso con la atención centrada en el paciente, nuestra práctica le brindará el mejor tratamiento para su padecimiento. Nuestro enfoque se basa en escuchar sus inquietudes y elaborar un elaborar plan personalizado para su bienestar.            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-full">
                   <School className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Experiencia</h3>
                  <p className="text-muted-foreground">Más de 35 años de experiencia como Cirujano Gastroenterologo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-primary/20 rounded-full">
                   <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Certificado por el consejo</h3>
                  <p className="text-muted-foreground">Certificado por el Consejo Mexicano de Cirugía General.</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                 <div className="p-3 bg-primary/20 rounded-full">
                   <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Compromiso con la salud digestiva</h3>
                  <p className="text-muted-foreground">Combinando experiencia, tecnología de vanguardia y un trato humano.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-2">
            <div className="relative aspect-[7/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/doctores7.png"
                alt="Doctor in a clinical setting"
                fill
                className="object-cover"
                data-ai-hint="medical clinic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;