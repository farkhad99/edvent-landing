import Link from 'next/link';
import { useTranslations } from 'next-intl';

import EditWrapper from './modal/EditWrapper';

const HeaderBanner = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  const mainImage = `url(${'/assets/images/header-banner.png'})`;

  return (
    <EditWrapper
      centered
      forms={[{ type: 'image', fileName: '/assets/images/header-banner.png' }]}
      isVisible={isAdmin}
    >
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
              <EditWrapper
                forms={[
                  {
                    type: 'text',
                    path: 'HeaderBanner.guest',
                    initialValue: t('HeaderBanner.guest')
                  },
                  {
                    type: 'text',
                    path: 'HeaderBanner.title',
                    initialValue: t('HeaderBanner.title')
                  }
                ]}
                isVisible={isAdmin}
              >
                <h3 className="text-center text-2xl uppercase">
                  {t('HeaderBanner.guest')}
                </h3>
                <h1 className="px-2 text-center text-5xl font-medium uppercase">
                  {t('HeaderBanner.title')}
                </h1>
              </EditWrapper>
            </div>
            <div>
              <EditWrapper
                forms={[
                  {
                    type: 'text',
                    path: 'Header.date',
                    initialValue: t('Header.date')
                  },
                  {
                    type: 'text',
                    path: 'Header.country',
                    initialValue: t('Header.country')
                  }
                ]}
                isVisible={isAdmin}
              >
                <div className="mb-2 text-center text-lg font-bold uppercase">
                  {t('Header.date')}{' '}
                  <span style={{ color: '#CAB694' }}>
                    {t('Header.country')}
                  </span>
                </div>
              </EditWrapper>
              <div className="mb-6 flex flex-wrap gap-3 px-2 pb-12">
                <Link href="/?ticketModal=true" className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="w-full grow border-2 border-white bg-white p-2 px-8 uppercase text-black"
                  >
                    {t('Cta.buy_ticket')}
                  </button>
                </Link>
                <Link href="/?partnerModal=true" className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="w-full grow border-2 border-white p-2 px-6 uppercase"
                  >
                    {t('Cta.become_partner')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditWrapper>
  );
};

export { HeaderBanner };
