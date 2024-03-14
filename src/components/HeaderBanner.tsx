import { useTranslations } from 'next-intl';

import bannerimg from '../../public/assets/images/_DSC0011.jpg';

const HeaderBanner = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`;

  return (
    <div
      className="relative h-[700px] w-full bg-contain bg-center"
      style={{
        background: 'linear-gradient(90deg, #971716, #781414)'
      }}
    >
      <div
        className="absolute bottom-0 z-10 size-full bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: mainImage }}
      >
        <div className="z-20 flex h-full flex-col items-center justify-between pt-20 text-white">
          <div className="">
            <h3 className="text-center text-2xl uppercase">
              {t('HeaderBanner.guest')}
            </h3>
            <h1 className="px-2 text-center text-5xl font-medium uppercase">
              {t('HeaderBanner.title')}
            </h1>
          </div>
          <div>
            <div className="mb-2 text-center text-lg font-bold uppercase">
              {t('Header.date')}{' '}
              <span style={{ color: '#CAB694' }}>CAEx UZBEKISTAN</span>
            </div>
            <div className="mb-6 flex flex-wrap justify-end gap-3 px-2">
              <button
                type="button"
                className="grow border-2 border-white bg-white p-2 px-8 uppercase text-black"
              >
                {t('Cta.buy_ticket')}
              </button>
              <button
                type="button"
                className="grow border-2 border-white p-2 px-6 uppercase"
              >
                {t('Cta.become_partner')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderBanner };
