import { useTranslations } from 'next-intl';

import bannerimg from '../../public/assets/images/why-edvent-banner.png';

const WhyBanner = () => {
  const t = useTranslations();
  const mainImage = `url(${bannerimg.src})`;

  return (
    <div className="bg-gray-200 p-10 md:pb-0">
      <div className="mx-auto flex max-w-[1000px] gap-8">
        <div>
          <h1 className="mb-6 text-3xl font-bold uppercase text-gray-100">
            {t('Why.title')}
          </h1>
          <ul>
            <li className="mb-6 flex gap-2">
              <div className="h-2 bg-gray-100 p-2" />
              <div className="-mt-2">
                <p className="font-bold uppercase md:text-[19px]">
                  {t('Why.descriptions.push.title')}
                </p>
                <p>{t('Why.descriptions.push.description')}</p>
              </div>
            </li>
            <li className="mb-6 flex gap-2">
              <div className="h-2 bg-gray-100 p-2" />
              <div className="-mt-2">
                <p className="font-bold uppercase md:text-[19px]">
                  {t('Why.descriptions.empower.title')}
                </p>
                <p>{t('Why.descriptions.empower.description')}</p>
              </div>
            </li>
            <li className="mb-2 flex gap-2">
              <div className="h-2 bg-gray-100 p-2" />
              <div className="-mt-2">
                <p className="font-bold uppercase md:text-[19px]">
                  {t('Why.descriptions.build.title')}
                </p>
                <p>{t('Why.descriptions.build.description')}</p>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="hidden h-[400px] w-full bg-transparent bg-contain bg-center bg-no-repeat md:block"
          style={{
            backgroundImage: mainImage
          }}
        />
      </div>
    </div>
  );
};

export { WhyBanner };
