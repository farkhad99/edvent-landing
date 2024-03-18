import { useTranslations } from 'next-intl';

const Highlights = () => {
  const t = useTranslations();

  return (
    <div className="bg-gray-200 p-10">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-4 pb-16">
        <h1 className="text-center text-3xl font-bold uppercase text-gray-100 md:text-5xl">
          {t('Highlights.title')}
        </h1>

        <p className="max-w-[833px] text-center">
          {t('Highlights.description')}
        </p>

        <div className="my-4 grid w-full grid-cols-2 justify-between gap-2 sm:flex sm:flex-row">
          <div className="text-center">
            <p className="text-3xl font-bold" style={{ color: '#939393' }}>
              1200
            </p>
            <p className=" font-medium text-black">
              {t('Highlights.attendees')}
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold" style={{ color: '#939393' }}>
              60+
            </p>
            <p className=" font-medium text-black">
              {t('Highlights.countries')}
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold" style={{ color: '#939393' }}>
              65
            </p>
            <p className=" font-medium text-black">
              {t('Highlights.speakers')}
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold" style={{ color: '#939393' }}>
              2
            </p>
            <p className=" font-medium text-black">{t('Highlights.stages')}</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold" style={{ color: '#939393' }}>
              30
            </p>
            <p className=" font-medium text-black">
              {t('Highlights.sessions')}
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold" style={{ color: '#939393' }}>
              70 mln
            </p>
            <p className=" font-medium text-black">{t('Highlights.media')}</p>
          </div>
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
