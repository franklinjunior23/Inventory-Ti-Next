import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  ProviderNextUi  from "@/app/Providers/ThemeNext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intisoft | PLogin ",
  description:
    "Descubre la potencia de Intisoft: tu solución integral para gestión de inventario, soporte técnico y administración de TI. Simplifica tus operaciones y potencia tu productividad con nuestra avanzada suite de software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
       {children}
      </body>
    </html>
  );
}
