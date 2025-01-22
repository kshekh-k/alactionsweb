import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

const States = () => {
  return (
    <section className="">
      <div className="bg-secondary-100  pt-10">
        <div className="max-w-screen-xl mx-auto px-2 py-20  flex flex-col gap-10  ">
          <h2 className="text-5xl text-white leading-tight max-w-xl">
            Beautiful designs, Endless possibilities
          </h2>

          <div className="flex ">
            <div className="flex flex-col gap-5 justify-center border-l-2 border-litewhite-50 px-4">
              <h3 className="text-5xl font-medium text-white">10K+</h3>
              <p className="text-xl text-litewhite-50 max-w-96">
                Thousands trust it for a reason. join team and discover the
                benefits!
              </p>
            </div>
            <div className="flex flex-col gap-5 justify-center border-l-2 border-litewhite-50 px-4 ">
              <div className="flex items-center gap-4">
                <h3 className="text-5xl font-medium text-white">4.8</h3>
                <div className="flex flex-col ">
                  <span className="text-sm text-litewhite-50">Rate Us</span>
                  <div className="flex">
                    <IoStar className="text-yellow-500" />
                    <IoStar className="text-yellow-500" />
                    <IoStar className="text-yellow-500" />
                    <IoStar className="text-yellow-500" />
                    <IoStar className="text-yellow-500" />
                  </div>
                </div>
              </div>
              <p className="text-xl text-litewhite-50 max-w-96">
                Positive ratings by pulse user around the world! check the
                review here
              </p>
            </div>
            <div className="flex flex-col gap-5 justify-center border-l-2 border-litewhite-50 px-4">
              <h3 className="text-5xl font-medium text-white">97%</h3>
              <p className="text-xl text-litewhite-50 max-w-96">
                User satisfaction with bordup, reflecting improved project..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" m-auto">
        <Image
          src={"/images/second-banner.png"}
          alt=""
          width={1200}
          height={600}
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
};

export default States;
