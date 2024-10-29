import { useTranslations } from 'next-intl';

import EditWrapper from './modal/EditWrapper';

const Highlights = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  return (
    <div className="bg-gray-200 p-10">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-4 pb-16">
        <EditWrapper
          isVisible={isAdmin}
          forms={[{ type: 'text', path: 'Highlights.title' }]}
        >
          <h1 className="text-center text-3xl font-bold uppercase text-gray-100 md:text-5xl">
            {t('Highlights.title')}
          </h1>
        </EditWrapper>

        <EditWrapper
          isVisible={isAdmin}
          forms={[{ type: 'text', path: 'Highlights.description' }]}
        >
          <p className="max-w-[833px] text-center">
            {t('Highlights.description')}
          </p>
        </EditWrapper>

        <div className="my-4 grid w-full grid-cols-2 justify-between gap-2 sm:flex sm:flex-row">
          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Highlights.attendees_count' },
              { type: 'text', path: 'Highlights.attendees' }
            ]}
          >
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: '#939393' }}>
                {t('Highlights.attendees_count')}
              </p>
              <p className=" font-medium text-black">
                {t('Highlights.attendees')}
              </p>
            </div>
          </EditWrapper>

          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Highlights.countries_count' },
              { type: 'text', path: 'Highlights.countries' }
            ]}
          >
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: '#939393' }}>
                {t('Highlights.countries_count')}
              </p>
              <p className=" font-medium text-black">
                {t('Highlights.countries')}
              </p>
            </div>
          </EditWrapper>

          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Highlights.speakers_count' },
              { type: 'text', path: 'Highlights.speakers' }
            ]}
          >
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: '#939393' }}>
                {t('Highlights.speakers_count')}
              </p>
              <p className=" font-medium text-black">
                {t('Highlights.speakers')}
              </p>
            </div>
          </EditWrapper>

          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Highlights.stages_count' },
              { type: 'text', path: 'Highlights.stages' }
            ]}
          >
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: '#939393' }}>
                {t('Highlights.stages_count')}
              </p>
              <p className=" font-medium text-black">
                {t('Highlights.stages')}
              </p>
            </div>
          </EditWrapper>

          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Highlights.sessions_count' },
              { type: 'text', path: 'Highlights.sessions' }
            ]}
          >
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: '#939393' }}>
                {t('Highlights.sessions_count')}
              </p>
              <p className=" font-medium text-black">
                {t('Highlights.sessions')}
              </p>
            </div>
          </EditWrapper>

          <EditWrapper
            isVisible={isAdmin}
            forms={[
              { type: 'text', path: 'Highlights.media_count' },
              { type: 'text', path: 'Highlights.media' }
            ]}
          >
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: '#939393' }}>
                {t('Highlights.media_count')}
              </p>
              <p className=" font-medium text-black">{t('Highlights.media')}</p>
            </div>
          </EditWrapper>
        </div>

        <a
          href="https://www.instagram.com/edvent.uz?igsh=OTlpcDUydGt6NW1k"
          target="_blank"
        >
          <button
            type="button"
            className="mt-4 border-2 border-black bg-black p-2 px-16 uppercase text-white"
          >
            {t('Cta.photos')}
          </button>
        </a>
      </div>
    </div>
  );
};

export { Highlights };
