import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqaccordian = () => {
  return (
    <section className="bg-litewhite-100 pt-20">
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
            <Accordion type="single" collapsible> 
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
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
