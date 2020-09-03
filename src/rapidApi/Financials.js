import { pickProp } from "./utils";
import { _pick } from "./shared";

/* Financials Private Type Class */
export const Financials = (obj) => ({
  __typeclass: "Financials",
  data: () => obj,
  cashflowStatementHistory: () => _cashflowStatementHistory(Financials(obj)),
  balanceSheetHistoryQuarterly: () =>
    _balanceSheetHistoryQuarterly(Financials(obj)),
  earnings: () => _earnings(Financials(obj)),
  price: () => _price(Financials(obj)),
  incomeStatementHistoryQuarterly: () =>
    _incomeStatementHistoryQuarterly(Financials(obj)),
  incomeStatementHistory: () => _incomeStatementHistory(Financials(obj)),
  balanceSheetHistory: () => _balanceSheetHistory(Financials(obj)),
  cashflowStatementHistoryQuarterly: () =>
    _cashflowStatementHistoryQuarterly(Financials(obj)),
  quoteType: () => _quoteType(Financials(obj)),
  summaryDetail: () => _summaryDetail(Financials(obj)),
  symbol: () => _symbol(Financials(obj)),
  pageViews: () => _pageViews(Financials(obj)),
  timeSeries: () => _timeSeries(Financials(obj)),
  meta: () => _meta(Financials(obj)),
  pick: (...props) => _pick(Financials(obj), props),
});

/* Financials Type Class Methods */
const _cashflowStatementHistory = (obj) =>
  pickProp(obj)("cashflowStatementHistory");
const _balanceSheetHistoryQuarterly = (obj) =>
  pickProp(obj)("balanceSheetHistoryQuarterly");
const _earnings = (obj) => pickProp(obj)("earnings");
const _price = (obj) => pickProp(obj)("price");
const _incomeStatementHistoryQuarterly = (obj) =>
  pickProp(obj)("incomeStatementHistoryQuarterly");
const _incomeStatementHistory = (obj) =>
  pickProp(obj)("incomeStatementHistory");
const _balanceSheetHistory = (obj) => pickProp(obj)("balanceSheetHistory");
const _cashflowStatementHistoryQuarterly = (obj) =>
  pickProp(obj)("cashflowStatementHistoryQuarterly");
const _quoteType = (obj) => pickProp(obj)("quoteType");
const _summaryDetail = (obj) => pickProp(obj)("summaryDetail");
const _symbol = (obj) => pickProp(obj)("symbol");
const _pageViews = (obj) => pickProp(obj)("pageViews");
const _timeSeries = (obj) => pickProp(obj)("timeSeries");
const _meta = (obj) => pickProp(obj)("meta");

Object.defineProperty(Financials, Symbol.hasInstance, {
  value: (instance) => instance["__typeclass"] === "Financials",
});
