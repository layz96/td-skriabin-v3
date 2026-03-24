"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

type CalcType = "brick" | "paving" | "tile";

const calcTypes: { id: CalcType; label: string; unit: string; perSqm: number }[] = [
  { id: "brick", label: "Кирпич для фасада", unit: "шт", perSqm: 52 },
  { id: "paving", label: "Брусчатка", unit: "шт", perSqm: 48 },
  { id: "tile", label: "Фасадная плитка", unit: "шт", perSqm: 48 },
];

export default function CalculatorPage() {
  const [calcType, setCalcType] = useState<CalcType>("brick");
  const [area, setArea] = useState("");
  const [windowArea, setWindowArea] = useState("");
  const [reserve, setReserve] = useState("10");
  const [result, setResult] = useState<{
    sqm: number;
    pieces: number;
    pallets: number;
  } | null>(null);

  const calculate = () => {
    const totalArea = parseFloat(area) || 0;
    const windows = parseFloat(windowArea) || 0;
    const reservePercent = parseFloat(reserve) || 0;
    const calcInfo = calcTypes.find((c) => c.id === calcType)!;

    const netArea = Math.max(totalArea - windows, 0);
    const withReserve = netArea * (1 + reservePercent / 100);
    const pieces = Math.ceil(withReserve * calcInfo.perSqm);
    const pallets = Math.ceil(pieces / 480);

    setResult({
      sqm: Math.round(withReserve * 100) / 100,
      pieces,
      pallets,
    });
  };

  return (
    <div className="bg-brand-light min-h-screen">
      <div className="container-main">
        <Breadcrumbs items={[{ label: "Калькулятор" }]} />

        <h1 className="text-[40px] lg:text-[48px] font-semibold text-brand-text mb-4">
          Калькулятор материалов
        </h1>
        <p className="text-neutral-500 text-lg mb-10 max-w-[600px]">
          Рассчитайте необходимое количество материала для вашего проекта
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 pb-16">
          {/* Calculator form */}
          <div className="bg-white rounded-2xl p-8">
            {/* Type selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-brand-text mb-3">
                Тип материала
              </label>
              <div className="flex flex-wrap gap-3">
                {calcTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setCalcType(type.id);
                      setResult(null);
                    }}
                    className={`px-5 h-[44px] rounded-btn text-sm font-medium transition-all duration-200 ${
                      calcType === type.id
                        ? "bg-brand-accent text-white"
                        : "bg-brand-light text-brand-text hover:bg-brand-accent/10"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Area input */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-brand-text mb-1.5">
                  Площадь стен / поверхности (м&sup2;)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value);
                    setResult(null);
                  }}
                  className="w-full h-[48px] border border-neutral-200 rounded-btn px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="Например: 120"
                />
              </div>

              {calcType === "brick" && (
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-1.5">
                    Площадь окон и дверей (м&sup2;)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={windowArea}
                    onChange={(e) => {
                      setWindowArea(e.target.value);
                      setResult(null);
                    }}
                    className="w-full h-[48px] border border-neutral-200 rounded-btn px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Например: 18"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-brand-text mb-1.5">
                  Запас на подрезку (%)
                </label>
                <div className="flex gap-3">
                  {["5", "10", "15"].map((val) => (
                    <button
                      key={val}
                      onClick={() => {
                        setReserve(val);
                        setResult(null);
                      }}
                      className={`flex-1 h-[44px] rounded-btn text-sm font-medium transition-all duration-200 ${
                        reserve === val
                          ? "bg-brand-accent text-white"
                          : "bg-brand-light text-brand-text hover:bg-brand-accent/10"
                      }`}
                    >
                      {val}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={calculate}
              disabled={!area}
              className="btn-primary w-full mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Рассчитать
            </button>
          </div>

          {/* Result */}
          <div className="space-y-5">
            {result ? (
              <div className="bg-brand-accent rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">Результат расчета</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">Площадь</span>
                    <span className="text-xl font-semibold">{result.sqm} м&sup2;</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">Количество</span>
                    <span className="text-xl font-semibold">
                      {result.pieces.toLocaleString("ru-RU")} шт
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-white/80">Поддонов</span>
                    <span className="text-xl font-semibold">{result.pallets} шт</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center">
                <svg className="w-16 h-16 text-neutral-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p className="text-neutral-400 text-sm">
                  Заполните параметры и нажмите &laquo;Рассчитать&raquo;
                </p>
              </div>
            )}

            <div className="bg-white rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-brand-text mb-3">
                Обратите внимание
              </h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex gap-2">
                  <span className="text-brand-accent mt-0.5">*</span>
                  Расчет является приблизительным
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-accent mt-0.5">*</span>
                  Точный расчет выполнит наш менеджер
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-accent mt-0.5">*</span>
                  Рекомендуем запас 10-15% на подрезку
                </li>
              </ul>
            </div>

            <a href="tel:+73452500600" className="btn-outline w-full text-center block">
              Позвонить для точного расчета
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
