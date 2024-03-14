import { useTranslations } from 'next-intl';
import bannerimg from '../../public/assets/images/about-banner.png'

const About = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`

  return (
    <div className='w-full relative bg-cover bg-no-repeat bg-center bg-transparent md:py-20' style={{
      backgroundColor: 'linear-gradient(#282828, #898A8C)',
      backgroundImage: mainImage
    }}>
      <div className='absolute top-0 left-0 w-full h-full z-10' style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)'}}></div>
      <div className='md:grid md:grid-cols-2 relative z-20 flex flex-col gap-4 md:items-start items-center justify-around text-white py-16 px-4'>
        <p className='font-bold text-3xl uppercase text-center'>{t("About.title")}</p>
        <p className='max-w-[550px] md:text-[18px] text-center md:text-left'>{t("About.description")}</p>
      </div>
    </div>
  );
};

export { About };
