import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const brief = useTranslations("about.brief");

  const data = [
    {
      title: "Post One",
      content: (
        <div>
          <img
            src="/images/post1.webp"
            alt="cards template"
            width={500}
            height={500}
            className="w-full rounded-lg object-cover h-fit border shadow-2xl"
          />
        </div>
      ),
    },
    {
      title: "Post Two",
      content: (
        <div>
          <img
            src="/images/post2.webp"
            alt="cards template"
            width={500}
            height={500}
            className="w-full rounded-lg object-cover h-fit border shadow-2xl"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 grid gap-6">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary">{brief("title")}</h1>
        <div className="grid gap-1 text-lg">
          <p>{brief("one")}</p>
          <p>{brief("two")}</p>
          <p>{brief("three")}</p>
          <p>{brief("four")}</p>
          <p>{brief("five")}</p>
        </div>
      </div>
      <Timeline data={data} />
    </div>
  );
}
