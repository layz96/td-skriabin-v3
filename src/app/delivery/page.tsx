"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import RequestModal from "@/components/RequestModal";

const deliveryZones = [
  { zone: "По Тюмени", price: "от 3 000 руб.", time: "1-2 дня" },
  { zone: "Тюменская область (до 100 км)", price: "от 5 000 руб.", time: "2-3 дня" },
  { zone: "Тюменская область (100-300 км)", price: "от 8 000 руб.", time: "3-5 дней" },
  { zone: "Другие регионы", price: "по запросу", time: "5-14 дней" },
];

const paymentMethods = [
  {
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    title: "Банковская карта",
    text: "Оплата картой Visa, MasterCard, МИР при получении или онлайн",
  },
  {
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Наличные",
    text: "Оплата наличными при получении заказа в офисе или курьеру",
  },
  {
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z",
    title: "Безналичный расчет",
    text: "Для юридических лиц -- оплата по счету с НДС и без",
  },
];

export default function DeliveryPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs items={[{ label: "Доставка и оплата" }]} />

        <h1 className="text-[40px] lg:text-[48px] font-semibold text-brand-text mb-4">
          Доставка и оплата
        </h1>
        <p className="text-neutral-500 text-lg mb-12 max-w-[600px]">
          Организуем доставку клинкерных материалов по Тюмени и области.
          Собственный транспорт и проверенные партнеры.
        </p>

        {/* Delivery zones */}
        <div className="mb-16">
          <h2 className="text-[28px] font-semibold text-brand-text mb-8">
            Зоны доставки
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliveryZones.map((zone) => (
              <div
                key={zone.zone}
                className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-brand-text mb-3">
                  {zone.zone}
                </h3>
                <div className="text-2xl font-bold text-brand-accent mb-1">
                  {zone.price}
                </div>
                <div className="text-sm text-neutral-400">Срок: {zone.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-brand-text mb-6">
              Условия доставки
            </h2>
            <ul className="space-y-4">
              {[
                "Доставка осуществляется собственным транспортом и транспортными компаниями",
                "Минимальный заказ для бесплатной доставки по Тюмени -- от 1 поддона",
                "Разгрузка манипулятором включена в стоимость доставки",
                "Возможен самовывоз со склада по адресу: г. Тюмень, ул. Широтная, 104к2",
                "Точную стоимость доставки уточняйте у менеджера",
                "При заказе от 5 поддонов -- скидка на доставку",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-brand-accent shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-neutral-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden min-h-[360px]">
            <img
              src="/td-skriabin-v3/images/cat-paving.jpg"
              alt="Доставка"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-white text-xl font-semibold mb-2">
                Нужна доставка?
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Оставьте заявку и мы рассчитаем стоимость доставки
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="btn-primary text-sm"
              >
                Рассчитать доставку
              </button>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="mb-16">
          <h2 className="text-[28px] font-semibold text-brand-text mb-8">
            Способы оплаты
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {paymentMethods.map((method) => (
              <div
                key={method.title}
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
                      d={method.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-brand-text mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-neutral-500">{method.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-dark rounded-2xl p-10 text-center mb-16">
          <h2 className="text-[28px] font-semibold text-white mb-4">
            Остались вопросы по доставке?
          </h2>
          <p className="text-neutral-400 mb-6">
            Позвоните нам или оставьте заявку -- мы все рассчитаем
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+73452500600" className="btn-primary">
              +7 (3452) 500-600
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>

      <RequestModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
