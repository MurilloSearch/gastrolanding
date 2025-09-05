import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PillBottle, Stethoscope, ShieldCheck, Hospital } from 'lucide-react';

const services = [
    {
        icon: PillBottle,
        title: 'Endoscopia y Colonoscopia',
        description: 'Procedimientos de diagnóstico y terapéuticos de vanguardia para examinar tu tracto digestivo.',
    },
    {
        icon: Stethoscope,
        title: 'Consulta de Salud Digestiva',
        description: 'Evaluaciones exhaustivas para trastornos como úlceras, gastritis, reflujo, enfermedades de hígado y vesícula, entre otros.',
    },
    {
        icon: ShieldCheck,
        title: 'Prevención y Seguimiento',
        description: 'Aatención continua para mantener tu salud digestiva y prevenir problemas futuros.',
    },
    {
        icon: Hospital,
        title: 'Cirugía',
        description: 'Cirugía con tecnología de punta para una variedad de afecciones gastrointestinales.',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">Servicios</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                        Ofrecemos atención especializada para el diagnóstico, tratamiento y seguimiento de enfermedades del aparato digestivo.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <CardHeader>
                                <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-2xl pt-4">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}