import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/app/Ui/Navbar/Navbar";
import HeadUser from "../Ui/User/HeadUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intisoft | Plataforma Integral",
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
        <main className=" bg-slate-100 grid grid-cols-[60px_1fr] md:grid-cols-[250px_1fr] grid-rows-1 gap-3 w-screen h-screen md:p-3 p-1.5">
          <Navbar />
          <main className="shadow-md rounded-xl md:rounded-RadiosMd">
            <HeadUser />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
