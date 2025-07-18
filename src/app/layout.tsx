import type { Metadata } from "next";
import StructuredData from "./components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cirujano Gastroenterólogo en Nogales, Sonora | Dr. Sergio Murillo",
  description:
    "Más de 35 años de experiencia en cirugía gastrointestinal. Atención profesional en Nogales, Sonora. Agenda tu consulta hoy.",
  keywords: [
    "endoscopia",
    "colonoscopia",
    "cirugía",
    "gastroenterología",
    "cirujano",
    "vesicula",
    "Nogales Sonora",
  ],
  authors: [{ name: "Dr. Sergio Murillo" }],
  creator: "Dr. Sergio Murillo",
  //metadataBase: new URL(""),
  openGraph: {
    title: "Dr. Sergio Murillo - Cirujano Gastroenterólogo en Nogales, Son.",
    description:
      "Atención especializada en enfermedades del aparato digestivo. Más de 35 años de experiencia.",
    url: "",
    siteName: "Dr. Sergio Murillo",
    locale: "es_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <StructuredData/>
      </head>
      <body>{children}</body>
    </html>
  );
}