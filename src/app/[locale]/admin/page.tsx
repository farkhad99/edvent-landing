'use client';

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

export default function AdminPage() {
  return (
    <>
      <HeaderBanner isAdmin />
      <Goals isAdmin />
      <About isAdmin />
      <Speakers isAdmin />
      <SpeakersVision isAdmin />
      <Venues isAdmin />
      <Tickets isAdmin />
      <WhyBanner isAdmin />
      <Feedback />
      <Highlights />
      <Trailer />
      <Partners />
      <OpportunityBanner />
    </>
  );
}
