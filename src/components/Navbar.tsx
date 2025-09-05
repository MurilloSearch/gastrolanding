'use client';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from '@/components/Logo';

const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
    const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-2 md:gap-4', className)}>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-medium text-foreground/80 transition-colors hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        hasScrolled ? 'bg-background/95 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Logo />
        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
          <Button asChild>
            <a href="#contacto">Agendar cita</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background">
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <Logo />
                  <SheetTrigger asChild>
                     
                  </SheetTrigger>
                </div>
                <div className="mt-8 flex flex-1 flex-col items-center justify-center gap-6">
                  <NavLinks className="flex-col text-xl" />
                  <Button asChild size="lg" className="mt-8">
                    <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>Agendar cita</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};


