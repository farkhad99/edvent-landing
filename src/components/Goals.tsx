import { useTranslations } from 'next-intl';

import bannerimg from '../../public/assets/images/records-banner.png';
import EditWrapper from './modal/EditWrapper';

const Goals = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`;

  return (
    <EditWrapper
      isVisible={isAdmin}
      forms={[{ type: 'image', fileName: '/assets/images/records-banner.png' }]}
    >
      <div
        className="relative flex w-full items-center justify-between bg-cover bg-center bg-no-repeat p-10"
        style={{
          backgroundImage: mainImage
        }}
      >
        <div className="mx-auto flex flex-col gap-2 md:grid md:grid-cols-4">
          <div className="text-center">
            <EditWrapper
              isVisible={isAdmin}
              forms={[
                { type: 'text', path: 'Goals.events_count' },
                { type: 'text', path: 'Goals.events' }
              ]}
            >
              <p className="text-3xl font-bold" style={{ color: '#939393' }}>
                {t('Goals.events_count')}
              </p>

              <p className="text-xl font-medium uppercase text-white">
                {t('Goals.events')}
              </p>
            </EditWrapper>
          </div>
          <div className="text-center">
            <EditWrapper
              isVisible={isAdmin}
              forms={[
                { type: 'text', path: 'Goals.sell_tickets_count' },
                { type: 'text', path: 'Goals.sell_tickets' }
              ]}
            >
              <p className="text-3xl font-bold" style={{ color: '#939393' }}>
                {t('Goals.sell_tickets_count')}
              </p>
              <p className="text-xl font-medium uppercase text-white">
                {t('Goals.sell_tickets')}
              </p>
            </EditWrapper>
          </div>
          <div className="text-center">
            <EditWrapper
              isVisible={isAdmin}
              forms={[
                { type: 'text', path: 'Goals.gather_audience_count' },
                { type: 'text', path: 'Goals.gather_audience' }
              ]}
            >
              <p className="text-3xl font-bold" style={{ color: '#939393' }}>
                {t('Goals.gather_audience_count')}
              </p>
              <p className="text-xl font-medium uppercase text-white">
                {t('Goals.gather_audience')}
              </p>
            </EditWrapper>
          </div>
          <div className="mt-10 shrink grow-0 text-center md:mt-0">
            <EditWrapper
              isVisible={isAdmin}
              forms={[{ type: 'text', path: 'Goals.description' }]}
            >
              <p className="px-4 font-medium uppercase text-white">
                {t('Goals.description')}
              </p>
            </EditWrapper>
          </div>
        </div>
      </div>
    </EditWrapper>
  );
};

export { Goals };
