import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Partners = () => {
  const t = useTranslations();

  return (
    <div id="partners" className="bg-gray-200 p-10">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-4 pb-10">
        <h1 className="text-center text-3xl font-bold uppercase text-gray-100 md:text-5xl">
          {t('Partners.title')}
        </h1>

        <div className="my-4 flex w-full flex-col items-center justify-between gap-8 sm:flex sm:flex-row">
          <div className="text-center">
            <Image
              src="/assets/images/akfa-logo.png"
              alt="Sentry"
              width={230}
              height={224}
            />
          </div>

          <div className="text-center">
            <Image
              src="/assets/images/uni-logo.png"
              alt="Sentry"
              width={240}
              height={22}
            />
          </div>

          <div className="text-center">
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
