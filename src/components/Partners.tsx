import Image from 'next/image';
import { useTranslations } from 'next-intl';

import EditWrapper from './modal/EditWrapper';

const Partners = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  return (
    <div id="partners" className="bg-gray-200 p-10">
      <EditWrapper
        isVisible={isAdmin}
        forms={[
          { type: 'text', path: 'Partners.title' },
          { type: 'image', fileName: '/assets/images/akfa-logo.png' },
          { type: 'image', fileName: '/assets/images/uni-logo.png' },
          { type: 'image', fileName: '/assets/images/pepsi-logo.png' },
          { type: 'image', fileName: '/assets/images/koc-logo.png' },
          { type: 'image', fileName: '/assets/images/artel-logo.png' },
          { type: 'image', fileName: '/assets/images/tushlar.png' }
        ]}
      >
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

            <div className="text-center">
              <Image
                src="/assets/images/koc-logo.png"
                alt="Sentry"
                width={240}
                height={224}
              />
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <div className="text-center">
              <Image
                src="/assets/images/artel-logo.png"
                alt="Sentry"
                width={180}
                height={124}
              />
            </div>

            <div className="text-center">
              <Image
                src="/assets/images/tushlar.png"
                alt="Sentry"
                width={180}
                height={224}
              />
            </div>
          </div>
        </div>
      </EditWrapper>
    </div>
  );
};

export { Partners };
