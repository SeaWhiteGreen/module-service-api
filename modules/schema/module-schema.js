// module-schema.js
// Canonical module shape for module-service-api

export const ModuleSchema = {
  moduleId: "",        // "ENG-LERC-STC-001"
  project: "",         // "LERC"
  category: "",        // "Engineering" | "Financial" | "Regulatory"
  domain: "",          // "STC" | "PRC" | "SYS" | "DTW" | "SFC" | "DOC" | ...

  title: "",
  description: "",

  assignments: [],      // core tasks
  deliverables: [],     // concrete outputs
  sourceMaterial: [],   // folders / files / repositories
  referenceLinks: []    // external URLs
};
