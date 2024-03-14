import { AppConfig } from "@/utils/AppConfig"
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import Link from "next/link";

const MainFooter = () => {
  const t = useTranslations()

  return (
    <footer className="bg-black p-8 flex flex-col md:flex-row justify-between text-center text-sm text-white">

      <div className="flex flex-col gap-2 text-md">
        <div className="text-left">
            <Image
              alt="Edvent logo"
              width={170}
              height={15}
            src="/assets/images/header-logo.png" />
          
          <p className="py-6">
            © Copyright {new Date().getFullYear()} {AppConfig.name} <br />
            {t("Footer.all_rights")}
          </p>

          <p>{t("Footer.address")}</p>
        </div>
      </div>

      <div className="my-6 md:my-0">
        <nav>
          <ul className="flex flex-col flex-wrap text-left gap-y-2">
            <li>{t('Header.speakers')}</li>
            <li>{t('Header.venues')}</li>
            <li>{t('Header.tickets')}</li>
            <li>{t('Header.program')}</li>
            <li>{t('Header.partners')}</li>
          </ul>
        </nav>
      </div>

      <div className="text-left text-base">
        <p className="pb-2">{t("Footer.contacts")}</p>
        <p>+998(50)724-01-64</p>
        <p>info@edvent.uz</p>
      </div>

      <div className="flex flex-col gap-y-2 mt-6 md:mt-0">
        <LocaleSwitcher />

        <div className='flex justify-end'>
          <Link href="youtube.com">
            <button className="rounded-full p-2 bg-white">
              <Image alt="insta-link" width={16} height={18} src="/assets/images/youtube-icon.svg" />
            </button>
          </Link>
          <Link href="instagram.com">
            <button className="rounded-full p-2 mx-3 bg-white">
              <Image alt="insta-link" width={16} height={18} src="/assets/images/instagram-icon.svg" />
            </button>
          </Link>
          <Link href="instagram.com">
            <button className="rounded-full p-2 bg-white">
              <Image alt="tg-link" width={16} height={18} src="/assets/images/telegram-icon.svg" />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  )

}

export { MainFooter }