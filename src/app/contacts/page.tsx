"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs items={[{ label: "Контакты" }]} />

        <h1 className="text-[40px] lg:text-[48px] font-semibold text-brand-text mb-10">
          Контакты
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-16">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-brand-text mb-6">
                Свяжитесь с нами
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400 mb-1">Телефон</div>
                    <a href="tel:+73452500600" className="text-lg font-semibold text-brand-text hover:text-brand-accent transition-colors">
                      +7 (3452) 500-600
                    </a>
                    <div className="text-sm text-neutral-400 mt-0.5">Пн-Пт: 9:00 - 18:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400 mb-1">Email</div>
                    <a href="mailto:info@skriabin-ceramics.ru" className="text-base font-medium text-brand-text hover:text-brand-accent transition-colors">
                      info@skriabin-ceramics.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400 mb-1">Офис</div>
                    <div className="text-base font-medium text-brand-text">
                      г. Тюмень, ул. Республики, 211
                    </div>
                    <div className="text-sm text-neutral-400 mt-0.5">
                      ТЦ &laquo;Строитель&raquo;, 2 этаж
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400 mb-1">Шоурум</div>
                    <div className="text-base font-medium text-brand-text">
                      г. Тюмень, ул. Широтная, 104к2
                    </div>
                    <div className="text-sm text-neutral-400 mt-0.5">
                      Пн-Сб: 10:00 - 19:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden h-[300px] flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-neutral-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <div className="text-neutral-400 text-sm">Карта загрузится здесь</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-brand-text mb-2">
              Напишите нам
            </h2>
            <p className="text-neutral-500 text-sm mb-6">
              Заполните форму и мы свяжемся с вами в ближайшее время
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-1.5">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full h-[48px] border border-neutral-200 rounded-btn px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-1.5">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full h-[48px] border border-neutral-200 rounded-btn px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="+7 (999) 999-99-99"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-[48px] border border-neutral-200 rounded-btn px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-1.5">
                    Сообщение
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full border border-neutral-200 rounded-btn px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors resize-none"
                    placeholder="Опишите ваш запрос..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Отправить
                </button>
                <p className="text-xs text-neutral-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-2">
                  Сообщение отправлено!
                </h3>
                <p className="text-neutral-500 text-sm">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
