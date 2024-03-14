import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Partners = () => {
  const t = useTranslations();

  return (
    <div className='bg-gray-200 p-10'>
      <div className='max-w-[1000px] mx-auto flex gap-4 flex-col items-center pb-10'>
        <h1 className='font-bold text-gray-100 uppercase text-3xl md:text-5xl text-center'>{t('Partners.title')}</h1>

        <div className='flex flex-col items-center gap-8 sm:flex sm:flex-row justify-between w-full my-4'>
          <div className='text-center'>
            <Image
              src="/assets/images/akfa-logo.png"
              alt="Sentry"
              width={230}
              height={224}
            />
          </div>

          <div className='text-center'>
            <Image
              src="/assets/images/uni-logo.png"
              alt="Sentry"
              width={240}
              height={22}
            />
          </div>

          <div className='text-center'>
            <Image
              src="/assets/images/pepsi-logo.png"
              alt="Sentry"
              width={240}
              height={224}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Partners };
