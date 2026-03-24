"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RequestModal from "./RequestModal";

const navItems = [
  { label: "Каталог", href: "/td-skriabin-v3/catalog", hasDropdown: true },
  { label: "Бренды", href: "/td-skriabin-v3/brands" },
  { label: "Калькулятор", href: "/td-skriabin-v3/calculator" },
  { label: "О компании", href: "/td-skriabin-v3/about" },
  { label: "Доставка", href: "/td-skriabin-v3/delivery" },
  { label: "Контакты", href: "/td-skriabin-v3/contacts" },
];

const catalogDropdown = [
  { label: "Облицовочный кирпич", href: "/td-skriabin-v3/catalog/oblicovochnyj-kirpich" },
  { label: "Клинкерная брусчатка", href: "/td-skriabin-v3/catalog/klinkernaya-bruschatka" },
  { label: "Фасадная плитка", href: "/td-skriabin-v3/catalog/fasadnaya-plitka" },
  { label: "Клинкерная черепица", href: "/td-skriabin-v3/catalog/klinkernaya-cherepica" },
  { label: "Кирпич ручной формовки", href: "/td-skriabin-v3/catalog/kirpich-ruchnoj-formovki" },
  { label: "Ригельный кирпич", href: "/td-skriabin-v3/catalog/rigelnyj-kirpich" },
  { label: "Клинкерные ступени", href: "/td-skriabin-v3/catalog/klinkernye-stupeni" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCatalogDropdown, setShowCatalogDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Top bar */}
        <div className="bg-brand-dark">
          <div className="container-main flex items-center justify-between h-[90px]">
            {/* Logo */}
            <Link href="/td-skriabin-v3" className="flex items-center gap-3 shrink-0 transition-transform duration-200 hover:scale-[1.02]">
              <div className="w-[48px] h-[48px] rounded-full bg-brand-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">CK</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-semibold text-lg leading-tight">
                  Скрябин Керамикс
                </div>
                <div className="text-neutral-400 text-xs">
                  Премиальный клинкерный кирпич
                </div>
              </div>
            </Link>

            {/* Search */}
            <div className="hidden md:flex items-center flex-1 max-w-[420px] mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Поиск по каталогу..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[44px] bg-white/10 border border-white/20 rounded-btn px-4 pr-10 text-white placeholder:text-neutral-400 text-sm focus:outline-none focus:border-brand-accent transition-colors duration-200"
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Phone + CTA */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex flex-col items-end">
                <a
                  href="tel:+73452500600"
                  className="text-white font-semibold text-lg hover:text-brand-accent transition-colors"
                >
                  +7 (3452) 500-600
                </a>
                <span className="text-neutral-400 text-xs">Пн-Пт: 9:00 - 18:00</span>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="hidden sm:inline-flex btn-primary text-sm"
              >
                Обратная связь
              </button>
              {/* Mobile burger */}
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation bar */}
        <nav className="bg-brand-dark/95 backdrop-blur-sm border-t border-white/10">
          <div className="container-main hidden lg:flex items-center h-[50px] gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setShowCatalogDropdown(true)}
                onMouseLeave={() => item.hasDropdown && setShowCatalogDropdown(false)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm text-neutral-300 hover:text-brand-accent transition-all duration-200 font-medium border-b-2 border-transparent hover:border-brand-accent/50"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${showCatalogDropdown ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {/* Catalog dropdown */}
                {item.hasDropdown && showCatalogDropdown && (
                  <div className="absolute top-full left-0 w-[280px] bg-brand-dark border border-white/10 shadow-2xl py-2 z-50">
                    {catalogDropdown.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        className="block px-5 py-2.5 text-sm text-neutral-300 hover:text-brand-accent hover:bg-white/5 transition-colors"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-dark border-t border-white/10">
            <div className="container-main py-4 space-y-1">
              {/* Mobile search */}
              <div className="mb-4 md:hidden">
                <input
                  type="text"
                  placeholder="Поиск по каталогу..."
                  className="w-full h-[44px] bg-white/10 border border-white/20 rounded-btn px-4 text-white placeholder:text-neutral-400 text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-neutral-300 hover:text-brand-accent transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a href="tel:+73452500600" className="block text-brand-accent font-semibold text-lg mb-3 px-4">
                  +7 (3452) 500-600
                </a>
                <button
                  onClick={() => { setShowModal(true); setMobileMenuOpen(false); }}
                  className="btn-primary w-full text-sm"
                >
                  Обратная связь
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[140px]" />

      <RequestModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
