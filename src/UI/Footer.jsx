import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import Logo from "../components/Logo";
function Footer() {
  return (
    <footer>
      <div className="container mx-auto md:px-5 px-2.5 2xl:px-32 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-14 pb-4">
        <div className="font-roba text-3xl text-primary mx-auto sm:mx-0 sm:mr-auto select-none">
          <Logo />
        </div>

        <ul className="flex sm:flex-row flex-col gap-4  sm:mx-0 sm:ml-auto dark:text-text-muted-dark text-text-muted text-xs text-center">
          <ListItems>Terms</ListItems>
          <ListItems>Privacy Policy</ListItems>
        </ul>
        <div className="sm:col-span-2 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent mt-2"></div>
        <div className="flex flex-row gap-4 items-center mx-auto">
          <a href="#" className="inline-block ">
            <BsFacebook className="hover:text-blue-500" />
          </a>
          <a href="#" className="inline-block">
            <BsInstagram className="hover:text-pink-500" />
          </a>
          <a href="#" className="inline-block">
            <BsTwitterX className="hover:text-blue-300" />
          </a>
        </div>

        <div className="mx-auto dark:text-text-muted-dark text-text-muted text-xs mt-1">
          &copy;<span id="year">2025</span> TaskFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
function ListItems({ children }) {
  return (
    <li>
      <a
        href="#contact"
        className="dark:hover:text-gray-500 hover:text-gray-400  transition-all duration-300"
      >
        {children}
      </a>
    </li>
  );
}
export default Footer;
