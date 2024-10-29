import { useTranslations } from 'next-intl';

import EditWrapper from '../modal/EditWrapper';

const ProgramHeader = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  const mainImage = `url(${'/assets/images/program-banner.png'})`;

  return (
    <EditWrapper
      isVisible={isAdmin}
      centered
      forms={[
        { type: 'image', fileName: '/assets/images/program-banner.png' },
        { type: 'text', path: 'Program.title' },
        { type: 'text', path: 'Program.description' }
      ]}
    >
      <div
        className="relative flex w-full flex-col items-center gap-6 bg-transparent bg-cover bg-center bg-no-repeat py-32 text-white "
        style={{
          backgroundImage: mainImage
        }}
      >
        <h1 className="max-w-[800px] px-4 text-center text-3xl font-bold uppercase text-white md:text-5xl">
          {t('Program.title')}
        </h1>
        <p className="mt-2 max-w-[800px] px-4 text-center md:text-xl">
          {t('Program.description')}
        </p>
      </div>
    </EditWrapper>
  );
};

export { ProgramHeader };
