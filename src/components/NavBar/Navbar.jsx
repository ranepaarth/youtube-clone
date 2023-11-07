import { DesktopNav,MobileNav } from "../routes";

const Navbar = () => {
  return (
    <>
      <div className="md:hidden sticky">
        <MobileNav />
      </div>
      <div className="hidden md:block md:visible sticky">
        <DesktopNav />
      </div>
    </>
  );
};

export default Navbar;
