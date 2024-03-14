'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import bannerimg from '../../public/assets/images/about-banner.png';

const Feedback = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`;

  return (
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
          <SwiperSlide>
            <div className="mb-10 flex flex-col items-center gap-2 p-4">
              <p className="pb-4">{t('Feedback.feedback_text')}</p>
              <Image
                width={100}
                height={100}
                src="/assets/images/feedback-avatar.png"
                alt="avatar"
              />
              <p className="text-lg font-medium">{t('Feedback.name')}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-10 flex flex-col items-center gap-2 p-4">
              <p className="pb-4">{t('Feedback.feedback_text')}</p>
              <Image
                width={100}
                height={100}
                src="/assets/images/feedback-avatar.png"
                alt="avatar"
              />
              <p className="text-lg font-medium">{t('Feedback.name')}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-10 flex flex-col items-center gap-2 p-4">
              <p className="pb-4">{t('Feedback.feedback_text')}</p>
              <Image
                width={100}
                height={100}
                src="/assets/images/feedback-avatar.png"
                alt="avatar"
              />
              <p className="text-lg font-medium">{t('Feedback.name')}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export { Feedback };
