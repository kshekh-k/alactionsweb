"use client";
import { Penicon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { TbMail, TbMapPin, TbPhoneCall } from "react-icons/tb";
import { Button } from "./button";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
// import Socialmedia from './social-media';
const AboutCompany = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Services",
    link: "/our-services",
  },
];
const HelpSupport = [
  {
    label: "FAQs",
    link: "/#faq",
  },
  {
    label: "Contact us",
    link: "/contact",
  },
  {
    label: "Terms of Services",
    link: "/terms-service",
  },
  {
    label: "Backup Policy",
    link: "/backup-policy",
  },
];

export default function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <footer className="bg-secondary-100 pt-10 text-white xl:pt-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-4xl">
              Start your Business with Us
            </h2>
            <p className="text-white text-xl">
              Join over 4000+ Startups already growing with Untitled.
            </p>
          </div>
          <div>
            <Button
              // onClick={openContactDialog}
              className="!h-8 self-center px-3 text-sm boder-white border-2 font-medium !bg-transparent text-white duration-200 ease-in-out hover:!bg-secondary sm:!h-12 sm:px-5 sm:text-base lg:px-7 xl:px-10"
            >
              Contact Us
            </Button>

            <Button
              // onClick={openContactDialog}
              className="!h-8 self-center px-3 ml-2 bg-primary-50  text-sm font-medium text-secondary-50 duration-200 ease-in-out hover:!bg-secondary/50 sm:!h-12 sm:px-5 sm:text-base lg:px-7 xl:px-10"
            >
              Get a Quote
            </Button>
          </div>
        </div>
        <hr className="bg-litewhite-50 mt-20" />
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-12 lg:gap-12 mt-20">
          <div className="col-span-3 space-y-2">
            <Link href="/" className="py-4">
              <Image
                src={"/images/svg/logo-alactions-web.svg"}
                alt="Advika Cloud"
                width={254}
                height={45}
                className="h-auto w-20 sm:w-32 lg:w-40 xl:w-auto"
              />
            </Link>
            <p className="pt-3 text-sm leading-normal text-white/50 md:pt-5">
              Transform your ideas into reality with our cutting-edge web and
              app solutions. Our team crafts visually stunning designs paired
              with smooth, user-focused functionality to deliver scalable,
              high-performance digital experiences that fuel growth and
              captivate your audience.
            </p>
            <div className="col-span-3 flex flex-col gap-4 pt-10">
            <h4 className="text-sm font-semibold md:text-xl">Contacts</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-2">
                <TbMapPin className="size-5 shrink-0" />
                <span className="text-white/70">
                  Advika Data Center Services Pvt. Ltd.
                  <br />
                  Alt F, Plot no 21 & 21A, Sector 142 <br />
                  Noida - 201305 (UP) India
                </span>
              </li>
              <li>
                <Link
                  href="tel:+919829714343"
                  className="flex items-center gap-2 text-white/70 duration-200 ease-in-out hover:text-secondary"
                >
                  <TbPhoneCall className="size-5 shrink-0" />
                  <span>+91-98297-14343</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:eb.sales@advika.cloud"
                  className="flex items-center gap-2 text-white/70 duration-200 ease-in-out hover:text- 
                   secondary"
                >
                  <TbMail className="size-5 shrink-0" />
                  <span>eb.sales@advika.cloud</span>
                </Link>
              </li>
            </ul>
          </div>
          </div>
          <div className="col-span-6 flex justify-center">
            <div className="grid max-w-lg flex-1 grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold md:text-xl">
                  About Company
                </h4>
                <ul className="flex flex-col gap-4 text-sm">
                  {AboutCompany.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.link}
                        className="text-white/70 duration-200 ease-in-out hover:text-secondary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold md:text-xl">
                  Help & Support
                </h4>
                <ul className="flex flex-col gap-4 text-sm">
                  {HelpSupport.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.link}
                        className="text-white/70 duration-200 ease-in-out hover:text-secondary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        
          </div>
          
          {/* <div className="col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-semibold md:text-xl">Contacts</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-2">
                <TbMapPin className="size-5 shrink-0" />
                <Penicon className="size-5 shrink-0" />
                <span className="text-white/70">
                  Advika Data Center Services Pvt. Ltd.
                  <br />
                  Alt F, Plot no 21 & 21A, Sector 142 <br />
                  Noida - 201305 (UP) India
                </span>
              </li>
              <li>
                <Link
                  href="tel:+919829714343"
                  className="flex items-center gap-2 text-white/70 duration-200 ease-in-out hover:text-secondary"
                >
                  <TbPhoneCall className="size-5 shrink-0" />
                  <span>+91-98297-14343</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:eb.sales@advika.cloud"
                  className="flex items-center gap-2 text-white/70 duration-200 ease-in-out hover:text-secondary"
                >
                  <TbMail className="size-5 shrink-0" />
                  <span>eb.sales@advika.cloud</span>
                </Link>
              </li>
            </ul>
          </div> */}

              <div className="col-span-3 flex flex-col gap-4">
                <h4 className="text-sm font-semibold md:text-xl">
                Helpful Links
                </h4>
                <ul className="flex flex-col gap-4 text-sm">
                  {HelpSupport.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.link}
                        className="text-white/70 duration-200 ease-in-out hover:text-secondary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
        </div>

        <hr className="mt-10 border-white/50" />
        <div className="flex flex-wrap justify-center gap-3 py-5 md:justify-between">
          <p className="text-center text-sm text-white/70 md:text-left">
            Copyright &copy; {currentyear} Alactionsweb | All Right Reserved
             
          </p>
          <div className="flex items-center justify-center gap-5 md:justify-end">
            {/* <Socialmedia /> */}
            <CiInstagram className="size-8 font-bold" />
            <CiLinkedin className="size-8 font-bold"/>
          </div>
        </div>
      </div>
    </footer>
  );
}
