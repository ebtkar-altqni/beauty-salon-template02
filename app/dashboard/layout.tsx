import { Metadata } from "next";
import Header from "./components/header";
import NavigationRail, { DashboardHeader } from "./components/naviagation-rail";
export const metadata: Metadata = {
  title: {
    default: "لوحة التحكم",
    template: "%s < لوحة التحكم < New Libya",
  },
};
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      dir="rtl"
      className="flex relative flex-start gap-1 min-h-screen bg-secondary"
    >
      <section className=" bg-secondary max-sm:hidden">
        <NavigationRail />
      </section>

      <section className="flex-1 bg-background max-w-full">
        <div className="max-sm:hidden">
          <Header />
        </div>
        <DashboardHeader />
        <main>{children}</main>
      </section>
    </main>
  );
};
export default DashboardLayout;
