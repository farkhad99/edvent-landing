import { useTranslations } from 'next-intl';

import bannerimg from '../../public/assets/images/opportunities-banner.png';

const OpportunityBanner = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`;

  return (
    <div
      className="relative flex w-full flex-col items-center gap-6 bg-transparent bg-cover bg-center bg-no-repeat py-10 text-white "
      style={{
        backgroundImage: mainImage
      }}
    >
      <h1 className="max-w-[800px] px-4 text-center text-3xl font-bold uppercase text-white md:text-5xl">
        {t('Opportunity.title')}
      </h1>

      <div className="flex max-w-[1000px] flex-col justify-between md:flex-row">
        <div className="p-6">
          <p>{t('Opportunity.description')}</p>
          <p className="mt-6">{t('Opportunity.balls')}</p>
        </div>
        <div className="mx-6 rounded-md border-2 border-white p-6">
          <p className="text-xl font-bold">{t('Opportunity.how_to_apply')}</p>
          <p className="my-2 font-medium">{t('Opportunity.instructions')}</p>
          <p className="mt-4">{t('Opportunity.greet')}</p>
        </div>
      </div>
    </div>
  );
};

export { OpportunityBanner };
