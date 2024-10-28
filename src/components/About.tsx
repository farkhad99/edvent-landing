import { useTranslations } from 'next-intl';

import EditWrapper from './modal/EditWrapper';

const About = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  const mainImage = `url(${'/assets/images/about-banner.png'})`;

  return (
    <EditWrapper
      isVisible={isAdmin}
      forms={[{ type: 'image', fileName: '/assets/images/about-banner.png' }]}
    >
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
        <EditWrapper
          isVisible={isAdmin}
          forms={[
            { type: 'text', path: 'About.title' },
            { type: 'text', path: 'About.description' }
          ]}
        >
          <div className="relative z-20 flex flex-col items-center justify-around gap-4 px-4 py-16 text-white md:grid md:grid-cols-2 md:items-start">
            <p className="text-center text-3xl font-bold uppercase">
              {t('About.title')}
            </p>
            <p className="max-w-[550px] text-center md:text-left md:text-[18px]">
              {t('About.description')}
            </p>
          </div>
        </EditWrapper>
      </div>
    </EditWrapper>
  );
};

export { About };
