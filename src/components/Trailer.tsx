import { useTranslations } from 'next-intl';
import bannerimg from '../../public/assets/images/trailer-poster.png'

const Trailer = () => {
  const t = useTranslations();

  return (
    <div className='bg-white p-10 px-0 text-center'>
        <h1 className='font-bold text-gray-100 uppercase text-3xl md:text-5xl text-center'>{t('Trailer.title')}</h1>

        <div className='w-full relative bg-cover bg-no-repeat bg-center h-[500px] mt-10' style={{
          backgroundImage:`url(${bannerimg.src})`
        }}>
          </div>

        <h1 className='font-bold text-gray-100 uppercase text-3xl px-4 md:text-5xl text-center max-w-[800px] mx-auto my-10'>{t('Trailer.subtitle')}</h1>
        <p className='my-6 max-w-[700px] mx-auto px-4'>{t('Trailer.description')}</p>
        <button className="p-2 text-white bg-black border-2 border-black uppercase mt-4 mx-auto px-16">{ t("Cta.become_partner") }</button>
    </div>
  );
};

export { Trailer };
