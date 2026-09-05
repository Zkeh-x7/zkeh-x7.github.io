import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zkeh-x7.github.io"),
  title: "Johanna Romero | Desarrollo Full Stack JavaScript + Animación 3D",
  description:
    "Portafolio profesional de Johanna Romero: proyectos Full Stack JavaScript, caso de estudio técnico y formación en Animación 3D.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
