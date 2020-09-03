import { pickProp } from "./utils";
import { _pick } from "./shared";

/* Statistics Private Type Class */
export const Statistics = obj => ({
  __typeclass: "Statistics",
  data: () => obj,
  defaultKeyStatistics: () => _defaultKeyStatistics(Statistics(obj)),
  financialsTemplate: () => _financialsTemplate(Statistics(obj)),
  price: () => _price(Statistics(obj)),
  financialData: () => _financialData(Statistics(obj)),
  quoteType: () => _quoteType(Statistics(obj)),
  calendarEvents: () => _calendarEvents(Statistics(obj)),
  summaryDetail: () => _summaryDetail(Statistics(obj)),
  symbol: () => _symbol(Statistics(obj)),
  pageViews: () => _pageViews(Statistics(obj)),
  quoteData: () => _quoteData(Statistics(obj)),
  mktmData: () => _mktmData(Statistics(obj)),
  pick: (...props) => _pick(Statistics(obj), props)
});

/* Statistics Type Class Methods */
const _defaultKeyStatistics = obj => pickProp(obj)("defaultKeyStatistics");
const _financialsTemplate = obj => pickProp(obj)("financialsTemplate");
const _price = obj => pickProp(obj)("price");
const _financialData = obj => pickProp(obj)("financialData");
const _quoteType = obj => pickProp(obj)("quoteType");
const _calendarEvents = obj => pickProp(obj)("calendarEvents");
const _summaryDetail = obj => pickProp(obj)("summaryDetail");
const _symbol = obj => pickProp(obj)("symbol");
const _pageViews = obj => pickProp(obj)("pageViews");
const _quoteData = obj => pickProp(obj)("quoteData");
const _mktmData = obj => pickProp(obj)("mktmData");

Object.defineProperty(Statistics, Symbol.hasInstance, {
  value: instance => instance["__typeclass"] === "Statistics"
});
