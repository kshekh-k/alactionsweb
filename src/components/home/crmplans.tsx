import Ai from "@/icons/svgs/ai";
import Yes from "@/icons/svgs/yes";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

let FreeServices = {
  Services: [
    {
      icon: <Yes />,
      name: "24X7 Support",
    },
    {
      icon: <Yes />,
      name: "10+ Page Website",
    },
    {
      icon: <Yes />,
      name: "One Free Domain",
    },
    {
      icon: <Yes />,
      name: "1 Year Hosting",
    },
    {
      icon: <Yes />,
      name: "Unlimited Email Address",
    },
    {
      icon: <Yes />,
      name: " User Friendly",
    },
    {
      icon: <Yes />,
      name: "SEO Friendly",
    },
  ],
};

const Plansitems = [
  {
    title: "STATIC",
    price: "3000",
    icon_1: <Ai className="size-8" />,
    handing: "AI Website Generation (Beta)",
    btnName: "Try Dorki Now",
    btnIcon: <FaArrowRight />,
    FreeServices,
  },
  {
    title: "PRO",
    price: "5000",
    icon_1: <Ai className="size-8" />,
    handing: "AI Website Generation (Beta)",
    btnName: "Try Dorki Now",
    btnIcon: <FaArrowRight />,
    FreeServices,
  },
  {
    title: "DYNAMIC",
    price: "10,000",
    icon_1: <Ai className="size-8" />,
    handing: "AI Website Generation (Beta)",
    btnName: "Try Dorki Now",
    btnIcon: <FaArrowRight />,
    FreeServices,
  },
];

const Crmplans = () => {
  return (
    <section className="">
      <div className="max-w-screen-xl pt-20 mx-auto">
        <div className="flex flex-col justify-center text-center gap-8">
          <h2 className="text-5xl font-semibold text-naviblue-100">
            Choose a plan for your CRM
          </h2>
          <p className="text-xl text-naviblue-50 mx-auto max-w-xl ">
            AlactionsWeb stands as one of India’s leading web solution
            providers, dedicated to delivering custom, ROI-focused web services
            at competitive prices.
          </p>
        </div>
        {/* <div className="py-20 flex items-center justify-center">
          <Image
            src={"/images/plans-banner.png"}
            alt=""
            width={1200}
            height={550}
            className=" h-auto w-auto object-cover"
          />
        </div> */}
      </div>

      <div className="flex items-center justify-center  mx-auto max-w-screen-xl pt-32 py-28">
        {Plansitems.map((item, index) => (
          <div className="border-2 max-w-96 rounded-md mx-auto px-5 py-10">
            <div className="flex flex-col gap-5 items-center">
              <h2 className="font-medium text-3xl text-naviblue-50">
                {item.title}
              </h2>
              <h3 className="text-4xl font-semibold text-naviblue-100">
                {item.price}/-
              </h3>
            </div>
            <div className="flex flex-col justify-center gap-5 mt-10">
              <div className=" flex items-center gap-2">
                {item.icon_1}
                <h3 className="text-xl text-naviblue-50 font-semibold">
                  {" "}
                  {item.handing}
                </h3>
              </div>
              <div className="flex flex-col gap-3 px-3 ">
                {item.FreeServices.Services.map((i, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {i.icon}
                    <p className="text-lg font-semibold text-naviblue-50">
                      {i.name}
                    </p>
                  </div>
                ))}
              </div>
              <hr className="bg-litewhite-50 w-72 h-1 mx-auto" />
              <Link href={"#"}>
                <div
                  className="flex items-center justify-center border-2 border-secondary-100 rounded-lg px-10 
              w-72 mx-auto py-4 mt-3 hover:bg-secondary-50 duration-200 ease-in-out text-secondary-100 hover:text-white
              "
                >
                  <button className="text-xl  font-medium inline te">
                    {item.btnName}
                  </button>
                  <span className="inline ml-3 mt-2  size-6 ">
                    {item.btnIcon}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Crmplans;
