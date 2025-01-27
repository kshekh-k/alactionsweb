import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordinitems = [
  {
    id: "1",
    title: "What types of web development services do you offer?",
    paragraph: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "2",
    title: "Do you work with custom designs, templates, or both?",
    paragraph: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "3",
    title: "What platforms or technologies do you specialize in",
    paragraph: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "4",
    title: "Do you provide eCommerce development services?",
    paragraph: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "5",
    title: "Can you help with hosting and server setup?",
    paragraph: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "6",
    title: "Do you provide SEO and digital marketing services?",
    paragraph: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

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
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-5"
            >
              {Accordinitems.map((item, index) => (
                <AccordionItem key={index} value={item.id}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent className="px-5 ">
                    {item.paragraph}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqaccordian;
