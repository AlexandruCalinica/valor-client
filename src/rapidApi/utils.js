import fetchMock from "fetch-mock";
import _ from "lodash";

import * as summaryData from "../getSummary.json";
import * as financialData from "../getFinancials.json";
import * as statisticsData from "../getStatistics.json";
import * as profileData from "../getProfile.json";
import * as insightsData from "../getInsights.json";

const apiUrl = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2";

fetchMock.config.fallbackToNetwork = true;

fetchMock
  .get(`${apiUrl}/get-summary?symbol=TSLA`, summaryData, { delay: 2000 })
  .get(`${apiUrl}/get-financials?symbol=TSLA`, financialData, { delay: 2000 })
  .get(`${apiUrl}/get-statistics?symbol=TSLA`, statisticsData, { delay: 2000 })
  .get(`${apiUrl}/get-profile?symbol=TSLA`, profileData, { delay: 2000 })
  .mock(`${apiUrl}/get-insights?symbol=TSLA`, insightsData, { delay: 2000 });

const headers = {
  "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  "x-rapidapi-key": "31fe199705mshd186661ad5617a6p1e4fb2jsn28d0de1a26f0",
};

/* Utils */

export const get = async (url, endPoint) => {
  try {
    /* First search for cached responses */
    const cache = await caches.open("queries");
    const cachedResponse = await cache.match(`${url}${endPoint}`);

    /* If there is a cached response => return it */
    if (cachedResponse) {
      return await cachedResponse.json();
    }

    /* If there is no response cached => fetch remote data => cache the response */
    if (!cachedResponse) {
      const response = await fetch(`${apiUrl}${endPoint}`, { headers });
      const data = await response.json();
      const cache = await caches.open("queries");
      await cache.put(`${url}${endPoint}`, new Response(JSON.stringify(data)));
      return data;
    }
  } catch (e) {
    console.error(`Could not get ${url}${endPoint}`, e);
    return { data: null };
  }
};

export const request = (obj, Type) => (endPoint) =>
  Type(get(obj.data().apiUrl, `/${endPoint}?symbol=${obj.data().symbol}`));

export const pickProp = (obj) => async (prop) => {
  const values = await obj.data();
  const pickedProp = _.pick(values.default, prop);
  return pickedProp[prop];
};
