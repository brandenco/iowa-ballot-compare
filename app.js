(() => {
  const E = window.ELECTION;
  const L = window.LEGISLATURE;
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // "Iowa Public Radio — Meet the candidates" → "Iowa Public Radio"
  const outlet = (key) => {
    const src = E.sources[key];
    if (!src) return "";
    return src.label.split(" — ")[0];
  };

  const sourceLinks = (keys) =>
    `<span class="src">Source: ${keys
      .map((k) => `<a href="${esc(E.sources[k].url)}" title="${esc(E.sources[k].label)}" target="_blank" rel="noopener">${esc(outlet(k))}</a>`)
      .join(", ")}</span>`;

  const issueKeys = (race) => Object.keys(E.issues).filter((k) => race.positions[k]);

  const state = { view: "race", issue: "health", hideEmpty: false };

  // ── Countdown ──────────────────────────────────────────────
  {
    const [y, m, d] = E.date.split("-").map(Number);
    const election = new Date(y, m - 1, d);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Math.round((election - today) / 86400000);
    const el = $("#countdown");
    if (days > 1) el.innerHTML = `<strong>${days}</strong> days until Election Day`;
    else if (days === 1) el.innerHTML = `Election Day is <strong>tomorrow</strong>`;
    else if (days === 0) el.innerHTML = `<strong>Today</strong> is Election Day. Polls close at 8 p.m.`;
    else el.textContent = "The November 3, 2026 election has passed.";
    $("#updated").textContent = new Date(E.updated + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    $("#updated").setAttribute("datetime", E.updated);
  }

  // ── Ballot (hero table of contents) ────────────────────────
  {
    const items = [];
    let group = null;
    for (const r of E.races) {
      if (r.group !== group) {
        group = r.group;
        items.push(`<li class="group">${esc(group === "Federal" ? "Federal offices" : "State offices")}</li>`);
      }
      const who = r.candidates.map((c) => c.short || c.name.split(" ").slice(-1)[0]).join(", ");
      items.push(`<li><a href="#${r.id}"><span class="oval" aria-hidden="true"></span><span class="race">${esc(r.title)}<span class="who">${esc(who)}</span></span></a></li>`);
    }
    items.push(`<li class="group">Also on the ballot</li>`);
    items.push(`<li><a href="#measures"><span class="oval" aria-hidden="true"></span><span class="race">Public Measure 1<span class="who">Income tax amendment</span></span></a></li>`);
    items.push(`<li><a href="#legislature"><span class="oval" aria-hidden="true"></span><span class="race">Iowa House &amp; Senate<span class="who">Find your district</span></span></a></li>`);
    items.push(`<li><a href="#judges"><span class="oval" aria-hidden="true"></span><span class="race">Judges<span class="who">Keep or remove</span></span></a></li>`);
    $("#ballot-list").innerHTML = items.join("");

    $("#ballot-list").addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      if (state.view !== "race" && a.getAttribute("href").startsWith("#") && E.races.some((r) => "#" + r.id === a.getAttribute("href"))) {
        setView("race");
      }
      $("#ballot-list").querySelectorAll("a").forEach((x) => x.removeAttribute("aria-current"));
      a.setAttribute("aria-current", "true");
    });
  }

  // ── By-race view ───────────────────────────────────────────
  function candHeader(c) {
    return `<div class="cand">
      <h3>${esc(c.name)}</h3>
      <span class="party">${esc(c.party === "No Party" ? "No party (independent)" : c.party)}</span>
      <span class="home">${esc(c.city)}</span>
      ${c.incumbent ? `<span class="tag">Incumbent</span>` : ""}
      ${c.running ? `<p class="mate"><b>Running mate:</b> ${esc(c.running)}</p>` : ""}
      <p class="bio">${esc(c.bio)}</p>
      ${c.site ? `<a class="site" href="${esc(c.site)}" target="_blank" rel="noopener">Campaign website</a>` : ""}
    </div>`;
  }

  function renderRace(r) {
    const keys = issueKeys(r);
    const rows = keys
      .filter((k) => !state.hideEmpty || r.candidates.some((c) => r.positions[k][c.id]))
      .map((k) => {
        const cells = r.candidates
          .map((c) => {
            const p = r.positions[k][c.id];
            const body = p
              ? `<p class="pos">${esc(p.t)}</p>${sourceLinks(p.s)}`
              : `<span class="none">No stated position found</span>`;
            return `<div class="cell"><span class="cell-name">${esc(c.name)}</span>${body}</div>`;
          })
          .join("");
        return `<div class="issue-label">${esc(E.issues[k])}</div>${cells}`;
      })
      .join("");

    const where = r.everyone
      ? `<p class="where all">Every Iowa voter decides this race.</p>`
      : `<p class="where some">Only voters in this district: ${esc(r.district)}.</p>`;

    return `<section class="block" id="${r.id}" aria-labelledby="${r.id}-h">
      <h2 id="${r.id}-h">${esc(r.title)}</h2>
      ${where}
      <p class="about">${esc(r.about)}</p>
      ${r.note ? `<p class="note">${esc(r.note)}</p>` : ""}
      <div class="compare" style="--cols:${r.candidates.length}" role="group" aria-label="${esc(r.title)} comparison">
        <div class="corner">Candidates in the order of the Secretary of State's list.</div>
        ${r.candidates.map(candHeader).join("")}
        ${rows}
      </div>
    </section>`;
  }

  function renderRaceView() {
    $("#race-view").innerHTML = E.races.map(renderRace).join("");
  }

  // ── By-issue view ──────────────────────────────────────────
  function renderIssueView() {
    const k = state.issue;
    const races = E.races.filter((r) => r.positions[k]);
    const parts = races.map((r) => {
      const cands = r.candidates.filter((c) => !state.hideEmpty || r.positions[k][c.id]);
      return `<div class="issue-race">
        <h3><a href="#${r.id}" data-goto="${r.id}">${esc(r.title)}</a></h3>
        <div class="issue-grid">${cands
          .map((c) => {
            const p = r.positions[k][c.id];
            return `<div><h4>${esc(c.name)}</h4><span class="party">${esc(c.party)}</span>${
              p ? `<p class="pos">${esc(p.t)}</p>${sourceLinks(p.s)}` : `<span class="none">No stated position found</span>`
            }</div>`;
          })
          .join("")}</div>
      </div>`;
    });
    $("#issue-view").innerHTML = `<div class="issue-view-head"><h2>${esc(E.issues[k])}</h2>
      <p class="about">Every federal and statewide race where at least one candidate has a stated position on this issue.</p></div>
      ${parts.join("") || `<p class="issue-empty">No candidate positions on this issue yet.</p>`}`;
  }

  {
    const opts = Object.entries(E.issues)
      .filter(([k]) => E.races.some((r) => r.positions[k]))
      .map(([k, label]) => `<option value="${k}">${esc(label)}</option>`);
    $("#issue-select").innerHTML = opts.join("");
    $("#issue-select").value = state.issue;
    $("#issue-select").addEventListener("change", (e) => {
      state.issue = e.target.value;
      renderIssueView();
    });
  }

  $("#issue-view").addEventListener("click", (e) => {
    const a = e.target.closest("[data-goto]");
    if (!a) return;
    e.preventDefault();
    setView("race");
    document.getElementById(a.dataset.goto).scrollIntoView();
    history.replaceState(null, "", "#" + a.dataset.goto);
  });

  function setView(view) {
    state.view = view;
    document.querySelectorAll(".seg button").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.view === view)));
    $("#race-view").hidden = view !== "race";
    $("#issue-view").hidden = view !== "issue";
    $(".issue-pick").hidden = view !== "issue";
    if (view === "issue") renderIssueView();
  }

  document.querySelectorAll(".seg button").forEach((b) =>
    b.addEventListener("click", () => {
      setView(b.dataset.view);
      // Switching views changes the page height; land at the top of the new view.
      const top = $("#races").getBoundingClientRect().top + window.scrollY - $(".toolbar").offsetHeight;
      if (window.scrollY > top) window.scrollTo({ top });
    })
  );

  $("#hide-empty").addEventListener("change", (e) => {
    state.hideEmpty = e.target.checked;
    renderRaceView();
    if (state.view === "issue") renderIssueView();
  });

  // ── Ballot measures & judges ───────────────────────────────
  $("#measures").innerHTML =
    `<h2 id="measures-h">Ballot measure</h2>
     <p class="where all">Every Iowa voter decides this question. Your county may add local measures too.</p>` +
    E.measures
      .map(
        (m) => `<article class="measure">
        <h3>${esc(m.title)}</h3>
        <p>${esc(m.text)}</p>
        <div class="yesno">
          <div><b>Yes</b>${esc(m.yes)}</div>
          <div><b>No</b>${esc(m.no)}</div>
        </div>
        <div class="args">
          <div><h4>Supporters say</h4><p>${esc(m.forArgs)}</p></div>
          <div><h4>Opponents say</h4><p>${esc(m.againstArgs)}</p></div>
        </div>
        <p>${esc(m.history)} ${esc(m.threshold)}</p>
        ${sourceLinks(m.s)}
      </article>`
      )
      .join("");

  $("#judges").innerHTML = `<h2 id="judges-h">Judges</h2>
    <p class="about">${esc(E.judges.text)}</p>
    <p><strong>Iowa Court of Appeals, on every ballot:</strong></p>
    <ul class="judge-list">${E.judges.appeals.map((j) => `<li>${esc(j)}</li>`).join("")}</ul>
    ${sourceLinks(E.judges.s)}`;

  // ── Legislature ────────────────────────────────────────────
  const legCard = (chamber, n) => {
    const list = L[chamber][n] || [];
    const title = `${chamber === "senate" ? "Iowa Senate" : "Iowa House"} District ${n}`;
    const unopposed = list.length === 1 ? `<p class="unopposed">Unopposed on the ballot.</p>` : "";
    return `<div class="leg-card"><h3>${title}</h3><ul>${list
      .map(
        (c) => `<li><span class="nm">${esc(c.name)}</span><span class="meta">${esc(c.party === "No Party" ? "No party" : c.party)}, ${esc(c.city)}<br>
          <a href="https://ballotpedia.org/wiki/index.php?search=${encodeURIComponent(c.name)}" target="_blank" rel="noopener">Look up on Ballotpedia</a></span></li>`
      )
      .join("")}</ul>${unopposed}</div>`;
  };

  {
    const sen = Object.keys(L.senate).map(Number).sort((a, b) => a - b);
    const hou = Object.keys(L.house).map(Number).sort((a, b) => a - b);
    $("#senate-select").innerHTML = `<option value="">Choose…</option><option value="none">Even-numbered (not on ballot)</option>` + sen.map((n) => `<option value="${n}">District ${n}</option>`).join("");
    $("#house-select").innerHTML = `<option value="">Choose…</option>` + hou.map((n) => `<option value="${n}">District ${n}</option>`).join("");

    const update = () => {
      const s = $("#senate-select").value;
      const h = $("#house-select").value;
      const out = [];
      if (s === "none") out.push(`<div class="leg-card"><h3>Iowa Senate</h3><p>Even-numbered Senate districts aren't on the ballot this year. Those seats are next elected in 2028.</p></div>`);
      else if (s) out.push(legCard("senate", s));
      if (h) out.push(legCard("house", h));
      $("#leg-results").innerHTML = out.join("");
    };
    $("#senate-select").addEventListener("change", update);
    $("#house-select").addEventListener("change", update);

    const table = (chamber, nums, caption) => `<table class="leg-table"><caption>${caption}</caption>
      <thead><tr><th scope="col">District</th><th scope="col">Candidates</th></tr></thead>
      <tbody>${nums
        .map(
          (n) => `<tr><th scope="row">${n}</th><td>${L[chamber][n]
            .map((c) => `${esc(c.name)} (${esc(c.party === "No Party" ? "No party" : c.party)}, ${esc(c.city)})`)
            .join("<br>")}${L[chamber][n].length === 1 ? ` <em>unopposed</em>` : ""}</td></tr>`
        )
        .join("")}</tbody></table>`;
    $("#leg-all").innerHTML = table("senate", sen, "Iowa Senate") + table("house", hou, "Iowa House");
  }

  renderRaceView();
})();
