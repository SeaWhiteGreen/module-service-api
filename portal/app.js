// ---------------------------------------------
// Module Registry
// ---------------------------------------------
const modules = [
  {
    moduleId: "lerc-overview",
    title: "LERC Overview",
    description: "Introduction to the Lewiston Energy Resilience Complex and its integrated LNG-to-power architecture.",
    content: `
      <h2>LERC Overview</h2>
      <p>
        The Lewiston Energy Resilience Complex (LERC) is a modular LNG-to-power system
        designed for rapid deployment, high reliability, and integrated resilience.
      </p>
    `
  },
  {
    moduleId: "lng-supply",
    title: "LNG Supply Chain",
    description: "Understanding LNG sourcing, logistics, and delivery pathways.",
    content: `
      <h2>LNG Supply Chain</h2>
      <p>
        This module covers LNG procurement, transportation, storage, and regasification
        workflows relevant to the Option Energy Complex.
      </p>
    `
  },
  {
    moduleId: "power-generation",
    title: "Power Generation",
    description: "How LNG is converted into reliable electrical power.",
    content: `
      <h2>Power Generation</h2>
      <p>
        Explore turbine selection, thermal efficiency, emissions control, and system
        integration for continuous power output.
      </p>
    `
  },
  {
    moduleId: "resilience-systems",
    title: "Resilience Systems",
    description: "Redundancy, black-start capability, and emergency operations.",
    content: `
      <h2>Resilience Systems</h2>
      <p>
        Learn how LERC maintains operations during grid instability, outages, and
        emergency conditions.
      </p>
    `
  }
];

// ---------------------------------------------
// Render Module List in Sidebar
// ---------------------------------------------
function renderModuleList() {
  const list = document.getElementById("module-list");
  list.innerHTML = "";

  modules.forEach((mod) => {
    const li = document.createElement("li");
    li.textContent = mod.title;
    li.onclick = () => loadModule(mod.moduleId);
    list.appendChild(li);
  });
}

// ---------------------------------------------
// Load Module Content into Main Panel
// ---------------------------------------------
function loadModule(moduleId) {
  const container = document.getElementById("module-container");
  const mod = modules.find((m) => m.moduleId === moduleId);

  if (!mod) {
    container.innerHTML = "<p>Module not found.</p>";
    return;
  }

  container.innerHTML = `
    <h2>${mod.title}</h2>
    <p>${mod.description}</p>
    <div class="module-body">${mod.content}</div>
  `;
}

// ---------------------------------------------
// Initialize on Page Load
// ---------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderModuleList();
});
