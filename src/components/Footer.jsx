import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Blog", link: "/blog" },
];

export default function Footer() {
  return (
    <div className="dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              animi harum ipsum earum aspernatur.
            </p>
            <p className="text-gray-500 mt-4">Made with ❤️ by An Truong</p>
            <a
              href="https://www.facebook.com/an.truong.287597"
              target="_blank"
              className="inline-block bg-blue-700 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              {" "}
              Visit my Facebook profile
            </a>
          </div>

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* important links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-neutral-500">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400  hover:text-black duration-300 hover:dark:text-white"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* quick links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-neutral-500">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400  hover:text-black duration-300 hover:dark:text-white"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-neutral-500">
                Address
              </h1>
              <div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <FaLocationArrow className="text-gray-600 dark:text-gray-400  group-hover:text-black duration-300 hover:dark:text-white" />
                  <p className="text-gray-600 dark:text-gray-400  group-hover:text-black duration-300 hover:dark:text-white">
                    Tan Son Hoa Ward, Ho Chi Minh City
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6 group cursor-pointer">
                  <FaMobileAlt className="text-gray-600 dark:text-gray-400  group-hover:text-black duration-300 hover:dark:text-white" />
                  <p className="text-gray-600 dark:text-gray-400  group-hover:text-black duration-300 hover:dark:text-white">
                    +84 988364318
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-200 text-neutral-500" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200 text-neutral-500" />
                  </a>
                  <a href="#">
                    {" "}
                    <FaLinkedin className="text-3xl hover:text-primary duration-200 text-neutral-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
