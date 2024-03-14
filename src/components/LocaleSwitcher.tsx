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

  const locales = [{label: 'English', value:'en'}, {label: 'Русский', value: 'ru'}]

  return (
    <div className='flex justify-end items-center mb-6 gap-4 text-xs'>
      {locales.map((l) => (
        <button
          onClick={() => handleChange(l.value)}
          key={l.value}
          className={`p-1 px-6 border-white pb-[2px] border-2 uppercase text-center items-center ${ locale === l.value ? 'bg-white text-black' : 'text-white' }`}>
          {l.label}
        </button>
      ))}
    </div>
  );
}
