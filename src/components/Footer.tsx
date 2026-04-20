import Link from "next/link";

const catalogLinks = [
  { label: "Облицовочный кирпич", href: "/catalog/oblicovochnyj-kirpich" },
  { label: "Клинкерная брусчатка", href: "/catalog/klinkernaya-bruschatka" },
  { label: "Фасадная плитка", href: "/catalog/fasadnaya-plitka" },
  { label: "Клинкерная черепица", href: "/catalog/klinkernaya-cherepica" },
  { label: "Кирпич ручной формовки", href: "/catalog/kirpich-ruchnoj-formovki" },
  { label: "Ригельный кирпич", href: "/catalog/rigelnyj-kirpich" },
  { label: "Клинкерные ступени", href: "/catalog/klinkernye-stupeni" },
];

const infoLinks = [
  { label: "О компании", href: "/about" },
  { label: "Доставка и оплата", href: "/delivery" },
  { label: "Калькулятор", href: "/calculator" },
  { label: "Бренды", href: "/brands" },
  { label: "Контакты", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-dark via-brand-dark to-[#111] text-white">
      <div className="container-main pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[44px] h-[44px] rounded-full bg-brand-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">CK</span>
              </div>
              <div>
                <div className="font-semibold text-lg">Скрябин Керамикс</div>
                <div className="text-neutral-500 text-xs">Премиальный клинкер</div>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Официальный дистрибьютор ведущих европейских и российских производителей
              клинкерного кирпича и керамических материалов.
            </p>
            <div className="flex gap-3">
              {["VK", "TG", "WA"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-neutral-400 hover:bg-brand-accent hover:text-white transition-all duration-200 text-xs font-semibold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Каталог</h3>
            <ul className="space-y-3">
              {catalogLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 text-sm hover:text-brand-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Информация</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 text-sm hover:text-brand-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Контакты</h3>
            <div className="space-y-4">
              <div>
                <a
                  href="tel:+73452500600"
                  className="text-brand-accent font-semibold text-xl hover:text-brand-accent-light transition-colors"
                >
                  +7 (3452) 500-600
                </a>
                <div className="text-neutral-500 text-xs mt-1">Пн-Пт: 9:00 - 18:00</div>
              </div>
              <div>
                <a
                  href="mailto:info@skriabin-ceramics.ru"
                  className="text-neutral-400 text-sm hover:text-brand-accent transition-colors"
                >
                  info@skriabin-ceramics.ru
                </a>
              </div>
              <div className="text-neutral-400 text-sm leading-relaxed">
                г. Тюмень, ул. Республики, 211
                <br />
                ТЦ &laquo;Строитель&raquo;, 2 этаж
              </div>
              <div className="text-neutral-400 text-sm leading-relaxed">
                Шоурум: г. Тюмень, ул. Широтная, 104к2
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-neutral-500 text-sm">
            &copy; 2024 Скрябин Керамикс. Все права защищены.
          </div>
          <div className="flex gap-6 text-neutral-500 text-sm">
            <a href="#" className="hover:text-brand-accent transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-brand-accent transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
