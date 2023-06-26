import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="w-full bg-white/20 z-10 top-0 fixed backdrop-blur-lg border-b-[1px] border-white/30">
      <div className="md:py-8 py-4">
        <Container>
          <div className="flex flex-row items-center md:justify-start justify-between gap-3 md:gap-8">
            <Logo />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
