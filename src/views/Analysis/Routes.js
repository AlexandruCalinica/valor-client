import Industry from "./Industry/Industry";
import Business from "./Business/Business";
import Financial from "./Financial/Financial";
import Management from "./Management/Management";
import Growth from "./Growth/Growth";
import Valuation from "./Valuation/Valuation";
import Target from "./Target/Target";

export const Routes = [
  {
    path: "/analysis/:indx/industry",
    route: "industry",
    title: "Industry",
    Component: Industry,
  },
  {
    path: "/analysis/:indx/business",
    route: "business",
    title: "Business",
    Component: Business,
  },
  {
    path: "/analysis/:indx/financial",
    route: "financial",
    title: "Financial",
    Component: Financial,
  },
  {
    path: "/analysis/:indx/management",
    route: "management",
    title: "Management",
    Component: Management,
  },
  {
    path: "/analysis/:indx/growth",
    route: "growth",
    title: "Growth",
    Component: Growth,
  },
  {
    path: "/analysis/:indx/valuation",
    route: "valuation",
    title: "Valuation",
    Component: Valuation,
  },
  {
    path: "/analysis/:indx/target",
    route: "target",
    title: "Target",
    Component: Target,
  },
];
