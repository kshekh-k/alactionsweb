import { Penicon } from "@/icons";
import Graphics from "@/icons/svgs/graphics";
import Www from "@/icons/svgs/www";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { GiPencilBrush } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";
import { TbWorldWww } from "react-icons/tb";
import { TiKey } from "react-icons/ti";

const Services = () => {
  return (
    <section className="bg-litewhite-100 pt-24">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="text-5xl font-semibold text-naviblue-200">
            No Maintenance, More Freedom. 
          </h2>
          <p className="text-xl text-naviblue-300">
            The perfect launchpad for your online presence
          </p>
        </div>
        <div className="max-w-screen-xl px-5 mx-auto w-full pt-28">
          <div className="grid grid-cols-3 gap-16">
            <div className="  p-4 flex flex-col gap-6">
              <Penicon className="size-12 text-rose-50" />
              <h3 className="text-2xl font-medium text-naviblue-100">
                Website Designing
              </h3>
              <p className="text-xl text-naviblue-300">
                Our web design service focuses on creating visually appealing,
                user-friendly, and responsive websites tailored to your brand.
                We combine creativity with functionality to deliver designs that
                engage users, enhance your online presence, and drive results.
                Whether you need a simple layout or a complex design, we ensure
                your website stands out and meets your business goals.
              </p>
            </div>
            <div className=" p-4 flex flex-col gap-6">
              <GiPencilBrush className="size-12 text-blue-50" />
              <h3 className="text-2xl font-medium text-naviblue-100">
                Digital Marketing
              </h3>
              <p className="text-xl text-naviblue-300">
                Our digital marketing service is designed to help your business
                grow by increasing online visibility and driving targeted
                traffic. We craft data-driven strategies, including SEO, social
                media marketing, PPC campaigns, and content marketing, to
                connect you with your audience effectively. With a focus on
                results, we aim to boost engagement, generate leads, and
                maximize your ROI.
              </p>
            </div>
            <div className="  p-4 flex flex-col gap-6">
              <LuSearch className="size-12 text-pink-50" />
              <h3 className="text-2xl font-medium text-naviblue-100">Staff Augmentation</h3>
              <p className="text-xl text-naviblue-300">
                Our staff augmentation service provides flexible and efficient
                solutions to expand your team with skilled professionals.
                Whether you need short-term support or long-term expertise, we
                offer access to top talent across various domains. By seamlessly
                integrating with your existing team, we help you meet project
                deadlines, reduce costs, and scale your workforce without the
                complexities of traditional hiring.
              </p>
            </div>
            <div className="  p-4 flex flex-col gap-6">
              <TbWorldWww className="size-12 text-rose-50" />
              <h3 className="text-2xl font-medium text-naviblue-100">Website Development</h3>
              <p className="text-xl text-naviblue-300">
                Our website development service provides tailored,
                high-performance solutions designed to meet your unique business
                needs. From robust back-end functionality to seamless front-end
                user experiences, we specialize in creating dynamic, secure, and
                scalable websites. Whether it’s an e-commerce platform, a
                corporate site, or a custom web application, we ensure
                top-quality development that drives success and growth for your
                business.
              </p>
            </div>
            <div className="  p-4 flex flex-col gap-6">
              <BsCart2 className="size-12 text-blue-50" />
              <h3 className="text-2xl font-medium text-naviblue-100">E-Commerce Development</h3>
              <p className="text-xl text-naviblue-300">
                Our e-commerce development service is focused on building
                robust, user-friendly online stores that drive sales and enhance
                customer experience. From seamless navigation and secure payment
                integration to mobile responsiveness and custom features, we
                deliver solutions tailored to your business needs. Whether
                you’re starting fresh or upgrading your existing store, we
                ensure a scalable and high-performing platform that supports
                your growth and success.
              </p>
            </div>
            <div className="  p-4 flex flex-col gap-6">
              <TiKey className="size-12 text-pink-50" />
              <h3 className="text-2xl font-medium text-naviblue-100">Website Hosting</h3>
              <p className="text-xl text-naviblue-300">
                Our web hosting and server services provide reliable, secure,
                and scalable solutions to ensure your website runs smoothly at
                all times. We offer hosting options tailored to your needs,
                whether it’s shared, VPS, or dedicated servers, along with
                expert support for seamless performance. From quick setup to
                continuous monitoring and maintenance, we ensure your website is
                fast, secure, and always accessible, giving you peace of mind
                and optimal uptime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
