document.addEventListener("DOMContentLoaded", () => {
  renderSiteMetadata();
  renderProjects("all");
  renderPrivacyPolicies();
  setupFilters();
});

function renderSiteMetadata() {
  document.getElementById("brand-badge").textContent = SITE_CONFIG.brandBadge;
  document.getElementById("brand-title").textContent = SITE_CONFIG.brandTitle;
  document.getElementById("nav-github").href = SITE_CONFIG.githubUrl;

  document.getElementById("hero-chip").textContent = SITE_CONFIG.heroChip;
  document.getElementById("hero-title").textContent = SITE_CONFIG.heroTitle;
  document.getElementById("hero-desc").textContent = SITE_CONFIG.heroDescription;
  document.getElementById("hero-github").href = SITE_CONFIG.githubUrl;

  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("footer-studio").textContent =
    `${SITE_CONFIG.brandBadge.replace("⚡ ", "")} ${SITE_CONFIG.brandTitle}`;
  const footerLink = document.getElementById("footer-github");
  footerLink.href = SITE_CONFIG.githubUrl;
  footerLink.textContent = SITE_CONFIG.developerName;
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });
}

function renderProjects(filterCategory) {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  const filtered =
    filterCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filterCategory);

  if (filtered.length === 0) {
    grid.innerHTML =
      '<p style="color: var(--text-muted); grid-column: 1 / -1;">No hay proyectos registrados en esta categoría todavía.</p>';
    return;
  }

  filtered.forEach((project) => {
    const card = document.createElement("div");
    card.className = `card ${project.isDev ? "is-dev" : ""}`;

    const tagsHtml = project.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    let actionsHtml = "";
    if (project.actions && project.actions.length > 0) {
      actionsHtml = project.actions
        .map((act) => {
          const btnClass = act.style === "primary" ? "btn-primary" : "btn-secondary";
          const targetAttr = act.external ? 'target="_blank" rel="noopener noreferrer"' : "";
          return `<a href="${act.url}" ${targetAttr} class="btn ${btnClass}" style="width: 100%; font-size: 0.85rem;">${act.label}</a>`;
        })
        .join("");
    } else if (project.statusText) {
      actionsHtml = `<span class="card-status-text">${project.statusText}</span>`;
    }

    card.innerHTML = `
      <div>
        <span class="card-badge badge-${project.badgeColor}">${project.badge}</span>
        <h3>${project.title}</h3>
        <p class="desc">${project.description}</p>
        <div class="card-tags">${tagsHtml}</div>
      </div>
      <div class="card-actions">
        ${actionsHtml}
      </div>
    `;

    grid.appendChild(card);
  });
}

function renderPrivacyPolicies() {
  const container = document.getElementById("privacy-container");
  container.innerHTML = "";

  PRIVACY_POLICIES.forEach((policy) => {
    const permsHtml = policy.permissions
      .map((p) => `<li><strong>${p.name}</strong> ${p.detail}</li>`)
      .join("");

    const box = document.createElement("div");
    box.className = "privacy-box";
    box.id = policy.anchorId;

    box.innerHTML = `
      <h2>Política de Privacidad de ${policy.appName}</h2>
      <p><em>Última actualización: ${policy.lastUpdated}</em></p>

      <h3>1. Información General</h3>
      <p>${policy.intro}</p>

      <h3>2. Recopilación de Datos Personales</h3>
      <p>${policy.dataCollection}</p>

      <h3>3. Permisos del Dispositivo</h3>
      <ul>${permsHtml}</ul>

      <h3>4. Servicios de Terceros y Publicidad</h3>
      <p>${policy.thirdParty}</p>

      <h3>5. Contacto</h3>
      <p>Si tienes preguntas o sugerencias respecto a esta política de privacidad, puedes contactar al desarrollador a través de nuestro repositorio oficial en <a href="${SITE_CONFIG.githubUrl}" target="_blank">GitHub @${SITE_CONFIG.developerName}</a>.</p>
    `;

    container.appendChild(box);
  });
}
