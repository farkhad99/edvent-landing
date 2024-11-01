import Link from 'next/link';
import { useTranslations } from 'next-intl';

import EditWrapper from './modal/EditWrapper';

const Trailer = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  return (
    <EditWrapper
      isVisible={isAdmin}
      centered
      forms={[
        { type: 'image', fileName: '/assets/images/trailer-poster.png' },
        { type: 'text', path: 'Trailer.title' },
        { type: 'text', path: 'Trailer.subtitle' },
        { type: 'text', path: 'Trailer.description' }
      ]}
    >
      <div className="bg-white p-10 px-0 text-center">
        <h1 className="text-center text-3xl font-bold uppercase text-gray-100 md:text-5xl">
          {t('Trailer.title')}
        </h1>

        <div
          className="relative mt-10 h-[500px] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${'/assets/images/trailer-poster.png'})`
          }}
        />

        <h1 className="mx-auto my-10 max-w-[800px] px-4 text-center text-3xl font-bold uppercase text-gray-100 md:text-5xl">
          {t('Trailer.subtitle')}
        </h1>
        <p className="mx-auto my-6 max-w-[700px] px-4">
          {t('Trailer.description')}
        </p>
        <Link href="/?ticketModal=true">
          <button
            type="button"
            className="mx-auto mt-4 border-2 border-black bg-black p-2 px-16 uppercase text-white"
          >
            {t('Cta.become_partner')}
          </button>
        </Link>
      </div>
    </EditWrapper>
  );
};

export { Trailer };
