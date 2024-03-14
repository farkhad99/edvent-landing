'use client'
import { useTranslations } from 'next-intl';
import bannerimg from '../../public/assets/images/about-banner.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Feedback = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`

  return (
    <div className='w-full relative bg-cover bg-no-repeat bg-center bg-transparent text-white py-10 px-2' style={{
      backgroundColor: 'linear-gradient(#282828, #898A8C)',
      backgroundImage: mainImage
    }}>
      <div className='absolute top-0 left-0 w-full h-full z-10' style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)'}}></div>
      <div className='relative z-20 h-full'>
        <p className='font-bold text-3xl uppercase text-center text-white'>{t("Feedback.title")}</p>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            className='max-w-[800px]'
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className='p-4 flex flex-col gap-2 items-center mb-10'>
                <p className='pb-4'>{t('Feedback.feedback_text') }</p>
                <Image width={100} height={100} src="/assets/images/feedback-avatar.png"  alt="avatar" />
                <p className='text-lg font-medium'>{t('Feedback.name') }</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='p-4 flex flex-col gap-2 items-center mb-10'>
                  <p className='pb-4'>{t('Feedback.feedback_text') }</p>
                  <Image width={100} height={100} src="/assets/images/feedback-avatar.png"  alt="avatar" />
                  <p className='text-lg font-medium'>{t('Feedback.name') }</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='p-4 flex flex-col gap-2 items-center mb-10'>
                <p className='pb-4'>{t('Feedback.feedback_text') }</p>
                <Image width={100} height={100} src="/assets/images/feedback-avatar.png"  alt="avatar" />
                <p className='text-lg font-medium'>{t('Feedback.name') }</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  );
};

export { Feedback };
