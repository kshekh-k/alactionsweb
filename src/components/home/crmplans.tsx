import Ai from "@/icons/svgs/ai";
import Yes from "@/icons/svgs/yes";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
        <div className="border-2 max-w-96 rounded-md mx-auto px-5 py-10">
          <div className="flex flex-col gap-5 items-center">
            <h2 className="font-medium text-3xl text-naviblue-50">STATIC</h2>
            <h3 className="text-4xl font-semibold text-naviblue-100">
              ₹3000/-
            </h3>
          </div>
          <div className="flex flex-col justify-center gap-5 mt-10">
            <div className=" flex items-center gap-2">
              <Ai className="size-8" />
              <h3 className="text-xl text-naviblue-50 font-semibold">
                {" "}
                AI Website Generation (Beta)
              </h3>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  24X7 Support
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  10+ Page Website
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  One Free Domain
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  1 Year Hosting
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  Unlimited Email Address
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  User Friendly
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  SEO Friendly
                </p>
              </div>
            </div>
            <hr className="bg-litewhite-50 w-72 h-1 mx-auto" />
            <div className="flex items-center justify-center border-2 border-secondary-100 rounded-lg px-10 
             w-72 mx-auto py-4 mt-3">
              <button className="text-xl text-secondary-100 font-medium inline">
                Try Dorki Now
                <FaArrowRight className="inline ml-3 text-secondary-100 size-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 max-w-96 rounded-md mx-auto px-5 py-10 bg-secondary-50">
          <div className="flex flex-col gap-5 items-center">
            <h2 className="font-medium text-3xl  text-white">PRO</h2>
            <h3 className="text-4xl font-semibold text-white">
              ₹5000/-
            </h3>
          </div>
          <div className="flex flex-col justify-center gap-5 mt-10">
            <div className=" flex items-center gap-2">
              <Ai className="size-8" />
              <h3 className="text-xl text-white font-semibold">
                {" "}
                AI Website Generation (Beta)
              </h3>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-white">
                  24X7 Support
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-white">
                  10+ Page Website
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-white">
                  One Free Domain
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-white">
                  1 Year Hosting
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-white">
                  Unlimited Email Address
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-white">
                  User Friendly
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-white">
                  SEO Friendly
                </p>
              </div>
            </div>
            <hr className="bg-litewhite-50 w-72 h-1 mx-auto" />
            <div className="flex items-center justify-center border-2 border-secondary-100 rounded-lg px-10 
             w-72 mx-auto py-4 mt-3 bg-white">
              <button className="text-xl text-secondary-100 font-medium inline">
                Try Dorki Now
                <FaArrowRight className="inline ml-3 text-secondary-100 size-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 max-w-96 rounded-md mx-auto px-5 py-10">
          <div className="flex flex-col gap-5 items-center">
            <h2 className="font-medium text-3xl text-naviblue-50">DYNAMIC</h2>
            <h3 className="text-4xl font-semibold text-naviblue-100">
              ₹10,000/-
            </h3>
          </div>
          <div className="flex flex-col justify-center gap-5 mt-10">
            <div className=" flex items-center gap-2">
              <Ai className="size-8" />
              <h3 className="text-xl text-naviblue-50 font-semibold">
                {" "}
                AI Website Generation (Beta)
              </h3>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  24X7 Support
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  10+ Page Website
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  One Free Domain
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  1 Year Hosting
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  Unlimited Email Address
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  User Friendly
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Yes />
                <p className="text-lg font-semibold text-naviblue-50">
                  SEO Friendly
                </p>
              </div>
            </div>
            <hr className="bg-litewhite-50 w-72 h-1 mx-auto" />
            <div className="flex items-center justify-center border-2 border-secondary-100 rounded-lg px-10 
             w-72 mx-auto py-4 mt-3">
              <button className="text-xl text-secondary-100 font-medium inline">
                Try Dorki Now
                <FaArrowRight className="inline ml-3 text-secondary-100 size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crmplans;
