import { default_info, primary_menu, secondary_menu, services_menu } from "@/app/config/config";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { TikTok_Sans } from "next/font/google";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-primary md:px-4 px-4 py-12 pb-4 text-white grid gap-14 mt-22">
      <footer className="max-w-7xl mx-auto sm:flex grid gap-8 font-semibold w-full">
        <div className="sm:max-w-xs w-full grid gap-2 items-start content-start">
          <img src="/images/logo.png" alt="prep ecom solution" className="w-40" />
          {/* <h1 className="text-2xl font-bold capitalize">{default_info.name}</h1> */}
          <p className="font-semibold capitalize text-lg">we prep you grow</p>
          <div className="flex gap-2 w-full">
            <a target="_blank" href="https://www.instagram.com/prepecomsolution/">
              <Instagram className="size-5 hover:scale-95 cursor-pointer transition-all translate-0.5 text-primary bg-white box-content p-1.5 rounded-sm" />
            </a>

            <a target="_blank" href="https://www.facebook.com/prepecomsolution/">
              <svg
                className="size-5 hover:scale-95 cursor-pointer transition-all translate-0.5 text-primary bg-white fill-primary box-content p-1.5 rounded-sm"
                viewBox="0 0 640 640"
              >
                <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
              </svg>
            </a>

            <a target="_blank" href="https://www.tiktok.com/@prepecomsolution.com">
              <svg
                className="size-5 hover:scale-95 cursor-pointer transition-all translate-0.5 text-primary bg-white fill-primary box-content p-1.5 rounded-sm"
                viewBox="0 0 640 640"
              >
                <path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 w-full">
          <nav className="grid gap-1 content-start">
            <h2 className="text-2xl font-bold mb-2">Company</h2>
            {primary_menu().map((each) => (
              <Link key={each.link} href={`${each.link}`} className="capitalize hover:underline">
                {each.name}
              </Link>
            ))}
          </nav>
          <nav className="grid gap-1 content-start">
            <h2 className="text-2xl font-bold mb-2">Solutions</h2>
            {services_menu().map((each) => (
              <Link key={each.name} href={`${each.link}`} className="capitalize hover:underline">
                {each.name}
              </Link>
            ))}
          </nav>
          <nav className="grid gap-1 content-start">
            <h2 className="text-2xl font-bold mb-2">Policies</h2>
            {secondary_menu().map((each) => (
              <Link key={each.link} href={`${each.link}`} className="capitalize hover:underline">
                {each.name}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
      <section className="max-w-4xl w-full mx-auto border-t border-white text-center pt-4">
        <p className="text-sm  font-semibold">
          © {new Date().getFullYear().toString()} <span className="capitalize">{default_info.name}</span> Fulfillment | All Rights Reserved | Terms of
          Service
        </p>
      </section>
    </div>
  );
}

export default Footer;
