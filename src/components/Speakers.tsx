import { useTranslations } from 'next-intl';

import bransonimg from '../../public/assets/images/branson.png';
import johnsonimg from '../../public/assets/images/johnson.png';
import maloneimg from '../../public/assets/images/malone.png';
import muskimg from '../../public/assets/images/musk.png';
import penceimg from '../../public/assets/images/pence.png';

const Speakers = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-between gap-3 p-10" id="speakers">
      <h1 className="text-center text-3xl font-bold uppercase text-gray-100 md:text-5xl">
        {t('Speakers.title')}
      </h1>

      <p className="max-w-[1221px] px-2 text-center text-lg text-gray-100 md:px-8">
        {t('Speakers.description')}
      </p>

      <div className="my-4 flex flex-col flex-wrap  gap-6 md:flex-row md:justify-between">
        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] max-w-[225px] flex-col justify-end p-3 text-white"
            style={{ background: `url(${muskimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.musk_name')}
            </p>
            <p>{t('Speakers.musk')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] max-w-[225px] flex-col justify-end p-3 text-white"
            style={{ background: `url(${maloneimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.malone_name')}
            </p>
            <p>{t('Speakers.malone')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] max-w-[225px] flex-col justify-end p-3 text-white"
            style={{ background: `url(${johnsonimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.johnson_name')}
            </p>
            <p>{t('Speakers.johnson')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] w-[225px] flex-col justify-end p-3 text-white"
            style={{ background: `url(${bransonimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.branson_name')}
            </p>
            <p>{t('Speakers.branson')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] max-w-[225px] flex-col justify-end p-3 text-white"
            style={{ background: `url(${penceimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.pence_name')}
            </p>
            <p>{t('Speakers.pence')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Speakers };
