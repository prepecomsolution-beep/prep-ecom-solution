import { useTranslations } from "next-intl";

const default_info = {
  name: "prep ecom solutions",
};

const primary_menu = () => {
  const nav = useTranslations("nav");

  return [
    { name: `${nav("home")}`, link: "/" },
    { name: `${nav("about")}`, link: "/about" },
    { name: `${nav("service")}`, link: "/services" },
    { name: `${nav("contact")}`, link: "/contact" },
  ];
};

const services_menu = () => [
  { name: "3PL logistic", link: "/services" },
  { name: "Inventory Management", link: "/services" },
];

const secondary_menu = () => [{ name: "terms & policies", link: "/terms-and-policies" }];

export { default_info, primary_menu, secondary_menu, services_menu };
