import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import Logo from "./Logo";
function Footer() {
  return (
    <footer>
      <div class="container mx-auto md:px-5 px-2.5 2xl:px-32 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-14 pb-4">
        <div class="font-roba text-3xl text-primary mx-auto sm:mx-0 sm:mr-auto select-none">
          <Logo />
        </div>

        <ul class="flex sm:flex-row flex-col gap-4  sm:mx-0 sm:ml-auto dark:text-text-muted-dark text-text-muted text-xs text-center">
          <li>
            <a
              href="#contact"
              class="dark:hover:text-gray-500 hover:text-gray-400  transition-all duration-300"
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="#"
              class="dark:hover:text-gray-500 hover:text-gray-400 transition-all duration-300"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
        <div class="sm:col-span-2 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent mt-2"></div>
        <div class="flex flex-row gap-4 items-center mx-auto">
          <a href="#" class="inline-block ">
            <BsFacebook className="hover:text-blue-500" />
          </a>
          <a href="#" class="inline-block">
            <BsInstagram className="hover:text-pink-500" />
          </a>
          <a href="#" class="inline-block">
            <BsTwitterX className="hover:text-blue-300" />
          </a>
        </div>

        <div class="mx-auto dark:text-text-muted-dark text-text-muted text-xs mt-1">
          &copy;<span id="year">2025</span> TaskFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
