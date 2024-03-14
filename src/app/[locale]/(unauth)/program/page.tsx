import { getTranslations } from 'next-intl/server';

import { LearningTracks } from '@/components/program/LearningTracks';
import { ProgramForm } from '@/components/program/ProgramForm';
import { ProgramHeader } from '@/components/program/ProgramHeader';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Program'
  });

  return {
    title: t('meta_title'),
    description: t('meta_description')
  };
}

const Program = () => {
  return (
    <>
      <ProgramHeader />
      <LearningTracks />
      <ProgramForm />
    </>
  );
};

export default Program;
