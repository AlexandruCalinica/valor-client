import { pickProp } from "./utils";
import { _pick } from "./shared";

/* Insights Private Type Class */
export const Insights = (obj) => ({
  __typeclass: "Insights",
  data: () => obj,
  finance: () => _finance(Insights(obj)),
  pick: (...props) => _pick(Insights(obj), props),
})

/* Insights Type Class Methods */
const _finance = (obj) => pickProp(obj)("finance");

Object.defineProperty(Insights, Symbol.hasInstance, {
  value: (instance) => instance["__typeclass"] === "Insights",
});