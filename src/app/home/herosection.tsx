import Link from "next/link";
import ContactButton from "./contactPopup";
import { useTranslations } from "next-intl";

function Herosection() {
  const herosection = useTranslations("home.herosection");
  return (
    <section
      className="relative min-h-screen h-screen w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/images/home.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute size-full bg-linear-to-t from-black/60 to-black/90 z-10"></div>

      {/* Content */}
      <div className="relative z-10 pt-10 px-4 grid gap-4 text-white max-w-4xl w-full text-center wrap-break-word">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold">{herosection("title")}</h1>
        <h2 className="lg:text-2xl md:text-xl max-md:w-[90%] mx-auto">{herosection("description")}</h2>
        <div className="flex justify-center items-center gap-4">
          <ContactButton />
          <Link href="https://wa.me/13464819540?text=Hi%20Shah's%20Group%20-%20Need%20help%20with%20Prep%20Ecom%20Solution" target="_blank">
            <button className="flex items-center px-4 py-2 rounded-md border-2 border-green-600 bg-green-600 font-semibold hover:scale-95 hover:bg-transparent hover:text-emerald-600 transition-all ease-in-out cursor-pointer">
              Chat on Whatsapp
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
