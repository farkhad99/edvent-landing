'use client';

import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/libs/i18nNavigation';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (value: string) => {
    router.push(pathname, { locale: value });
    router.refresh();
  };

  const locales = [
    { label: 'English', value: 'en' },
    { label: 'Русский', value: 'ru' }
  ];

  return (
    <div className="mb-6 flex items-center justify-end gap-4 text-xs">
      {locales.map((l) => (
        <button
          type="button"
          onClick={() => handleChange(l.value)}
          key={l.value}
          className={`items-center border-2 border-white p-1 px-6 pb-[2px] text-center uppercase ${locale === l.value ? 'bg-white text-black' : 'text-white'}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
