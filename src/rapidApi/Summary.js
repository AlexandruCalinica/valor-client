import { pickProp } from "./utils";
import { _pick } from "./shared";

/* Summary Private Type Class */
export const Summary = obj => ({
  __typeclass: "Summary",
  data: () => obj,
  defaultKeyStatistics: () => _defaultKeyStatistics(Summary(obj)),
  details: () => _details(Summary(obj)),
  summaryProfile: () => _summaryProfile(Summary(obj)),
  recommendationTrend: () => _recommendationTrend(Summary(obj)),
  financialsTemplate: () => _financialsTemplate(Summary(obj)),
  majorDirectHolders: () => _majorDirectHolders(Summary(obj)),
  earnings: () => _earnings(Summary(obj)),
  price: () => _price(Summary(obj)),
  fundOwnership: () => _fundOwnership(Summary(obj)),
  insiderTransactions: () => _insiderTransactions(Summary(obj)),
  insiderHolders: () => _insiderHolders(Summary(obj)),
  netSharePurchaseActivity: () => _netSharePurchaseActivity(Summary(obj)),
  majorHoldersBreakdown: () => _majorHoldersBreakdown(Summary(obj)),
  financialData: () => _financialData(Summary(obj)),
  quoteType: () => _quoteType(Summary(obj)),
  institutionOwnership: () => _institutionOwnership(Summary(obj)),
  calendarEvents: () => _calendarEvents(Summary(obj)),
  summaryDetail: () => _summaryDetail(Summary(obj)),
  symbol: () => _symbol(Summary(obj)),
  esgScores: () => _esgScores(Summary(obj)),
  upgradeDowngradeHistory: () => _upgradeDowngradeHistory(Summary(obj)),
  pageViews: () => _pageViews(Summary(obj)),
  pick: (...props) => _pick(Summary(obj), props)
});

/* Summary Type Class Methods */
const _defaultKeyStatistics = obj => pickProp(obj)("defaultKeyStatistics");
const _details = obj => pickProp(obj)("details");
const _summaryProfile = obj => pickProp(obj)("summaryProfile");
const _recommendationTrend = obj => pickProp(obj)("recommendationTrend");
const _financialsTemplate = obj => pickProp(obj)("financialsTemplate");
const _majorDirectHolders = obj => pickProp(obj)("majorDirectHolders");
const _earnings = obj => pickProp(obj)("earnings");
const _price = obj => pickProp(obj)("price");
const _fundOwnership = obj => pickProp(obj)("fundOwnership");
const _insiderTransactions = obj => pickProp(obj)("insiderTransactions");
const _insiderHolders = obj => pickProp(obj)("insiderHolders");
const _netSharePurchaseActivity = obj =>
  pickProp(obj)("netSharePurchaseActivity");
const _majorHoldersBreakdown = obj => pickProp(obj)("majorHoldersBreakdown");
const _financialData = obj => pickProp(obj)("financialData");
const _quoteType = obj => pickProp(obj)("quoteType");
const _institutionOwnership = obj => pickProp(obj)("institutionOwnership");
const _calendarEvents = obj => pickProp(obj)("calendarEvents");
const _summaryDetail = obj => pickProp(obj)("summaryDetail");
const _symbol = obj => pickProp(obj)("symbol");
const _esgScores = obj => pickProp(obj)("esgScores");
const _upgradeDowngradeHistory = obj =>
  pickProp(obj)("upgradeDowngradeHistory");
const _pageViews = obj => pickProp(obj)("pageViews");

Object.defineProperty(Summary, Symbol.hasInstance, {
  value: instance => instance["__typeclass"] === "Summary"
});
