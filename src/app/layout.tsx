import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Скрябин Керамикс | Премиальный клинкерный кирпич",
  description:
    "Официальный дистрибьютор ведущих производителей клинкерного кирпича, брусчатки, фасадной плитки и черепицы. Более 300 позиций в наличии.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
