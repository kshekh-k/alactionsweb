"use client";

import { Righticon } from "@/icons";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroItems = [
  {
    icon:<Righticon/>,
    name:'Web design',
  },
  {
    icon:<Righticon/>,
    name:'Web development',
  },
  {
    icon:<Righticon/>,
    name:' E-Commerce Development',
  },
  {
    icon:<Righticon/>,
    name:'Server-Hosting',
  },
  {
    icon:<Righticon/>,
    name:'Digital Marketing',
  },
  
]

const hero = () => {
  return (
    <section className="bg-gradient-1 pt-20">
      <div className="max-w-screen-xl mx-auto px-5 py-24 relative ">
        <div className="flex flex-col space-y-2 max-w-4xl mx-auto ">
          <h1 className="text-white font-medium text-xl text-center">
            Enhance your <span className="text-primary-50">online</span> presence
          </h1>
          <h2 className="text-white font-semibold text-5xl text-center leading-normal">
            Your Trusted Partner for Affordable Web & Mobile App Development
            Solutions
          </h2>
        </div>
        {/* <div className="flex gap-10 justify-center items-center p-8">
          <p className="flex items-center gap-1 ">
            <Righticon />
            <p className="text-liteyellow-50 font-medium text-xl inline">
              Web design
            </p>
          </p>
          <p className="flex items-center gap-1">
            <Righticon />
            <p className="text-liteyellow-50 font-medium text-xl">
              Web development
            </p>
          </p>

          <p className="flex items-center gap-1">
            <Righticon />
            <p className="text-liteyellow-50 font-medium text-xl">
              E-Commerce Development
            </p>
          </p>

          <p className="flex items-center gap-1">
            <Righticon />
            <p className="text-liteyellow-50 font-medium text-xl">Server-Hosting</p>
          </p>
          <p className="flex items-center gap-1">
            <Righticon />
            <p className="text-liteyellow-50 font-medium text-xl">
              Digital Marketing
            </p>
          </p>
        </div> */}
        <div className="py-14 px-10">
          <div className="flex items-center justify-between">{HeroItems.map((item,index)=>(
           <div key={index} className="flex items-center gap-2">
            {item.icon}
            <p className="text-liteyellow-50 font-medium text-xl">{item.name}</p>
           </div> 
          ))}</div>
        </div>

        <div className="text-center max-w-4xl text-2xl m-auto leading-normal">
          <p className="text-white ">
            Looking to establish or enhance your online presence without
            breaking the bank? At Alactions-web, we specialize in delivering
            cost-effective, end-to-end solutions tailored to your business
            needs.
          </p>
        </div>
        <div className="flex items-center justify-center p-10">
          <Button
            // onClick={openContactDialog}
            className="!h-8 self-center px-3 ml-2 bg-primary-50 text-sm font-medium text-secondary-50 duration-200 ease- 
               in-out hover:!bg-secondary/50 sm:!h-12 sm:px-5 sm:text-base lg:px-7 xl:px-10"
          >
            Get a Quote
          </Button>
        </div>
        <div className="absolute inset-x-0 bottom-0 -mb-56">
          <div className="max-w-screen-xl px-5">
          <Image
            src={"/images/hero-banner.png"}
            alt=""
            width={1200}
            height={600}
            className="h-auto w-auto object-cover"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
