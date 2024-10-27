import { useTranslations } from 'next-intl';

import bannerimg from '../../public/assets/images/why-edvent-banner.png';
import EditWrapper from './modal/EditWrapper';

const WhyBanner = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();
  const mainImage = `url(${bannerimg.src})`;

  return (
    <EditWrapper
      isVisible={isAdmin}
      forms={[
        { type: 'image', fileName: '/assets/images/why-edvent-banner.png' }
      ]}
    >
      <div className="bg-gray-200 p-10 md:pb-0">
        <div className="mx-auto flex max-w-[1000px] gap-8">
          <div>
            <EditWrapper
              isVisible={isAdmin}
              forms={[{ type: 'text', path: 'Why.title' }]}
            >
              <h1 className="mb-6 text-3xl font-bold uppercase text-gray-100">
                {t('Why.title')}
              </h1>
            </EditWrapper>
            <ul>
              <EditWrapper
                isVisible={isAdmin}
                forms={[
                  { type: 'text', path: 'Why.descriptions.push.title' },
                  { type: 'text', path: 'Why.descriptions.push.description' }
                ]}
              >
                <li className="mb-6 flex gap-2">
                  <div className="h-2 bg-gray-100 p-2" />
                  <div className="-mt-2">
                    <p className="font-bold uppercase md:text-[19px]">
                      {t('Why.descriptions.push.title')}
                    </p>
                    <p>{t('Why.descriptions.push.description')}</p>
                  </div>
                </li>
              </EditWrapper>

              <EditWrapper
                isVisible={isAdmin}
                forms={[
                  { type: 'text', path: 'Why.descriptions.empower.title' },
                  { type: 'text', path: 'Why.descriptions.empower.description' }
                ]}
              >
                <li className="mb-6 flex gap-2">
                  <div className="h-2 bg-gray-100 p-2" />
                  <div className="-mt-2">
                    <p className="font-bold uppercase md:text-[19px]">
                      {t('Why.descriptions.empower.title')}
                    </p>
                    <p>{t('Why.descriptions.empower.description')}</p>
                  </div>
                </li>
              </EditWrapper>

              <EditWrapper
                isVisible={isAdmin}
                forms={[
                  { type: 'text', path: 'Why.descriptions.build.title' },
                  { type: 'text', path: 'Why.descriptions.build.description' }
                ]}
              >
                <li className="mb-2 flex gap-2">
                  <div className="h-2 bg-gray-100 p-2" />
                  <div className="-mt-2">
                    <p className="font-bold uppercase md:text-[19px]">
                      {t('Why.descriptions.build.title')}
                    </p>
                    <p>{t('Why.descriptions.build.description')}</p>
                  </div>
                </li>
              </EditWrapper>
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
    </EditWrapper>
  );
};

export { WhyBanner };
