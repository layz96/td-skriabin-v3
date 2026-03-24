"use client";

import { useState } from "react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import CatalogGrid from "@/components/CatalogGrid";
import RequestModal from "@/components/RequestModal";
import { brands, products } from "@/data/products";

const stats = [
  { value: "5+", label: "лет на рынке" },
  { value: "6", label: "брендов" },
  { value: "300+", label: "товаров" },
  { value: "1000+", label: "заказов" },
  { value: "3", label: "шоурума" },
];

const completedProjects = [
  { title: "Коттеджный поселок Озерный", image: "/td-skriabin-v3/images/prod-1.jpg" },
  { title: "Частный дом в Тюмени", image: "/td-skriabin-v3/images/prod-6.jpg" },
  { title: "Бизнес-центр Европа", image: "/td-skriabin-v3/images/prod-2.jpg" },
  { title: "Загородная резиденция", image: "/td-skriabin-v3/images/prod-5.jpg" },
];

const articles = [
  { title: "Как выбрать облицовочный кирпич для фасада", image: "/td-skriabin-v3/images/prod-3.jpg" },
  { title: "Преимущества клинкерной брусчатки", image: "/td-skriabin-v3/images/prod-7.jpg" },
  { title: "Кирпич ручной формовки: особенности и применение", image: "/td-skriabin-v3/images/prod-4.jpg" },
  { title: "Монтаж клинкерных ступеней: пошаговая инструкция", image: "/td-skriabin-v3/images/prod-8.jpg" },
];

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Catalog Grid */}
      <CatalogGrid />

      {/* Company Stats Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Left: Stats card */}
            <div className="bg-brand-accent rounded-2xl p-10 flex flex-col justify-center">
              <h2 className="text-[36px] lg:text-[40px] font-semibold text-white leading-tight mb-3">
                Скрябин Керамикс
              </h2>
              <p className="text-white/80 text-base mb-8 max-w-[400px]">
                Ваш надежный партнер в мире премиального клинкерного кирпича
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Large image */}
            <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
              <img
                src="/td-skriabin-v3/images/cat-brick.jpg"
                alt="Клинкерный кирпич"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Brands Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="section-title mb-10 text-center">Наши партнеры</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/td-skriabin-v3/brands`}
                className="group flex flex-col items-center justify-center p-6 border border-neutral-100 rounded-xl hover:border-brand-accent/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center mb-3 group-hover:bg-brand-accent/10 transition-colors">
                  <span className="text-brand-accent font-bold text-sm text-center leading-tight">
                    {brand.name.split(" ")[0]}
                  </span>
                </div>
                <span className="text-sm font-medium text-brand-text text-center leading-tight">
                  {brand.name}
                </span>
                <span className="text-xs text-neutral-400 mt-1">{brand.country}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News/Articles Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Completed projects */}
            <div>
              <h2 className="text-[28px] font-semibold text-brand-text mb-8">
                Выполненные объекты
              </h2>
              <div className="space-y-4">
                {completedProjects.map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-center gap-4 bg-white p-3 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-[80px] h-[60px] rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-brand-text group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Articles */}
            <div>
              <h2 className="text-[28px] font-semibold text-brand-text mb-8">
                Полезные статьи
              </h2>
              <div className="space-y-4">
                {articles.map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-center gap-4 bg-white p-3 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-[80px] h-[60px] rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-brand-text group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-[15%] w-32 h-32 border-2 border-white rotate-12" />
          <div className="absolute bottom-10 right-[15%] w-24 h-24 border-2 border-white -rotate-6" />
        </div>
        <div className="container-main relative z-10 text-center">
          <h2 className="text-[36px] lg:text-[44px] font-semibold text-white mb-4">
            Нужна помощь с выбором?
          </h2>
          <p className="text-neutral-400 text-lg mb-6 max-w-[500px] mx-auto">
            Наши специалисты помогут подобрать оптимальный материал для вашего проекта
          </p>
          <a
            href="tel:+73452500600"
            className="text-brand-accent text-3xl lg:text-4xl font-bold block mb-8 hover:text-brand-accent-light transition-colors"
          >
            +7 (3452) 500-600
          </a>
          <button onClick={() => setShowModal(true)} className="btn-primary text-base">
            Получить консультацию
          </button>
        </div>
      </section>

      <RequestModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
