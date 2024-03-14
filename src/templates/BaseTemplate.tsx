'use client'
import { MainFooter } from '@/components/layout/MainFooter';
import { MainHeader } from '@/components/layout/MainHeader';
import { Sidebar } from '@/components/layout/Sidebar';
import { useState } from 'react';

const BaseTemplate = (props: { children: React.ReactNode }) => {

  const [isModalOpen, toggleSidebar] = useState(false)

  const closeSidebar = () => {
    toggleSidebar(false)
  }

  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="">
        <MainHeader toggleSidebar={toggleSidebar} />
        <Sidebar closeSidebar={closeSidebar} isOpen={isModalOpen} />
        <main>{props.children}</main>
        <MainFooter />
      </div>
    </div>
  );
};

export { BaseTemplate };
