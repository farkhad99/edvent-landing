import { useTranslations } from 'next-intl';
import muskimg from '../../public/assets/images/musk.png'
import maloneimg from '../../public/assets/images/malone.png'
import johnsonimg from '../../public/assets/images/johnson.png'
import penceimg from '../../public/assets/images/pence.png'
import bransonimg from '../../public/assets/images/branson.png'

const Speakers = () => {
  const t = useTranslations();

  return (
    <div className='flex items-center flex-col justify-between gap-3 px-10 py-10'>
      <h1 className='text-gray-100 font-bold text-3xl md:text-5xl uppercase text-center'>{t("Speakers.title")}</h1>

      <p className='text-gray-100 text-lg text-center md:px-8 px-2 max-w-[1221px]'>{t("Speakers.description")}</p>
      
      <div className='flex flex-col md:flex-row md:justify-between  gap-6 my-4 flex-wrap'>
        <div className='flex gap-3'>
          <div
            className='text-white flex flex-col flex-end justify-end p-3 h-[300px] max-w-[225px]'
          style={{ background: `url(${muskimg.src})` }}
          >
            <p className='uppercase text-16 font-medium'>{ t('Speakers.musk_name') }</p>
            <p>{ t('Speakers.musk') }</p>
          </div>
        </div>

        <div className='flex gap-3'>
          <div
            className='text-white flex flex-col flex-end justify-end p-3 h-[300px] max-w-[225px]'
          style={{ background: `url(${maloneimg.src})` }}
          >
            <p className='uppercase text-16 font-medium'>{ t('Speakers.malone_name') }</p>
            <p>{ t('Speakers.malone') }</p>
          </div>
        </div>

        <div className='flex gap-3'>
          <div
            className='text-white flex flex-col flex-end justify-end p-3 h-[300px] max-w-[225px]'
          style={{ background: `url(${johnsonimg.src})` }}
          >
            <p className='uppercase text-16 font-medium'>{ t('Speakers.johnson_name') }</p>
            <p>{ t('Speakers.johnson') }</p>
          </div>
        </div>

        <div className='flex gap-3'>
          <div
            className='text-white flex flex-col flex-end justify-end p-3 h-[300px] w-[225px]'
          style={{ background: `url(${bransonimg.src})` }}
          >
            <p className='uppercase text-16 font-medium'>{ t('Speakers.branson_name') }</p>
            <p>{ t('Speakers.branson') }</p>
          </div>
        </div>

        <div className='flex gap-3'>
          <div
            className='text-white flex flex-col flex-end justify-end p-3 h-[300px] max-w-[225px]'
          style={{ background: `url(${penceimg.src})` }}
          >
            <p className='uppercase text-16 font-medium'>{ t('Speakers.pence_name') }</p>
            <p>{ t('Speakers.pence') }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Speakers };
