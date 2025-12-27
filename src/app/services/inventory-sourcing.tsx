import { useTranslations } from "next-intl";

function InventorySourcing() {
  const Inventory = useTranslations("service.Inventory");

  return (
    <section className="max-w-7xl w-full mx-auto px-4 grid gap-12">
      <div className="grid">
        <div className="md:text-xl sm:text-lg grid content-center items-center">
          <h1 className="lg:text-4xl md:text-2xl text-xl text-primary mb-4 font-bold">{Inventory("title")}</h1>
          <div className="grid gap-2">
            <p>{Inventory("paragraph")}</p>
            <div>
              <strong>{Inventory("one.title")}</strong>
              <p>{Inventory("one.paragraph")}</p>
            </div>
            <div>
              <strong>{Inventory("two.title")}</strong>
              <p>{Inventory("two.paragraph")}</p>
            </div>
            <div>
              <strong>{Inventory("three.title")}</strong>
              <div>
                <p>•&nbsp;{Inventory("three.paragraph.one")}</p>
                <p>•&nbsp;{Inventory("three.paragraph.two")}</p>
                <p>•&nbsp;{Inventory("three.paragraph.three")}</p>
                <p>•&nbsp;{Inventory("three.paragraph.four")}</p>
                <p>•&nbsp;{Inventory("three.paragraph.five")}</p>
              </div>
            </div>
            <div>
              <strong>{Inventory("four.title")}</strong>
              <p>{Inventory("four.paragraph")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InventorySourcing;
