// module-loader.js
import ModuleRegistry from "../module-registry.js";

export function registerModule(moduleObject) {
  const { moduleId } = moduleObject;

  // ENG-LERC-STC-001 → ["ENG", "LERC", "STC", "001"]
  const [discipline, project, domain] = moduleId.split("-");

  if (!ModuleRegistry[discipline]) {
    ModuleRegistry[discipline] = {};
  }

  if (!ModuleRegistry[discipline][project]) {
    ModuleRegistry[discipline][project] = {};
  }

  if (!ModuleRegistry[discipline][project][domain]) {
    ModuleRegistry[discipline][project][domain] = {};
  }

  ModuleRegistry[discipline][project][domain][moduleId] = moduleObject;
}

export function getModules(discipline, project, domain) {
  return (
    ModuleRegistry?.[discipline]?.[project]?.[domain] || {}
  );
}
