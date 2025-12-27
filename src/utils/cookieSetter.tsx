type CookieSetterTypes = { key: string; value: string };

export default async function CookieSetter({ key, value }: CookieSetterTypes) {
  if (!key || !value) return null;
  cookieStore.set(key, value);
}
