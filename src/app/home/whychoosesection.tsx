import { useTranslations } from "next-intl";

function WhyChooseSection() {
  const whychooseus = useTranslations("global.whychooseus");

  const whyChooseUsArrayOfObject = [
    {
      heading: `${whychooseus("one.title")}`,
      subHeading: `${whychooseus("one.subTitle")}`,
      paragraph: `${whychooseus("one.paragraph")}`,
    },
    {
      heading: `${whychooseus("two.title")}`,
      subHeading: `${whychooseus("two.subTitle")}`,
      paragraph: `${whychooseus("two.paragraph")}`,
    },
    {
      heading: `${whychooseus("three.title")}`,
      subHeading: `${whychooseus("three.subTitle")}`,
      paragraph: `${whychooseus("three.paragraph")}`,
    },
    {
      heading: `${whychooseus("four.title")}`,
      subHeading: `${whychooseus("four.subTitle")}`,
      paragraph: `${whychooseus("four.paragraph")}`,
    },
    {
      heading: `${whychooseus("five.title")}`,
      subHeading: `${whychooseus("five.subTitle")}`,
      paragraph: `${whychooseus("five.paragraph")}`,
    },
  ];

  return (
    <section className="max-w-7xl w-full mx-auto px-4 grid gap-12">
      <div>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary mb-2">{whychooseus("title")}</h1>
        <p className="lg:text-2xl sm:text-xl text-lg">{whychooseus("paragraph")}</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {whyChooseUsArrayOfObject.map((each) => (
          <WhyChooseCard key={each.heading} subHeading={`${each.subHeading}`} heading={`${each.heading}`} paragraph={`${each.paragraph}`} />
        ))}
      </div>
    </section>
  );
}

function WhyChooseCard({ heading, subHeading, paragraph }: { heading: string; subHeading: string; paragraph: string }) {
  return (
    <div className="w-full border mx-auto p-4 rounded-sm grid gap-1 border-primary shadow-xl">
      <h3 className="text-lg font-bold">{heading}</h3>
      <h4 className="font-semibold">{subHeading}</h4>
      <p>{paragraph}</p>
    </div>
  );
}

export default WhyChooseSection;
