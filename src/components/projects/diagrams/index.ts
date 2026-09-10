import type { ComponentType } from "react";
import type { DiagramId } from "../../../content/caseStudies/types";
import ProcessDiagram from "./ProcessDiagram";
import RuleGraphDiagram from "./RuleGraphDiagram";
import LoadPlanDiagram from "./LoadPlanDiagram";
import FlowDiagram from "./FlowDiagram";
import ForecastDiagram from "./ForecastDiagram";
import ScheduleDiagram from "./ScheduleDiagram";

// Every id a case study can reference has to resolve to a component here, so a
// figure with no drawing is a type error rather than a hole in the page.
export const diagrams: Record<DiagramId, ComponentType> = {
  "mgp-process": ProcessDiagram,
  "mgp-rule-graph": RuleGraphDiagram,
  "mgp-load-plan": LoadPlanDiagram,
  "fh-flow": FlowDiagram,
  "fh-forecast": ForecastDiagram,
  "fh-schedule": ScheduleDiagram,
};
