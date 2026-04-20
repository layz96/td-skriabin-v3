"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    accent: "Клинкерный",
    title: "кирпич\nпремиум класса",
    description:
      "Более 300 позиций облицовочного кирпича, брусчатки и фасадной плитки от ведущих производителей",
    image: "/td-skriabin-v3/images/prod-1.jpg",
    cta: "Перейти в каталог",
    href: "/catalog",
  },
  {
    accent: "Фасадные",
    title: "решения для\nвашего дома",
    description:
      "Облицовочный кирпич, плитка и черепица для создания неповторимого архитектурного образа",
    image: "/td-skriabin-v3/images/prod-6.jpg",
    cta: "Подобрать материал",
    href: "/catalog/oblicovochnyj-kirpich",
  },
  {
    accent: "Клинкерная",
    title: "брусчатка и\nступени",
    description:
      "Надежные и долговечные решения для мощения дорожек, террас и входных групп",
    image: "/td-skriabin-v3/images/prod-7.jpg",
    cta: "Смотреть брусчатку",
    href: "/catalog/klinkernaya-bruschatka",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative bg-brand-dark overflow-hidden" style={{ height: "626px" }}>
      {/* Background decorative shapes */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-[10%] w-40 h-40 border-2 border-white rotate-12" />
        <div className="absolute bottom-20 left-[30%] w-24 h-24 border-2 border-white -rotate-6" />
        <div className="absolute top-32 right-[20%] w-32 h-32 border-2 border-white rotate-45" />
      </div>

      <div className="container-main h-full flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          {/* Text content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-[48px] lg:text-[64px] font-semibold text-white leading-[1.05] mb-6">
                <motion.span
                  className="text-brand-accent inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {slide.accent}
                </motion.span>
                <br />
                {slide.title.split("\n").map((line, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {line}
                    {i < slide.title.split("\n").length - 1 && <br />}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                className="text-neutral-400 text-lg mb-8 max-w-[480px] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link href={slide.href} className="btn-primary link-animated">
                  {slide.cta}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full aspect-[4/3] max-w-[540px] ml-auto rounded-2xl overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.accent + " " + slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-10 lg:bottom-10 flex items-center gap-4 z-20">
        <button
          onClick={prev}
          className="w-[70px] h-[58px] border border-white/20 flex items-center justify-center text-white hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="w-[70px] h-[58px] border border-white/20 flex items-center justify-center text-white hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-5 lg:translate-x-0 lg:bottom-10 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-brand-accent"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
