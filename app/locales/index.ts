import AH from "./ah.ts";
import AI from "./ai.ts";
import AL from "./al.ts";
import AM from "./am.ts";
import AR from "./ar.ts";
import AZ from "./az.ts";
import BE from "./be.ts";
import BG from "./bg.ts";
import BN from "./bn.ts";
import BS from "./bs.ts";
import BY from "./by.ts";
import CD from "./cd.ts";
import CF from "./cf.ts";
import CG from "./cg.ts";
import CH from "./ch.ts";
import CI from "./ci.ts";
import CM from "./cm.ts";
import CN from "./cn.ts";
import CS from "./cs.ts";
import DA from "./da.ts";
import DE from "./de.ts";
import DK from "./dk.ts";
import DZ from "./dz.ts";
import EC from "./ec.ts";
import EE from "./ee.ts";
import EG from "./eg.ts";
import EH from "./eh.ts";
import EL from "./el.ts";
import EN from "./en.ts";
import ER from "./er.ts";
import ES from "./es.ts";
import ET from "./et.ts";
import FI from "./fi.ts";
import FJ from "./fj.ts";
import FL from "./fl.ts";
import FM from "./fm.ts";
import FR from "./fr.ts";
import GA from "./ga.ts";
import GB from "./gb.ts";
import GH from "./gh.ts";
import GM from "./gm.ts";
import GN from "./gn.ts";
import GQ from "./gq.ts";
import GR from "./gr.ts";
import GT from "./gt.ts";
import GU from "./gu.ts";
import GW from "./gw.ts";
import GY from "./gy.ts";
import HK from "./hk.ts";
import HN from "./hn.ts";
import HR from "./hr.ts";
import HT from "./ht.ts";
import HU from "./hu.ts";
import ID from "./id.ts";
import IE from "./ie.ts";
import IL from "./il.ts";
import IQ from "./iq.ts";
import IR from "./ir.ts";
import IS from "./is.ts";
import IT from "./it.ts";
import JM from "./jm.ts";
import JO from "./jo.ts";
import JP from "./jp.ts";
import KE from "./ke.ts";
import KG from "./kg.ts";
import KH from "./kh.ts";
import KI from "./ki.ts";
import KM from "./km.ts";
import KN from "./kn.ts";
import KO from "./ko.ts";
import KP from "./kp.ts";
import KR from "./kr.ts";
import KW from "./kw.ts";
import KZ from "./kz.ts";
import LA from "./la.ts";
import LB from "./lb.ts";
import LC from "./lc.ts";
import LI from "./li.ts";
import LK from "./lk.ts";
import LR from "./lr.ts";
import LS from "./ls.ts";
import LT from "./lt.ts";
import LU from "./lu.ts";
import LV from "./lv.ts";
import LY from "./ly.ts";
import MA from "./ma.ts";
import MC from "./mc.ts";
import MD from "./md.ts";
import ME from "./me.ts";
import MG from "./mg.ts";
import MH from "./mh.ts";
import MK from "./mk.ts";
import ML from "./ml.ts";
import MM from "./mm.ts";
import MN from "./mn.ts";
import MO from "./mo.ts";
import MP from "./mp.ts";
import MQ from "./mq.ts";
import MR from "./mr.ts";
import MS from "./ms.ts";
import MT from "./mt.ts";
import MU from "./mu.ts";
import MV from "./mv.ts";
import MW from "./mw.ts";
import MX from "./mx.ts";
import MY from "./my.ts";
import MZ from "./mz.ts";
import NA from "./na.ts";
import NC from "./nc.ts";
import NE from "./ne.ts";
import NF from "./nf.ts";
import NG from "./ng.ts";
import NI from "./ni.ts";
import NL from "./nl.ts";
import NO from "./no.ts";
import NP from "./np.ts";
import NR from "./nr.ts";
import NU from "./nu.ts";
import NZ from "./nz.ts";
import OM from "./om.ts";
import PA from "./pa.ts";
import PE from "./pe.ts";
import PF from "./pf.ts";
import PG from "./pg.ts";
import PH from "./ph.ts";
import PK from "./pk.ts";
import PL from "./pl.ts";
import PM from "./pm.ts";
import PN from "./pn.ts";
import PR from "./pr.ts";
import PS from "./ps.ts";
import PT from "./pt.ts";
import PW from "./pw.ts";
import PY from "./py.ts";
import QA from "./qa.ts";
import RE from "./re.ts";
import RO from "./ro.ts";
import RS from "./rs.ts";
import RU from "./ru.ts";
import RW from "./rw.ts";
import SA from "./sa.ts";
import SB from "./sb.ts";
import SC from "./sc.ts";
import SD from "./sd.ts";
import SE from "./se.ts";
import SG from "./sg.ts";
import SH from "./sh.ts";
import SI from "./si.ts";
import SK from "./sk.ts";
import SL from "./sl.ts";
import SM from "./sm.ts";
import SN from "./sn.ts";
import SO from "./so.ts";
import SR from "./sr.ts";
import SS from "./ss.ts";
import ST from "./st.ts";
import SV from "./sv.ts";
import SX from "./sx.ts";
import SY from "./sy.ts";
import SZ from "./sz.ts";
import TC from "./tc.ts";
import TD from "./td.ts";
import TF from "./tf.ts";
import TG from "./tg.ts";
import TH from "./th.ts";
import TJ from "./tj.ts";
import TK from "./tk.ts";
import TL from "./tl.ts";
import TM from "./tm.ts";
import TN from "./tn.ts";
import TO from "./to.ts";
import TR from "./tr.ts";
import TT from "./tt.ts";
import TV from "./tv.ts";
import TW from "./tw.ts";
import TZ from "./tz.ts";
import UA from "./ua.ts";
import UG from "./ug.ts";
import US from "./us.ts";
import UY from "./uy.ts";
import UZ from "./uz.ts";
import VA from "./va.ts";
import VC from "./vc.ts";
import VE from "./ve.ts";
import VG from "./vg.ts";
import VI from "./vi.ts";
import VN from "./vn.ts";
import VU from "./vu.ts";
import WF from "./wf.ts";
import WS from "./ws.ts";
import XK from "./xk.ts";
import YE from "./ye.ts";
import YT from "./yt.ts";
import ZA from "./za.ts";
import ZM from "./zm.ts";
import ZW from "./zw.ts";
import { merge } from "../utils/merge";

export type { LocaleType, RequiredLocaleType } from "./cn";

export const AllLangs = [
"ah", "al", "am", "ar", "az", "be", "bg", "bn", "bs", "bw", "by", "cd", "cf", "cg", "ch", "ci", "cm", "cn", "cs", "da", "de", "dk", "dz", "ec", "ee", "eg", "eh", "el", "en", "er", "es", "et", "fi", "fj", "fl", "fm", "fr", "ga", "gb", "gh", "gm", "gn", "gq", "gr", "gt", "gu", "gw", "gy", "hk", "hn", "hr", "ht", "hu", "id", "ie", "il", "in", "iq", "ir", "is", "it", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "um", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xk", "ye", "yt", "za", "zm", "zw",
] as const;
export type Lang = (typeof AllLangs)[number];

export const ALL_LANG_OPTIONS: Record<Lang, string> = {
  af: "Afrikaans",
  ah: "Amharic",
  ai: "Azerbaijani",
  al: "Albanian",
  am: "Amharic",
  ar: "Arabic",
  az: "Azerbaijani",
  be: "Belarusian",
  bg: "Bulgarian",
  bn: "Bengali",
  bs: "Bosnian",
  bw: "Tswana",
  by: "Belarusian",
  ca: "Catalan",
  cd: "Kongo",
  ce: "Chechen",
  cf: "Central African Republic",
  cg: "Congo - Brazzaville",
  ch: "Chamorro",
  ci: "Côte d’Ivoire",
  cm: "Cameroon",
  cn: "简体中文",
  cs: "Czech",
  da: "Danish",
  de: "German",
  dz: "Dzongkha",
  ec: "Spanish",
  ee: "Ewe",
  eg: "Arabic",
  el: "Greek",
  en: "English",
  eo: "Esperanto",
  es: "Spanish",
  et: "Estonian",
  eu: "Basque",
  fa: "Persian",
  fi: "Finnish",
  fj: "Fijian",
  fm: "Chuukese",
  fr: "French",
  fl: "Flemish",
  ga: "Irish",
  gb: "British English",
  gd: "Scottish Gaelic",
  gl: "Galician",
  gn: "Guarani",
  gr: "Greek, Modern",
  gu: "Gujarati",
  gw: "Guinea-Bissau",
  gy: "Guyanese",
  ha: "Hausa",
  he: "Hebrew",
  hi: "Hindi",
  hn: "Honduran",
  hr: "Croatian",
  ht: "Haitian Creole",
  hu: "Hungarian",
  id: "Indonesian",
  ie: "Interlingue",
  il: "Yiddish",
  iq: "Iraqi",
  ir: "Persian",
  is: "Icelandic",
  it: "Italian",
  jm: "Jamaican",
  jo: "Jordanian",
  jp: "Japanese",
  ke: "Kikuyu",
  kg: "Kongo",
  kh: "Khmer",
  ki: "Kikuyu",
  km: "Khmer",
  kn: "Kannada",
  ko: "Korean",
  kp: "Korean",
  kr: "Kanuri",
  ks: "Kashmiri",
  ku: "Kurdish",
  kw: "Kuwaiti",
  kz: "Kazakh",
  la: "Lao",
  lb: "Lebanese",
  lc: "Saint Lucian Creole French",
  li: "Limburgish",
  lk: "Sinhalese",
  lr: "Liberian English",
  ls: "Sotho, Southern",
  lt: "Lithuanian",
  lu: "Luba-Katanga",
  lv: "Latvian",
  ly: "Libyan Arabic",
  ma: "Moroccan Arabic",
  mg: "Malagasy",
  mh: "Marshallese",
  mk: "Macedonian",
  ml: "Malayalam",
  mm: "Burmese",
  mn: "Mongolian",
  mo: "Macao",
  mr: "Marathi",
  ms: "Malay",
  mt: "Maltese",
  mu: "Mauritian Creole",
  mv: "Dhivehi",
  mw: "Malawian",
  mx: "Mexican Spanish",
  my: "Burmese",
  mz: "Mozambican",
  na: "Nauruan",
  ne: "Nepali",
  ng: "Ndonga",
  ni: "Nicaraguan",
  nl: "Dutch",
  no: "Norwegian",
  np: "Nepali",
  nr: "South Ndebele",
  nu: "Niuean",
  nz: "New Zealand English",
  om: "Omani Arabic",
  pa: "Punjabi",
  pe: "Peruvian Spanish",
  pg: "Papua New Guinean",
  ph: "Filipino",
  pk: "Pakistani",
  pl: "Polish",
  pm: "Saint-Pierrais",
  pn: "Pitkern-Norfuk",
  ps: "Pashto",
  pt: "Portuguese",
  pw: "Palauan",
  py: "Paraguayan",
  qa: "Qatari",
  re: "Réunionnais",
  ro: "Romanian",
  rs: "Serbian",
  ru: "Russian",
  rw: "Kinyarwanda",
  sa: "Saudi Arabian",
  sb: "Solomon Islands Pijin",
  sc: "Seychellois Creole",
  sd: "Sindhi",
  se: "Northern Sami",
  sg: "Sango",
  si: "Sinhalese",
  sk: "Slovak",
  sl: "Slovenian",
  sm: "Samoan",
  sn: "Shona",
  so: "Somali",
  sr: "Serbian",
  ss: "Siswati",
  st: "Sesotho",
  sv: "Swedish",
  sx: "Sint Maarten Dutch",
  sy: "Syriac",
  sz: "Swati",
  tc: "Turks and Caicos Islands English",
  td: "Chadian Arabic",
  tg: "Tajik",
  th: "Thai",
  tk: "Turkmen",
  tl: "Tagalog",
  tm: "Turkmen",
  tn: "Setswana",
  to: "Tongan",
  tr: "Turkish",
  tt: "Trinidadian",
  tv: "Tuvaluan",
  tw: "Taiwanese Mandarin",
  tz: "Tanzanian",
  ua: "Ukrainian",
  ug: "Ugandan",
  uk: "Ukrainian",
  um: "U.S. Minor Outlying Islands English",
  us: "American English",
  uy: "Uruguayan Spanish",
  uz: "Uzbek",
  va: "Vatican City Italian",
  vc: "Vincentian Creole English",
  ve: "Venezuelan Spanish",
  vg: "British Virgin Islands English",
  vi: "Vietnamese",
  vn: "Vietnamese",
  vu: "Ni-Vanuatu",
  wf: "Wallisian",
  ws: "Samoan",
  xk: "Kosovar",
  ye: "Yemeni",
  yt: "Mayotte French",
  za: "South African",
  zm: "Zambian",
  zw: "Zimbabwean",
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
  ah: AH,
al: AL,
am: AM,
ar: AR,
az: AZ,
be: BE,
bg: BG,
bn: BN,
bs: BS,
bw: BW,
by: BY,
cd: CD,
cf: CF,
cg: CG,
ch: CH,
ci: CI,
cm: CM,
cn: CN,
cs: CS,
da: DA,
de: DE,
dk: DK,
dz: DZ,
ec: EC,
ee: EE,
eg: EG,
eh: EH,
el: EL,
en: EN,
er: ER,
es: ES,
et: ET,
eu: EU,
fa: FA,
fi: FI,
fj: FJ,
fl: FL,
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
iq: IQ,
ir: IR,
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
nf: NF,
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
sh: SH,
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
}[getLang()] as typeof CN;

// if target lang missing some fields, it will use fallback lang string
merge(fallbackLang, targetLang);

export default fallbackLang as typeof CN;
