import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

const url =
  "http://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=";

const useWiki = (title) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        /* First search for cached responses */
        const cache = await caches.open("wikiQueries");
        const cachedResponse = await cache.match(`${url}${title}`);

        /* If there is a cached response => return it */
        if (cachedResponse) {
          const json = await cachedResponse.json();
          const values = Object.values(json.query.pages);
          setData(ReactHtmlParser(values[0].extract));
        }

        /* If there is no response cached => fetch remote data => cache the response */
        if (!cachedResponse) {
          setLoading(true);

          const res = await fetch(`${url}${title}`, {});
          const json = await res.json();
          const values = Object.values(json.query.pages);

          const cache = await caches.open("wikiQueries");
          await cache.put(`${url}${title}`, new Response(JSON.stringify(json)));

          setData(ReactHtmlParser(values[0].extract));
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(true);
        console.log(e);
      }
    })();
  }, []);

  return { error, loading, data };
};

export default useWiki;
