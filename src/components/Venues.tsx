import { useTranslations } from 'next-intl';

import bannerimg from '../../public/assets/images/venues-banner.png';
import EditWrapper from './modal/EditWrapper';

const Venues = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  return (
    <EditWrapper
      isVisible={isAdmin}
      forms={[
        { type: 'text', path: 'Venues.title' },
        { type: 'text', path: 'Venues.uni' },
        { type: 'text', path: 'Venues.description' },
        { type: 'image', fileName: '/assets/images/venues-banner.png' }
      ]}
    >
      <div className="py-10 pb-0 text-center" id="venues">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold uppercase text-gray-100 md:text-5xl">
            {t('Venues.title')}
          </h1>
          <p className="text-lg font-bold">{t('Venues.uni')}</p>
          <p className="max-w-[1100px] px-4">{t('Venues.description')}</p>
        </div>

        <div
          className="relative mt-10 h-[500px] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bannerimg.src})`
          }}
        />
      </div>
    </EditWrapper>
  );
};

export { Venues };
