'use client'
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import bannerimg from '../../../public/assets/images/about-banner.png';
import { sendEmail } from '@/utils/sendEmail';
import { useState } from 'react';
import { Loader } from './Loader';

export type FormData = {
  website: string;
  message: string;
  phone: string;
  companySector: string;
  companyName: string;
  lastName: string;
  firstName: string;
  email: string;
};

const ProgramForm = () => {
  const t = useTranslations();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isLoading, setLoading] = useState(false)

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    await sendEmail(data);
    setLoading(false)
    reset()
  }

  const mainImage = `url(${bannerimg.src})`;

  return (
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
        <p className="text-center text-xl md:text-3xl font-bold uppercase max-w-[800px]">
          {t('Program.form_title')}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:flex-row gap-3 w-full max-w-[400px] mt-6 md:max-w-[800px] text-black'>
          <input type='email' className='p-3 flex-grow' placeholder={t('Program.email_example')} {...register('email', {
            required: true, pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  }
            })} />
          <button
            type="submit"
            className={`border-2 ${isLoading && 'bg-white'} border-white p-3 uppercase flex-grow-0 md:w-[180px] text-white hover:bg-white hover:text-black`}
            disabled={isLoading}
          >
            {!isLoading ? t('Cta.send') : <Loader />}
          </button>
        </form>
      </div>
    </div>
  );
};

export { ProgramForm };
