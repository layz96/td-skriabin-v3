"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestModal({ isOpen, onClose }: RequestModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSubmitted(false);
      setFormData({ name: "", phone: "", message: "" });
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-white w-full max-w-[480px] rounded-2xl p-8 shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-brand-text transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-semibold text-brand-text mb-2">
                  Обратная связь
                </h2>
                <p className="text-neutral-500 text-sm mb-6">
                  Оставьте заявку и наш менеджер свяжется с вами в течение 30 минут
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-1.5">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-[48px] border border-neutral-200 rounded-btn px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-1.5">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-[48px] border border-neutral-200 rounded-btn px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="+7 (999) 999-99-99"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-1.5">
                      Сообщение
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full border border-neutral-200 rounded-btn px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors resize-none"
                      placeholder="Опишите ваш запрос..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Отправить заявку
                  </button>
                  <p className="text-xs text-neutral-400 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-neutral-500 text-sm">
                  Наш менеджер свяжется с вами в ближайшее время
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
