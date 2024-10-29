import { useTranslations } from 'next-intl';

import EditWrapper from '../modal/EditWrapper';

const LearningTracks = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  return (
    <div className="relative flex w-full flex-col items-center gap-6 bg-transparent bg-cover bg-center bg-no-repeat py-16 text-white ">
      <EditWrapper
        isVisible={isAdmin}
        forms={[{ type: 'text', path: 'Program.learning_tracks' }]}
      >
        <h1 className="max-w-[800px] px-4 text-center text-2xl font-bold uppercase text-gray-100 md:text-5xl">
          {t('Program.learning_tracks')}
        </h1>
      </EditWrapper>

      <div className="flex max-w-[1130px] flex-col gap-4 px-6 md:flex-row">
        <div className="flex flex-col gap-4">
          {/* Money */}
          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Program.money' },
              { type: 'text', path: 'Program.money_info' }
            ]}
          >
            <div className="flex-end flex max-w-[360px] grow-0 flex-col justify-end bg-gray-200 p-4 py-6 text-black">
              <p className="mb-3 text-16 font-bold capitalize">
                {t('Program.money')}
              </p>
              <p>{t('Program.money_info')}</p>
            </div>
          </EditWrapper>

          {/* enterpreneurship */}
          <EditWrapper
            className="flex-end flex h-[300px] max-w-[360px] grow flex-col justify-end text-white"
            isVisible={isAdmin}
            forms={[
              {
                type: 'image',
                fileName: '/assets/images/enterpreneurship-banner.png'
              },
              { type: 'text', path: 'Program.enterpreneurship' },
              { type: 'text', path: 'Program.enterpreneurship_info' }
            ]}
          >
            <div
              className="flex-end flex h-[300px] max-w-[360px] grow flex-col justify-end p-4 py-6 text-white"
              style={{
                background: `url(${'/assets/images/enterpreneurship-banner.png'})`
              }}
            >
              <p className="mb-3 text-16 font-bold capitalize">
                {t('Program.enterpreneurship')}
              </p>
              <p>{t('Program.enterpreneurship_info')}</p>
            </div>
          </EditWrapper>

          {/* Creator Economy */}
          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Program.creator' },
              { type: 'text', path: 'Program.creator_info' }
            ]}
          >
            <div className="flex-end flex max-w-[360px] shrink grow-0 flex-col  justify-end bg-gray-200 p-4 py-6 text-black">
              <p className="mb-3 text-16 font-bold capitalize">
                {t('Program.creator')}
              </p>
              <p>{t('Program.creator_info')}</p>
            </div>
          </EditWrapper>

          {/* Health */}
          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'image', fileName: '/assets/images/health-banner.png' },
              { type: 'text', path: 'Program.health' },
              { type: 'text', path: 'Program.health_info' }
            ]}
          >
            <div
              className="flex-end flex h-[300px] max-w-[360px] grow flex-col justify-end p-4 text-white"
              style={{
                background: `url(${'/assets/images/health-banner.png'})`
              }}
            >
              <p className="mb-3 text-16 font-bold capitalize">
                {t('Program.health')}
              </p>
              <p>{t('Program.health_info')}</p>
            </div>
          </EditWrapper>
        </div>

        <div className="flex flex-col gap-4">
          {/* Leadership */}
          <EditWrapper
            className="flex-end flex h-[300px] max-w-[360px] grow flex-col justify-end p-4 text-white"
            isVisible={isAdmin}
            forms={[
              {
                type: 'image',
                fileName: '/assets/images/leadership-banner.png'
              },
              { type: 'text', path: 'Program.leadership' },
              { type: 'text', path: 'Program.leadership_info' }
            ]}
          >
            <div
              className="flex-end flex h-[300px] max-w-[360px] grow flex-col justify-end p-4 text-white"
              style={{
                background: `url(${'/assets/images/leadership-banner.png'})`
              }}
            >
              <p className="mb-3 text-16 font-bold capitalize">
                {t('Program.leadership')}
              </p>
              <p>{t('Program.leadership_info')}</p>
            </div>
          </EditWrapper>

          {/* brand */}
          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Program.brand' },
              { type: 'text', path: 'Program.brand_info' }
            ]}
          >
            <div className="flex-end flex max-w-[360px] shrink grow-0 flex-col justify-end bg-gray-200 p-4 text-black">
              <p className="mb-3 text-16 font-bold capitalize">
                {t('Program.brand')}
              </p>
              <p>{t('Program.brand_info')}</p>
            </div>
          </EditWrapper>

          {/* Architecture */}
          <EditWrapper
            className="flex-end flex h-[300px] max-w-[360px] grow flex-col justify-end text-white"
            isVisible={isAdmin}
            forms={[
              {
                type: 'image',
                fileName: '/assets/images/architecture-banner.png'
              },
              { type: 'text', path: 'Program.architecture' },
              { type: 'text', path: 'Program.architecture_info' }
            ]}
          >
            <div
              className="flex-end flex h-[300px] max-w-[360px] grow flex-col justify-end p-4 text-white"
              style={{
                background: `url(${'/assets/images/architecture-banner.png'})`
              }}
            >
              <p className="mb-3 text-16 font-bold capitalize">
                {t('Program.architecture')}
              </p>
              <p>{t('Program.architecture_info')}</p>
            </div>
          </EditWrapper>
        </div>

        <div className="flex flex-col gap-4">
          {/* Success */}
          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Program.success' },
              { type: 'text', path: 'Program.success_info' }
            ]}
          >
            <div className="flex-end flex max-w-[360px]  shrink grow-0 flex-col justify-end bg-gray-200 p-4 text-black">
              <p className="mb-3 text-16 font-bold capitalize">
                {t('Program.success')}
              </p>
              <p>{t('Program.success_info')}</p>
            </div>
          </EditWrapper>

          {/* career */}
          <EditWrapper
            className="flex-end flex  max-w-[360px] grow flex-col justify-end  text-white"
            isVisible={isAdmin}
            forms={[
              { type: 'image', fileName: '/assets/images/career-banner.png' },
              { type: 'text', path: 'Program.career' },
              { type: 'text', path: 'Program.career_info' }
            ]}
          >
            <div
              className="flex-end flex  max-w-[360px] grow flex-col justify-end p-4 text-white"
              style={{
                background: `url(${'/assets/images/career-banner.png'})`
              }}
            >
              <p className="mb-3 text-16 font-bold capitalize">
                {t('Program.career')}
              </p>
              <p>{t('Program.career_info')}</p>
            </div>
          </EditWrapper>
          {/* Technologies */}
          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Program.technologies' },
              { type: 'text', path: 'Program.technologies_info' }
            ]}
          >
            <div className="flex-end flex max-w-[360px] shrink grow-0 flex-col justify-end bg-gray-200 p-4 text-black">
              <p className="mb-3 text-16 font-bold capitalize">
                {t('Program.technologies')}
              </p>
              <p>{t('Program.technologies_info')}</p>
            </div>
          </EditWrapper>

          {/* fashion */}
          <EditWrapper
            className="flex-end flex  max-w-[360px] grow flex-col justify-end text-white"
            isVisible={isAdmin}
            forms={[
              { type: 'image', fileName: '/assets/images/fashion-banner.png' },
              { type: 'text', path: 'Program.fashion' },
              { type: 'text', path: 'Program.fashion_info' }
            ]}
          >
            <div
              className="flex-end flex  max-w-[360px] grow flex-col justify-end p-4 text-white"
              style={{
                background: `url(${'/assets/images/fashion-banner.png'})`
              }}
            >
              <p className="mb-3 text-16 font-bold capitalize">
                {t('Program.fashion')}
              </p>
              <p>{t('Program.fashion_info')}</p>
            </div>
          </EditWrapper>
        </div>
      </div>
    </div>
  );
};

export { LearningTracks };
