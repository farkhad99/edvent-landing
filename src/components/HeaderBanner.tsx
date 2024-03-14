import { useTranslations } from 'next-intl';
import bannerimg from '../../public/assets/images/header-banner.png'

const HeaderBanner = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`

  return (
    <div className='h-[700px] w-full relative bg-contain bg-center' style={{
      background: 'linear-gradient(90deg, #971716, #781414)',
    }}>
      <div className='w-full h-full absolute z-10 bottom-0 bg-cover bg-no-repeat bg-bottom'
        style={{backgroundImage: mainImage }}
      >
        <div className='flex flex-col justify-between items-center h-full z-20 pt-20 text-white'>
          <div className=''>
            <h3 className='uppercase text-2xl text-center'>{ t("HeaderBanner.guest") }</h3>
            <h1 className='uppercase text-5xl font-medium text-center px-2'>
              {t("HeaderBanner.title")}
            </h1>
          </div>
          <div>
            <div className='text-center font-bold mb-2 text-lg uppercase'>{t("Header.date")} <span style={{ color: "#CAB694" }}>CAEx UZBEKISTAN</span></div>
            <div className='flex justify-end mb-6 px-2 gap-3 flex-wrap'>
              <button className="flex-grow p-2 px-8 text-black bg-white border-2 border-white uppercase">{ t("Cta.buy_ticket") }</button>
              <button className="flex-grow p-2 px-6 uppercase border-2 border-white">{ t("Cta.become_partner") }</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderBanner };
