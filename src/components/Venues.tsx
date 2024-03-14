import { useTranslations } from 'next-intl';
import bannerimg from '../../public/assets/images/venues-banner.png'

const Venues = () => {
  const t = useTranslations();

  return (
    <div className='py-10 text-center pb-0'>
      <div className='flex flex-col items-center gap-2'>
        <h1 className='font-bold text-gray-100 uppercase text-3xl md:text-5xl'>{t('Venues.title')}</h1>
        <p className='text-lg font-bold'>{t('Venues.uni')}</p>
        <p className='max-w-[1100px] px-4'>{t('Venues.description')}</p>
      </div>

      <div className='w-full relative bg-cover bg-no-repeat bg-center h-[500px] mt-10' style={{
        backgroundImage:`url(${bannerimg.src})`
      }}>
      </div>
    </div>
  );
};

export { Venues };
