import { useState, useEffect } from "react";
import { Yahoo } from "../rapidApi/Yahoo";
import _ from "lodash";

const useYahoo = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await Yahoo()[props[0]]().data();

        if (!props) {
          setError(true);
          setData({
            errorType: "ReferenceError",
            message:
              "Expected an object argument (array of strings) as props but instead received null",
          });
        }

        if (props && typeof props !== "object") {
          setError(true);
          setData({
            errorType: "TypeError",
            message: `Received 'props' argument of type ${typeof props}. Expected type of object (array of strings).`,
          });
        }

        if (props) {
          const spliced = [...props].splice(1);
          const result = await spliced.reduce(
            (prev, curr) => {
              if (prev[curr]) {
                return _.pick(prev, curr)[curr];
              } else {
                setError(true);
                setLoading(false);
                return { 
                  errorType:  "ReferenceError",
                  message: `Cannot find property '${curr}' on the current object`
                }
              }
            },
            res.default
          );
          setData(result);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, error, data };
};

export default useYahoo;
