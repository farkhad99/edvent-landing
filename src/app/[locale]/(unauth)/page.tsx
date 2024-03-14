import { getTranslations } from 'next-intl/server';

import { About } from '@/components/About';
import { Feedback } from '@/components/Feedback';
import { Goals } from '@/components/Goals';
import { HeaderBanner } from '@/components/HeaderBanner';
import { Highlights } from '@/components/HIghlights';
import { OpportunityBanner } from '@/components/OpportunityBanner';
import { Partners } from '@/components/Partners';
import { Speakers } from '@/components/Speakers';
import { SpeakersVision } from '@/components/SpeakersVision';
import { Tickets } from '@/components/Tickets';
import { Trailer } from '@/components/Trailer';
import { Venues } from '@/components/Venues';
import { WhyBanner } from '@/components/WhyBanner';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index'
  });

  return {
    title: t('meta_title'),
    description: t('meta_description')
  };
}

export default function Index() {
  return (
    <>
      <HeaderBanner />
      <Goals />
      <About />
      <Speakers />
      <SpeakersVision />
      <Venues />
      <Tickets />
      <WhyBanner />
      <Feedback />
      <Highlights />
      <Trailer />
      <Partners />
      <OpportunityBanner />
    </>
  );
}
