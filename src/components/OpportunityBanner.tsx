import { useTranslations } from 'next-intl';

import EditWrapper from './modal/EditWrapper';

const OpportunityBanner = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  const mainImage = `url(${'/assets/images/opportunities-banner.png'})`;

  return (
    <EditWrapper
      isVisible={isAdmin}
      forms={[
        { type: 'image', fileName: '/assets/images/opportunities-banner.png' },
        { type: 'text', path: 'Opportunity.title' }
      ]}
    >
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
          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Opportunity.description' },
              { type: 'text', path: 'Opportunity.balls' }
            ]}
          >
            <div className="p-6">
              <p>{t('Opportunity.description')}</p>
              <p className="mt-6">{t('Opportunity.balls')}</p>
            </div>
          </EditWrapper>
          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Opportunity.how_to_apply' },
              { type: 'text', path: 'Opportunity.instructions' },
              { type: 'text', path: 'Opportunity.greet' }
            ]}
          >
            <div className="mx-6 rounded-md border-2 border-white p-6">
              <p className="text-xl font-bold">
                {t('Opportunity.how_to_apply')}
              </p>
              <p className="my-2 font-medium">
                {t('Opportunity.instructions')}
              </p>
              <p className="mt-4">{t('Opportunity.greet')}</p>
            </div>
          </EditWrapper>
        </div>
      </div>
    </EditWrapper>
  );
};

export { OpportunityBanner };
