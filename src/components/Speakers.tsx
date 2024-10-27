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
import EditWrapper from './modal/EditWrapper';

const Speakers = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  return (
    <div
      className="flex flex-col items-center justify-between gap-3 p-10"
      id="speakers"
    >
      <EditWrapper
        isVisible={isAdmin}
        forms={[
          { type: 'text', path: 'Speakers.title' },
          { type: 'text', path: 'Speakers.description' }
        ]}
      >
        <h1 className="text-center text-3xl font-bold uppercase text-gray-100 md:text-5xl">
          {t('Speakers.title')}
        </h1>

        <p className="max-w-[1221px] px-2 text-center text-lg text-gray-100 md:px-8">
          {t('Speakers.description')}
        </p>
      </EditWrapper>

      <div className="my-4 flex max-w-[1221px] flex-col  flex-wrap gap-6 md:flex-row md:justify-between">
        <EditWrapper
          isVisible={isAdmin}
          forms={[
            { type: 'image', fileName: '/assets/images/speakers/meryem.jpeg' },
            { type: 'text', path: 'Speakers.meryem_name' },
            { type: 'text', path: 'Speakers.meryem' }
          ]}
        >
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
        </EditWrapper>

        <EditWrapper
          isVisible={isAdmin}
          forms={[
            { type: 'image', fileName: '/assets/images/speakers/lola.jpeg' },
            { type: 'text', path: 'Speakers.lola_name' },
            { type: 'text', path: 'Speakers.lola' }
          ]}
        >
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
        </EditWrapper>

        <EditWrapper
          isVisible={isAdmin}
          forms={[
            { type: 'image', fileName: '/assets/images/speakers/iroda.jpeg' },
            { type: 'text', path: 'Speakers.iroda_name' },
            { type: 'text', path: 'Speakers.iroda' }
          ]}
        >
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
        </EditWrapper>

        <EditWrapper
          isVisible={isAdmin}
          forms={[
            { type: 'image', fileName: '/assets/images/speakers/husnora.jpeg' },
            { type: 'text', path: 'Speakers.husnora_name' },
            { type: 'text', path: 'Speakers.husnora' }
          ]}
        >
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
        </EditWrapper>

        <EditWrapper
          isVisible={isAdmin}
          forms={[
            { type: 'image', fileName: '/assets/images/speakers/jo.png' },
            { type: 'text', path: 'Speakers.jo_name' },
            { type: 'text', path: 'Speakers.jo' }
          ]}
        >
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
        </EditWrapper>

        <EditWrapper
          isVisible={isAdmin}
          forms={[
            { type: 'image', fileName: '/assets/images/speakers/selim.jpeg' },
            { type: 'text', path: 'Speakers.selim_name' },
            { type: 'text', path: 'Speakers.selim' }
          ]}
        >
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
        </EditWrapper>

        <EditWrapper
          isVisible={isAdmin}
          forms={[
            { type: 'image', fileName: '/assets/images/speakers/ed.jpeg' },
            { type: 'text', path: 'Speakers.ed_name' },
            { type: 'text', path: 'Speakers.ed' }
          ]}
        >
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
        </EditWrapper>

        <EditWrapper
          isVisible={isAdmin}
          forms={[
            { type: 'image', fileName: '/assets/images/speakers/irina.jpeg' },
            { type: 'text', path: 'Speakers.irina_name' },
            { type: 'text', path: 'Speakers.irina' }
          ]}
        >
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
        </EditWrapper>

        <EditWrapper
          isVisible={isAdmin}
          forms={[
            { type: 'image', fileName: '/assets/images/speakers/jordan.jpeg' },
            { type: 'text', path: 'Speakers.jordan_name' },
            { type: 'text', path: 'Speakers.jordan' }
          ]}
        >
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
        </EditWrapper>

        <EditWrapper
          isVisible={isAdmin}
          forms={[
            {
              type: 'image',
              fileName: '/assets/images/speakers/jakhongir.jpeg'
            },
            { type: 'text', path: 'Speakers.jakhongir_name' },
            { type: 'text', path: 'Speakers.jakhongir' }
          ]}
        >
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
        </EditWrapper>
      </div>
    </div>
  );
};

export { Speakers };
