import FormulaPage from "../views/Formula/FormulaPage";
import StoryPage from "../views/Story/StoryPage";
import AnalysisPage from "../views/Analysis/AnalysisPage";

export const MainRoutes = [
  {
    path: "/formulas",
    route: "/formulas",
    title: "Formulas",
    Component: FormulaPage,
  },
  {
    path: "/story/:id",
    route: "/story",
    title: "Story",
    Component: StoryPage,
  },
  {
    path: "/analysis/:indx",
    route: "/analysis",
    title: "Analysis",
    Component: AnalysisPage,
  },
];
