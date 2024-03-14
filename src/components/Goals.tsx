import { useTranslations } from 'next-intl';
import bannerimg from '../../public/assets/images/records-banner.png'

const Goals = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`

  return (
    <div className='px-10 py-10 w-full relative bg-cover bg-no-repeat bg-center flex justify-between items-center' style={{
      backgroundImage: mainImage,
    }}>
      <div className='mx-auto flex flex-col gap-2 md:grid md:grid-cols-4'>
        <div className='text-center'>
          <p className='text-3xl font-bold' style={{ color: '#939393' }}>100</p>
          <p className='text-xl uppercase text-white font-medium'>{t('Goals.events')}</p>
        </div>
        <div className='text-center'>
          <p className='text-3xl font-bold' style={{ color: '#939393' }}>100K</p>
          <p className='text-xl uppercase text-white font-medium'>{t('Goals.sell_tickets')}</p>
        </div>
        <div className='text-center'>
          <p className='text-3xl font-bold' style={{ color: '#939393' }}>2M</p>
          <p className='text-xl uppercase text-white font-medium'>{t('Goals.gather_audience')}</p>
        </div>
        <div className='text-center flex-grow-0 flex-shrink mt-10 md:mt-0'>
          <p className='px-4 uppercase text-white font-medium'>{t('Goals.description')}</p>
        </div>
      </div>
    </div>
  );
};

export { Goals };
