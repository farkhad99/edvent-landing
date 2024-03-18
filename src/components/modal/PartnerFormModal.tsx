'use client';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { sendEmail } from '@/utils/sendEmail';

import { Loader } from '../Loader';

export type FormData = {
  name: string;
  lastName: string;
  companyName?: string;
  companySector?: string;
  email: string;
  phone: string;
  website?: string;
  message?: string;
};

const PartnerFormModal = (props: { isOpen: boolean }) => {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();
  const [isLoading, setLoading] = useState(false);
  const currRouter = useRouter();
  const currPathName = usePathname();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await sendEmail(data);
    setLoading(false);
    currRouter.push(currPathName);
    reset();
  };

  return (
    <Dialog
      maxWidth="sm"
      sx={{
        padding: '15px',
        maxWidth: '480px',
        margin: '0 auto',
        '& .MuiDialog-paper': {
          margin: 0
        }
      }}
      open={props.isOpen}
      onClose={() => currRouter.push(currPathName)}
    >
      <DialogContent>
        <h1 className="pb-4 text-center text-2xl font-medium uppercase text-gray-100 md:text-[37px]">
          {t('Cta.become_partner')}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input
            type="text"
            className="grow border-b border-black p-3 placeholder:font-light"
            placeholder={t('Partners.first_name')}
            {...register('name', {
              required: 'Please enter your name'
            })}
          />
          {errors.name && (
            <p className="text-sm text-red-100">{errors.name.message}</p>
          )}

          <input
            type="text"
            className="grow border-b border-black p-3"
            placeholder={t('Partners.last_name')}
            {...register('lastName', {
              required: 'Enter your last name'
            })}
          />
          {errors.lastName && (
            <p className="text-sm text-red-100">{errors.lastName.message}</p>
          )}

          <input
            type="text"
            className="grow border-b border-black p-3"
            placeholder={t('Partners.company_name')}
            {...register('companyName')}
          />

          <input
            type="text"
            className="grow border-b border-black p-3"
            placeholder={t('Partners.company_sector')}
            {...register('companySector')}
          />

          <input
            type="text"
            className="grow border-b border-black p-3"
            placeholder={t('Partners.website')}
            {...register('website')}
          />

          <input
            type="email"
            className="grow border-b border-black p-3"
            placeholder={t('Partners.email')}
            {...register('email', {
              required: 'Email is required'
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-100">{errors.email.message}</p>
          )}

          <input
            type="text"
            className="grow border-b border-black p-3"
            placeholder={t('Partners.phone')}
            {...register('phone', {
              required: 'Phone is required'
            })}
          />

          {errors.phone && (
            <p className="text-sm text-red-100">{errors.phone.message}</p>
          )}
          <textarea
            className="grow border-b border-black p-3"
            placeholder={t('Partners.message')}
            {...register('message')}
          />

          <button
            type="submit"
            className="mt-4 w-full border-2 border-white bg-black p-3 py-4 uppercase text-white hover:border-black hover:bg-white hover:text-black"
            disabled={isLoading}
          >
            {!isLoading ? t('Cta.send') : <Loader />}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-100">{t('Partners.disclaimer')}</p>
      </DialogContent>
    </Dialog>
  );
};

export { PartnerFormModal };
