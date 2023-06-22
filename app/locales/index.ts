import CN from "./cn";
import EN from "./en";
import TW from "./tw";
import FR from "./fr";
import ES from "./es";
import IT from "./it";
import TR from "./tr";
import JP from "./jp";
import DE from "./de";
import VI from "./vi";
import RU from "./ru";
import CS from "./cs";
import KO from "./ko";
import BN from "./bn";
import BW from "./bw";
import BY from "./by";
import CA from "./ca";
import CF from "./cf";
import CD from "./cd";
import CH from "./ch";
import CI from "./ci";
import CM from "./cm";
import CG from "./cg";
import DE from "./de";
import DK from "./dk";
import DZ from "./dz";
import EC from "./ec";
import EE from "./ee";
import EG from "./eg";
import EH from "./eh";
import ER from "./er";
import ES from "./es";
import ET from "./et";
import FI from "./fi";
import FJ from "./fj";
import FM from "./fm";
import FR from "./fr";
import GA from "./ga";
import GB from "./gb";
import GH from "./gh";
import GM from "./gm";
import GN from "./gn";
import GQ from "./gq";
import GR from "./gr";
import GT from "./gt";
import GU from "./gu";
import GW from "./gw";
import GY from "./gy";
import HK from "./hk";
import HN from "./hn";
import HR from "./hr";
import HT from "./ht";
import HU from "./hu";
import ID from "./id";
import IE from "./ie";
import IL from "./il";
import IN from "./in";
import IR from "./ir";
import IQ from "./iq";
import IS from "./is";
import IT from "./it";
import JM from "./jm";
import JO from "./jo";
import JP from "./jp";
import KE from "./ke";
import KG from "./kg";
import KH from "./kh";
import KI from "./ki";
import KM from "./km";
import KN from "./kn";
import KP from "./kp";
import KR from "./kr";
import KW from "./kw";
import KZ from "./kz";
import LA from "./la";
import LB from "./lb";
import LC from "./lc";
import LI from "./li";
import LK from "./lk";
import LR from "./lr";
import LS from "./ls";
import LT from "./lt";
import LU from "./lu";
import LV from "./lv";
import LY from "./ly";
import MA from "./ma";
import MC from "./mc";
import MD from "./md";
import ME from "./me";
import MG from "./mg";
import MH from "./mh";
import MK from "./mk";
import ML from "./ml";
import MM from "./mm";
import MN from "./mn";
import MO from "./mo";
import MP from "./mp";
import MQ from "./mq";
import MR from "./mr";
import MS from "./ms";
import MT from "./mt";
import MU from "./mu";
import MV from "./mv";
import MW from "./mw";
import MX from "./mx";
import MY from "./my";
import MZ from "./mz";
import NA from "./na";
import NC from "./nc";
import NE from "./ne";
import NG from "./ng";
import NI from "./ni";
import NL from "./nl";
import NO from "./no";
import NP from "./np";
import NR from "./nr";
import NU from "./nu";
import NZ from "./nz";
import OM from "./om";
import PA from "./pa";
import PE from "./pe";
import PF from "./pf";
import PG from "./pg";
import PH from "./ph";
import PK from "./pk";
import PL from "./pl";
import PM from "./pm";
import PN from "./pn";
import PR from "./pr";
import PS from "./ps";
import PT from "./pt";
import PW from "./pw";
import PY from "./py";
import QA from "./qa";
import RE from "./re";
import RO from "./ro";
import RS from "./rs";
import RU from "./ru";
import RW from "./rw";
import SA from "./sa";
import SB from "./sb";
import SC from "./sc";
import SD from "./sd";
import SE from "./se";
import SG from "./sg";
import SI from "./si";
import SJ from "./sj";
import SK from "./sk";
import SL from "./sl";
import SM from "./sm";
import SN from "./sn";
import SO from "./so";
import SR from "./sr";
import SS from "./ss";
import ST from "./st";
import SV from "./sv";
import SX from "./sx";
import SY from "./sy";
import SZ from "./sz";
import TC from "./tc";
import TD from "./td";
import TF from "./tf";
import TG from "./tg";
import TH from "./th";
import TJ from "./tj";
import TK from "./tk";
import TL from "./tl";
import TM from "./tm";
import TN from "./tn";
import TO from "./to";
import TR from "./tr";
import TT from "./tt";
import TV from "./tv";
import TW from "./tw";
import TZ from "./tz";
import UA from "./ua";
import UG from "./ug";
import US from "./us";
import UY from "./uy";
import UZ from "./uz";
import VA from "./va";
import VC from "./vc";
import VE from "./ve";
import VG from "./vg";
import VI from "./vi";
import VN from "./vn";
import VU from "./vu";
import WF from "./wf";
import WS from "./ws";
import XK from "./xk";
import YE from "./ye";
import YT from "./yt";
import ZA from "./za";
import ZM from "./zm";
import ZW from "./zw";
import { merge } from "../utils/merge";

export type { LocaleType, RequiredLocaleType } from "./cn";

export const AllLangs = [
  "en",
  "cn",
  "tw",
  "fr",
  "es",
  "it",
  "tr",
  "jp",
  "de",
  "vi",
  "ru",
  "cs",
  "ko",
  "bn",
  "bw",
  "by",
  "ca",
  "cf",
  "cd",
  "ch",
  "ci",
  "cm",
  "cg",
  "de",
  "dk",
  "dz",
  "ec",
  "ee",
  "eg",
  "eh",
  "er",
  "es",
  "et",
  "fi",
  "fj",
  "fm",
  "fr",
  "ga",
  "gb",
  "gh",
  "gm",
  "gn",
  "gq",
  "gr",
  "gt",
  "gu",
  "gw",
  "gy",
  "hk",
  "hn",
  "hr",
  "ht",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "ir",
  "iq",
  "is",
  "it",
  "jm",
  "jo",
  "jp",
  "ke",
  "kg",
  "kh",
  "ki",
  "km",
  "kn",
  "kp",
  "kr",
  "kw",
  "kz",
  "la",
  "lb",
  "lc",
  "li",
  "lk",
  "lr",
  "ls",
  "lt",
  "lu",
  "lv",
  "ly",
  "ma",
  "mc",
  "md",
  "me",
  "mg",
  "mh",
  "mk",
  "ml",
  "mm",
  "mn",
  "mo",
  "mp",
  "mq",
  "mr",
  "ms",
  "mt",
  "mu",
  "mv",
  "mw",
  "mx",
  "my",
  "mz",
  "na",
  "nc",
  "ne",
  "ng",
  "ni",
  "nl",
  "no",
  "np",
  "nr",
  "nu",
  "nz",
  "om",
  "pa",
  "pe",
  "pf",
  "pg",
  "ph",
  "pk",
  "pl",
  "pm",
  "pn",
  "pr",
  "ps",
  "pt",
  "pw",
  "py",
  "qa",
  "re",
  "ro",
  "rs",
  "ru",
  "rw",
  "sa",
  "sb",
  "sc",
  "sd",
  "se",
  "sg",
  "si",
  "sj",
  "sk",
  "sl",
  "sm",
  "sn",
  "so",
  "sr",
  "ss",
  "st",
  "sv",
  "sx",
  "sy",
  "sz",
  "tc",
  "td",
  "tf",
  "tg",
  "th",
  "tj",
  "tk",
  "tl",
  "tm",
  "tn",
  "to",
  "tr",
  "tt",
  "tv",
  "tw",
  "tz",
  "ua",
  "ug",
  "us",
  "uy",
  "uz",
  "va",
  "vc",
  "ve",
  "vg",
  "vi",
  "vn",
  "vu",
  "wf",
  "ws",
  "xk",
  "ye",
  "yt",
  "za",
  "zm",
  "zw",
] as const;
export type Lang = (typeof AllLangs)[number];

export const ALL_LANG_OPTIONS: Record<Lang, string> = {
  cn: "简体中文",
  en: "English",
  tw: "繁體中文",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  tr: "Türkçe",
  jp: "日本語",
  de: "Deutsch",
  vi: "Tiếng Việt",
  ru: "Русский",
  cs: "Čeština",
  ko: "한국어",
  bn: "বাংলা",
  bw: "Setswana",
  by: "Беларуская",
  ca: "Cree",
  cf: "Sango",
  cd: "Luba-Katanga",
  ch: "Romansh",
  ci: "Fula",
  cm: "Hausa",
  cg: "Lingala",
  dk: "Dansk",
  dz: "العربية",
  ec: "Kichwa",
  ee: "Eesti",
  eg: "العربية",
  eh: "Hassaniya Arabic",
  er: "Tigrinya",
  es: "Español",
  et: "Amharic",
  fi: "Suomi",
  fj: "Fijian",
  fm: "English",
  fr: "Français",
  ga: "Fula",
  gb: "English",
  gh: "Akan",
  gm: "English",
  gn: "Fula",
  gq: "Fang",
  gr: "Ελληνικά",
  gt: "K'iche",
  gu: "English",
  gw: "Crioulo",
  gy: "English",
  hk: "中文",
  hn: "Garifuna",
  hr: "Hrvatski",
  ht: "Kreyòl Ayisyen",
  hu: "Magyar",
  id: "Bahasa Indonesia",
  ie: "English",
  il: "עברית",
  in: "हिन्दी",
  ir: "فارسی",
  iq: "العربية",
  is: "Íslenska",
  it: "Italiano",
  jm: "English",
  jo: "العربية",
  jp: "日本語",
  ke: "Kalenjin",
  kg: "Кыргызча",
  kh: "ភាសាខ្មែរ",
  ki: "English",
  km: "العربية",
  kn: "English",
  kp: "한국어",
  kr: "한국어",
  kw: "العربية",
  kz: "Казақ",
  la: "ລາວ",
  lb: "العربية",
  lc: "English",
  li: "Deutsch",
  lk: "සිංහල",
  lr: "English",
  ls: "English",
  lt: "Lietuvių",
  lu: "Lëtzebuergesch",
  lv: "Latviešu",
  ly: "العربية",
  ma: "العربية",
  mc: "Français",
  md: "Română",
  me: "Crnogorski",
  mg: "Malagasy",
  mh: "English",
  mk: "Македонски",
  ml: "Bamanankan",
  mm: "ဗမာ",
  mn: "Монгол",
  mo: "中文",
  mp: "English",
  mq: "Français",
  mr: "العربية",
  ms: "English",
  mt: "Malti",
  mu: "Français",
  mv: "ދިވެހިބަސް",
  mw: "English",
  mx: "Español",
  my: "Bahasa Melayu",
  mz: "Português",
  na: "English",
  nc: "Français",
  ne: "Français",
  ng: "English",
  ni: "Miskito",
  nl: "Nederlands",
  no: "Norsk",
  np: "नेपाली",
  nr: "English",
  nu: "English",
  nz: "English",
  om: "العربية",
  pa: "Español",
  pe: "Español",
  pf: "Français",
  pg: "English",
  ph: "English",
  pk: "اردو",
  pl: "Polski",
  pm: "Français",
  pn: "English",
  pr: "Español",
  ps: "العربية",
  pt: "Português",
  pw: "English",
  py: "Español",
  qa: "العربية",
  re: "Français",
  ro: "Română",
  rs: "Српски",
  ru: "Русский",
  rw: "Kinyarwanda",
  sa: "العربية",
  sb: "English",
  sc: "English",
  sd: "العربية",
  se: "Svenska",
  sg: "English",
  si: "Slovenščina",
  sj: "Norsk",
  sk: "Slovenčina",
  sl: "English",
  sm: "Italiano",
  sn: "Wolof",
  so: "Soomaali",
  sr: "Nederlands",
  ss: "English",
  st: "Português",
  sv: "Español",
  sx: "Nederlands",
  sy: "العربية",
  sz: "English",
  tc: "English",
  td: "العربية",
  tf: "Français",
  tg: "Français",
  th: "ไทย",
  tj: "Тоҷикӣ",
  tk: "English",
  tl: "Português",
  tm: "Түркмен",
  tn: "العربية",
  to: "English",
  tr: "Türkçe",
  tt: "English",
  tv: "English",
  tw: "中文",
  tz: "Kiswahili",
  ua: "Українська",
  ug: "English",
  us: "English",
  uy: "Español",
  uz: "O'zbek",
  va: "Italiano",
  vc: "English",
  ve: "Español",
  vg: "English",
  vi: "Tiếng Việt",
  vn: "Tiếng Việt",
  vu: "English",
  wf: "Français",
  ws: "English",
  xk: "Shqip",
  ye: "العربية",
  yt: "Français",
  za: "English",
  zm: "English",
  zw: "English",
};

const LANG_KEY = "lang";
const DEFAULT_LANG = "en";

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

const fallbackLang = EN;
const targetLang = {
  en: EN,
  cn: CN,
  tw: TW,
  fr: FR,
  es: ES,
  it: IT,
  tr: TR,
  jp: JP,
  de: DE,
  vi: VI,
  ru: RU,
  cs: CS,
  ko: KO,
  bn: BN,
  bw: BW,
  by: BY,
  ca: CA,
  cf: CF,
  cd: CD,
  ch: CH,
  ci: CI,
  cm: CM,
  cg: CG,
  dk: DK,
  dz: DZ,
  ec: EC,
  ee: EE,
  eg: EG,
  eh: EH,
  er: ER,
  es: ES,
  et: ET,
  fi: FI,
  fj: FJ,
  fm: FM,
  fr: FR,
  ga: GA,
  gb: GB,
  gh: GH,
  gm: GM,
  gn: GN,
  gq: GQ,
  gr: GR,
  gt: GT,
  gu: GU,
  gw: GW,
  gy: GY,
  hk: HK,
  hn: HN,
  hr: HR,
  ht: HT,
  hu: HU,
  id: ID,
  ie: IE,
  il: IL,
  in: IN,
  ir: IR,
  iq: IQ,
  is: IS,
  it: IT,
  jm: JM,
  jo: JO,
  jp: JP,
  ke: KE,
  kg: KG,
  kh: KH,
  ki: KI,
  km: KM,
  kn: KN,
  kp: KP,
  kr: KR,
  kw: KW,
  kz: KZ,
  la: LA,
  lb: LB,
  lc: LC,
  li: LI,
    lk: LK,
  lr: LR,
  ls: LS,
  lt: LT,
  lu: LU,
  lv: LV,
  ly: LY,
  ma: MA,
  mc: MC,
  md: MD,
  me: ME,
  mg: MG,
  mh: MH,
  mk: MK,
  ml: ML,
  mm: MM,
  mn: MN,
  mo: MO,
  mp: MP,
  mq: MQ,
  mr: MR,
  ms: MS,
  mt: MT,
  mu: MU,
  mv: MV,
  mw: MW,
  mx: MX,
  my: MY,
  mz: MZ,
  na: NA,
  nc: NC,
  ne: NE,
  ng: NG,
  ni: NI,
  nl: NL,
  no: NO,
  np: NP,
  nr: NR,
  nu: NU,
  nz: NZ,
  om: OM,
  pa: PA,
  pe: PE,
  pf: PF,
  pg: PG,
  ph: PH,
  pk: PK,
  pl: PL,
  pm: PM,
  pn: PN,
  pr: PR,
  ps: PS,
  pt: PT,
  pw: PW,
  py: PY,
  qa: QA,
  re: RE,
  ro: RO,
  rs: RS,
  ru: RU,
  rw: RW,
  sa: SA,
  sb: SB,
  sc: SC,
  sd: SD,
  se: SE,
  sg: SG,
  si: SI,
  sj: SJ,
  sk: SK,
  sl: SL,
  sm: SM,
  sn: SN,
  so: SO,
  sr: SR,
  ss: SS,
  st: ST,
  sv: SV,
  sx: SX,
  sy: SY,
  sz: SZ,
  tc: TC,
  td: TD,
  tf: TF,
  tg: TG,
  th: TH,
  tj: TJ,
  tk: TK,
  tl: TL,
  tm: TM,
  tn: TN,
  to: TO,
  tr: TR,
  tt: TT,
  tv: TV,
  tw: TW,
  tz: TZ,
  ua: UA,
  ug: UG,
  us: US,
  uy: UY,
  uz: UZ,
  va: VA,
  vc: VC,
  ve: VE,
  vg: VG,
  vi: VI,
  vn: VN,
  vu: VU,
  wf: WF,
  ws: WS,
  xk: XK,
  ye: YE,
  yt: YT,
  za: ZA,
  zm: ZM,
  zw: ZW,
};

const LANG_KEY = "lang";
const DEFAULT_LANG = "en";

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

const fallbackLang = EN;
const targetLang = {
  en: EN,
  cn: CN,
  tw: TW,
  fr: FR,
  es: ES,
  it: IT,
  tr: TR,
  jp: JP,
  de: DE,
  vi: VI,
  ru: RU,
  cs: CS,
  ko: KO,
  bn: BN,
  bw: BW,
  by: BY,
  ca: CA,
  cf: CF,
  cd: CD,
  ch: CH,
  ci: CI,
  cm: CM,
  cg: CG,
  dk: DK,
  dz: DZ,
  ec: EC,
  ee: EE,
  eg: EG,
  eh: EH,
  er: ER,
  es: ES,
  et: ET,
  fi: FI,
  fj: FJ,
  fm: FM,
  fr: FR,
  ga: GA,
  gb: GB,
  gh: GH,
  gm: GM,
  gn: GN,
  gq: GQ,
  gr: GR,
  gt: GT,
  gu: GU,
  gw: GW,
  gy: GY,
  hk: HK,
  hn: HN,
  hr: HR,
  ht: HT,
  hu: HU,
  id: ID,
  ie: IE,
  il: IL,
  in: IN,
  ir: IR,
  iq: IQ,
  is: IS,
  it: IT,
  jm: JM,
  jo: JO,
  jp: JP,
  ke: KE,
  kg: KG,
  kh: KH,
  ki: KI,
  km: KM,
  kn: KN,
  kp: KP,
  kr: KR,
  kw: KW,
  kz: KZ,
  la: LA,
  lb: LB,
  lc: LC,
  li: LI,
  lk: LK,
  lr: LR,
  ls: LS,
  lt: LT,
  lu: LU,
  lv: LV,
  ly: LY,
  ma: MA,
  mc: MC,
  md: MD,
  me: ME,
  mg: MG,
  mh: MH,
  mk: MK,
  ml: ML,
  mm: MM,
  mn: MN,
  mo: MO,
  mp: MP,
  mq: MQ,
  mr: MR,
  ms: MS,
  mt: MT,
  mu: MU,
  mv: MV,
  mw: MW,
  mx: MX,
  my: MY,
  mz: MZ,
  na: NA,
  nc: NC,
  ne: NE,
  ng: NG,
  ni: NI,
  nl: NL,
  no: NO,
  np: NP,
  nr: NR,
  nu: NU,
  nz: NZ,
  om: OM,
  pa: PA,
  pe: PE,
  pf: PF,
  pg: PG,
  ph: PH,
  pk: PK,
  pl: PL,
  pm: PM,
  pn: PN,
  pr: PR,
  ps: PS,
  pt: PT,
  pw: PW,
  py: PY,
  qa: QA,
  re: RE,
  ro: RO,
  rs: RS,
  ru: RU,
  rw: RW,
  sa: SA,
  sb: SB,
  sc: SC,
  sd: SD,
  se: SE,
  sg: SG,
  si: SI,
  sj: SJ,
  sk: SK,
  sl: SL,
  sm: SM,
  sn: SN,
  so: SO,
  sr: SR,
  ss: SS,
  st: ST,
  sv: SV,
  sx: SX,
  sy: SY,
  sz: SZ,
  tc: TC,
  td: TD,
  tf: TF,
  tg: TG,
  th: TH,
  tj: TJ,
  tk: TK,
  tl: TL,
  tm: TM,
  tn: TN,
  to: TO,
  tr: TR,
  tt: TT,
  tv: TV,
  tw: TW,
  tz: TZ,
  ua: UA,
  ug: UG,
  us: US,
  uy: UY,
  uz: UZ,
  va: VA,
  vc: VC,
  ve: VE,
  vg: VG,
  vi: VI,
  vn: VN,
  vu: VU,
  wf: WF,
  ws: WS,
  xk: XK,
  ye: YE,
  yt: YT,
  za: ZA,
  zm: ZM,
  zw: ZW,
};

export const ALL_LANG_OPTIONS: Record<Lang, string> = {
  ...targetLang,
};

const fallbackLang = EN;
const targetLang = {
  ...targetLang,
};

// if target lang missing some fields, it will use fallback lang string
merge(fallbackLang, targetLang);

export default fallbackLang as typeof CN;
