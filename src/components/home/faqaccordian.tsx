import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqaccordian = () => {
  return (
    <section className="bg-litewhite-100 pt-20 py-32">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col max-w-md gap-5">
            <h2 className="text-5xl font-semibold text-naviblue-100">
              FAQs (Frequently asked questions)
            </h2>
            <p className="text-xl text-naviblue-100">
              Can't find what you are looking for? Send our Email To your
              Support Team
            </p>
          </div>
          <div className="">
            <Accordion type="single" collapsible className="flex flex-col gap-5"> 
              <AccordionItem value="item-1">
                <AccordionTrigger>What types of web development services do you offer?</AccordionTrigger>
                <AccordionContent className="px-5 ">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you work with custom designs, templates, or both?</AccordionTrigger>
                <AccordionContent className="px-5 ">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What platforms or technologies do you specialize in?</AccordionTrigger>
                <AccordionContent className="px-5 ">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you provide eCommerce development services?</AccordionTrigger>
                <AccordionContent className="px-5 ">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can you help with hosting and server setup?</AccordionTrigger>
                <AccordionContent className="px-5 ">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you provide SEO and digital marketing services?</AccordionTrigger>
                <AccordionContent className="px-5 ">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqaccordian;
