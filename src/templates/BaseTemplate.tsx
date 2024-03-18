'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { MainFooter } from '@/components/layout/MainFooter';
import { MainHeader } from '@/components/layout/MainHeader';
import { Sidebar } from '@/components/layout/Sidebar';
import { PartnerFormModal } from '@/components/modal/PartnerFormModal';
import { TicketRequestFormModal } from '@/components/modal/TicketRequestFormModal';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const searchParams = useSearchParams();

  const isPartnerModalOpen = !!searchParams.get('partnerModal');
  const isTicketModalOpen = !!searchParams.get('ticketModal');

  const closeSidebar = () => {
    toggleSidebar(false);
  };

  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="">
        <MainHeader toggleSidebar={toggleSidebar} />
        <Sidebar closeSidebar={closeSidebar} isOpen={isSidebarOpen} />
        <TicketRequestFormModal isOpen={isTicketModalOpen} />
        <PartnerFormModal isOpen={isPartnerModalOpen} />
        <main>{props.children}</main>
        <MainFooter />
      </div>
    </div>
  );
};

export { BaseTemplate };
