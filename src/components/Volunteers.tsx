import { useTranslations } from 'next-intl';
import bannerimg from '../../public/assets/images/opportunities-banner.png'

const OpportunityBanner = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`

  return (
    <div className='w-full relative bg-cover bg-no-repeat bg-center bg-transparent py-10 flex flex-col items-center gap-6 text-white ' style={{
      backgroundImage: mainImage
    }}>
      <h1 className='text-center px-4 font-bold text-3xl md:text-5xl text-white uppercase max-w-[800px]'>{t('Opportunity.title')}</h1>


      <div className='flex flex-col md:flex-row justify-between max-w-[1000px]'>
        <div className='p-6'>
          <p>{t('Opportunity.description')}</p>
          <p className='mt-6'>{t('Opportunity.balls')}</p>
        </div>
        <div className='rounded-md border-2 border-white p-6 mx-6'>
          <p className='font-bold text-xl'>{t('Opportunity.how_to_apply')}</p>
          <p className='font-medium my-2'>{ t('Opportunity.instructions') }</p>
          <p className='mt-4'>{ t('Opportunity.greet') }</p>
        </div>
      </div>
    </div>
  );
};

export { OpportunityBanner };
