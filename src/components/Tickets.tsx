import Image from 'next/image';
import { useTranslations } from 'next-intl';

import bannerimg from '../../public/assets/images/tickets-banner.png';

const Tickets = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`;

  const standard = {
    services: ['access', 'limit', 'photo', 'network']
  };

  const premium = {
    services: ['access', 'limit', 'photo', 'network', 'coupon']
  };

  const vip = {
    services: [
      'access',
      'special',
      'network',
      'lounge',
      'buffet',
      'coupon',
      'separate',
      'translation',
      'headset',
      'photo',
      'vip_special'
    ]
  };

  const sip = {
    services: [
      'access',
      'special',
      'network',
      'lounge',
      'buffet',
      'coupon',
      'separate',
      'translation',
      'headset',
      'photo',
      'sip_special',
      'assistance'
    ]
  };

  return (
    <div
      id="tickets"
      className="relative flex w-full flex-col items-center gap-6 bg-transparent bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: mainImage
      }}
    >
      <h1 className="text-3xl font-bold uppercase text-white md:text-5xl">
        {t('Tickets.title')}
      </h1>

      <div className="mx-auto my-6 grid max-w-[990px] flex-wrap gap-8 px-10 md:grid-cols-4 md:justify-between">
        <div className="flex flex-col">
          <div className="rounded-t-md bg-gray-100 py-2 pb-4 text-center text-2xl uppercase text-white">
            {t('Tickets.standard.title')}
          </div>

          <div className="-mt-2 grow rounded-md bg-white p-2 text-black">
            <p className="py-2 text-center text-lg font-medium">
              {t('Tickets.standard.level')}
            </p>
            <ul className="px-2 pb-1">
              {standard.services.map((s) => (
                <li className="flex gap-2 py-1" key={s}>
                  <div className="shrink-0">
                    <Image
                      alt="verified"
                      src="/assets/images/verified-icon.svg"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="-mt-1 text-sm font-thin">
                    {/* 
                    // @ts-ignore */}
                    {t(`Tickets.standard.services.${s}`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="rounded-t-md bg-gray-100 py-2 pb-4 text-center text-2xl uppercase text-white">
            {t('Tickets.premium.title')}
          </div>

          <div className="-mt-2 grow rounded-md bg-white p-2 text-black">
            <p className="py-2 text-center text-lg font-medium">
              {t('Tickets.premium.level')}
            </p>
            <ul className="px-2 pb-1">
              {premium.services.map((s) => (
                <li className="flex gap-2 py-1" key={s}>
                  <div className="shrink-0">
                    <Image
                      alt="verified"
                      src="/assets/images/verified-icon.svg"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="-mt-1 text-sm font-thin">
                    {/* 
                    // @ts-ignore */}
                    {t(`Tickets.premium.services.${s}`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="rounded-t-md bg-gray-100 py-2 pb-4 text-center text-2xl uppercase text-white">
            {t('Tickets.vip.title')}
          </div>

          <div className="-mt-2 grow rounded-md bg-white p-2 text-black">
            <p className="py-2 text-center text-lg font-medium">
              {t('Tickets.vip.level')}
            </p>
            <ul className="px-2 pb-1">
              {vip.services.map((s) => (
                <li className="flex gap-2 py-1" key={s}>
                  <div className="shrink-0">
                    <Image
                      alt="verified"
                      src="/assets/images/verified-icon.svg"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="-mt-1 text-sm font-thin">
                    {/* 
                    // @ts-ignore */}
                    {t(`Tickets.vip.services.${s}`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="rounded-t-md bg-gray-100 py-2 pb-4 text-center text-2xl uppercase text-white">
            {t('Tickets.sip.title')}
          </div>

          <div className="-mt-2 grow rounded-md bg-white p-2 text-black">
            <p className="py-2 text-center text-lg font-medium">
              {t('Tickets.sip.level')}
            </p>
            <ul className="px-2 pb-1">
              {sip.services.map((s) => (
                <li className="flex gap-2 py-1" key={s}>
                  <div className="shrink-0">
                    <Image
                      alt="verified"
                      src="/assets/images/verified-icon.svg"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="-mt-1 text-sm font-thin">
                    {/* 
                    // @ts-ignore */}
                    {t(`Tickets.sip.services.${s}`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="border-2 border-white bg-white p-2 px-16 uppercase text-black"
      >
        {t('Cta.buy_ticket')}
      </button>
    </div>
  );
};

export { Tickets };
