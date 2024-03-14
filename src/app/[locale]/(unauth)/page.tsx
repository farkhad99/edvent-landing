import { About } from '@/components/About';
import { Feedback } from '@/components/Feedback';
import { Goals } from '@/components/Goals';
import { Highlights } from '@/components/HIghlights';
import { HeaderBanner } from '@/components/HeaderBanner';
import { Speakers } from '@/components/Speakers';
import { SpeakersVision } from '@/components/SpeakersVision';
import { Tickets } from '@/components/Tickets';
import { Venues } from '@/components/Venues';
import { WhyBanner } from '@/components/WhyBanner';
import { Partners } from '@/components/Partners';
import { getTranslations } from 'next-intl/server';
import { Trailer } from '@/components/Trailer';
import { OpportunityBanner } from '@/components/OpportunityBanner';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
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
