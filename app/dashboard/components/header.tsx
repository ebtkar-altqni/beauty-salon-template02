import { Input } from "@/components/ui/input";
// import ToggleTheme from "@/components/theme-toggle";

const Header = async () => {
  return (
    <header className="flex justify-between items-center bg-secondary py-2 px-4">
      <div>
        <Input type="text" placeholder="ابحث" />
      </div>
      <div className="flex justify-center items-center gap-2">
        {/* <ToggleTheme /> */}
      </div>
    </header>
  );
};

export default Header;
