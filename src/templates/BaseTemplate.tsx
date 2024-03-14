import { MainFooter } from '@/components/layout/MainFooter';
import { MainHeader } from '@/components/layout/MainHeader';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="">
        <MainHeader />
        <main>{props.children}</main>
        <MainFooter />
      </div>
    </div>
  );
};

export { BaseTemplate };
