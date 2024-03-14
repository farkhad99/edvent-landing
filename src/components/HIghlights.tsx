import { useTranslations } from 'next-intl';
import bannerimg from '../../public/assets/images/why-edvent-banner.png'

const Highlights = () => {
  const t = useTranslations();
  const mainImage = `url(${bannerimg.src})`

  return (
    <div className='bg-gray-200 p-10'>
      <div className='max-w-[1000px] mx-auto flex gap-4 flex-col items-center pb-16'>
        <h1 className='font-bold text-gray-100 uppercase text-3xl md:text-5xl text-center'>{t('Highlights.title')}</h1>

        <p className='max-w-[833px] text-center'>{t('Highlights.description')}</p>

        <div className='grid grid-cols-2 sm:flex gap-2 sm:flex-row justify-between w-full my-4'>
          <div className='text-center'>
            <p className='text-3xl font-bold' style={{ color: '#939393' }}>1200</p>
            <p className=' text-black font-medium'>{t('Highlights.attendees')}</p>
          </div>

          <div className='text-center'>
            <p className='text-3xl font-bold' style={{ color: '#939393' }}>60+</p>
            <p className=' text-black font-medium'>{t('Highlights.countries')}</p>
          </div>

          <div className='text-center'>
            <p className='text-3xl font-bold' style={{ color: '#939393' }}>65</p>
            <p className=' text-black font-medium'>{t('Highlights.speakers')}</p>
          </div>

          <div className='text-center'>
            <p className='text-3xl font-bold' style={{ color: '#939393' }}>2</p>
            <p className=' text-black font-medium'>{t('Highlights.stages')}</p>
          </div>

          <div className='text-center'>
            <p className='text-3xl font-bold' style={{ color: '#939393' }}>30</p>
            <p className=' text-black font-medium'>{t('Highlights.sessions')}</p>
          </div>

          <div className='text-center'>
            <p className='text-3xl font-bold' style={{ color: '#939393' }}>70 mln</p>
            <p className=' text-black font-medium'>{t('Highlights.media')}</p>
          </div>
        </div>

      <button className="p-2 px-16 text-white bg-black border-2 border-black uppercase mt-4">{ t("Cta.photos") }</button>
      </div>
    </div>
  );
};

export { Highlights };
