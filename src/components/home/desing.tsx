import { Penicon, Righticon } from "@/icons";
import Yes from "@/icons/svgs/yes";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Copy, Pen, PenIcon } from "lucide-react";
import { LiaPenNibSolid } from "react-icons/lia";
import Gallery from "@/icons/svgs/gallery";
import Copypen from "@/icons/svgs/copy";

const Desing = () => {
  return (
    <section className="bg-secondary-100 pt-20 px-20 py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex mx-auto items-center justify-between">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-medium text-white max-w-md">
                Let’s come to tranform your idea to online
              </h2>
              <p className="text-xl text-litewhite-50 block max-w-md">
                Bring your creative vision to life with AlactionsWeb
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Yes />
                <h3 className="text-white text-xl font-semibold">Custom UI</h3>
              </div>
              <div className="flex items-center gap-3">
                <Yes />
                <h3 className="text-white text-xl font-semibold">
                  Fully Functional website
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <Yes />
                <h3 className="text-white text-xl font-semibold">
                  For any niches
                </h3>
              </div>
            </div>
            <div>
              <Button
                // onClick={openContactDialog}
                className="!h-8 self-center px-3 ml-2 bg-primary-50  text-sm font-medium text-secondary-50 
               duration-200 ease-in-out hover:!bg-secondary/50 sm:!h-12 sm:px-5 sm:text-base lg:px-7 xl:px- 
                10"
              >
                Get a Quote
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={"/Images/ai-banner.png"}
              alt=""
              width={540}
              height={540}
              className="object-cover"
            />
          </div>
        </div>
        <hr className="mt-20 bg-litewhite-50" />
            <div className="flex items-center gap-10 py-20">
                <div className="flex flex-col gap-5 px-2">
                <LiaPenNibSolid className="size-10 text-primary-50"/>
                <h3 className="text-white text-2xl font-medium">Stunning Websites</h3>
                <p className="text-lg text-litewhite-50 max-w-96">Type a prompt, get a full website using 
                power of cutting-edge AI technology</p>
                </div>
                <div className="flex flex-col gap-5 px-2">
                     <Copypen className="size-10 text-primary-50"/>
                 
                <h3 className="text-white text-2xl font-medium">Compelling Copies</h3>
                <p className="text-lg text-litewhite-50 max-w-96">Generate all your website content in two 
                steps—a prompt & a click!</p>
                </div>
                <div className="flex flex-col gap-5 px-2">
                    <Gallery className="size-10 text-primary-50"/>
                <h3 className="text-white text-2xl font-medium">Pixel Perfect Images</h3>
                <p className="text-lg text-litewhite-50 max-w-96">Type a prompt and generate the exact 
                image on your mind.</p>
                </div>
            </div>
      </div>
    </section>
  );
};

export default Desing;
