import Link from 'next/link';
import { useTranslations } from 'next-intl';

import EditWrapper from './modal/EditWrapper';

const SpeakersVision = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  const mainImage = `url(${'/assets/images/about-banner.png'})`;

  return (
    <EditWrapper
      isVisible={isAdmin}
      forms={[
        { type: 'image', fileName: '/assets/images/about-banner.png' },
        { type: 'text', path: 'Speakers.title_vision' },
        { type: 'text', path: 'Speakers.small_description' },
        { type: 'text', path: 'Speakers.experience' }
      ]}
    >
      <div
        className="relative w-full bg-transparent bg-cover bg-center bg-no-repeat py-10"
        style={{
          backgroundColor: 'linear-gradient(#282828, #898A8C)',
          backgroundImage: mainImage
        }}
      >
        <div
          className="absolute left-0 top-0 z-10 size-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
        />

        <div className="relative z-20 text-center">
          <h1 className="px-10 text-center text-3xl font-bold uppercase text-white md:text-5xl">
            {t('Speakers.title_vision')}
          </h1>

          <p className="mx-auto my-4 max-w-[800px] px-2 text-center text-white md:px-8 md:text-[18px]">
            {t('Speakers.small_description')}
          </p>

          <p className="mx-auto max-w-[780px] px-2 text-center font-bold text-white md:px-8 md:text-[18px]">
            {t('Speakers.experience')}
          </p>

          <div className="mx-auto my-6 mt-10 grid max-w-[990px] flex-wrap gap-8 px-10 md:grid-cols-5 md:justify-between">
            <EditWrapper
              isVisible={isAdmin}
              forms={[
                { type: 'image', fileName: '/assets/images/two_day.png' },
                { type: 'text', path: 'Speakers.two_day' }
              ]}
            >
              <div className="flex gap-3">
                <div
                  className="flex-end flex h-[200px] w-full flex-col justify-end bg-cover bg-no-repeat p-3 text-white md:h-[470px] md:max-w-[188px]"
                  style={{
                    background: `url(${'/assets/images/two_day.png'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <p className="mb-4 border-b-2 border-white pb-4 text-left text-16 font-medium uppercase">
                    {t('Speakers.two_day')}
                  </p>
                </div>
              </div>
            </EditWrapper>

            <EditWrapper
              isVisible={isAdmin}
              forms={[
                { type: 'image', fileName: '/assets/images/deep_dive.png' },
                { type: 'text', path: 'Speakers.deep_dive' }
              ]}
            >
              <div className="flex gap-3">
                <div
                  className="flex-end flex h-[200px] w-full flex-col justify-end bg-cover bg-no-repeat p-3 text-white md:h-[470px] md:max-w-[188px]"
                  style={{
                    background: `url(${'/assets/images/deep_dive.png'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <p className="mb-4 border-b-2 border-white pb-4 text-left text-16 font-medium uppercase">
                    {t('Speakers.deep_dive')}
                  </p>
                </div>
              </div>
            </EditWrapper>

            <EditWrapper
              isVisible={isAdmin}
              forms={[
                { type: 'image', fileName: '/assets/images/roundtables.png' },
                { type: 'text', path: 'Speakers.roundtables' }
              ]}
            >
              <div className="flex gap-3">
                <div
                  className="flex-end flex h-[200px] w-full flex-col justify-end bg-cover bg-no-repeat p-3 text-white md:h-[470px] md:max-w-[188px]"
                  style={{
                    background: `url(${'/assets/images/roundtables.png'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <p className="mb-4 border-b-2 border-white pb-4 text-left text-16 font-medium uppercase">
                    {t('Speakers.roundtables')}
                  </p>
                </div>
              </div>
            </EditWrapper>

            <EditWrapper
              isVisible={isAdmin}
              forms={[
                {
                  type: 'image',
                  fileName: '/assets/images/security-corner.png'
                },
                { type: 'text', path: 'Speakers.security' }
              ]}
            >
              <div className="flex gap-3">
                <div
                  className="flex-end flex h-[200px] w-full flex-col justify-end bg-cover bg-no-repeat p-3 text-white md:h-[470px] md:max-w-[188px]"
                  style={{
                    background: `url(${'/assets/images/security-corner.png'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <p className="mb-4 border-b-2 border-white pb-4 text-left text-16 font-medium uppercase">
                    {t('Speakers.security')}
                  </p>
                </div>
              </div>
            </EditWrapper>

            <EditWrapper
              isVisible={isAdmin}
              forms={[
                { type: 'image', fileName: '/assets/images/gala-dinner.png' },
                { type: 'text', path: 'Speakers.gala_dinner' }
              ]}
            >
              <div className="flex gap-3">
                <div
                  className="flex-end flex h-[200px] w-full flex-col justify-end bg-cover bg-no-repeat p-3 text-white md:h-[470px] md:max-w-[188px]"
                  style={{
                    background: `url(${'/assets/images/gala-dinner.png'})`
                  }}
                >
                  <p className="mb-4 border-b-2 border-white pb-4 text-left text-16 font-medium uppercase">
                    {t('Speakers.gala_dinner')}
                  </p>
                </div>
              </div>
            </EditWrapper>
          </div>

          <div className="my-6 flex justify-center pt-4">
            <Link href="/?ticketModal=true">
              <button
                type="button"
                className="mr-3 border-2 border-white bg-white p-2 px-10 uppercase text-black"
              >
                {t('Cta.buy_ticket')}
              </button>
            </Link>
            <button
              type="button"
              className="border-2 border-white p-2 px-12 uppercase text-white"
            >
              {t('Cta.program')}
            </button>
          </div>
        </div>
      </div>
    </EditWrapper>
  );
};

export { SpeakersVision };
