import { useTranslations } from 'next-intl';
import bannerimg from '../../public/assets/images/tickets-banner.png'
import Image from 'next/image';

const Tickets = () => {
  const t = useTranslations();

  const mainImage = `url(${bannerimg.src})`

  const standard = {
    services: [
      "access",
      "limit",
      "photo",
      "network",
    ]
  }

  const premium = {
    services: [
      "access",
      "limit",
      "photo",
      "network",
      "coupon"
    ]
  }

  const vip = {
    services: [
      "access",
      "special",
      "network",
      "lounge",
      "buffet",
      "coupon",
      "separate",
      "translation",
      "headset",
      "photo",
      "vip_special",
    ]
  }

  const sip = {
    services: [
      "access",
      "special",
      "network",
      "lounge",
      "buffet",
      "coupon",
      "separate",
      "translation",
      "headset",
      "photo",
      "sip_special",
      "assistance",
    ]
  }

  return (
    <div className='w-full relative bg-cover bg-no-repeat bg-center bg-transparent py-20 flex flex-col items-center gap-6' style={{
      backgroundImage: mainImage
    }}>
      <h1 className='font-bold text-3xl md:text-5xl text-white uppercase'>{t('Tickets.title')}</h1>

      <div className='grid md:grid-cols-4 md:justify-between gap-8 flex-wrap px-10 max-w-[990px] my-6 mx-auto'>
        <div className='flex flex-col'>
          <div className='text-center py-2 pb-4 rounded-tr-md rounded-tl-md uppercase bg-gray-100 text-white text-2xl'>{ t('Tickets.standard.title') }</div>

          <div className='flex-grow py-2 text-black bg-white px-2 rounded-md -mt-2'>
            <p className='text-center py-2 font-medium text-lg'>{ t('Tickets.standard.level') }</p>
            <ul className='px-2 pb-1'>
              {standard.services.map(s => (
                <li className='flex gap-2 py-1'>
                  <div className='flex-shrink-0'><Image alt="verified" src="/assets/images/verified-icon.svg" width={16} height={16} /></div>
                  <p className='-mt-1 text-sm font-thin'>{t(`Tickets.standard.services.${s}`)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='text-center py-2 pb-4 rounded-tr-md rounded-tl-md uppercase bg-gray-100 text-white text-2xl'>{ t('Tickets.premium.title') }</div>

          <div className='flex-grow py-2 text-black bg-white px-2 rounded-md -mt-2'>
            <p className='text-center py-2 font-medium text-lg'>{ t('Tickets.premium.level') }</p>
            <ul className='px-2 pb-1'>
              {premium.services.map(s => (
                <li className='flex gap-2 py-1'>
                  <div className='flex-shrink-0'><Image alt="verified" src="/assets/images/verified-icon.svg" width={16} height={16} /></div>
                  <p className='-mt-1 text-sm font-thin'>{t(`Tickets.premium.services.${s}`)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='text-center py-2 pb-4 rounded-tr-md rounded-tl-md uppercase bg-gray-100 text-white text-2xl'>{ t('Tickets.vip.title') }</div>

          <div className='flex-grow py-2 text-black bg-white px-2 rounded-md -mt-2'>
            <p className='text-center py-2 font-medium text-lg'>{ t('Tickets.vip.level') }</p>
            <ul className='px-2 pb-1'>
              {vip.services.map(s => (
                <li className='flex gap-2 py-1'>
                  <div className='flex-shrink-0'><Image alt="verified" src="/assets/images/verified-icon.svg" width={16} height={16} /></div>
                  <p className='-mt-1 text-sm font-thin'>{t(`Tickets.vip.services.${s}`)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='text-center py-2 pb-4 rounded-tr-md rounded-tl-md uppercase bg-gray-100 text-white text-2xl'>{ t('Tickets.sip.title') }</div>

          <div className='flex-grow py-2 text-black bg-white px-2 rounded-md -mt-2'>
            <p className='text-center py-2 font-medium text-lg'>{ t('Tickets.sip.level') }</p>
            <ul className='px-2 pb-1'>
              {sip.services.map(s => (
                <li className='flex gap-2 py-1'>
                  <div className='flex-shrink-0'><Image alt="verified" src="/assets/images/verified-icon.svg" width={16} height={16} /></div>
                  <p className='-mt-1 text-sm font-thin'>{t(`Tickets.sip.services.${s}`)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button className="p-2 px-16 text-black bg-white border-2 border-white uppercase">{ t("Cta.buy_ticket") }</button>
    </div>
  );
};

export { Tickets };
