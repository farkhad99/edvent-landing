import { useTranslations } from 'next-intl';

import bannerimg from '../../public/assets/images/records-banner.png';

const Goals = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`;

  return (
    <div
      className="relative flex w-full items-center justify-between bg-cover bg-center bg-no-repeat p-10"
      style={{
        backgroundImage: mainImage
      }}
    >
      <div className="mx-auto flex flex-col gap-2 md:grid md:grid-cols-4">
        <div className="text-center">
          <p className="text-3xl font-bold" style={{ color: '#939393' }}>
            100
          </p>
          <p className="text-xl font-medium uppercase text-white">
            {t('Goals.events')}
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold" style={{ color: '#939393' }}>
            100K
          </p>
          <p className="text-xl font-medium uppercase text-white">
            {t('Goals.sell_tickets')}
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold" style={{ color: '#939393' }}>
            2M
          </p>
          <p className="text-xl font-medium uppercase text-white">
            {t('Goals.gather_audience')}
          </p>
        </div>
        <div className="mt-10 shrink grow-0 text-center md:mt-0">
          <p className="px-4 font-medium uppercase text-white">
            {t('Goals.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Goals };
