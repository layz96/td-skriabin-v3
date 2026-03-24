import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="py-4">
      <ol className="flex items-center flex-wrap gap-1.5 text-sm">
        <li>
          <Link
            href="/td-skriabin-v3"
            className="text-neutral-400 hover:text-brand-accent transition-colors"
          >
            Главная
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-neutral-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {item.href ? (
              <Link
                href={item.href}
                className="text-neutral-400 hover:text-brand-accent transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-text font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
