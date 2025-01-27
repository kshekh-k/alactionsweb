import Image from "next/image";
import { IoStar } from "react-icons/io5";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Testimonialitems = [
  {
    icon: <IoStar className="text-yellow-500 size-5" />,
    rating: 4.8,
    profile: "/images/testimonalman.png",
    title: "Devon Lane",
    subTitle: "Mitsubishi",
    comment:
      " Be part of a thriving community that trusts us to bring their ideas to life. Whether you're crafting, designing, or innovating, join thousands of professionals who on us to simplify their workflows and achieve remarkable results.",
  },
  {
    icon: <IoStar className="text-yellow-500 size-5" />,
    rating: 4.8,
    profile: "/images/testimonalman.png",
    title: "Devon Lane",
    subTitle: "Mitsubishi",
    comment:
      " Be part of a thriving community that trusts us to bring their ideas to life. Whether you're crafting, designing, or innovating, join thousands of professionals who on us to simplify their workflows and achieve remarkable results.",
  },
  {
    icon: <IoStar className="text-yellow-500 size-5" />,
    rating: 4.8,
    profile: "/images/testimonalman.png",
    title: "Devon Lane",
    subTitle: "Mitsubishi",
    comment:
      " Be part of a thriving community that trusts us to bring their ideas to life. Whether you're crafting, designing, or innovating, join thousands of professionals who on us to simplify their workflows and achieve remarkable results.",
  },
  {
    icon: <IoStar className="text-yellow-500 size-5" />,
    rating: 4.8,
    profile: "/images/testimonalman.png",
    title: "Devon Lane",
    subTitle: "Mitsubishi",
    comment:
      " Be part of a thriving community that trusts us to bring their ideas to life. Whether you're crafting, designing, or innovating, join thousands of professionals who on us to simplify their workflows and achieve remarkable results.",
  },
  {
    icon: <IoStar className="text-yellow-500 size-5" />,
    rating: 4.8,
    profile: "/images/testimonalman.png",
    title: "Devon Lane",
    subTitle: "Mitsubishi",
    comment:
      " Be part of a thriving community that trusts us to bring their ideas to life. Whether you're crafting, designing, or innovating, join thousands of professionals who on us to simplify their workflows and achieve remarkable results.",
  },
  {
    icon: <IoStar className="text-yellow-500 size-5" />,
    rating: 4.8,
    profile: "/images/testimonalman.png",
    title: "Devon Lane",
    subTitle: "Mitsubishi",
    comment:
      " Be part of a thriving community that trusts us to bring their ideas to life. Whether you're crafting, designing, or innovating, join thousands of professionals who on us to simplify their workflows and achieve remarkable results.",
  },
];

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
        <div className="flex  py-20 bg-white   items-center gap-x-20">
        
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {Testimonialitems.map((item, index) => (
              <SwiperSlide
                key={index}
                className="p-5"
              >
                <div className="shadow-1 rounded-2xl p-5 w-full">
                <div className="flex items-center gap-10 2">
                  <div className="flex">
                    {item.icon}
                    {item.icon}
                    {item.icon}
                    {item.icon}
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-28">
                    <span className="text-sm">{item.rating}</span>
                    <span className="text-2xl ">“</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-xl text-naviblue-50">{item.comment}</p>
                </div>
                <div className="flex gap-6 pt-8">
                  <Image
                    src={item.profile}
                    alt=""
                    width={40}
                    height={40}
                    className=" object-cover w-auto h-auto"
                  />
                  <div>
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <p className="text-sm text-naviblue-50">{item.subTitle}</p>
                  </div>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

// {Testimonialitems.map((item,index)=>(
//   <SwiperSlide key={index} className="bg-white w-80 shadow-2xl rounded-2xl py-5 px-2">
//   <div className="flex items-center gap-10">
//     <div className="flex">
//       {item.icon}
//       {item.icon}
//       {item.icon}
//       {item.icon}
//       {item.icon}
//     </div>
//     <div className="flex items-center gap-28">
//       <span className="text-sm">{item.rating}</span>
//       <span className="text-2xl ">“</span>
//     </div>
//   </div>
//   <div className="pt-4">
//     <p className="text-xl text-naviblue-50">
//        {item.comment}
//     </p>
//   </div>
//   <div className="flex gap-6 pt-8">
//     <Image
//       src={item.profile}
//       alt=""
//       width={40}
//       height={40}
//       className=" object-cover w-auto h-auto"
//     />
//     <div>
//       <h3 className="text-xl font-medium">{item.title}</h3>
//       <p className="text-sm text-naviblue-50">{item.subTitle}</p>
//     </div>
//   </div>
// </SwiperSlide>
// ))}
