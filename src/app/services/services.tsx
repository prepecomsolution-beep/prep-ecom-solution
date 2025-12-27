import { useTranslations } from "next-intl";

function ServiceBox() {
  const briefService = useTranslations("service.briefService");

  const whyChooseUsArrayOfObject = [
    {
      heading: `${briefService("one.title")}`,
      subHeading: `${briefService("one.subTitle")}`,
      paragraph: `${briefService("one.paragraph")}`,
    },
    {
      heading: `${briefService("two.title")}`,
      subHeading: `${briefService("two.subTitle")}`,
      paragraph: `${briefService("two.paragraph")}`,
    },
    {
      heading: `${briefService("three.title")}`,
      subHeading: `${briefService("three.subTitle")}`,
      paragraph: `${briefService("three.paragraph")}`,
    },
    {
      heading: `${briefService("four.title")}`,
      subHeading: `${briefService("four.subTitle")}`,
      paragraph: `${briefService("four.paragraph")}`,
    },
    {
      heading: `${briefService("five.title")}`,
      subHeading: `${briefService("five.subTitle")}`,
      paragraph: `${briefService("five.paragraph")}`,
    },
    {
      heading: `${briefService("six.title")}`,
      subHeading: `${briefService("six.subTitle")}`,
      paragraph: `${briefService("six.paragraph")}`,
    },
  ];

  return (
    <section className="max-w-7xl w-full mx-auto px-4 grid gap-12">
      <div>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary mb-2">{briefService("title")}</h1>
        <p className="lg:text-2xl sm:text-xl text-lg">{briefService("paragraph")}</p>
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

export default ServiceBox;
