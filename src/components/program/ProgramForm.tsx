'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { sendEmail } from '@/utils/sendEmail';

import bannerimg from '../../../public/assets/images/about-banner.png';
import { Loader } from '../Loader';

export type FormData = {
  email: string;
};

const ProgramForm = () => {
  const t = useTranslations();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await sendEmail(data);
    setLoading(false);
    reset();
  };

  const mainImage = `url(${bannerimg.src})`;

  return (
    <div>
      <div
        className="relative w-full bg-transparent bg-cover bg-center bg-no-repeat md:py-10"
        style={{
          backgroundColor: 'linear-gradient(#282828, #898A8C)',
          backgroundImage: mainImage
        }}
      >
        <div
          className="absolute left-0 top-0 z-10 size-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
        />
        <div className="relative z-20 flex flex-col items-center justify-around gap-4 px-6 py-16 text-white">
          <p className="max-w-[800px] text-center text-xl font-bold uppercase md:text-3xl">
            {t('Program.form_title')}
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex w-full max-w-[400px] flex-col gap-3 text-black md:max-w-[800px] md:flex-row"
          >
            <input
              type="email"
              className="grow p-3"
              placeholder={t('Program.email_example')}
              {...register('email', {
                required: true
              })}
            />
            <button
              type="submit"
              className="grow-0  border-2 border-white p-3 uppercase text-white hover:bg-white hover:text-black md:w-[180px]"
              disabled={isLoading}
            >
              {!isLoading ? t('Cta.send') : <Loader />}
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center py-20">
        <Link href="/">
          <button
            type="button"
            className="grow-0  border-2 border-black bg-black p-3 uppercase text-white hover:bg-white hover:text-black md:w-[180px]"
          >
            {t('Cta.back_to_main')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export { ProgramForm };
