import cn from "./cn";
import en from "./en";
import tw from "./tw";
import fr from "./fr";
import es from "./es";
import it from "./it";
import tr from "./tr";
import jp from "./jp";
import de from "./de";
import vi from "./vi";
import ru from "./ru";
import no from "./no";
import cs from "./cs";
import ko from "./ko";
import ar from "./ar";
import bn from "./bn";
import hi from "./hi";
import hr from "./hr";
import ur from "./ur";
import pl from "./pl";
import ph from "./ph";
import pt from "./pt";
import tl from "./tl";
import du from "./du";
import cz from "./cz";
import gr from "./gr";
import kz from "./kz";
import id from "./id";
import zh from "./zh";
import tam from "./tam";
import am from "./am";
import { merge } from "../utils/merge";

import type { LocaleType } from "./cn";
export type { LocaleType, PartialLocaleType } from "./cn";

const ALL_LANGS = {
  cn,
  en,
  tw,
  jp,
  ko,
  zh,
  tam,
  fr,
  es,
  it,
  tr,
  de,
  vi,
  ru,
  cs,
  no,
  ar,
  bn,
  hi,
  hr,
  ur,
  pl,
  ph,
  pt,
  tl,
  du,
  cz,
  gr,
  kz,
  id,
  am,
};

export type Lang = keyof typeof ALL_LANGS;

export const AllLangs = Object.keys(ALL_LANGS) as Lang[];

export const ALL_LANG_OPTIONS: Record<Lang, string> = {
  cn: "简体中文",
  en: "English",
  tw: "繁體中文",
  jp: "日本語",
  ko: "한국어",
  zh: "語言",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  tr: "Türkçe",
  de: "Deutsch",
  vi: "Tiếng Việt",
  ru: "Русский",
  cs: "Čeština",
  no: "Nynorsk",
  ar: "العربية",
  bn: "বাংলা",
  hi: "भाषा",
  hr: "שפה",
  ur: "زبان",
  pl: "Język",
  ph: "Wika",
  pt: "Idioma",
  tl: "Tagalog",
  du: "Dutch",
  cz: "Czech",
  gr: "Γλώσσα",
  kz: "Қазақ",
  id: "Bahasa",
  tam: "Tamazight",
  am: "Armenian",
};

const LANG_KEY = "lang";
const DEFAULT_LANG = "en";

const fallbackLang = en;
const targetLang = ALL_LANGS[getLang()] as LocaleType;


merge(fallbackLang, targetLang);

export default fallbackLang as LocaleType;

function getItem(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function getLanguage() {
  try {
    return navigator.language.toLowerCase();
  } catch {
    return DEFAULT_LANG;
  }
}

export function getLang(): Lang {
  const savedLang = getItem(LANG_KEY);

  if (AllLangs.includes((savedLang ?? "") as Lang)) {
    return savedLang as Lang;
  }

  const lang = getLanguage();

  for (const option of AllLangs) {
    if (lang.includes(option)) {
      return option;
    }
  }

  return DEFAULT_LANG;
}

export function changeLang(lang: Lang) {
  setItem(LANG_KEY, lang);
  location.reload();
}
