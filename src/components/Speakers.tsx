import { useTranslations } from 'next-intl';

import edimg from '../../public/assets/images/speakers/ed.jpeg';
import husnoraimg from '../../public/assets/images/speakers/husnora.jpeg';
import irinaimg from '../../public/assets/images/speakers/irina.jpeg';
import irodaimg from '../../public/assets/images/speakers/iroda.jpeg';
import jakhongirimg from '../../public/assets/images/speakers/jakhongir.jpeg';
import joimg from '../../public/assets/images/speakers/jo.png';
import jordanimg from '../../public/assets/images/speakers/jordan.jpeg';
import lolaimg from '../../public/assets/images/speakers/lola.jpeg';
import meryemimg from '../../public/assets/images/speakers/meryem.jpeg';
import selimimg from '../../public/assets/images/speakers/selim.jpeg';

const Speakers = () => {
  const t = useTranslations();

  return (
    <div
      className="flex flex-col items-center justify-between gap-3 p-10"
      id="speakers"
    >
      <h1 className="text-center text-3xl font-bold uppercase text-gray-100 md:text-5xl">
        {t('Speakers.title')}
      </h1>

      <p className="max-w-[1221px] px-2 text-center text-lg text-gray-100 md:px-8">
        {t('Speakers.description')}
      </p>

      <div className="my-4 flex max-w-[1221px] flex-col  flex-wrap gap-6 md:flex-row md:justify-between">
        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] w-[225px] flex-col justify-end rounded-md bg-cover bg-center p-3 text-white"
            style={{ backgroundImage: `url(${meryemimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.meryem_name')}
            </p>
            <p>{t('Speakers.meryem')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] w-[225px] flex-col justify-end rounded-md bg-cover bg-center p-3 text-white"
            style={{ backgroundImage: `url(${lolaimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.lola_name')}
            </p>
            <p>{t('Speakers.lola')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] w-[225px] flex-col justify-end rounded-md bg-cover bg-center p-3 text-white"
            style={{ backgroundImage: `url(${irodaimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.iroda_name')}
            </p>
            <p>{t('Speakers.iroda')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] w-[225px] flex-col justify-end rounded-md bg-cover bg-center p-3 text-white"
            style={{ backgroundImage: `url(${husnoraimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.husnora_name')}
            </p>
            <p>{t('Speakers.husnora')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] w-[225px] flex-col justify-end rounded-md bg-cover bg-center p-3 text-white"
            style={{ backgroundImage: `url(${joimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.jo_name')}
            </p>
            <p>{t('Speakers.jo')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] w-[225px] flex-col justify-end rounded-md bg-cover bg-center p-3 text-white"
            style={{ backgroundImage: `url(${selimimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.selim_name')}
            </p>
            <p>{t('Speakers.selim')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] w-[225px] flex-col justify-end rounded-md bg-cover bg-center p-3 text-white"
            style={{ backgroundImage: `url(${edimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.ed_name')}
            </p>
            <p>{t('Speakers.ed')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] w-[225px] flex-col justify-end rounded-md bg-cover bg-center p-3 text-white"
            style={{ backgroundImage: `url(${irinaimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.irina_name')}
            </p>
            <p>{t('Speakers.irina')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] w-[225px] flex-col justify-end rounded-md bg-cover bg-center p-3 text-white"
            style={{ backgroundImage: `url(${jordanimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.jordan_name')}
            </p>
            <p>{t('Speakers.jordan')}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="flex-end flex h-[300px] w-[225px] flex-col justify-end rounded-md bg-cover bg-center p-3 text-white"
            style={{ backgroundImage: `url(${jakhongirimg.src})` }}
          >
            <p className="text-16 font-medium uppercase">
              {t('Speakers.jakhongir_name')}
            </p>
            <p>{t('Speakers.jakhongir')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Speakers };
