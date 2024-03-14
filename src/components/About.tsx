import { useTranslations } from 'next-intl';

import bannerimg from '../../public/assets/images/about-banner.png';

const About = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`;

  return (
    <div
      className="relative w-full bg-transparent bg-cover bg-center bg-no-repeat md:py-20"
      style={{
        backgroundColor: 'linear-gradient(#282828, #898A8C)',
        backgroundImage: mainImage
      }}
    >
      <div
        className="absolute left-0 top-0 z-10 size-full"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      />
      <div className="relative z-20 flex flex-col items-center justify-around gap-4 px-4 py-16 text-white md:grid md:grid-cols-2 md:items-start">
        <p className="text-center text-3xl font-bold uppercase">
          {t('About.title')}
        </p>
        <p className="max-w-[550px] text-center md:text-left md:text-[18px]">
          {t('About.description')}
        </p>
      </div>
    </div>
  );
};

export { About };
