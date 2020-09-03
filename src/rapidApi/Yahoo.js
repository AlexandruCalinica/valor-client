import { request } from "./utils";
import { _pick } from "./shared";

import { Financials } from "./Financials";
import { Summary } from "./Summary";
import { Statistics } from "./Statistics";
import { Profile } from "./Profile";
import { Insights } from "./Insights";

// const apiUrl = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2";
const apiUrl = "/";

const defaultCfg = {
  apiUrl,
  symbol: "TSLA",
  value: {}
};

/* Yahoo Type Class Methods */
const _getSummary = obj => request(obj, Summary)("get-summary");
const _getFinancials = obj => request(obj, Financials)("get-financials");
const _getStatistics = obj => request(obj, Statistics)("get-statistics");
const _getProfile = obj => request(obj, Profile)("get-profile");
const _getInsights = obj => request(obj, Insights)("get-insights");

/* Yahoo Public Type Class */
export const Yahoo = (obj = defaultCfg) => ({
  __typeclass: "Yahoo",
  data: () => obj,
  summary: () => _getSummary(Summary(obj)),
  financials: () => _getFinancials(Financials(obj)),
  statistics: () => _getStatistics(Statistics(obj)),
  profile: () => _getProfile(Profile(obj)),
  insights: () => _getInsights(Insights(obj)),
  pick: (...props) => _pick(Yahoo(obj), props)
});

Object.defineProperty(Yahoo, Symbol.hasInstance, {
  value: instance => instance["__typeclass"] === "Yahoo"
});
