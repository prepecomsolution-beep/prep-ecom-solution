import { useTranslations } from "next-intl";

function ServiceSection() {
  const services = useTranslations("global.services");

  return (
    <section className="max-w-7xl w-full mx-auto px-4 grid gap-12">
      <div className="grid gap-4">
        <div className="grid lg:grid-cols-2 md:gap-4 gap-2 p-2 rounded-sm">
          <div className="md:text-xl sm:text-lg grid content-center items-center">
            <h1 className="lg:text-4xl md:text-2xl text-xl text-primary mb-4 font-bold">{services("one.title")}</h1>
            {services("one.paragraph")}
          </div>
          <div>
            <img src="/images/1.webp" alt="service image" className="rounded-lg" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:gap-4 gap-2 p-2 rounded-sm">
          <div className="md:text-xl sm:text-lg grid content-center items-center">
            <h1 className="lg:text-4xl md:text-2xl text-xl text-primary mb-4 font-bold">{services("two.title")}</h1>
            {services("one.paragraph")}
          </div>
          <div>
            <img src="/images/2.webp" alt="service image" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
