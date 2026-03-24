"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import RequestModal from "@/components/RequestModal";

const advantages = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Гарантия качества",
    text: "Все материалы сертифицированы и проходят многоступенчатый контроль качества",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    title: "3 шоурума",
    text: "Посмотрите и потрогайте материалы в наших выставочных залах в Тюмени",
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Честные цены",
    text: "Прямые поставки от производителей без посредников и наценок",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Быстрая доставка",
    text: "Собственная логистика и доставка по Тюмени и области",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Экспертная команда",
    text: "Наши специалисты помогут с выбором и расчетом материалов",
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Полный цикл",
    text: "От подбора материала до доставки на объект -- все в одном месте",
  },
];

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs items={[{ label: "О компании" }]} />

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <h1 className="text-[40px] lg:text-[48px] font-semibold text-brand-text mb-6 leading-tight">
              <span className="text-brand-accent">Скрябин Керамикс</span> --
              ваш надежный партнер
            </h1>
            <p className="text-neutral-500 text-lg leading-relaxed mb-6">
              Мы специализируемся на поставках премиального клинкерного кирпича,
              фасадной плитки, брусчатки и черепицы от ведущих российских и
              европейских производителей.
            </p>
            <p className="text-neutral-500 text-base leading-relaxed mb-8">
              С 2019 года мы помогаем архитекторам, застройщикам и частным
              домовладельцам создавать красивые и долговечные фасады. Наша
              команда экспертов поможет подобрать оптимальный материал для любого
              проекта.
            </p>
            <button onClick={() => setShowModal(true)} className="btn-primary">
              Получить консультацию
            </button>
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[360px]">
            <img
              src="/td-skriabin-v3/images/cat-brick.jpg"
              alt="О компании"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">
          {[
            { value: "5+", label: "Лет на рынке" },
            { value: "6", label: "Брендов-партнеров" },
            { value: "300+", label: "Товаров в наличии" },
            { value: "1000+", label: "Выполненных заказов" },
            { value: "3", label: "Шоурума в Тюмени" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl font-bold text-brand-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <h2 className="section-title mb-10 text-center">Наши преимущества</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-brand-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={adv.icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-text mb-2">
                {adv.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {adv.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <RequestModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
