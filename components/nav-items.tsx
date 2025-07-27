import { Link } from "react-router";

const NavItems = () => {
  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
      </Link>
      <h1>Tourvisto</h1>
    </section>
  );
};

export default NavItems;
