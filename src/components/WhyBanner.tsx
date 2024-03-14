import { useTranslations } from 'next-intl';
import bannerimg from '../../public/assets/images/why-edvent-banner.png'

const WhyBanner = () => {
  const t = useTranslations();
  const mainImage = `url(${bannerimg.src})`

  return (
    <div className='bg-gray-200 p-10 md:pb-0'>
      <div className='max-w-[1000px] mx-auto flex gap-8'>
        <div>
          <h1 className='text-gray-100 font-bold text-3xl mb-6 uppercase'>{t("Why.title")}</h1>
          <ul>
            <li className='flex gap-2 mb-6'>
              <div className='p-2 h-2 bg-gray-100'></div>
              <div className='-mt-2'>
                <p className='font-bold uppercase md:text-[19px]'>{ t("Why.descriptions.push.title") }</p>
                <p className='font-'>{ t("Why.descriptions.push.description") }</p>
              </div>
            </li>
            <li className='flex gap-2 mb-6'>
              <div className='p-2 h-2 bg-gray-100'></div>
              <div className='-mt-2'>
                <p className='font-bold uppercase md:text-[19px]'>{ t("Why.descriptions.empower.title") }</p>
                <p className='font-'>{ t("Why.descriptions.empower.description") }</p>
              </div>
            </li>
            <li className='flex gap-2 mb-2'>
              <div className='p-2 h-2 bg-gray-100'></div>
              <div className='-mt-2'>
                <p className='font-bold uppercase md:text-[19px]'>{ t("Why.descriptions.build.title") }</p>
                <p className='font-'>{ t("Why.descriptions.build.description") }</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='w-full h-[400px] hidden bg-contain bg-no-repeat bg-center bg-transparent md:block' style={{
          backgroundImage: mainImage
        }}>
        </div>
      </div>
    </div>
  );
};

export { WhyBanner };
