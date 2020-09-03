import { pickProp } from "./utils";
import { _pick } from "./shared";

/* Profile Private Type Class */
export const Profile = (obj) => ({
  __typeclass: "Profile",
  data: () => obj,
  financialsTemplate: () => _financialsTemplate(Profile(obj)),
  price: () => _price(Profile(obj)),
  secFilings: () => _secFilings(Profile(obj)),
  quoteType: () => _quoteType(Profile(obj)),
  calendarEvents: () => _calendarEvents(Profile(obj)),
  summaryDetail: () => _summaryDetail(Profile(obj)),
  assetProfile: () => _assetProfile(Profile(obj)),
  pageViews: () => _pageViews(Profile(obj)),
  pick: (...props) => _pick(Profile(obj), props),
});

/* Profile Type Class Methods */
const _financialsTemplate = (obj) => pickProp(obj)("financialsTemplate");
const _price = (obj) => pickProp(obj)("price");
const _secFilings = (obj) => pickProp(obj)("secFilings");
const _quoteType = (obj) => pickProp(obj)("quoteType");
const _calendarEvents = (obj) => pickProp(obj)("calendarEvents");
const _summaryDetail = (obj) => pickProp(obj)("summaryDetail");
const _assetProfile = (obj) => pickProp(obj)("assetProfile");
const _pageViews = (obj) => pickProp(obj)("pageViews");

Object.defineProperty(Profile, Symbol.hasInstance, {
  value: (instance) => instance["__typeclass"] === "Profile",
});
