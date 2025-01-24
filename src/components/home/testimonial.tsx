import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

const Testimonial = () => {
  return (
    <section className="py-28 px-28">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="font-semibold text-5xl text-naviblue-100">
            Join over 100k+ happy
            <span className="block leading-tight">
              Makers, Designers, and Agencies
            </span>
          </h2>
          <p className="text-xl text-naviblue-50 max-w-3xl">
            Be part of a thriving community that trusts us to bring their ideas
            to life. Whether you're crafting, designing, or innovating, join
            thousands of professionals who on us to simplify their workflows and
            achieve remarkable results."
          </p>
        </div>
        <div className="flex pt-20 items-center gap-x-20">
          <div className="bg-white w-80 shadow-2xl rounded-2xl py-5 px-2">
            <div className="flex gap-5 items-center">
              <div className="flex">
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
              </div>
              <div className="flex items-center gap-28">
                <span className="text-sm">4.8</span>
                <span className="text-2xl ">“</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-xl text-naviblue-50">
                "Every smile, every word of appreciation fuels our passion. Our
                clients’ words reflect the trust and value they’ve found in us.
                See how we’ve made a difference for them."
              </p>
            </div>
            <div className="flex gap-6 pt-8">
              <Image
                src={"/images/testimonalman.png"}
                alt=""
                width={40}
                height={40}
                className=" object-cover w-auto h-auto"
              />
              <div>
                <h3 className="text-xl font-medium">Devon Lane</h3>
                <p className="text-sm text-naviblue-50">Mitsubishi</p>
              </div>
            </div>
          </div>

          <div className="bg-white w-80 shadow-2xl rounded-2xl py-5 px-2">
            <div className="flex gap-5 items-center">
              <div className="flex">
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
              </div>
              <div className="flex items-center gap-28">
                <span className="text-sm">4.8</span>
                <span className="text-2xl ">“</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-xl text-naviblue-50">
                "Every smile, every word of appreciation fuels our passion. Our
                clients’ words reflect the trust and value they’ve found in us.
                See how we’ve made a difference for them."
              </p>
            </div>
            <div className="flex gap-6 pt-8">
              <Image
                src={"/images/testimonalman.png"}
                alt=""
                width={40}
                height={40}
                className=" object-cover w-auto h-auto"
              />
              <div>
                <h3 className="text-xl font-medium">Devon Lane</h3>
                <p className="text-sm text-naviblue-50">Mitsubishi</p>
              </div>
            </div>
          </div>
          <div className="bg-white w-80 shadow-2xl rounded-2xl py-5 px-2">
            <div className="flex gap-5 items-center">
              <div className="flex">
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
                <IoStar className="text-yellow-500 size-5" />
              </div>
              <div className="flex items-center gap-28">
                <span className="text-sm">4.8</span>
                <span className="text-2xl ">“</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-xl text-naviblue-50">
                "Every smile, every word of appreciation fuels our passion. Our
                clients’ words reflect the trust and value they’ve found in us.
                See how we’ve made a difference for them."
              </p>
            </div>
            <div className="flex gap-6 pt-8">
              <Image
                src={"/images/testimonalman.png"}
                alt=""
                width={40}
                height={40}
                className=" object-cover w-auto h-auto"
              />
              <div>
                <h3 className="text-xl font-medium">Devon Lane</h3>
                <p className="text-sm text-naviblue-50">Mitsubishi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
