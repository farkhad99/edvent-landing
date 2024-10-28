'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useTranslations } from 'next-intl';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Feedback = () => {
  const t = useTranslations();

  const mainImage = `url(${'/assets/images/about-banner.png'})`;

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
              <p className="max-w-[600px] pb-4 text-center">
                Mероприятие было организовано на высшем уровне, администрация
                была очень любезна и внимательна ко всем гостям, выступление Мэй
                Маск и Севары Назархан впечатлило больше всего, получила
                множество приятных и незабываемых эмоций и впечатлений, спасибо
                всем большое❤️🥰
              </p>
              <p className="text-lg font-medium">Светлана Савинская</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-10 flex flex-col items-center gap-2 p-4">
              <p className="max-w-[600px] pb-4 text-center">
                Спич Май Маска был просто классным. Этот ивент я ждал 2 недели и
                не зря.
              </p>
              <p className="text-lg font-medium">Шохрух Убайдуллаев</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-10 flex flex-col items-center gap-2 p-4">
              <p className="max-w-[600px] pb-4 text-center">
                Тед толкс был отличным интерактивным и многие были
                мотивированные после этого.Организуйте больше таких ивентов
              </p>
              <p className="text-lg font-medium">Феруза Фархадова</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mb-10 flex flex-col items-center gap-2 p-4">
              <p className="max-w-[600px] pb-4 text-center">
                Выступление Маргулана Сесембаева было очень интересным и
                позновательным так как он еще и обяснял принцыпы роста ,
                организация edvent очень комфортно и организовано зделала этот
                ивент
              </p>
              <p className="text-lg font-medium">Уткир Тураев</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mb-10 flex flex-col items-center gap-2 p-4">
              <p className="max-w-[600px] pb-4 text-center">
                Мероприятие с Маргуланом Сезембаем была поучительной и
                увлекательной. Его опыт в данной области был очевиден, и он
                эффективно передавал сложные идеи в ясной и сжатой форме.
                Аудитория была очарована его проницательностью и атмосферой
                мероприятия и покинула мероприятие с более глубоким пониманием
                темы. В целом, вклад Маргулана Сезембая значительно улучшил
                впечатление от мероприятия.
              </p>
              <p className="text-lg font-medium">Азиза Латипова</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mb-10 flex flex-col items-center gap-2 p-4">
              <p className="max-w-[600px] pb-4 text-center">
                Мероприятие c Мухаммадом Юнусом было невероятным! Его
                выступление открыло глаза и вдохновило. Я так много узнала о
                социальном предпринимательстве и о том, как небольшие действия
                могут оказать большое влияние. Определенно, у меня остались
                чувство мотивации изменить ситуацию в моем собственном
                сообществе!
              </p>
              <p className="text-lg font-medium">Севара Алишерова</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mb-10 flex flex-col items-center gap-2 p-4">
              <p className="max-w-[600px] pb-4 text-center">
                Мероприятие TEDx было потрясающим! Спикеры были
                суперинтересными, и мне понравилось слушать все классные идеи,
                которыми они поделились. Это был веселый и заставляющий
                задуматься опыт, который вдохновил меня и заставил быть готовым
                к новым вызовам.
              </p>
              <p className="text-lg font-medium">Самир Баходиров</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mb-10 flex flex-col items-center gap-2 p-4">
              <p className="max-w-[600px] pb-4 text-center">
                Dude, the event with Muhammad Yunus was mind-blowing! His talk
                was so motivating and down-to-earth. He's a total rockstar in
                social entrepreneurship. Left the event feeling pumped up and
                ready to change the world, one step at a time!
              </p>
              <p className="text-lg font-medium">Alexander Kachovskiy</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export { Feedback };
