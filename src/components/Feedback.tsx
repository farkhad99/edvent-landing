'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useTranslations } from 'next-intl';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import EditWrapper from './modal/EditWrapper';

const Feedback = ({ isAdmin }: { isAdmin?: boolean }) => {
  const t = useTranslations();

  const mainImage = `url(${'/assets/images/about-banner.png'})`;

  return (
    <EditWrapper
      isVisible={isAdmin}
      forms={[
        { type: 'text', path: 'Feedback.title' },
        { type: 'image', fileName: '/assets/images/about-banner.png' }
      ]}
    >
      <div
        className="relative w-full bg-transparent bg-cover bg-center bg-no-repeat px-2 py-10 text-white"
        style={{
          backgroundColor: 'linear-gradient(#282828, #898A8C)',
          backgroundImage: mainImage
        }}
      >
        <div
          className="absolute left-0 top-0 z-10 size-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
        />
        <div className="relative z-20 h-full">
          <p className="text-center text-3xl font-bold uppercase text-white">
            {t('Feedback.title')}
          </p>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            className="max-w-[800px]"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            {Array.from({ length: 8 }, (_, index) => (
              <SwiperSlide key={index}>
                <EditWrapper
                  isVisible={isAdmin}
                  forms={[
                    {
                      type: 'text',
                      path: `Feedback.feedback_${index + 1}_text`
                    },
                    {
                      type: 'text',
                      path: `Feedback.feedback_${index + 1}_author`
                    }
                  ]}
                >
                  <div className="mb-10 flex flex-col items-center gap-2 p-4">
                    <p className="max-w-[600px] pb-4 text-center">
                      {t(`Feedback.feedback_${index + 1}_text` as any)}
                    </p>
                    <p className="text-lg font-medium">
                      {t(`Feedback.feedback_${index + 1}_author` as any)}
                    </p>
                  </div>
                </EditWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </EditWrapper>
  );
};

export { Feedback };
