import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export type LangType = "english" | "spanish" | "chines" | "bangali" | "urdu";

export default getRequestConfig(async () => {
  // Static for now, we'll change this later
  const language = (await cookies()).get("lang")?.value as LangType;

  const locale = language || "english";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
