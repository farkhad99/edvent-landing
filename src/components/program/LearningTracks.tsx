import { useTranslations } from 'next-intl';

import enterpreneurshipBanner from '../../../public/assets/images/enterpreneurship-banner.png';
import leadershipBanner from '../../../public/assets/images/leadership-banner.png';
import architectureBanner from '../../../public/assets/images/architecture-banner.png';
import healthBanner from '../../../public/assets/images/health-banner.png';
import careerBanner from '../../../public/assets/images/career-banner.png';
import fashionBanner from '../../../public/assets/images/fashion-banner.png';


const LearningTracks = () => {
  const t = useTranslations();

  return (
    <div
      className="relative flex w-full flex-col items-center gap-6 bg-transparent bg-cover bg-center bg-no-repeat py-16 text-white "
    >
      <h1 className="max-w-[800px] px-4 text-center text-2xl text-gray-100 font-bold uppercase md:text-5xl">
        {t('Program.learning_tracks')}
      </h1>

      <div className='flex flex-col md:flex-row gap-4 max-w-[1130px] px-6'>
        <div className='flex flex-col gap-4'>
          {/* Money */}
          <div
              className="flex-end bg-gray-200 flex max-w-[360px] flex-col justify-end py-6 p-4 text-black flex-grow-0"
            >
              <p className="text-16 font-bold mb-3 capitalize">
                {t('Program.money')}
              </p>
              <p>{t('Program.money_info')}</p>
          </div>

          {/* enterpreneurship */}
          <div
            className="flex-end flex h-[300px] max-w-[360px] flex-col justify-end p-4 py-6 text-white flex-grow"
            style={{ background: `url(${enterpreneurshipBanner.src})` }}
          >
            <p className="text-16 font-bold mb-3 capitalize">
              {t('Program.enterpreneurship')}
            </p>
            <p>{t('Program.enterpreneurship_info')}</p>
          </div>

          {/* Creator Economy */}
          <div
              className="flex-end bg-gray-200 flex max-w-[360px] flex-col justify-end  p-4 py-6 text-black flex-grow-0 flex-shrink"
            >
              <p className="text-16 font-bold mb-3 capitalize">
                {t('Program.creator')}
              </p>
              <p>{t('Program.creator_info')}</p>
          </div>

          {/* Health */}
          <div
            className="flex-end flex h-[300px] max-w-[360px] flex-col justify-end p-4 text-white flex-grow"
            style={{ background: `url(${healthBanner.src})` }}
          >
            <p className="text-16 font-bold mb-3 capitalize">
              {t('Program.health')}
            </p>
            <p>{t('Program.health_info')}</p>
          </div>
        </div>

        
        <div className='flex flex-col gap-4'>
          {/* Leadership */}
          <div
            className="flex-end flex h-[300px] max-w-[360px] flex-col justify-end p-4 text-white flex-grow"
            style={{ background: `url(${leadershipBanner.src})` }}
          >
            <p className="text-16 font-bold mb-3 capitalize">
              {t('Program.leadership')}
            </p>
            <p>{t('Program.leadership_info')}</p>
          </div>

          {/* brand */}
          <div
              className="flex-end bg-gray-200 flex max-w-[360px] flex-col justify-end p-4 text-black flex-grow-0 flex-shrink"
            >
              <p className="text-16 font-bold mb-3 capitalize">
                {t('Program.brand')}
              </p>
              <p>{t('Program.brand_info')}</p>
          </div>

          {/* Health */}
          <div
            className="flex-end flex h-[300px] max-w-[360px] flex-col justify-end p-4 text-white flex-grow"
            style={{ background: `url(${architectureBanner.src})` }}
          >
            <p className="text-16 font-bold mb-3 capitalize">
              {t('Program.architecture')}
            </p>
            <p>{t('Program.architecture_info')}</p>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          {/* Success */}
          <div
              className="flex-end bg-gray-200 flex  max-w-[360px] flex-col justify-end p-4 text-black flex-grow-0 flex-shrink"
            >
              <p className="text-16 font-bold mb-3 capitalize">
                {t('Program.success')}
              </p>
              <p>{t('Program.success_info')}</p>
          </div>

          {/* career */}
          <div
            className="flex-end flex  max-w-[360px] flex-col justify-end p-4 text-white flex-grow"
            style={{ background: `url(${careerBanner.src})` }}
          >
            <p className="text-16 font-bold mb-3 capitalize">
              {t('Program.career')}
            </p>
            <p>{t('Program.career_info')}</p>
          </div>

          {/* Technologies */}
          <div
              className="flex-end bg-gray-200 flex max-w-[360px] flex-col justify-end p-4 text-black flex-grow-0 flex-shrink"
            >
              <p className="text-16 font-bold mb-3 capitalize">
                {t('Program.technologies')}
              </p>
              <p>{t('Program.technologies_info')}</p>
          </div>

          {/* fashion */}
          <div
            className="flex-end flex  max-w-[360px] flex-col justify-end p-4 text-white flex-grow"
            style={{ background: `url(${fashionBanner.src})` }}
          >
            <p className="text-16 font-bold mb-3 capitalize">
              {t('Program.fashion')}
            </p>
            <p>{t('Program.fashion_info')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LearningTracks };
