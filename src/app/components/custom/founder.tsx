import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Founder() {
  const author = useTranslations("global.author");

  return (
    <div className="grid md:grid-cols-2 gap-4 max-md:gap-8 max-w-7xl mx-auto w-full p-4">
      <div className="flex justify-center items-center">
        <Image
          src={"/images/founder.png"}
          height={500}
          width={500}
          alt="Founder Profile"
          className="md:size-80 size-60 rounded-full object-center object-cover border-8 shadow-2xl border-primary "
        ></Image>
      </div>
      <div className="text-lg grid gap-2 content-center">
        <h2 className="font-bold text-primary text-xl">Murtaza Adnan</h2>
        <p>{author("about")}</p>
      </div>
    </div>
  );
}
