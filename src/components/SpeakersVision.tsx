import { useTranslations } from 'next-intl';
import bannerimg from '../../public/assets/images/about-banner.png'
import twoDay from '../../public/assets/images/two_day.png'
import deepDive from '../../public/assets/images/deep_dive.png'
import roundTables from '../../public/assets/images/roundtables.png'
import securityCorner from '../../public/assets/images/security-corner.png'
import galaDinner from '../../public/assets/images/gala-dinner.png'

const SpeakersVision = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`

  return (
    <div className='w-full relative bg-cover bg-no-repeat bg-center bg-transparent py-10' style={{
      backgroundColor: 'linear-gradient(#282828, #898A8C)',
      backgroundImage: mainImage
    }}>
      <div className='absolute top-0 left-0 w-full h-full z-10' style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}></div>

      <div className='relative z-20 text-center'>
        <h1 className='text-white font-bold md:text-5xl text-3xl uppercase text-center px-10'>{t("Speakers.title")}</h1>

        <p className='text-white md:text-[18px] mx-auto my-4 max-w-[800px] text-center md:px-8 px-2'>{t("Speakers.small_description")}</p>

        <p className='text-white md:text-[18px] mx-auto max-w-[780px] text-center md:px-8 px-2 font-bold'>{t("Speakers.experience")}</p>

        <div className='grid md:grid-cols-5 md:justify-between gap-8 flex-wrap px-10 max-w-[990px] my-6 mt-10 mx-auto'>
          <div className='flex gap-3'>
            <div
              className='text-white flex flex-col flex-end justify-end p-3 h-[470px] md:max-w-[188px] bg-no-repeat bg-cover w-full'
            style={{ background: `url(${twoDay.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <p className='uppercase text-16 font-medium text-left border-b-2 border-white pb-4 mb-4'>{ t('Speakers.two_day') }</p>
            </div>
          </div>

          <div className='flex gap-3'>
            <div
              className='text-white flex flex-col flex-end justify-end p-3 h-[470px] md:max-w-[188px] bg-no-repeat bg-cover w-full'
            style={{ background: `url(${deepDive.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <p className='uppercase text-16 font-medium text-left border-b-2 border-white pb-4 mb-4'>{ t('Speakers.deep_dive') }</p>
            </div>
          </div>

          <div className='flex gap-3'>
            <div
              className='text-white flex flex-col flex-end justify-end p-3 h-[470px] md:max-w-[188px] bg-no-repeat bg-cover w-full'
            style={{ background: `url(${roundTables.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <p className='uppercase text-16 font-medium text-left border-b-2 border-white pb-4 mb-4'>{ t('Speakers.roundtables') }</p>
            </div>
          </div>

          <div className='flex gap-3'>
            <div
              className='text-white flex flex-col flex-end justify-end p-3 h-[470px] md:max-w-[188px] bg-no-repeat bg-cover w-full'
            style={{ background: `url(${securityCorner.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <p className='uppercase text-16 font-medium text-left border-b-2 border-white pb-4 mb-4'>{ t('Speakers.security') }</p>
            </div>
          </div>

          <div className='flex gap-3'>
            <div
              className='text-white flex flex-col flex-end justify-end p-3 h-[470px] md:max-w-[188px] bg-no-repeat bg-cover w-full'
            style={{ background: `url(${galaDinner.src})` }}
            >
              <p className='uppercase text-16 font-medium text-left border-b-2 border-white pb-4 mb-4'>{ t('Speakers.gala_dinner') }</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center my-6 pt-4'>
          <button className="p-2 px-10 text-black bg-white border-2 border-white uppercase mr-3">{ t("Cta.buy_ticket") }</button>
          <button className="p-2 px-12 uppercase border-2 border-white text-white">{ t("Cta.program") }</button>
        </div>
      </div>
    </div>
  );
};

export { SpeakersVision };
