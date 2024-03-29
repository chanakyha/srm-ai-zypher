import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SRMLogo from "@/images/srm-logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-stone-900">
      <div className="p-4 md:p-16 xl:max-w-7xl xl:mx-auto">
        <div className="flex flex-col items-center text-center gap-8 md:flex-row md:justify-between lg:items-start lg:gap-8">
          <div className="flex flex-col items-center gap-1 lg:items-center">
            <Image
              src={SRMLogo}
              alt="logo-image"
              width={1920}
              height={1080}
              className="w-fit h-20"
            />
          </div>
          <div className="flex flex-col gap-4 text-nav md:hidden lg:inline-flex lg:flex-row lg:flex-1 lg:justify-center  lg:text-left lg:gap-8">
            <div className="lg:gap-1 lg:text-sm lg:flex lg:flex-col">
              <h1 className="font-bold text-white">Categories</h1>
              <Link href={"/events"} className="hover:underline cursor-pointer">
                <p>Events</p>
              </Link>
              <Link href={"/about"} className="hover:underline cursor-pointer">
                <p>About</p>
              </Link>
              <Link
                href={"/sponsors"}
                className="hover:underline cursor-pointer"
              >
                <p>Sponsors</p>
              </Link>
            </div>
            <div className="lg:gap-1 lg:text-sm lg:flex lg:flex-col">
              <h1 className="font-bold text-white">Social Media</h1>
              <Link
                href={"mailto:zypher2k24@gmail.com"}
                className="hover:underline cursor-pointer"
              >
                <p>Email</p>
              </Link>
              <Link
                target="_blank"
                href={"https://wa.me/+917200836551"}
                className="hover:underline cursor-pointer"
              >
                <p>Whatsapp</p>
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/zypher_2k24/"}
                className="hover:underline cursor-pointer"
              >
                <p>Instagram</p>
              </Link>
            </div>
            <div className="lg:gap-1 lg:text-sm lg:flex lg:flex-col">
              <h1 className="font-bold text-white">Support</h1>
              <Link
                href={"/privacy-policy"}
                className="hover:underline cursor-pointer"
              >
                <p>Privacy Policy</p>
              </Link>
              <Link
                href={"/terms-and-conditions"}
                className="hover:underline cursor-pointer"
              >
                <p>Terms and Conditions</p>
              </Link>
              <Link
                href={
                  "https://firebasestorage.googleapis.com/v0/b/srm-ai-zypher.appspot.com/o/gpay%20using%20bank%20account.pdf?alt=media&token=75f72ab9-aefa-41b6-8e5d-060cb9001c52"
                }
                target="_blank"
                className="hover:underline cursor-pointer"
              >
                <p>Registration Procedure</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-1/3">
            <h1 className="font-bold">Any Queries ?</h1>
            <div className="flex items-center justify-between w-full p-4 border gap-2 rounded-md shadow-sm">
              <input
                type="text"
                readOnly
                value={"zypher2k24@gmail.com"}
                className="bg-transparent flex-1 outline-none text-sm"
              />
              <Link href={"mailto:zypher2k24@gmail.com"}>
                <ArrowRight className="hover:translate-x-1 transition-all duration-300 ease-in-out cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300" />
      <div className="p-4 flex flex-col gap-4 md:flex-row md:justify-between md:px-16 xl:max-w-7xl xl:mx-auto ">
        <div className="text-nav flex flex-col text-center md:text-left md:flex-row md:gap-4">
          <p className="text-sm">© 2024 AI Zypher</p>
        </div>
        <Link target="_blank" href={"https://github.com/chanakyha"}>
          <p className="text-sm text-center hover:underline cursor-pointer">
            Designed and Developed by the Students of SRMRMP
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
