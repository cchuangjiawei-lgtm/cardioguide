const NAV = [
  { id: 'overview', title: 'Overview', icon: '🏠', top: true },
  { id: 'first30', title: '30-Day Checklist', icon: '✅', top: true },
  {
    id: 'grp-training', label: 'Training Programme',
    children: [
      { id: 'programme', title: 'Programme Overview' },
      { id: 'st4', title: 'ST4 — Year 1' },
      { id: 'st5', title: 'ST5 — Year 2' },
      { id: 'st6plus', title: 'ST6–ST8 Advanced' },
    ]
  },
  {
    id: 'grp-curriculum', label: '2022 Curriculum',
    children: [
      { id: 'cip-framework', title: 'CiP Framework' },
      { id: 'specialty-cips', title: 'Core Specialty CiPs' },
      { id: 'advanced-themes', title: 'Advanced Themes' },
    ]
  },
  {
    id: 'grp-arcp', label: 'ARCP & Assessment',
    children: [
      { id: 'arcp-checklists', title: '✅ Year Checklists' },
      { id: 'arcp-outcomes', title: 'ARCP Outcomes' },
      { id: 'sles', title: 'SLE Requirements' },
      { id: 'eportfolio', title: 'ePortfolio Tips' },
    ]
  },
  {
    id: 'grp-guidelines', label: 'Guidelines Hub',
    children: [
      { id: 'gl-overview', title: 'Quick Reference' },
      { id: 'gl-acs', title: 'ACS (ESC 2023)' },
      { id: 'gl-hf', title: 'Heart Failure' },
      { id: 'gl-af', title: 'Atrial Fibrillation' },
      { id: 'gl-htn', title: 'Hypertension' },
      { id: 'gl-vhd', title: 'Valvular Disease' },
    ]
  },
  {
    id: 'grp-procedures', label: 'Procedures',
    children: [
      { id: 'echo', title: 'Echo (BSE Pathway)' },
      { id: 'cathlab', title: 'Cath Lab' },
      { id: 'pacing', title: 'Pacing & Devices' },
    ]
  },
  { id: 'ecg', title: 'ECG Mastery', icon: '⚡', top: true },
  { id: 'resources', title: 'Resources', icon: '🔗', top: true },
];

const SECTION_PROMPTS = {
  overview: ['Give me a big picture of what ST4 cardiology training involves','What should I do in the 4 months before starting ST4?','What are the most important habits to build from day 1?'],
  first30: ['Walk me through exactly what to prioritise in my first week','What are the most common mistakes new ST4s make?','How do I approach my first ARCP preparation from day 1?'],
  programme: ['Explain the dual CCT system in cardiology','What does a typical ST4 week look like in London?','How does training differ across the 5 years?'],
  st4: ['What are the absolute minimum requirements for a satisfactory ST4 ARCP?','How should I approach my Educational Supervisor meeting?','Give me a study plan for my first 6 months as ST4'],
  st5: ['What should I have achieved by end of ST5?','When should I start thinking about my advanced theme?','How does procedural training progress in ST5?'],
  st6plus: ['Explain the 5 advanced themed pathways in detail','How do I choose between electrophysiology and imaging?','What does CCT preparation look like?'],
  'cip-framework': ['Explain what CiPs are and how they differ from the old curriculum','How are CiPs assessed day to day?','What is an entrustable professional activity?'],
  'specialty-cips': ['Quiz me on the 5 specialty CiPs with clinical vignettes','What does CiP 2 (heart failure) require me to demonstrate?','How do I get sign-off on a CiP?'],
  'advanced-themes': ['Help me decide which advanced theme suits me','What does interventional cardiology training involve?','Compare EP vs advanced imaging as pathways'],
  'arcp-checklists': ['Am I on track for a satisfactory ST4 ARCP?','What are the most important things to complete before my first ARCP?','What do ARCP panels look for beyond minimum SLEs?'],
  'arcp-outcomes': ['What causes trainees to get an ARCP outcome 2 or 3?','What should my ePortfolio look like before ARCP?','Give me an ARCP preparation checklist'],
  sles: ['Explain the difference between mini-CEX, CBD, DOPS and ACAT','How do I write a good reflective CBD entry?','What makes a high-quality MSF response?'],
  eportfolio: ['How should I structure my ePortfolio time each week?','What do ARCP panels look for beyond the minimum SLEs?','How do I demonstrate progression in my ePortfolio?'],
  'gl-overview': ['Which ESC guidelines should I read first as an ST4?','What changed in the 2024 AF guidelines?','Summarise the most important 2025 ESC updates'],
  'gl-acs': ['Walk me through the ESC 2023 ACS pathway for NSTEMI','Quiz me on ACS management with a clinical vignette','What is the antiplatelet strategy after ACS and for how long?'],
  'gl-hf': ['Teach me the four pillars of HFrEF therapy with doses','Quiz me: a 62-year-old with new HFrEF LVEF 28% — management?','What changed in the 2023 HF focused update?'],
  'gl-af': ['Explain the ABC pathway for AF','When do I choose rate control vs rhythm control in AF?','Quiz me on DOAC selection in AF'],
  'gl-htn': ['Walk me through the ESC 2024 hypertension treatment algorithm','What are the blood pressure targets in different patient groups?','When should I screen for secondary hypertension?'],
  'gl-vhd': ['When is TAVI preferred over SAVR in aortic stenosis?','Teach me the severity criteria for aortic and mitral valve disease','Quiz me on timing of intervention in valvular heart disease'],
  echo: ['How do I start my BSE accreditation portfolio?','Teach me how to measure LVEF using biplane Simpson','What are the echocardiographic criteria for severe aortic stenosis?'],
  cathlab: ['What should I do to get the most out of cath lab sessions as ST4?','Teach me normal coronary anatomy for angiography','What are the radiation safety principles in the cath lab?'],
  pacing: ['What are the indications for a permanent pacemaker?','Explain CRT criteria and patient selection','How do I insert a temporary pacing wire? Walk me through it.'],
  ecg: ['Quiz me on 10 ECGs — give me clinical vignettes','Teach me Sgarbossa criteria for MI in LBBB','Walk me through differentiating VT from SVT with aberrancy'],
  resources: ['What should I read in my 4 months before starting ST4?','Which online platforms are best for learning cardiology?','Build me a 4-month self-study plan before ST4 starts'],
};

const SECTIONS = {

overview: `
<div class="section-title">Welcome to ST4 Cardiology Training</div>
<div class="section-subtitle">Your complete guide to the UK cardiology training programme, starting in London.</div>

<div class="stat-grid">
  <div class="stat-card"><div class="stat-num">5</div><div class="stat-label">Years Training (ST4–ST8)</div></div>
  <div class="stat-card"><div class="stat-num">2</div><div class="stat-label">CCTs Awarded (Cardiology + IMS2)</div></div>
  <div class="stat-card"><div class="stat-num">19</div><div class="stat-label">CiPs to Achieve</div></div>
  <div class="stat-card"><div class="stat-num">5</div><div class="stat-label">Advanced Sub-specialties</div></div>
</div>

<div class="info-box blue"><span class="info-box-icon">ℹ️</span><div>You are entering an ST4 post in London under the <strong>JRCPTB 2022 Cardiology Curriculum</strong>, implemented August 2022. Training uses a <strong>Capabilities in Practice (CiP)</strong> model — you progress by demonstrating competence, not just by serving time.</div></div>

<div class="card">
  <div class="card-title">Training at a Glance</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Year</th><th>Grade</th><th>Focus</th><th>Key Milestone</th></tr>
    <tr><td><span class="pill pill-blue">Year 1</span></td><td>ST4</td><td>Safe acute cardiology, core skills, ePortfolio foundations</td><td>First ARCP — Outcome 1</td></tr>
    <tr><td><span class="pill pill-blue">Year 2</span></td><td>ST5</td><td>Consolidation, procedural growth, advanced theme thinking</td><td>Echo Level 2 / BSE progress</td></tr>
    <tr><td><span class="pill pill-purple">Year 3</span></td><td>ST6</td><td>Advanced theme begins, growing independence</td><td>Choose advanced pathway</td></tr>
    <tr><td><span class="pill pill-purple">Year 4</span></td><td>ST7</td><td>Senior registrar, teaching juniors, sub-specialty skills</td><td>Fellowship-level procedures</td></tr>
    <tr><td><span class="pill pill-green">Year 5</span></td><td>ST8</td><td>CCT preparation, independent practice ready</td><td>CCT — ARCP Outcome 6</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Key Organisations</div>
  <ul>
    <li><strong>JRCPTB / The Federation</strong> — Runs the training programme, ePortfolio, ARCP decisions. <a href="https://www.thefederation.uk/specialties/cardiology" target="_blank">thefederation.uk</a></li>
    <li><strong>BJCA (British Junior Cardiologists' Association)</strong> — Your trainee organisation. Free. Essential. BJCA.tv for video learning. <a href="https://bjca.tv" target="_blank">bjca.tv</a></li>
    <li><strong>BCS (British Cardiovascular Society)</strong> — Free annual conference, Digital Knowledge Hub. <a href="https://britishcardiovascularsociety.org.uk" target="_blank">bcs.com</a></li>
    <li><strong>ESC (European Society of Cardiology)</strong> — Free basic membership; all guidelines; ESC 365 lectures. <a href="https://www.escardio.org" target="_blank">escardio.org</a></li>
    <li><strong>BSE (British Society of Echocardiography)</strong> — Echo accreditation pathway. <a href="https://www.bsecho.org" target="_blank">bsecho.org</a></li>
  </ul>
</div>

<div class="next-action">
  <div class="next-action-title">📍 You have 4 months — here is your focus</div>
  <div class="next-action-text">Join BCS, BJCA, and ESC today (all quick online sign-ups). Read the ESC ACS and Heart Failure guideline executive summaries. Do 5 ECGs daily on LITFL. Get the Oxford Handbook of Cardiology. Everything else follows from there.</div>
</div>`,

first30: `
<div class="section-title">First 30 Days — Actionable Checklist</div>
<div class="section-subtitle">Interactive checklist. Your progress saves automatically in this browser.</div>

<div class="info-box amber"><span class="info-box-icon">⚠️</span><div>The first 4 weeks set the tone for your entire ST4 year. Prioritise ePortfolio setup, supervisor meetings, and getting on the echo and cath lab lists from Day 1.</div></div>

<div class="card">
  <div class="card-title">📅 Before You Start (Next 4 Months)</div>
  <ul class="checklist" id="cl-pre">
    <li><input type="checkbox" id="c0"><label for="c0">Join BCS (britishcardiovascularsociety.org.uk) — trainee rate ~£90/yr, free annual conference</label></li>
    <li><input type="checkbox" id="c1"><label for="c1">Join BJCA (bjca.tv) — free, trainee videos and handbook</label></li>
    <li><input type="checkbox" id="c2"><label for="c2">Join ESC (escardio.org) — free basic membership, guideline access</label></li>
    <li><input type="checkbox" id="c3"><label for="c3">Join BSE (bsecho.org) — for echo accreditation pathway</label></li>
    <li><input type="checkbox" id="c4"><label for="c4">Download ESC Pocket Guidelines app</label></li>
    <li><input type="checkbox" id="c5"><label for="c5">Read ESC 2023 ACS Guidelines — executive summary</label></li>
    <li><input type="checkbox" id="c6"><label for="c6">Read ESC 2021 Heart Failure Guidelines — management section</label></li>
    <li><input type="checkbox" id="c7"><label for="c7">Read ESC 2024 AF Guidelines — ABC pathway and rate/rhythm control</label></li>
    <li><input type="checkbox" id="c8"><label for="c8">Daily ECG practice — LITFL ECG library, 5 per day</label></li>
    <li><input type="checkbox" id="c9"><label for="c9">Get Oxford Handbook of Cardiology</label></li>
    <li><input type="checkbox" id="c10"><label for="c10">Watch BJCA.tv foundational cardiology video series</label></li>
  </ul>
</div>

<div class="card">
  <div class="card-title">📅 Week 1 — Setup</div>
  <ul class="checklist" id="cl-wk1">
    <li><input type="checkbox" id="c11"><label for="c11">Log in to ePortfolio (Kairos via The Federation) — set up your profile</label></li>
    <li><input type="checkbox" id="c12"><label for="c12">Attend department induction and introduce yourself to all consultants</label></li>
    <li><input type="checkbox" id="c13"><label for="c13">Get your rota — identify echo sessions, cath lab days, EP clinics</label></li>
    <li><input type="checkbox" id="c14"><label for="c14">Email Educational Supervisor to arrange first meeting (aim Week 2)</label></li>
    <li><input type="checkbox" id="c15"><label for="c15">Find out about radiation protection course and book it</label></li>
    <li><input type="checkbox" id="c16"><label for="c16">Get hospital access: IT systems, PACS, lab results</label></li>
    <li><input type="checkbox" id="c17"><label for="c17">Join departmental WhatsApp/Teams groups</label></li>
    <li><input type="checkbox" id="c18"><label for="c18">Find out where the CCU is and attend once in Week 1</label></li>
  </ul>
</div>

<div class="card">
  <div class="card-title">📅 Week 2 — Foundations</div>
  <ul class="checklist" id="cl-wk2">
    <li><input type="checkbox" id="c19"><label for="c19">First Educational Supervisor meeting — agree Personal Development Plan</label></li>
    <li><input type="checkbox" id="c20"><label for="c20">First mini-CEX arranged (aim to complete by end of Week 3)</label></li>
    <li><input type="checkbox" id="c21"><label for="c21">Log first echo observations in BSE logbook</label></li>
    <li><input type="checkbox" id="c22"><label for="c22">Attend Heart Team/MDT meeting and present a case</label></li>
    <li><input type="checkbox" id="c23"><label for="c23">Identify an audit or QI project topic</label></li>
    <li><input type="checkbox" id="c24"><label for="c24">Register for BSE introductory TTE course</label></li>
  </ul>
</div>

<div class="card">
  <div class="card-title">📅 Month 1–3 — Build Momentum</div>
  <ul class="checklist" id="cl-m13">
    <li><input type="checkbox" id="c25"><label for="c25">Complete radiation protection training (required for cath lab)</label></li>
    <li><input type="checkbox" id="c26"><label for="c26">Complete BSE introductory echo course</label></li>
    <li><input type="checkbox" id="c27"><label for="c27">Echo logbook: 50+ studies by Month 3</label></li>
    <li><input type="checkbox" id="c28"><label for="c28">2 mini-CEX, 2 CBD, 1 ACAT logged by Month 3</label></li>
    <li><input type="checkbox" id="c29"><label for="c29">2 DOPS completed (aim: echo + temp pacing or angiography)</label></li>
    <li><input type="checkbox" id="c30"><label for="c30">Attend BCS or BJCA webinar/educational event</label></li>
    <li><input type="checkbox" id="c31"><label for="c31">Read ESC 2024 Hypertension guidelines — treatment algorithm</label></li>
    <li><input type="checkbox" id="c32"><label for="c32">Read ESC 2025 Valvular Heart Disease guidelines — severity criteria</label></li>
  </ul>
</div>

<div class="card">
  <div class="card-title">📅 Month 3–12 — Toward ARCP</div>
  <ul class="checklist" id="cl-m312">
    <li><input type="checkbox" id="c33"><label for="c33">MSF distributed by Month 5 (minimum 10 raters)</label></li>
    <li><input type="checkbox" id="c34"><label for="c34">Patient Survey distributed by Month 5</label></li>
    <li><input type="checkbox" id="c35"><label for="c35">All SLE minimums met: 5 mini-CEX, 5 CBD, 1–2 ACAT, 4–6 DOPS</label></li>
    <li><input type="checkbox" id="c36"><label for="c36">Educational supervisor annual report submitted</label></li>
    <li><input type="checkbox" id="c37"><label for="c37">Review ePortfolio against ARCP decision aid — identify gaps (3 months before ARCP)</label></li>
    <li><input type="checkbox" id="c38"><label for="c38">Present at departmental or regional meeting</label></li>
    <li><input type="checkbox" id="c39"><label for="c39">BSE Level 2 portfolio: working toward 150 studies</label></li>
    <li><input type="checkbox" id="c40"><label for="c40">ALS (Advanced Life Support) if not already done</label></li>
    <li><input type="checkbox" id="c41"><label for="c41">Draft PDP for ST5 ahead of ARCP</label></li>
  </ul>
</div>`,

programme: `
<div class="section-title">Programme Overview</div>
<div class="section-subtitle">Structure, governance, and what to expect across 5 years of cardiology training.</div>

<div class="card">
  <div class="card-title">Training Structure</div>
  <p>Cardiology is a 5-year <strong>Higher Specialty Training (HST)</strong> programme from ST4 to ST8, culminating in a dual <strong>Certificate of Completion of Training (CCT)</strong> in both Cardiology and Internal Medicine Stage 2 (IMS2).</p>
  <p>Training is competency-based using the <strong>2022 Cardiology Curriculum</strong> (GMC-approved, implemented August 2022). Progress is assessed at annual <strong>ARCP</strong> panels rather than being purely time-based.</p>
  <div class="info-box blue"><span class="info-box-icon">📋</span><div>Curriculum document: <a href="https://www.gmc-uk.org/-/media/documents/cardiology-2022-curriculum-final-v1_0_pdf-92049190.pdf" target="_blank">GMC 2022 Cardiology Curriculum PDF</a> — download and read the introduction and CiP sections.</div></div>
</div>

<div class="card">
  <div class="card-title">London Training</div>
  <p>London training is managed through <strong>NHS England (London region)</strong>, formerly Health Education England (HEE). London is divided into sectors (NE, NW, SE, SW Central) and rotations typically include:</p>
  <ul>
    <li>Mix of <strong>District General Hospitals (DGHs)</strong> and <strong>Tertiary Teaching Hospitals</strong></li>
    <li>Each post is 6–12 months, giving exposure to different sub-specialty environments</li>
    <li>Rotations are set by the deanery; you can express preferences but cannot always choose</li>
    <li>London tertiary centres include: Barts, Guys/KCL, Hammersmith (Imperial), St George's, Royal Brompton, UCH, King's</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Typical ST4 Week</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Activity</th><th>Frequency</th><th>What to get out of it</th></tr>
    <tr><td>Acute take / on-call</td><td>Regular</td><td>ACAT cases, acute CiP competencies</td></tr>
    <tr><td>Echo lab sessions</td><td>1–2×/week</td><td>BSE logbook cases; request to hold probe early</td></tr>
    <tr><td>Cath lab</td><td>1–2×/week</td><td>Angiography interpretation; scrub in; DOPS</td></tr>
    <tr><td>Outpatient clinics</td><td>1–2×/week</td><td>Mini-CEX; independent clinical decisions</td></tr>
    <tr><td>Heart Team / MDT</td><td>Weekly</td><td>Present cases; observe decision-making</td></tr>
    <tr><td>Ward rounds</td><td>Daily</td><td>Lead and own management plans</td></tr>
    <tr><td>ePortfolio</td><td>Weekly</td><td>Log SLEs; reflective notes; 1–2 hrs/week</td></tr>
  </table></div>
</div>`,

st4: `
<div class="section-title">ST4 — Year 1</div>
<div class="section-subtitle">Building foundations: safe acute cardiology, core procedural skills, ePortfolio habits.</div>

<div class="info-box green"><span class="info-box-icon">🎯</span><div><strong>Goal for Year 1:</strong> ARCP Outcome 1 at the end of ST4. This requires meeting all minimum SLEs, demonstrating safe clinical practice across the 5 specialty CiPs, and showing procedural progress.</div></div>

<div class="card">
  <div class="card-title">Clinical Priorities</div>
  <ul>
    <li>Competent independently managing the acute take — ACS, acute HF, arrhythmias, PE, pericarditis</li>
    <li>Lead ward rounds and own the discharge planning process</li>
    <li>Contribute meaningfully to Heart Team / MDT meetings</li>
    <li>See and document a breadth of cases across all 5 specialty CiPs</li>
    <li>Start building echo skills from Week 1 — request to hold the probe in every session</li>
    <li>Attend cath lab regularly — aim to understand coronary anatomy by Month 3</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">ePortfolio — ST4 Year 1 Minimum Requirements</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Assessment Tool</th><th>Minimum</th><th>Notes</th></tr>
    <tr><td>Mini-CEX</td><td>5</td><td>By consultants; mix of settings (clinic, ward, acute)</td></tr>
    <tr><td>CBD (Case-Based Discussion)</td><td>5</td><td>Complex cases; consultants; demonstrate clinical reasoning</td></tr>
    <tr><td>ACAT (Acute Care Assessment Tool)</td><td>1–2</td><td>Minimum 5 cases per ACAT; acute take setting</td></tr>
    <tr><td>DOPS (Direct Observation of Procedural Skill)</td><td>4–6 total (across ST4–ST5)</td><td>See procedures table below</td></tr>
    <tr><td>MSF (Multi-Source Feedback)</td><td>1</td><td>Minimum 10 raters; send early (Month 4–5)</td></tr>
    <tr><td>Patient Survey (PS)</td><td>1</td><td>Annual requirement</td></tr>
    <tr><td>Supervisor meetings</td><td>Quarterly</td><td>Educational + Clinical supervisor; record in ePortfolio</td></tr>
    <tr><td>Personal Development Plan (PDP)</td><td>1</td><td>Agree at first meeting; update each quarter</td></tr>
  </table></div>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div>These are <strong>minimums</strong>. ARCP panels expect quality and breadth. Aim for 8–10 mini-CEX/CBD per year, covering all 5 specialty CiPs.</div></div>
</div>

<div class="card">
  <div class="card-title">Procedural Targets — End of ST4</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Procedure</th><th>Target Level</th><th>How to progress</th></tr>
    <tr><td>Transthoracic Echo (TTE)</td><td>Level 2</td><td>Hold probe every session; log cases; BSE portfolio</td></tr>
    <tr><td>Coronary Angiography (diagnostic)</td><td>Level 1–2</td><td>Cath lab sessions; observe, then assist, then perform under supervision</td></tr>
    <tr><td>Temporary Transvenous Pacing</td><td>Level 2</td><td>Simulation first; supervised insertion on call</td></tr>
    <tr><td>DC Cardioversion</td><td>Level 2</td><td>AF/flutter cardioversion lists; supervised</td></tr>
    <tr><td>Permanent Pacemaker</td><td>Level 1</td><td>Observe implants; understand indications</td></tr>
    <tr><td>Pericardiocentesis</td><td>Level 1</td><td>Observe under echo guidance</td></tr>
    <tr><td>Exercise Tolerance Test</td><td>Level 2</td><td>Supervised exercise test supervision</td></tr>
  </table></div>
  <p class="text-muted text-sm">Levels: 1=Observed | 2=Performed with supervision | 3=Independent | 4=Can supervise/teach</p>
</div>

<div class="card">
  <div class="card-title">Knowledge Milestones — ST4</div>
  <ul>
    <li>Fluent in ESC ACS, Heart Failure, and AF guidelines (executive summaries + key algorithms)</li>
    <li>ECG: systematic approach, recognise STEMI/STEMI equivalents, VT, complete heart block, AF, SVT confidently</li>
    <li>Pharmacology: know doses, contraindications, monitoring for all major CV drug classes</li>
    <li>MRCP: Part 1 and Part 2 should be passed (ideally before ST4; essential before CCT)</li>
  </ul>
</div>`,

st5: `
<div class="section-title">ST5 — Year 2</div>
<div class="section-subtitle">Consolidation, procedural growth, and starting to think about your advanced theme.</div>

<div class="card">
  <div class="card-title">Key Progression from ST4</div>
  <ul>
    <li>Greater <strong>clinical independence</strong> — own complex outpatient cases, lead on-call decision-making</li>
    <li>Echo: progress toward <strong>BSE Level 2 written exam</strong> (150 studies threshold)</li>
    <li>Angiography: aim for <strong>Level 2</strong> — performing diagnostic angiograms under supervision</li>
    <li>Start attending specialist clinics in areas of interest for advanced theme exploration</li>
    <li>Begin a formal research, audit, or QI project if not already started</li>
    <li>Aim to present at a regional or national meeting</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Procedural Targets — End of ST5</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Procedure</th><th>ST5 Target</th></tr>
    <tr><td>TTE</td><td>Level 2–3 / working toward BSE Level 2 accreditation (150 studies)</td></tr>
    <tr><td>Coronary Angiography</td><td>Level 2 (performing with supervision, approaching independence)</td></tr>
    <tr><td>Temporary Pacing</td><td>Level 3 (independent)</td></tr>
    <tr><td>DC Cardioversion</td><td>Level 3 (independent)</td></tr>
    <tr><td>TOE (basic)</td><td>Level 1–2</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Advanced Theme — Start Planning</div>
  <p>You commit to an advanced theme at <strong>ST6 (Year 3)</strong>, but use ST5 to explore. Attend specialist sessions, talk to consultants in each area, and consider what excites you clinically.</p>
  <div class="flex flex-wrap gap-1 mt-2">
    <span class="pill pill-blue">Interventional</span>
    <span class="pill pill-teal">Electrophysiology</span>
    <span class="pill pill-purple">Cardiac Imaging</span>
    <span class="pill pill-red">Advanced HF</span>
    <span class="pill pill-green">General/Preventive</span>
  </div>
</div>`,

st6plus: `
<div class="section-title">ST6–ST8 — Advanced Training</div>
<div class="section-subtitle">Sub-specialty focus, senior clinical responsibilities, and CCT preparation.</div>

<div class="card">
  <div class="card-title">ST6 — Year 3: Advanced Theme Begins</div>
  <ul>
    <li>Formal commitment to an advanced themed pathway</li>
    <li>Rotations increasingly tailored to the chosen theme</li>
    <li>Advanced CiP training starts alongside continued core cardiology and IMS2</li>
    <li>Senior AIM (Acute Internal Medicine) responsibilities</li>
    <li>May pursue research attachment or out-of-programme research (OOPR)</li>
  </ul>
</div>
<div class="card">
  <div class="card-title">ST7–ST8 — Years 4–5: Senior Registrar</div>
  <ul>
    <li>Fellowship-level procedural skills in advanced theme area</li>
    <li>Teaching and supervision of ST4/ST5 juniors — log teaching activities in ePortfolio</li>
    <li>Leadership role: audit lead, educational lead, quality improvement</li>
    <li>Research: publications, conference presentations strengthen CCT application</li>
    <li>ST8: CCT preparation, consultant job applications, interview prep</li>
    <li>Final ARCP (Outcome 6 = CCT awarded)</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">The 5 Advanced Themed Pathways</div>
  <div class="grid-2">
    <div class="card" style="margin:0;border-color:#dbeafe"><strong>🔬 Interventional Cardiology</strong><p class="text-sm mt-1">PCI, complex coronary intervention, TAVI, structural (MitraClip, LAA occlusion). High procedural volume. Requires strong cath lab foundation from early training.</p></div>
    <div class="card" style="margin:0;border-color:#cffafe"><strong>⚡ Electrophysiology & Devices</strong><p class="text-sm mt-1">EP studies, catheter ablation (AF, VT, SVT), complex device implantation (CRT, S-ICD, leadless). Strong overlap with arrhythmia medicine.</p></div>
    <div class="card" style="margin:0;border-color:#ede9fe"><strong>🖥️ Advanced Cardiac Imaging</strong><p class="text-sm mt-1">TOE, cardiac MRI (CMR), CT coronary angiography, stress echo, nuclear. Good for trainees who enjoy diagnostic reasoning.</p></div>
    <div class="card" style="margin:0;border-color:#fee2e2"><strong>❤️ Advanced Heart Failure</strong><p class="text-sm mt-1">Advanced HF clinics, mechanical circulatory support (LVAD), transplant assessment, cardiogenic shock. Based in tertiary centres.</p></div>
    <div class="card" style="margin:0;border-color:#d1fae5"><strong>🛡️ General / Preventive Cardiology</strong><p class="text-sm mt-1">Lipid clinic, prevention, rehabilitation, general cardiology. Good for those who prefer clinic-based work or academic interests.</p></div>
  </div>
</div>`,

'cip-framework': `
<div class="section-title">CiP Framework — The 2022 Curriculum</div>
<div class="section-subtitle">Understanding Capabilities in Practice (CiPs) and how you are assessed.</div>

<div class="info-box blue"><span class="info-box-icon">📘</span><div>The 2022 curriculum replaced the old competency framework with <strong>Capabilities in Practice (CiPs)</strong> — a model based on <strong>Entrustable Professional Activities (EPAs)</strong>. You demonstrate capability by showing you can be trusted to perform clinical activities with decreasing supervision over time.</div></div>

<div class="card">
  <div class="card-title">The Three Layers of CiPs</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Layer</th><th>Count</th><th>Description</th></tr>
    <tr><td><strong>Generic CiPs</strong></td><td>6</td><td>Universal to all RCP specialties: professional practice, communication, leadership, education, research, quality improvement</td></tr>
    <tr><td><strong>IMS2 Clinical CiPs</strong></td><td>8</td><td>Internal Medicine Stage 2 — shared across all medical specialties at HST level</td></tr>
    <tr><td><strong>Specialty CiPs (Cardiology)</strong></td><td>5</td><td>Core cardiology clinical areas — you must achieve competency in all 5</td></tr>
    <tr><td><strong>Advanced Themed CiPs</strong></td><td>5 (choose 1)</td><td>Sub-specialty pathway starting Year 3 (ST6)</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">How CiPs Are Assessed</div>
  <p>Each CiP is assessed through your <strong>supervised learning events (SLEs)</strong> — mini-CEX, CBD, DOPS, ACAT — which provide evidence that you are progressing. Your Educational Supervisor and ARCP panel review this evidence to judge whether to sign off each CiP.</p>
  <p>There are <strong>5 levels of supervision</strong> (entrustment levels):</p>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Level</th><th>Meaning</th><th>Typical Stage</th></tr>
    <tr><td>1</td><td>Allowed to observe only</td><td>Early ST4</td></tr>
    <tr><td>2</td><td>Allowed to act under direct supervision</td><td>ST4</td></tr>
    <tr><td>3</td><td>Allowed to act under indirect supervision</td><td>ST5–ST6</td></tr>
    <tr><td>4</td><td>Allowed to act independently</td><td>ST7–ST8</td></tr>
    <tr><td>5</td><td>Allowed to supervise others</td><td>ST8 / Consultant</td></tr>
  </table></div>
</div>`,

'specialty-cips': `
<div class="section-title">The 5 Core Specialty CiPs</div>
<div class="section-subtitle">You must achieve competency across all 5 areas. Click each card to expand details.</div>

<div class="cip-card" id="cip1">
  <div class="cip-header" onclick="toggleCip('cip1')">
    <div class="cip-num">1</div>
    <div class="cip-title">Coronary Artery Disease & Acute Coronary Syndromes</div>
    <div class="cip-chevron">▼</div>
  </div>
  <div class="cip-body">
    <p>Manage patients with coronary artery disease across the full spectrum from stable CAD to STEMI.</p>
    <h4>Key competencies:</h4>
    <ul>
      <li>Risk stratify ACS (GRACE, HEART score) and determine timing of angiography</li>
      <li>Prescribe evidence-based antiplatelet and anticoagulation therapy</li>
      <li>Interpret coronary angiograms — identify vessels, lesions, TIMI flow</li>
      <li>Understand revascularisation decisions (PCI vs CABG, Heart Team)</li>
      <li>Manage stable CAD: optimise medical therapy, exercise testing, imaging</li>
      <li>Secondary prevention after ACS (NG185 / ESC 2023)</li>
    </ul>
    <p class="text-muted text-sm mt-1">Key guideline: <span class="pill pill-blue">ESC ACS 2023</span> <span class="pill pill-blue">ESC CCS 2024</span> <span class="pill pill-green">NICE NG185</span></p>
  </div>
</div>

<div class="cip-card" id="cip2">
  <div class="cip-header" onclick="toggleCip('cip2')">
    <div class="cip-num" style="background:#059669">2</div>
    <div class="cip-title">Heart Failure & Cardiomyopathy</div>
    <div class="cip-chevron">▼</div>
  </div>
  <div class="cip-body">
    <p>Diagnose and manage HFrEF, HFmrEF, HFpEF, and all major cardiomyopathies.</p>
    <h4>Key competencies:</h4>
    <ul>
      <li>Initiate and uptitrate the <strong>4 pillars</strong> of HFrEF therapy to target doses</li>
      <li>Manage acute decompensated heart failure on the ward and CCU</li>
      <li>Recognise and investigate cardiomyopathies (HCM, DCM, ARVC, Takotsubo)</li>
      <li>Understand device therapy: ICD and CRT indications</li>
      <li>Know when to refer for advanced HF / transplant assessment</li>
    </ul>
    <p class="text-muted text-sm mt-1">Key guideline: <span class="pill pill-blue">ESC HF 2021 + 2023 update</span> <span class="pill pill-green">NICE NG106</span></p>
  </div>
</div>

<div class="cip-card" id="cip3">
  <div class="cip-header" onclick="toggleCip('cip3')">
    <div class="cip-num" style="background:#7c3aed">3</div>
    <div class="cip-title">Cardiac Rhythm Management</div>
    <div class="cip-chevron">▼</div>
  </div>
  <div class="cip-body">
    <p>Manage the full spectrum of arrhythmias including AF, SVT, VT, and bradyarrhythmias.</p>
    <h4>Key competencies:</h4>
    <ul>
      <li>AF management: rate vs rhythm, anticoagulation, cardioversion, ablation indications</li>
      <li>SVT: acute termination (vagal, adenosine), long-term management</li>
      <li>Ventricular arrhythmias: VT risk stratification, ICD indications, channelopathies</li>
      <li>Bradyarrhythmias: indications for PPM, temporary pacing insertion</li>
      <li>Interpret device interrogations at a basic level (pacing, sensing, arrhythmia logs)</li>
    </ul>
    <p class="text-muted text-sm mt-1">Key guideline: <span class="pill pill-blue">ESC AF 2024</span> <span class="pill pill-blue">ESC VA/SCD 2022</span> <span class="pill pill-blue">ESC Pacing 2021</span></p>
  </div>
</div>

<div class="cip-card" id="cip4">
  <div class="cip-header" onclick="toggleCip('cip4')">
    <div class="cip-num" style="background:#d97706">4</div>
    <div class="cip-title">Valvular & Structural Heart Disease</div>
    <div class="cip-chevron">▼</div>
  </div>
  <div class="cip-body">
    <p>Assess and manage valvular heart disease and structural cardiac conditions.</p>
    <h4>Key competencies:</h4>
    <ul>
      <li>Know severity criteria for AS, AR, MR, MS — echo parameters and haemodynamic thresholds</li>
      <li>Understand timing of intervention (medical vs surgical vs TAVI/MitraClip)</li>
      <li>Infective endocarditis: Modified Duke criteria, antibiotic regimens, surgical indications</li>
      <li>Pericardial disease: pericarditis, effusion, tamponade, constrictive pericarditis</li>
      <li>Heart Team decision-making process</li>
    </ul>
    <p class="text-muted text-sm mt-1">Key guideline: <span class="pill pill-blue">ESC VHD 2025</span> <span class="pill pill-blue">ESC Endocarditis 2023</span></p>
  </div>
</div>

<div class="cip-card" id="cip5">
  <div class="cip-header" onclick="toggleCip('cip5')">
    <div class="cip-num" style="background:#dc2626">5</div>
    <div class="cip-title">Cardiovascular Prevention & Risk</div>
    <div class="cip-chevron">▼</div>
  </div>
  <div class="cip-body">
    <p>Primary and secondary cardiovascular prevention, risk stratification, and general cardiology.</p>
    <h4>Key competencies:</h4>
    <ul>
      <li>Cardiovascular risk calculation (SCORE2) and treatment thresholds</li>
      <li>Lipid management: stepwise statin → ezetimibe → PCSK9i; LDL targets by risk category</li>
      <li>Hypertension: classification, investigation, drug selection, resistant HTN</li>
      <li>Know when to suspect and investigate secondary hypertension</li>
      <li>Pulmonary hypertension: diagnostic algorithm, group classification</li>
      <li>Cardio-oncology: monitoring protocols, CTRCD definition and management</li>
      <li>ACHD: complexity classification, management principles</li>
    </ul>
    <p class="text-muted text-sm mt-1">Key guideline: <span class="pill pill-blue">ESC Prevention 2021</span> <span class="pill pill-blue">ESC HTN 2024</span> <span class="pill pill-blue">ESC Dyslipidaemia 2019+2025</span></p>
  </div>
</div>`,

'advanced-themes': `
<div class="section-title">Advanced Themed Pathways</div>
<div class="section-subtitle">You choose one pathway starting ST6. Use ST4–ST5 to explore all five areas.</div>

<div class="info-box teal"><span class="info-box-icon">🗺️</span><div>You do not need to commit now. Use your first 2 years to rotate through sub-specialty sessions in each area. Talk to consultants, attend national meetings in areas of interest, and see which clinical environment you thrive in.</div></div>

<div class="grid-2 mt-2">
  <div class="card" style="border-top: 3px solid #2563eb">
    <div class="card-title">🔬 Interventional Cardiology</div>
    <p>The most procedure-heavy pathway. You will perform PCI (balloon angioplasty, stenting), complex coronary intervention, and structural procedures (TAVI, MitraClip, LAA occlusion).</p>
    <p><strong>Good if you:</strong> enjoy manual dexterity, high-acuity procedural work, and the immediate feedback of seeing a blocked vessel open.</p>
    <p><strong>Foundation needed:</strong> Strong cath lab experience from early training; angiography Level 3 by ST6.</p>
  </div>
  <div class="card" style="border-top: 3px solid #0891b2">
    <div class="card-title">⚡ Electrophysiology & Devices</div>
    <p>EP studies, catheter ablation (AF, flutter, VT, SVT, complex re-entry), complex device implantation (CRT, S-ICD, leadless pacing, subcutaneous ICD).</p>
    <p><strong>Good if you:</strong> love arrhythmia ECG interpretation, enjoy the 3D mapping systems, and like precision-based procedural work.</p>
    <p><strong>Foundation needed:</strong> Strong ECG and arrhythmia knowledge; pacing experience early in training.</p>
  </div>
  <div class="card" style="border-top: 3px solid #7c3aed">
    <div class="card-title">🖥️ Advanced Cardiac Imaging</div>
    <p>TOE, cardiac MRI (CMR), CT coronary angiography (CTCA), stress echocardiography, nuclear cardiology. Heavily diagnostic and image-reporting focused.</p>
    <p><strong>Good if you:</strong> enjoy diagnostic reasoning, image interpretation, and are interested in the pathophysiology of cardiac disease.</p>
    <p><strong>Foundation needed:</strong> BSE TTE accreditation (Level 3) ideally by ST6; CMR and CTCA training during advanced years.</p>
  </div>
  <div class="card" style="border-top: 3px solid #dc2626">
    <div class="card-title">❤️ Advanced Heart Failure</div>
    <p>Advanced HF clinic (NYHA III–IV patients), mechanical circulatory support (LVAD implant and management), transplant assessment, cardiogenic shock, pulmonary hypertension.</p>
    <p><strong>Good if you:</strong> enjoy complex medical management, MDT work, and want to care for the most critically ill cardiac patients.</p>
    <p><strong>Foundation needed:</strong> Tertiary centre rotation; good foundation in HF and cardiomyopathy CiP.</p>
  </div>
  <div class="card" style="border-top: 3px solid #059669">
    <div class="card-title">🛡️ General / Preventive Cardiology</div>
    <p>Lipid and prevention clinics, cardiac rehabilitation, general outpatient cardiology, ACHD, sports cardiology, hypertension. Most clinic-based of the five themes.</p>
    <p><strong>Good if you:</strong> prefer clinic-based work, have academic interests in prevention, or want a broad general cardiology consultant role.</p>
    <p><strong>Foundation needed:</strong> Broad exposure to all CiPs; prevention guideline knowledge; may suit those pursuing an academic cardiology path.</p>
  </div>
</div>`,

'arcp-outcomes': `
<div class="section-title">ARCP Outcomes</div>
<div class="section-subtitle">The Annual Review of Competence Progression — what the panel looks for and how to get Outcome 1.</div>

<div class="card">
  <div class="card-title">ARCP Outcome Definitions</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Outcome</th><th>Meaning</th><th>What happens next</th></tr>
    <tr><td><span class="pill pill-green">1</span></td><td>Satisfactory progress — competencies on track</td><td>Progress to next year as planned</td></tr>
    <tr><td><span class="pill pill-amber">2</span></td><td>Development of specific targeted training required</td><td>Remain at same grade; specific action plan set</td></tr>
    <tr><td><span class="pill pill-red">3</span></td><td>Inadequate progress — additional training time needed</td><td>Extended training; formal support plan</td></tr>
    <tr><td><span class="pill pill-red">4</span></td><td>Released from training programme</td><td>Serious concern; rarely issued without prior warning</td></tr>
    <tr><td><span class="pill pill-blue">5</span></td><td>Incomplete evidence — ARCP unable to make a decision</td><td>Resubmit; common if admin incomplete</td></tr>
    <tr><td><span class="pill pill-green">6</span></td><td>Satisfactory completion of training</td><td>CCT awarded — this is your final ARCP as ST8</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">How to Achieve Outcome 1 at Your First ARCP</div>
  <ul>
    <li>All minimum SLEs completed: 5 mini-CEX, 5 CBD, 1–2 ACAT, 4–6 DOPS, 1 MSF (≥10 raters), 1 Patient Survey</li>
    <li>Educational Supervisor annual report submitted and satisfactory</li>
    <li>Clinical Supervisor report(s) satisfactory</li>
    <li>Evidence of engagement with all 5 specialty CiPs (even if not fully signed off yet)</li>
    <li>Reflection: at least 2–3 reflective notes in ePortfolio demonstrating learning from cases</li>
    <li>Attendance: no significant unexplained absences</li>
    <li>Any mandatory training completed (ALS, radiation protection)</li>
    <li>PDP agreed and reviewed</li>
  </ul>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>Outcome 5 trap:</strong> Failing to submit supervisor reports on time is the most common reason for Outcome 5. Chase your supervisors 6 weeks before ARCP.</div></div>
</div>

<div class="card">
  <div class="card-title">The ARCP Decision Aid</div>
  <p>The official <a href="https://www.thefederation.uk/sites/default/files/Cardiology%202022%20ARCP%20Decision%20Aid%20FINAL.pdf" target="_blank">Cardiology 2022 ARCP Decision Aid</a> specifies exact requirements for each year. Download it and use it as your personal checklist 3 months before your ARCP.</p>
</div>`,

sles: `
<div class="section-title">SLE Requirements</div>
<div class="section-subtitle">Understanding and making the most of supervised learning events.</div>

<div class="card">
  <div class="card-title">Supervised Learning Events — Comparison</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Tool</th><th>Purpose</th><th>Best Used For</th><th>Tips</th></tr>
    <tr><td><strong>Mini-CEX</strong></td><td>Observe clinical encounter (history/exam/decision)</td><td>Clinic consultations, ward patients, acute presentations</td><td>Ask for specific feedback; use diverse settings</td></tr>
    <tr><td><strong>CBD</strong></td><td>Case discussion — assess clinical reasoning</td><td>Complex cases, MDT discussions, ward rounds</td><td>Choose cases that cross CiP boundaries; write a reflection</td></tr>
    <tr><td><strong>DOPS</strong></td><td>Direct observation of a procedure</td><td>Echo, angiography, pacing, cardioversion</td><td>Ask immediately after completing the procedure</td></tr>
    <tr><td><strong>ACAT</strong></td><td>Assess performance on the acute take</td><td>On-call shifts; minimum 5 cases per ACAT</td><td>Request at end of a busy take; ensures breadth of acute cases</td></tr>
    <tr><td><strong>MSF</strong></td><td>360° feedback from peers, nurses, allied health</td><td>Annual — sent to ≥10 colleagues</td><td>Include nurses, physios, pharmacists, not just doctors</td></tr>
    <tr><td><strong>Patient Survey (PS)</strong></td><td>Patient feedback</td><td>Clinic or ward patients</td><td>Distribute to 15+ patients for statistical validity</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Quality Over Quantity</div>
  <p>ARCP panels read SLE content, not just count them. A high-quality CBD on a complex HF patient with specific feedback and a reflective note is worth more than 5 brief tick-box CBDs.</p>
  <ul>
    <li><strong>Good CBD:</strong> Complex case, consultant assessor, feedback section with specifics ("demonstrated systematic approach to HF management; could improve discussion of ARNI vs ACEi switch"), trainee reflection added</li>
    <li><strong>Good Mini-CEX:</strong> Real clinical encounter, structured feedback on all domains, identifies one area for development</li>
    <li><strong>Good DOPS:</strong> Procedure performed (not just observed), assessor comments on technique and safety</li>
  </ul>
</div>`,

eportfolio: `
<div class="section-title">ePortfolio Tips</div>
<div class="section-subtitle">Building a strong ePortfolio that tells your training story.</div>

<div class="info-box green"><span class="info-box-icon">💡</span><div>Think of the ePortfolio not as an admin burden but as your <strong>professional narrative</strong>. The ARCP panel will spend 15–30 minutes reviewing it. Make it easy for them to see your progress.</div></div>

<div class="card">
  <div class="card-title">Weekly ePortfolio Routine (1–2 hours)</div>
  <ul>
    <li>Log any SLEs from the week while they're fresh</li>
    <li>Add 1 reflective note (case, procedure, teaching received, or teaching given)</li>
    <li>Update procedure logbook (echo cases, angiograms, procedures)</li>
    <li>Check supervisor links are active and meetings are logged</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">What ARCP Panels Look For (Beyond Minimums)</div>
  <ul>
    <li><strong>Breadth:</strong> SLEs covering all 5 specialty CiPs, not just one area</li>
    <li><strong>Progression:</strong> Evidence of increasing independence over the year</li>
    <li><strong>Reflection:</strong> Showing you learn from cases and feedback</li>
    <li><strong>Teaching:</strong> At least some evidence you have taught or supervised others</li>
    <li><strong>Leadership/QI:</strong> Audit, QI project, or service improvement activity</li>
    <li><strong>Research engagement:</strong> Not mandatory early, but noted positively</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Practical Setup</div>
  <ul>
    <li>Access: <a href="https://www.thefederation.uk" target="_blank">thefederation.uk</a> → log in with your credentials</li>
    <li>Link your Educational Supervisor and Clinical Supervisor in the system early</li>
    <li>Set up supervisor meeting dates quarterly in the system</li>
    <li>Use the personal library to store copies of guidelines, course certificates, presentations</li>
  </ul>
</div>`,

'gl-overview': `
<div class="section-title">Guidelines Quick Reference</div>
<div class="section-subtitle">All current ESC and NICE guidelines relevant to cardiology training.</div>

<div class="gl-source-bar"><strong>All ESC guidelines:</strong> <a href="https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/" target="_blank" class="gl-link">escardio.org ↗</a> &nbsp;|&nbsp; <strong>Pocket app:</strong> Search "ESC Pocket Guidelines" in App Store / Google Play &nbsp;|&nbsp; <strong>Free with ESC membership</strong></div>

<div class="card">
  <div class="card-title">ESC Guidelines — Current Versions</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Topic</th><th>Year</th><th>Key Message for ST4</th><th>Link</th></tr>
    <tr><td>Acute Coronary Syndromes</td><td><span class="pill pill-blue">2023</span></td><td>hsTn algorithm; ticagrelor preferred; primary PCI standard</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-Coronary-Syndromes-ACS" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Atrial Fibrillation</td><td><span class="pill pill-new">2024</span></td><td>ABC pathway; early rhythm control; ablation first-line option</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Atrial-Fibrillation-Management" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Chronic Coronary Syndromes</td><td><span class="pill pill-new">2024</span></td><td>OMT first; FFR-guided revascularisation</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Chronic-Coronary-Syndromes" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Hypertension</td><td><span class="pill pill-new">2024</span></td><td>Target &lt;130/80 in most; 4-drug algorithm</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Elevated-Blood-Pressure-and-Hypertension" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Peripheral Arterial & Aortic Disease</td><td><span class="pill pill-new">2024</span></td><td>ABI &lt;0.9 for diagnosis; revascularisation criteria</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Peripheral-Arterial-and-Aortic-Diseases" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Heart Failure</td><td><span class="pill pill-blue">2021</span> <span class="pill pill-blue">+2023</span></td><td>4 pillars; SGLT2i added; HFpEF SGLT2i IIa</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-and-Chronic-Heart-Failure" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Cardiac Pacing & CRT</td><td><span class="pill pill-blue">2021</span></td><td>LBBB QRS ≥130ms; ICD ≤35% LVEF</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardiac-Pacing-and-Cardiac-Resynchronisation-Therapy" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Cardiovascular Prevention</td><td><span class="pill pill-blue">2021</span></td><td>SCORE2; LDL &lt;1.4 very high risk</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/CVD-Prevention-in-clinical-practice" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Valvular Heart Disease</td><td><span class="pill pill-new">2025</span></td><td>Updated TAVI vs SAVR criteria; refined MR indications</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Valvular-Heart-Disease-Management-of" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Myocarditis & Pericarditis</td><td><span class="pill pill-new">2025</span></td><td>CMR for diagnosis; colchicine for pericarditis</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Myocarditis-and-Pericarditis" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Dyslipidaemias</td><td><span class="pill pill-blue">2019</span> <span class="pill pill-new">+2025</span></td><td>LDL targets; PCSK9i access expanded</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Dyslipidaemias-Management-of" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Ventricular Arrhythmias / SCD</td><td><span class="pill pill-blue">2022</span></td><td>ICD indications; channelopathies; risk scores</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Ventricular-Arrhythmias-and-the-Prevention-of-Sudden-Cardiac-Death" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Cardiomyopathies</td><td><span class="pill pill-blue">2023</span></td><td>HCM SCD risk; ARVC diagnosis; DCM work-up</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardiomyopathies" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Endocarditis</td><td><span class="pill pill-blue">2023</span></td><td>Duke criteria; Endocarditis Team; prophylaxis</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Infective-Endocarditis" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Pulmonary Hypertension</td><td><span class="pill pill-blue">2022</span></td><td>mPAP &gt;20mmHg; PVR &gt;2WU; group classification</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Pulmonary-Hypertension" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Cardio-oncology</td><td><span class="pill pill-blue">2022</span></td><td>CTRCD definition; surveillance protocols</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardio-Oncology-Guidelines" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Adult Congenital Heart Disease</td><td><span class="pill pill-blue">2020</span></td><td>Complexity classification; specialist centre referral</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Adult-Congenital-Heart-Disease" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>CV Disease & Pregnancy</td><td><span class="pill pill-new">2025</span></td><td>Drug safety in pregnancy; peripartum cardiomyopathy</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardiovascular-Diseases-during-Pregnancy" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Non-Cardiac Surgery</td><td><span class="pill pill-blue">2022</span></td><td>Lee RCRI; periop beta-blockers; timing of elective surgery</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardiovascular-assessment-and-management-of-patients-undergoing-non-cardiac-surgery" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Sports Cardiology</td><td><span class="pill pill-blue">2020</span></td><td>Athlete ECG interpretation; return-to-sport after myocarditis</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Sports-Cardiology-and-Exercise" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Acute PE</td><td><span class="pill pill-blue">2019</span></td><td>PESI score; thrombolysis criteria; CTPA</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-Pulmonary-Embolism" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Supraventricular Tachycardias</td><td><span class="pill pill-blue">2019</span></td><td>Adenosine; ablation indications; WPW management</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Supraventricular-Tachycardias" target="_blank" class="gl-link">ESC ↗</a></td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">NICE Guidelines</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Guideline</th><th>Topic</th><th>Key Point</th><th>Link</th></tr>
    <tr><td>NG185</td><td>MI secondary prevention</td><td>DAPT + high-intensity statin + ACEi + BB</td><td><a href="https://www.nice.org.uk/guidance/ng185" target="_blank" class="gl-link nice">NICE ↗</a></td></tr>
    <tr><td>NG106</td><td>Chronic heart failure (updated 2023)</td><td>4 pillars; slightly higher NT-proBNP cut-offs than ESC</td><td><a href="https://www.nice.org.uk/guidance/ng106" target="_blank" class="gl-link nice">NICE ↗</a></td></tr>
    <tr><td>NG196</td><td>Atrial fibrillation</td><td>DOACs preferred; cardioversion; ablation</td><td><a href="https://www.nice.org.uk/guidance/ng196" target="_blank" class="gl-link nice">NICE ↗</a></td></tr>
    <tr><td>NG136</td><td>Hypertension in adults</td><td>ABPM for diagnosis; stage 1/2 treatment thresholds</td><td><a href="https://www.nice.org.uk/guidance/ng136" target="_blank" class="gl-link nice">NICE ↗</a></td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Key Training Documents</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Document</th><th>Purpose</th><th>Link</th></tr>
    <tr><td>2022 Cardiology Curriculum</td><td>Official GMC-approved curriculum — read the introduction and CiP sections</td><td><a href="https://www.gmc-uk.org/-/media/documents/cardiology-2022-curriculum-final-v1_0_pdf-92049190.pdf" target="_blank" class="gl-link pdf">PDF ↗</a></td></tr>
    <tr><td>ARCP Decision Aid</td><td>Exact requirements per training year — use as your personal checklist</td><td><a href="https://www.thefederation.uk/sites/default/files/Cardiology%202022%20ARCP%20Decision%20Aid%20FINAL.pdf" target="_blank" class="gl-link pdf">PDF ↗</a></td></tr>
    <tr><td>BJCA Induction Handbook</td><td>Practical guide for new cardiology trainees</td><td><a href="https://bjca.tv/cardiology-handbook/" target="_blank" class="gl-link jrcptb">Web ↗</a></td></tr>
    <tr><td>The Federation — Cardiology</td><td>ePortfolio, ARCP, curriculum documents</td><td><a href="https://www.thefederation.uk/specialties/cardiology" target="_blank" class="gl-link jrcptb">Web ↗</a></td></tr>
  </table></div>
</div>`,

'gl-acs': `
<div class="section-title">Acute Coronary Syndromes — ESC 2023</div>
<div class="section-subtitle">The definitive reference. STEMI and NSTEMI pathways, antiplatelets, and secondary prevention.</div>
<div class="gl-source-bar"><strong>Sources:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-Coronary-Syndromes-ACS" target="_blank" class="gl-link">ESC ACS 2023 ↗</a> <a href="https://www.nice.org.uk/guidance/ng185" target="_blank" class="gl-link nice">NICE NG185 ↗</a></div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">60 min</div><div class="kn-desc">Max door-to-balloon STEMI (direct PCI)</div></div>
    <div class="kn-item"><div class="kn-val">120 min</div><div class="kn-desc">Max 1st medical contact to PCI (else thrombolyse)</div></div>
    <div class="kn-item"><div class="kn-val">&lt;2 h</div><div class="kn-desc">Angiography in very high risk NSTEMI</div></div>
    <div class="kn-item"><div class="kn-val">&lt;24 h</div><div class="kn-desc">Angiography in high risk NSTEMI (GRACE &gt;140)</div></div>
    <div class="kn-item"><div class="kn-val">180 mg</div><div class="kn-desc">Ticagrelor loading dose</div></div>
    <div class="kn-item"><div class="kn-val">90 mg bd</div><div class="kn-desc">Ticagrelor maintenance dose</div></div>
    <div class="kn-item"><div class="kn-val">12 months</div><div class="kn-desc">Standard DAPT duration post-ACS</div></div>
    <div class="kn-item"><div class="kn-val">35%</div><div class="kn-desc">LVEF threshold for ICD (reassess 6–12 wks post-MI)</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">NSTEMI Risk Stratification & Timing</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Risk Category</th><th>Features</th><th>Angiography Timing</th></tr>
    <tr><td><span class="pill pill-red">Very High</span></td><td>Haemodynamic instability, cardiogenic shock, refractory chest pain, acute HF, life-threatening arrhythmia, mechanical complication</td><td><strong>&lt;2 hours</strong></td></tr>
    <tr><td><span class="pill pill-amber">High</span></td><td>GRACE score &gt;140, dynamic ST changes, significant troponin rise, diabetes/CKD/LVEF&lt;40% with symptoms</td><td><strong>&lt;24 hours</strong></td></tr>
    <tr><td><span class="pill pill-blue">Intermediate</span></td><td>GRACE 109–140, no high-risk features, positive troponin</td><td><strong>&lt;72 hours</strong></td></tr>
    <tr><td><span class="pill pill-green">Low</span></td><td>All low — no recurrent pain, no HF, normal ECG, negative troponin (0h/1h or 0h/2h protocol)</td><td><strong>Non-invasive stress test first</strong></td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Antiplatelet Strategy</div>
  <h4>Preferred first-line (ACS):</h4>
  <ul>
    <li><strong>Aspirin</strong> 300mg loading → 75–100mg od indefinitely</li>
    <li><strong>Ticagrelor</strong> 180mg loading → 90mg bd for 12 months (Class I; preferred over clopidogrel)</li>
    <li>Or <strong>Prasugrel</strong> 60mg loading → 10mg od (if PCI planned; contraindicated prior TIA/stroke, age &gt;75y, weight &lt;60kg)</li>
  </ul>
  <h4>DAPT duration:</h4>
  <ul>
    <li>Standard: <strong>12 months</strong> post-ACS, then aspirin monotherapy</li>
    <li>High bleeding risk: consider 3–6 months DAPT</li>
    <li>High ischaemic, low bleeding risk: can extend to 36 months (ticagrelor 60mg bd)</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Secondary Prevention Post-ACS <span class="tag tag-nice">NICE NG185</span></div>
  <ul>
    <li><strong>Aspirin</strong> + <strong>P2Y12 inhibitor</strong> (as above)</li>
    <li><strong>High-intensity statin</strong>: atorvastatin 80mg od (or rosuvastatin 40mg od)</li>
    <li><strong>ACEi</strong>: especially if LVEF reduced, diabetes, or hypertension; ramipril 2.5mg → 10mg bd</li>
    <li><strong>Beta-blocker</strong>: especially if LVEF &lt;40%; bisoprolol 1.25mg → 10mg od</li>
    <li>LVEF reassessment at <strong>6–12 weeks</strong> post-MI — ICD if LVEF ≤35% with optimal therapy</li>
  </ul>
</div>`,

'gl-hf': `
<div class="section-title">Heart Failure — ESC 2021 + 2023 Update</div>
<div class="section-subtitle">The four pillars of HFrEF therapy, HFpEF management, and acute heart failure.</div>
<div class="gl-source-bar"><strong>Sources:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-and-Chronic-Heart-Failure" target="_blank" class="gl-link">ESC HF 2021 ↗</a> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Focused-Update-on-Heart-Failure-Guidelines" target="_blank" class="gl-link">ESC 2023 Update ↗</a> <a href="https://www.nice.org.uk/guidance/ng106" target="_blank" class="gl-link nice">NICE NG106 ↗</a></div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">≤40%</div><div class="kn-desc">HFrEF (reduced EF)</div></div>
    <div class="kn-item"><div class="kn-val">41–49%</div><div class="kn-desc">HFmrEF (mildly reduced)</div></div>
    <div class="kn-item"><div class="kn-val">≥50%</div><div class="kn-desc">HFpEF (preserved EF)</div></div>
    <div class="kn-item"><div class="kn-val">≤35%</div><div class="kn-desc">ICD threshold (OMT ≥3 months)</div></div>
    <div class="kn-item"><div class="kn-val">≤35% + LBBB ≥130ms</div><div class="kn-desc">CRT indication (Class I)</div></div>
    <div class="kn-item"><div class="kn-val">36 hrs</div><div class="kn-desc">ACEi washout before starting ARNI</div></div>
    <div class="kn-item"><div class="kn-val">&lt;100 µg/L</div><div class="kn-desc">Ferritin threshold for IV iron (HFrEF)</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">The Four Pillars of HFrEF Therapy <span class="tag tag-esc">Class I — All 4</span></div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Pillar</th><th>Drug Example</th><th>Start Dose</th><th>Target Dose</th><th>Key Watch</th></tr>
    <tr><td><strong>ACEi / ARB / ARNI</strong></td><td>Sacubitril/valsartan (preferred if hospitalised)</td><td>24/26mg bd</td><td>97/103mg bd</td><td>K⁺, creatinine, BP; 36hr washout from ACEi</td></tr>
    <tr><td></td><td>Ramipril (if ARNI not tolerated)</td><td>2.5mg od</td><td>10mg bd</td><td>K⁺, creatinine, cough</td></tr>
    <tr><td><strong>Beta-blocker</strong></td><td>Bisoprolol</td><td>1.25mg od</td><td>10mg od</td><td>HR, BP; don't stop in decompensation unless shock</td></tr>
    <tr><td></td><td>Carvedilol</td><td>3.125mg bd</td><td>25mg bd</td><td>Postural hypotension</td></tr>
    <tr><td><strong>MRA</strong></td><td>Spironolactone</td><td>25mg od</td><td>50mg od</td><td>K⁺, creatinine; gynaecomastia</td></tr>
    <tr><td></td><td>Eplerenone</td><td>25mg od</td><td>50mg od</td><td>K⁺; preferred post-MI or if gynaecomastia</td></tr>
    <tr><td><strong>SGLT2 inhibitor</strong></td><td>Dapagliflozin</td><td>10mg od</td><td>10mg od</td><td>UTI, DKA (rare); holds through hospitalisation unless unwell</td></tr>
    <tr><td></td><td>Empagliflozin</td><td>10mg od</td><td>10mg od</td><td>As above</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">HFpEF (LVEF ≥50%)</div>
  <p>Until recently, no therapy had proven mortality benefit. The 2023 update changed this:</p>
  <ul>
    <li><strong>SGLT2 inhibitors</strong> (dapagliflozin, empagliflozin): <span class="pill pill-blue">Class IIa, LoE B</span> — reduce HF hospitalisation (EMPEROR-Preserved, DELIVER trials)</li>
    <li>Treat congestion with diuretics</li>
    <li>Treat underlying cause and comorbidities: AF rate/rhythm control, HTN, DM, obesity</li>
    <li>MRA (spironolactone): Class IIb evidence; consider if eGFR adequate and K⁺ acceptable</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Acute Decompensated Heart Failure</div>
  <ul>
    <li><strong>Oxygen:</strong> Target SpO₂ &gt;94%; NIV (CPAP) if pulmonary oedema — reduces intubation rate</li>
    <li><strong>IV furosemide:</strong> 40–80mg bolus (if de novo); if on oral furosemide, give equivalent IV dose ×1–2 and titrate</li>
    <li><strong>Vasodilators (GTN):</strong> If SBP &gt;90mmHg — 10–200 mcg/min IV infusion; reduces preload and afterload</li>
    <li><strong>Inotropes:</strong> Dobutamine 2–20 mcg/kg/min if low cardiac output/cardiogenic shock</li>
    <li><strong>Avoid:</strong> withholding beta-blockers unless frank shock; consider dose reduction</li>
    <li><strong>Find the precipitant:</strong> ACS? New AF? Infection? Non-compliance with fluids/drugs? New valvular lesion?</li>
    <li><strong>Monitor:</strong> Daily U&E, creatinine, weight; aim for net negative fluid balance 0.5–1L/day</li>
  </ul>
</div>`,

'gl-af': `
<div class="section-title">Atrial Fibrillation — ESC 2024</div>
<div class="section-subtitle">The most comprehensive AF guidelines to date. ABC pathway, rate vs rhythm, DOACs.</div>
<div class="gl-source-bar"><strong>Sources:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Atrial-Fibrillation-Management" target="_blank" class="gl-link">ESC AF 2024 ↗</a> <a href="https://www.nice.org.uk/guidance/ng196" target="_blank" class="gl-link nice">NICE NG196 ↗</a></div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers — Anticoagulation</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">≥2 (M) / ≥3 (F)</div><div class="kn-desc">CHA₂DS₂-VASc → anticoagulate</div></div>
    <div class="kn-item"><div class="kn-val">1 (M) / 2 (F)</div><div class="kn-desc">CHA₂DS₂-VASc → consider anticoagulation</div></div>
    <div class="kn-item"><div class="kn-val">48 hrs</div><div class="kn-desc">AF duration threshold: if &gt;48h, anticoagulate ≥3 wks before cardioversion (or TOE to exclude LAA thrombus)</div></div>
    <div class="kn-item"><div class="kn-val">4 wks</div><div class="kn-desc">Anticoagulate after cardioversion regardless of CHA₂DS₂-VASc score</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">The ABC Pathway</div>
  <ul>
    <li><strong>A — Anticoagulation / Avoid stroke:</strong> Assess CHA₂DS₂-VASc; prescribe DOAC (preferred over warfarin) if indicated</li>
    <li><strong>B — Better symptom management:</strong> Rate control and/or rhythm control based on patient preference and symptoms</li>
    <li><strong>C — Cardiovascular risk and comorbidity management:</strong> BP, lipids, obesity, sleep apnoea, diabetes, alcohol — treat all</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Rate vs Rhythm Control</div>
  <p>The <strong>EAST-AFNET 4</strong> trial (2020) showed early rhythm control reduces cardiovascular outcomes (CV death, stroke, HF hospitalisation) vs rate control alone. The 2024 guidelines now recommend considering <strong>early rhythm control</strong> in most patients newly diagnosed with AF.</p>
  <h4>Rate control target:</h4>
  <ul>
    <li>Resting HR &lt;110 bpm (lenient); can aim &lt;80 if symptomatic at higher rates</li>
    <li>Drugs: beta-blocker (first-line), rate-limiting CCB (if no HFrEF), digoxin (add-on)</li>
  </ul>
  <h4>Rhythm control options:</h4>
  <ul>
    <li><strong>Electrical cardioversion (DCCV):</strong> For acute AF with haemodynamic compromise; or elective for persistent AF</li>
    <li><strong>Pharmacological cardioversion:</strong> Flecainide (if no structural disease) or amiodarone</li>
    <li><strong>Catheter ablation:</strong> Now Class I (first-line option) for paroxysmal AF; Class IIa for persistent AF; superior to drugs for maintaining sinus rhythm and quality of life (CABANA trial)</li>
    <li><strong>AADs (anti-arrhythmic drugs):</strong> Flecainide/propafenone (structurally normal heart); Sotalol; Amiodarone (most effective but side effects)</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">DOAC Selection in AF</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>DOAC</th><th>Standard Dose</th><th>Reduced Dose (when)</th><th>Key Point</th></tr>
    <tr><td>Apixaban</td><td>5mg bd</td><td>2.5mg bd if ≥2 of: age ≥80, weight ≤60kg, Cr ≥133µmol/L</td><td>Fewest drug interactions; twice daily</td></tr>
    <tr><td>Rivaroxaban</td><td>20mg od (with meal)</td><td>15mg od if CrCl 15–50</td><td>Once daily; take with evening meal</td></tr>
    <tr><td>Edoxaban</td><td>60mg od</td><td>30mg od if CrCl 15–50, ≤60kg, or P-gp inhibitor</td><td>Once daily; avoid if CrCl &gt;95 (↑stroke risk)</td></tr>
    <tr><td>Dabigatran</td><td>150mg bd</td><td>110mg bd if &gt;80y, or &gt;75y + bleeding risk</td><td>Renal clearance 80%; avoid CrCl &lt;30; reversal: idarucizumab</td></tr>
  </table></div>
  <p class="text-muted text-sm">All DOACs contraindicated: mechanical heart valves, moderate–severe mitral stenosis, CrCl &lt;15 mL/min (except apixaban: consider with caution).</p>
</div>`,

'gl-htn': `
<div class="section-title">Hypertension — ESC 2024</div>
<div class="section-subtitle">Updated targets, treatment algorithm, and secondary hypertension.</div>
<div class="gl-source-bar"><strong>Sources:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Elevated-Blood-Pressure-and-Hypertension" target="_blank" class="gl-link">ESC HTN 2024 ↗</a> <a href="https://www.nice.org.uk/guidance/ng136" target="_blank" class="gl-link nice">NICE NG136 ↗</a></div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">140/90</div><div class="kn-desc">Diagnostic threshold (clinic BP)</div></div>
    <div class="kn-item"><div class="kn-val">135/85</div><div class="kn-desc">ABPM/home BP equivalent</div></div>
    <div class="kn-item"><div class="kn-val">&lt;130/80</div><div class="kn-desc">Target BP for most patients on treatment</div></div>
    <div class="kn-item"><div class="kn-val">&lt;140/90</div><div class="kn-desc">Target if elderly (&gt;80y) or if &lt;130 not tolerated</div></div>
    <div class="kn-item"><div class="kn-val">180/110</div><div class="kn-desc">Hypertensive urgency threshold</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">Treatment Algorithm</div>
  <h4>Step 1: Two-drug combination (start here for most)</h4>
  <ul>
    <li><strong>ACEi or ARB + CCB</strong> (preferred first combination)</li>
    <li>Or ACEi/ARB + thiazide-like diuretic (indapamide or chlortalidone)</li>
    <li>Do NOT combine ACEi + ARB</li>
  </ul>
  <h4>Step 2: Three-drug combination</h4>
  <ul><li>ACEi/ARB + CCB + thiazide-like diuretic</li></ul>
  <h4>Step 3: Resistant hypertension (on 3 drugs)</h4>
  <ul>
    <li>Add <strong>spironolactone 25–50mg</strong> (most effective 4th agent — PATHWAY-2 trial)</li>
    <li>Or doxazosin, or beta-blocker</li>
    <li>Check adherence (drug level testing), exclude secondary causes</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Secondary Hypertension — When to Suspect</div>
  <ul>
    <li>Age &lt;40 with severe hypertension</li>
    <li>Resistant to 3-drug combination at adequate doses</li>
    <li>Sudden worsening of previously controlled BP</li>
    <li>Hypokalaemia (Conn's/primary hyperaldosteronism)</li>
    <li>Renal bruits, flash pulmonary oedema (renovascular)</li>
    <li>Episodes of headache, sweating, palpitations (phaeochromocytoma)</li>
    <li>Cushingoid features</li>
    <li>Snoring, daytime sleepiness (obstructive sleep apnoea)</li>
  </ul>
  <p><strong>Initial investigations:</strong> Renal profile, urine albumin:creatinine, aldosterone:renin ratio (off interfering medications), renal USS, overnight dexamethasone suppression if cushingoid, urine catecholamines/metanephrines if phaeochromocytoma suspected.</p>
</div>`,

'gl-vhd': `
<div class="section-title">Valvular Heart Disease — ESC 2025</div>
<div class="section-subtitle">Severity criteria, timing of intervention, and TAVI vs SAVR decisions.</div>
<div class="gl-source-bar"><strong>Sources:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Valvular-Heart-Disease-Management-of" target="_blank" class="gl-link">ESC VHD 2025 ↗</a> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Infective-Endocarditis" target="_blank" class="gl-link">ESC Endocarditis 2023 ↗</a></div>

<div class="card">
  <div class="card-title">Severity Criteria — Key Echo Parameters</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Valve Lesion</th><th>Severe Definition</th></tr>
    <tr><td>Aortic Stenosis</td><td>AVA &lt;1.0 cm², Vmax ≥4 m/s, Mean gradient ≥40 mmHg</td></tr>
    <tr><td>Aortic Regurgitation</td><td>ERO ≥0.30 cm², RVol ≥60 mL, RF ≥50%, Vena contracta &gt;6mm</td></tr>
    <tr><td>Mitral Stenosis</td><td>MVA &lt;1.5 cm², mean gradient &gt;10 mmHg (severe &lt;1.0 cm²)</td></tr>
    <tr><td>Mitral Regurgitation (primary)</td><td>ERO ≥0.40 cm², RVol ≥60 mL, Vena contracta ≥7 mm</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Aortic Stenosis — Intervention Timing</div>
  <ul>
    <li><strong>Class I indications for intervention:</strong>
      <ul>
        <li>Symptomatic severe AS (dyspnoea, syncope, angina) — <em>intervene promptly</em></li>
        <li>Severe AS undergoing other cardiac surgery</li>
        <li>Asymptomatic severe AS + LVEF &lt;50%</li>
      </ul>
    </li>
    <li><strong>TAVI vs SAVR:</strong> Heart Team decision. TAVI preferred if: high/prohibitive surgical risk; age &gt;75; anatomically suitable; frail. SAVR preferred if: young, low surgical risk, bicuspid valve, anatomically unfavourable for TAVI.</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Primary Mitral Regurgitation — Intervention</div>
  <ul>
    <li>Symptomatic severe MR → surgery (Class I)</li>
    <li>Asymptomatic severe MR + LVEF ≤60% or LVESD ≥40mm → surgery (Class I)</li>
    <li>MitraClip (MitraClip/TEER): if inoperable; secondary (functional) MR with optimal HF therapy (COAPT criteria)</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Infective Endocarditis — Modified Duke Criteria</div>
  <h4>Major criteria:</h4>
  <ul>
    <li>Positive blood cultures (typical organisms ×2, or persistently positive)</li>
    <li>Echo evidence: vegetation, abscess, new partial dehiscence of valve prosthesis</li>
    <li>New valvular regurgitation</li>
  </ul>
  <h4>Minor criteria:</h4>
  <ul>
    <li>Predisposing cardiac condition or IV drug use</li>
    <li>Fever &gt;38°C</li>
    <li>Vascular phenomena (emboli, mycotic aneurysm, Janeway lesions)</li>
    <li>Immunological phenomena (glomerulonephritis, Osler's nodes, Roth spots)</li>
    <li>Blood cultures not meeting major criteria</li>
  </ul>
  <p><strong>Definite IE:</strong> 2 major; or 1 major + 3 minor; or 5 minor</p>
  <div class="info-box red"><span class="info-box-icon">🚨</span><div><strong>Surgical indications (ESC 2023):</strong> HF due to valve dysfunction; uncontrolled infection (abscess, fistula, enlarging vegetation); embolic events with large vegetation &gt;10mm; fungal endocarditis.</div></div>
</div>`,

echo: `
<div class="section-title">Echocardiography — BSE Accreditation Pathway</div>
<div class="section-subtitle">Echo is your most important early procedural skill. Start your BSE portfolio from Day 1.</div>

<div class="info-box blue"><span class="info-box-icon">🖥️</span><div>Echo is assessed both as a <strong>procedure (DOPS)</strong> and as a <strong>clinical skill (mini-CEX, CBD)</strong>. Your BSE accreditation portfolio runs parallel to your JRCPTB ePortfolio. Both are required.</div></div>

<div class="card">
  <div class="card-title">BSE TTE Accreditation Pathway</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Level</th><th>Requirements</th><th>Typical Timing</th></tr>
    <tr><td><span class="pill pill-green">Level 1</span> Introductory</td><td>BSE introductory course + logbook of observed studies</td><td>ST4 Month 1–2</td></tr>
    <tr><td><span class="pill pill-blue">Level 2</span> Basic</td><td>150 personally acquired studies + BSE written exam (MCQs) + image portfolio submission</td><td>ST4–ST5 (target by end ST5)</td></tr>
    <tr><td><span class="pill pill-purple">Level 3</span> Full Accreditation</td><td>350 studies + OSCE (image reporting + cases) + logbook review</td><td>ST6–ST7</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Standard TTE Views — Know All of These</div>
  <ul>
    <li><strong>PLAX</strong> (Parasternal Long Axis) — LV dimensions, mitral/aortic valves, pericardium</li>
    <li><strong>PSAX</strong> (Parasternal Short Axis) — aortic level (AV, RV), mitral level, papillary level, apical level</li>
    <li><strong>A4C</strong> (Apical 4-chamber) — biventricular size/function, mitral/tricuspid valves</li>
    <li><strong>A2C</strong> (Apical 2-chamber) — LV inferior and anterior walls</li>
    <li><strong>A3C / APLAX</strong> (Apical long axis / 3-chamber) — LVOT, aortic valve from apex</li>
    <li><strong>A5C</strong> (Apical 5-chamber) — LVOT VTI, aortic valve Doppler</li>
    <li><strong>Subcostal 4-chamber</strong> — RV free wall, pericardial effusion, tamponade features</li>
    <li><strong>Subcostal IVC</strong> — IVC size and collapsibility (volume status)</li>
    <li><strong>Suprasternal</strong> — Aortic arch, coarctation</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Key Measurements (Normal Ranges)</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Parameter</th><th>How Measured</th><th>Normal</th></tr>
    <tr><td>LVEDD (end-diastolic diameter)</td><td>PLAX M-mode at MV level</td><td>&lt;56 mm</td></tr>
    <tr><td>LVESD (end-systolic)</td><td>PLAX M-mode</td><td>&lt;40 mm</td></tr>
    <tr><td>LVEF (ejection fraction)</td><td>Biplane Simpson (A4C + A2C)</td><td>≥55%</td></tr>
    <tr><td>IVSd / PWd (wall thickness)</td><td>PLAX M-mode</td><td>6–12 mm (hypertrophy &gt;12)</td></tr>
    <tr><td>LA volume index</td><td>Biplane area-length</td><td>&lt;34 mL/m²</td></tr>
    <tr><td>E/e' (diastolic function)</td><td>Mitral E-wave / tissue Doppler e'</td><td>&lt;14 (elevated = raised LVEDP)</td></tr>
    <tr><td>TAPSE (RV function)</td><td>M-mode at TV annulus in A4C</td><td>≥17 mm</td></tr>
    <tr><td>RVSP</td><td>TR jet CW + estimated RAP</td><td>&lt;35 mmHg (normal RAP 5–10)</td></tr>
  </table></div>
</div>`,

cathlab: `
<div class="section-title">Cath Lab — Coronary Angiography</div>
<div class="section-subtitle">Making the most of cath lab training from Day 1.</div>

<div class="card">
  <div class="card-title">Coronary Anatomy — Know Before Your First Case</div>
  <ul>
    <li><strong>Left main (LM):</strong> bifurcates into LAD + LCx</li>
    <li><strong>LAD:</strong> Diagonal branches (D1, D2); septal perforators; supplies anterior wall, apex, anterior septum</li>
    <li><strong>LCx:</strong> Obtuse marginal branches (OM1, OM2); supplies lateral wall; dominant in 10–15%</li>
    <li><strong>RCA:</strong> Right ventricular branches; acute marginal; posterior descending artery (PDA) in right-dominant (85%); supplies inferior wall, posterior septum, SA node (55%), AV node (90%)</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">TIMI Flow Grading</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Grade</th><th>Meaning</th></tr>
    <tr><td>TIMI 0</td><td>No flow — complete occlusion</td></tr>
    <tr><td>TIMI 1</td><td>Contrast enters but does not opacify distal vessel</td></tr>
    <tr><td>TIMI 2</td><td>Partial flow — contrast fills distal vessel slowly or incompletely</td></tr>
    <tr><td>TIMI 3</td><td>Normal flow — complete opacification of distal vessel</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Radiation Safety — Essential Knowledge</div>
  <ul>
    <li>Lead apron + thyroid collar mandatory; lead glasses recommended for operators</li>
    <li>Dose: patient (typical diagnostic angio ~5–10mSv); operator stands to patient's right for RCA, left for LCA to minimise scatter</li>
    <li>Distance: doubling distance quarters radiation exposure (inverse square law)</li>
    <li>Collimation and low frame rates reduce dose</li>
    <li>Your personal dosimeter badge must be worn at collar level, outside the apron</li>
  </ul>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div>Radiation protection training is <strong>mandatory</strong> before you scrub in the cath lab. Complete this in Week 1–2 of starting.</div></div>
</div>`,

pacing: `
<div class="section-title">Pacing & Devices</div>
<div class="section-subtitle">Permanent pacemakers, ICD, CRT — indications and basic implant knowledge.</div>

<div class="card">
  <div class="card-title">Permanent Pacemaker Indications <span class="tag tag-esc">ESC 2021</span></div>
  <h4>Class I indications (recommended):</h4>
  <ul>
    <li>Symptomatic <strong>3rd degree (complete) AV block</strong></li>
    <li>Symptomatic <strong>2nd degree Mobitz II AV block</strong></li>
    <li>Symptomatic <strong>Sick Sinus Syndrome (SSS)</strong> with documented pauses / chronotropic incompetence</li>
    <li>Alternating LBBB / RBBB</li>
    <li>Bundle branch block after cardiac surgery or TAVI with persistent AV block</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">ICD Indications <span class="tag tag-esc">ESC 2022 + ESC HF 2021</span></div>
  <ul>
    <li><strong>Secondary prevention:</strong> Survivors of cardiac arrest (not due to reversible cause) or haemodynamically significant VT</li>
    <li><strong>Primary prevention (HF):</strong> LVEF ≤35% after ≥3 months optimal medical therapy; NYHA II–III; expected survival &gt;1 year</li>
    <li>Specific conditions: HCM with high SCD risk score (&gt;4% at 5 years); ARVC; Brugada with high-risk features; Long QT with syncope</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">CRT Indications <span class="tag tag-esc">ESC 2021 — Class I</span></div>
  <ul>
    <li>LVEF ≤35% + LBBB morphology + QRS ≥130ms + NYHA II–III (ambulatory) despite OMT</li>
    <li>QRS ≥150ms with LBBB: Class I for NYHA II–III</li>
    <li>Non-LBBB + QRS ≥150ms: Class I for NYHA III–IV</li>
    <li><strong>CRT-D vs CRT-P:</strong> CRT-D if primary prevention ICD indication also met; CRT-P if frail, poor prognosis, or preference</li>
  </ul>
</div>`,

ecg: `
<div class="section-title">ECG Mastery</div>
<div class="section-subtitle">A systematic approach and the patterns every ST4 must know.</div>

<div class="info-box blue"><span class="info-box-icon">⚡</span><div>ECG interpretation is tested at every ARCP, in every exam, and on every clinical encounter. Build a <strong>daily habit</strong> of 5 ECGs using the LITFL ECG Library: <a href="https://litfl.com/ecg-library/" target="_blank">litfl.com/ecg-library</a></div></div>

<div class="card">
  <div class="card-title">The 10-Step Systematic Approach — Use This Every Time</div>
  <ol>
    <li><strong>Rate:</strong> 300 / RR in large squares. Or 1500 / RR in small squares. Tachycardia &gt;100, bradycardia &lt;60.</li>
    <li><strong>Rhythm:</strong> Regular or irregular? P before every QRS? QRS after every P?</li>
    <li><strong>Axis:</strong> Normal −30° to +90°. LAD: negative aVF + positive I. RAD: negative I + positive aVF.</li>
    <li><strong>P waves:</strong> Present? Morphology (bifid = P mitrale; peaked = P pulmonale). One P per QRS?</li>
    <li><strong>PR interval:</strong> Normal 120–200ms (3–5 small squares). Short (&lt;120ms) → WPW or junctional. Long → 1st degree AVB.</li>
    <li><strong>QRS duration:</strong> Normal &lt;120ms. Wide QRS: BBB, pacing, hyperkalaemia, pre-excitation, VT.</li>
    <li><strong>QRS morphology:</strong> R wave progression V1→V6. Q waves (septal q normal; pathological if &gt;25% R wave height or &gt;40ms wide).</li>
    <li><strong>ST segments:</strong> Elevation or depression? Concave (pericarditis) vs convex (MI) vs horizontal (ischaemia)?</li>
    <li><strong>T waves:</strong> Inverted, peaked, flattened? Diffuse vs regional?</li>
    <li><strong>QTc:</strong> QT / √RR. Normal &lt;440ms (men), &lt;460ms (women). Prolonged: drugs, electrolytes, congenital.</li>
  </ol>
</div>

<div class="card">
  <div class="card-title">STEMI and STEMI Equivalents — Must Know All</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Pattern</th><th>ECG Findings</th><th>Territory</th></tr>
    <tr><td>Anterior STEMI</td><td>STE V1–V4 (≥2mm in V1–V3, ≥1mm V4)</td><td>LAD</td></tr>
    <tr><td>Inferior STEMI</td><td>STE II, III, aVF; reciprocal depression in I, aVL</td><td>RCA (most); LCx (10%)</td></tr>
    <tr><td>Lateral STEMI</td><td>STE I, aVL, V5–V6</td><td>LCx or diagonal</td></tr>
    <tr><td>Posterior MI <span class="pill pill-red">Equivalent</span></td><td>ST depression V1–V3, dominant R in V1/V2 — flip the ECG 180°</td><td>LCx (posterior)</td></tr>
    <tr><td>RV Infarct <span class="pill pill-red">Equivalent</span></td><td>STE in V4R (right-sided lead); inferior STEMI present</td><td>Proximal RCA</td></tr>
    <tr><td>de Winter pattern <span class="pill pill-red">Equivalent</span></td><td>Upsloping ST depression + tall peaked T waves V1–V6 ± STE aVR</td><td>LAD occlusion</td></tr>
    <tr><td>Wellens syndrome <span class="pill pill-amber">Warning</span></td><td>Type A: biphasic T V2–V3; Type B: deep symmetric T inversion V2–V3 (pain-free)</td><td>Critical proximal LAD stenosis</td></tr>
    <tr><td>Hyperacute T waves <span class="pill pill-red">Early STEMI</span></td><td>Tall, broad, prominent T waves in a distribution — precede STE</td><td>Any territory</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Sgarbossa Criteria — MI in LBBB</div>
  <p>Apply when: LBBB + suspected ACS. Each criterion is scored:</p>
  <ul>
    <li><strong>5 points:</strong> Concordant STE ≥1mm (STE in same direction as QRS) — most specific</li>
    <li><strong>3 points:</strong> Concordant ST depression ≥1mm in V1–V3</li>
    <li><strong>2 points:</strong> Discordant STE ≥5mm (STE opposite to QRS — expected in LBBB, but excessively elevated)</li>
  </ul>
  <p><strong>Score ≥3 = MI until proven otherwise → activate cath lab</strong></p>
  <p>Modified Sgarbossa: uses ratio (STE/S wave depth &gt;0.25 in any lead) — more sensitive than original 5mm criterion.</p>
</div>

<div class="card">
  <div class="card-title">VT vs SVT with Aberrancy — Brugada Algorithm</div>
  <p>When you see broad complex tachycardia: <strong>treat as VT until proven otherwise</strong>.</p>
  <p>Brugada 4-step algorithm — if YES at any step = VT:</p>
  <ol>
    <li>No RS complex in any precordial lead? → VT</li>
    <li>RS interval &gt;100ms in any precordial lead? → VT</li>
    <li>AV dissociation present? → VT (pathognomonic)</li>
    <li>Morphology criteria met (RBBB-like in V1–V2 and/or LBBB-like in V6)? → VT</li>
  </ol>
  <div class="info-box red"><span class="info-box-icon">🚨</span><div>Never give verapamil for broad complex tachycardia unless SVT is confirmed — it can cause haemodynamic collapse in VT.</div></div>
</div>`,

'arcp-checklists': `
<div class="section-title">ARCP Year-by-Year Checklists</div>
<div class="section-subtitle">Track your readiness for each annual review. All progress saves automatically in this browser.</div>

<div class="gl-source-bar"><strong>Official reference:</strong> <a href="https://www.thefederation.uk/sites/default/files/Cardiology%202022%20ARCP%20Decision%20Aid%20FINAL.pdf" target="_blank" class="gl-link pdf">ARCP Decision Aid PDF ↗</a> — download and keep a copy. These checklists are based on it.</div>

<div class="tab-bar">
  <button class="tab-btn active" data-tabgroup="arcp" data-tabid="st4" onclick="switchTab('arcp','st4')">Year 1 — ST4</button>
  <button class="tab-btn" data-tabgroup="arcp" data-tabid="st5" onclick="switchTab('arcp','st5')">Year 2 — ST5</button>
  <button class="tab-btn" data-tabgroup="arcp" data-tabid="st6" onclick="switchTab('arcp','st6')">Year 3 — ST6</button>
  <button class="tab-btn" data-tabgroup="arcp" data-tabid="st7" onclick="switchTab('arcp','st7')">Year 4 — ST7</button>
  <button class="tab-btn" data-tabgroup="arcp" data-tabid="st8" onclick="switchTab('arcp','st8')">Year 5 — ST8</button>
</div>

<!-- ── ST4 ─────────────────────────────────────────────── -->
<div id="pane-st4" data-panelgroup="arcp" data-panelid="st4" class="tab-pane active">
  <div id="progress-st4"></div>
  <div class="card">
    <div class="card-title">Supervised Learning Events (SLEs)</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a4-s1"><label for="a4-s1"><strong>5 mini-CEX</strong> completed — by consultants, across diverse settings (clinic, ward, acute take)</label></li>
      <li><input type="checkbox" id="a4-s2"><label for="a4-s2"><strong>5 CBD</strong> (Case-Based Discussions) completed — complex cases, consultant assessors</label></li>
      <li><input type="checkbox" id="a4-s3"><label for="a4-s3"><strong>1–2 ACAT</strong> (Acute Care Assessment) completed — minimum 5 cases per ACAT</label></li>
      <li><input type="checkbox" id="a4-s4"><label for="a4-s4"><strong>1 MSF</strong> (Multi-Source Feedback) completed — minimum 10 raters including non-medical staff</label></li>
      <li><input type="checkbox" id="a4-s5"><label for="a4-s5"><strong>1 Patient Survey</strong> distributed and completed — minimum 15 patients</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">DOPS — Procedural Assessments</div>
    <p class="text-muted text-sm">Total 4–6 DOPS are required across ST4 and ST5 combined. Aim for 2–3 this year.</p>
    <ul class="checklist">
      <li><input type="checkbox" id="a4-d1"><label for="a4-d1">TTE (Transthoracic Echo) DOPS — Level 2 target (supervised acquisition + interpretation)</label></li>
      <li><input type="checkbox" id="a4-d2"><label for="a4-d2">Coronary Angiography DOPS — Level 1–2 (observing → supervised performance)</label></li>
      <li><input type="checkbox" id="a4-d3"><label for="a4-d3">Temporary Transvenous Pacing DOPS — Level 2 (performed with supervision)</label></li>
      <li><input type="checkbox" id="a4-d4"><label for="a4-d4">DC Cardioversion DOPS — Level 2 (performed with supervision)</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Supervisor Reports & Admin</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a4-sv1"><label for="a4-sv1">Educational Supervisor <strong>annual report</strong> submitted and satisfactory</label></li>
      <li><input type="checkbox" id="a4-sv2"><label for="a4-sv2">Clinical Supervisor report(s) submitted and satisfactory</label></li>
      <li><input type="checkbox" id="a4-sv3"><label for="a4-sv3">Minimum <strong>2–4 supervisor meetings</strong> logged in ePortfolio</label></li>
      <li><input type="checkbox" id="a4-sv4"><label for="a4-sv4"><strong>Personal Development Plan (PDP)</strong> agreed at first meeting and reviewed at mid-year</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Mandatory Training</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a4-t1"><label for="a4-t1"><strong>ALS (Advanced Life Support)</strong> — valid certification</label></li>
      <li><input type="checkbox" id="a4-t2"><label for="a4-t2"><strong>Radiation Protection</strong> course completed</label></li>
      <li><input type="checkbox" id="a4-t3"><label for="a4-t3"><strong>BSE Introductory TTE Course</strong> attended</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Procedural Logbook Targets</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a4-p1"><label for="a4-p1">Echo logbook started and kept up to date — target <strong>≥50 personally acquired studies</strong> by end ST4</label></li>
      <li><input type="checkbox" id="a4-p2"><label for="a4-p2">BSE Level 2 logbook portfolio registered on BSE website</label></li>
      <li><input type="checkbox" id="a4-p3"><label for="a4-p3">Cath lab attendance logged — angiography observations/assists documented</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">CiP Evidence — All 5 Must Be Started</div>
    <p class="text-muted text-sm">You don't need full sign-off this year, but must show evidence of engaging with all 5 CiPs.</p>
    <ul class="checklist">
      <li><input type="checkbox" id="a4-c1"><label for="a4-c1">CiP 1 — CAD & ACS: mini-CEX or CBD linked to coronary disease management</label></li>
      <li><input type="checkbox" id="a4-c2"><label for="a4-c2">CiP 2 — Heart Failure: evidence of HF patient management (initiation of pillars, acute HF)</label></li>
      <li><input type="checkbox" id="a4-c3"><label for="a4-c3">CiP 3 — Rhythm Management: arrhythmia cases; pacing knowledge; DOPS if possible</label></li>
      <li><input type="checkbox" id="a4-c4"><label for="a4-c4">CiP 4 — Valvular/Structural: echo cases, VHD clinic attendance, endocarditis case</label></li>
      <li><input type="checkbox" id="a4-c5"><label for="a4-c5">CiP 5 — Prevention & Risk: clinic cases, lipid management, hypertension</label></li>
      <li><input type="checkbox" id="a4-c6"><label for="a4-c6">Generic CiPs: reflective notes showing professional practice, teaching, communication</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Academic & Other Activities</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a4-o1"><label for="a4-o1">Audit, QI project, or service evaluation registered or in progress</label></li>
      <li><input type="checkbox" id="a4-o2"><label for="a4-o2">Teaching activities logged (even informal — bedside teaching, tutorials given)</label></li>
      <li><input type="checkbox" id="a4-o3"><label for="a4-o3">Presentation at departmental, regional, or national meeting</label></li>
      <li><input type="checkbox" id="a4-o4"><label for="a4-o4">ARCP decision aid reviewed 3 months before ARCP date</label></li>
      <li><input type="checkbox" id="a4-o5"><label for="a4-o5">Supervisor reports chased 6 weeks before ARCP date</label></li>
    </ul>
  </div>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>Most common ARCP pitfalls:</strong> (1) Supervisor reports not submitted on time → Outcome 5. (2) All SLEs in one CiP area only → insufficient breadth. (3) MSF sent too late to be processed before panel date.</div></div>
</div>

<!-- ── ST5 ─────────────────────────────────────────────── -->
<div id="pane-st5" data-panelgroup="arcp" data-panelid="st5" class="tab-pane">
  <div id="progress-st5"></div>
  <div class="card">
    <div class="card-title">Supervised Learning Events</div>
    <p class="text-muted text-sm">Same minimums as ST4 — but ARCP panels expect <em>greater clinical independence</em> demonstrated within the SLEs.</p>
    <ul class="checklist">
      <li><input type="checkbox" id="a5-s1"><label for="a5-s1"><strong>5 mini-CEX</strong> — more complex cases; evidence of independent decision-making</label></li>
      <li><input type="checkbox" id="a5-s2"><label for="a5-s2"><strong>5 CBD</strong> — cases showing CiP progression and increasing independence</label></li>
      <li><input type="checkbox" id="a5-s3"><label for="a5-s3"><strong>1–2 ACAT</strong> — leading the acute take; senior registrar-level decision making</label></li>
      <li><input type="checkbox" id="a5-s4"><label for="a5-s4"><strong>1 MSF</strong> — minimum 10 raters</label></li>
      <li><input type="checkbox" id="a5-s5"><label for="a5-s5"><strong>1 Patient Survey</strong></label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">DOPS — Complete the ST4+ST5 Total of 4–6</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a5-d1"><label for="a5-d1">TTE DOPS — Level 2–3 (approaching independent acquisition and interpretation)</label></li>
      <li><input type="checkbox" id="a5-d2"><label for="a5-d2">Coronary Angiography DOPS — Level 2 (performing with supervision)</label></li>
      <li><input type="checkbox" id="a5-d3"><label for="a5-d3">TOE (basic) DOPS if opportunity arises — Level 1–2</label></li>
      <li><input type="checkbox" id="a5-d4"><label for="a5-d4">Additional procedure DOPS as appropriate to rotation</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Echo — BSE Accreditation Progress</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a5-e1"><label for="a5-e1"><strong>150 personally acquired TTE studies</strong> logged in BSE portfolio</label></li>
      <li><input type="checkbox" id="a5-e2"><label for="a5-e2"><strong>BSE Level 2 written exam</strong> passed (or booked)</label></li>
      <li><input type="checkbox" id="a5-e3"><label for="a5-e3">BSE image portfolio submitted for Level 2 assessment</label></li>
      <li><input type="checkbox" id="a5-e4"><label for="a5-e4">Progressing toward Level 3 (350 studies total — start tracking)</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Procedural Progression</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a5-p1"><label for="a5-p1">Temporary pacing — <strong>Level 3</strong> (independent insertion)</label></li>
      <li><input type="checkbox" id="a5-p2"><label for="a5-p2">DC cardioversion — <strong>Level 3</strong> (independent)</label></li>
      <li><input type="checkbox" id="a5-p3"><label for="a5-p3">Coronary angiography — <strong>Level 2</strong> (performing with supervision)</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Advanced Theme Planning</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a5-th1"><label for="a5-th1">Attended sub-specialty sessions across multiple advanced theme areas</label></li>
      <li><input type="checkbox" id="a5-th2"><label for="a5-th2">Discussed advanced theme preferences with Educational Supervisor</label></li>
      <li><input type="checkbox" id="a5-th3"><label for="a5-th3">Attended national meeting/conference relevant to area of interest</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Academic & Supervisor Requirements</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a5-sv1"><label for="a5-sv1">Educational Supervisor annual report submitted</label></li>
      <li><input type="checkbox" id="a5-sv2"><label for="a5-sv2">Clinical Supervisor report(s) submitted</label></li>
      <li><input type="checkbox" id="a5-sv3"><label for="a5-sv3">Audit/QI project completed or presented</label></li>
      <li><input type="checkbox" id="a5-sv4"><label for="a5-sv4">Presentation at regional or national meeting</label></li>
      <li><input type="checkbox" id="a5-sv5"><label for="a5-sv5">Teaching portfolio growing — documented teaching given to juniors</label></li>
    </ul>
  </div>
</div>

<!-- ── ST6 ─────────────────────────────────────────────── -->
<div id="pane-st6" data-panelgroup="arcp" data-panelid="st6" class="tab-pane">
  <div id="progress-st6"></div>
  <div class="card">
    <div class="card-title">Supervised Learning Events</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a6-s1"><label for="a6-s1">5 mini-CEX — including in subspecialty advanced theme setting</label></li>
      <li><input type="checkbox" id="a6-s2"><label for="a6-s2">5 CBD — increasing advanced theme clinical reasoning demonstrated</label></li>
      <li><input type="checkbox" id="a6-s3"><label for="a6-s3">1–2 ACAT — senior registrar level, leading complex acute cases</label></li>
      <li><input type="checkbox" id="a6-s4"><label for="a6-s4">1 MSF — minimum 10 raters</label></li>
      <li><input type="checkbox" id="a6-s5"><label for="a6-s5">1 Patient Survey</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Advanced Theme — Formally Begins</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a6-t1"><label for="a6-t1"><strong>Advanced theme formally declared</strong> and agreed with Training Programme Director</label></li>
      <li><input type="checkbox" id="a6-t2"><label for="a6-t2">Advanced theme CiP evidence started in ePortfolio</label></li>
      <li><input type="checkbox" id="a6-t3"><label for="a6-t3">Subspecialty clinic / procedural sessions regular attendance confirmed</label></li>
      <li><input type="checkbox" id="a6-t4"><label for="a6-t4">Subspecialty procedural logbook started (e.g., PCI cases, ablation cases, CMR reports)</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Senior Responsibilities</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a6-r1"><label for="a6-r1">Senior AIM (Acute Internal Medicine) responsibilities taken on</label></li>
      <li><input type="checkbox" id="a6-r2"><label for="a6-r2">Teaching and supervision of ST4/ST5 trainees documented</label></li>
      <li><input type="checkbox" id="a6-r3"><label for="a6-r3">Leadership activity: audit lead, educational role, committee involvement</label></li>
      <li><input type="checkbox" id="a6-r4"><label for="a6-r4">Research engagement or publication (encouraged)</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Echo & Core Procedures</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a6-e1"><label for="a6-e1">BSE Level 3 TTE accreditation — working toward 350 studies</label></li>
      <li><input type="checkbox" id="a6-e2"><label for="a6-e2">TOE: progressing toward accreditation (if imaging theme) or Level 2 (all others)</label></li>
      <li><input type="checkbox" id="a6-e3"><label for="a6-e3">All core CiPs (1–5) progressing toward full sign-off</label></li>
    </ul>
  </div>
</div>

<!-- ── ST7 ─────────────────────────────────────────────── -->
<div id="pane-st7" data-panelgroup="arcp" data-panelid="st7" class="tab-pane">
  <div id="progress-st7"></div>
  <div class="card">
    <div class="card-title">Supervised Learning Events</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a7-s1"><label for="a7-s1">5 mini-CEX — senior registrar level complexity; advanced theme included</label></li>
      <li><input type="checkbox" id="a7-s2"><label for="a7-s2">5 CBD — advanced theme cases prominent</label></li>
      <li><input type="checkbox" id="a7-s3"><label for="a7-s3">1–2 ACAT</label></li>
      <li><input type="checkbox" id="a7-s4"><label for="a7-s4">1 MSF</label></li>
      <li><input type="checkbox" id="a7-s5"><label for="a7-s5">1 Patient Survey</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Advanced Theme — Senior Fellowship Level</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a7-t1"><label for="a7-t1">Fellowship-level procedures in advanced theme (e.g., independent PCI, ablation procedures, CMR reporting)</label></li>
      <li><input type="checkbox" id="a7-t2"><label for="a7-t2">Advanced theme CiPs progressing toward sign-off</label></li>
      <li><input type="checkbox" id="a7-t3"><label for="a7-t3">Subspecialty procedural volume targets on track (check with TPD)</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Teaching, Leadership & Research</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a7-l1"><label for="a7-l1">Formal teaching portfolio — lectures, tutorials, simulation teaching documented</label></li>
      <li><input type="checkbox" id="a7-l2"><label for="a7-l2">Leadership role: educational supervisor for ST4/5, audit/QI lead</label></li>
      <li><input type="checkbox" id="a7-l3"><label for="a7-l3">Research: publication(s) submitted or in press</label></li>
      <li><input type="checkbox" id="a7-l4"><label for="a7-l4">National conference presentation or oral abstract</label></li>
      <li><input type="checkbox" id="a7-l5"><label for="a7-l5">Starting to think about consultant job applications — CV building</label></li>
    </ul>
  </div>
</div>

<!-- ── ST8 ─────────────────────────────────────────────── -->
<div id="pane-st8" data-panelgroup="arcp" data-panelid="st8" class="tab-pane">
  <div id="progress-st8"></div>
  <div class="card">
    <div class="card-title">Supervised Learning Events — Final Year</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a8-s1"><label for="a8-s1">5 mini-CEX</label></li>
      <li><input type="checkbox" id="a8-s2"><label for="a8-s2">5 CBD</label></li>
      <li><input type="checkbox" id="a8-s3"><label for="a8-s3">ACAT</label></li>
      <li><input type="checkbox" id="a8-s4"><label for="a8-s4">MSF</label></li>
      <li><input type="checkbox" id="a8-s5"><label for="a8-s5">Patient Survey</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">CiP Sign-Off — All Must Be Complete</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a8-c1"><label for="a8-c1">All 6 Generic CiPs signed off at appropriate level</label></li>
      <li><input type="checkbox" id="a8-c2"><label for="a8-c2">All 8 IMS2 Clinical CiPs signed off</label></li>
      <li><input type="checkbox" id="a8-c3"><label for="a8-c3">All 5 Specialty Cardiology CiPs signed off</label></li>
      <li><input type="checkbox" id="a8-c4"><label for="a8-c4">Advanced Themed CiP signed off at fellowship level</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">CCT Preparation</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a8-cct1"><label for="a8-cct1">CCT application submitted to GMC (via ePortfolio/JRCPTB) — allow 3 months processing</label></li>
      <li><input type="checkbox" id="a8-cct2"><label for="a8-cct2">All mandatory courses and certifications current</label></li>
      <li><input type="checkbox" id="a8-cct3"><label for="a8-cct3">Procedural logbooks complete and signed off by supervisors</label></li>
      <li><input type="checkbox" id="a8-cct4"><label for="a8-cct4">Final ARCP — Outcome 6 achieved (CCT awarded)</label></li>
    </ul>
  </div>
  <div class="card">
    <div class="card-title">Consultant Application</div>
    <ul class="checklist">
      <li><input type="checkbox" id="a8-j1"><label for="a8-j1">CV updated and tailored to consultant job applications</label></li>
      <li><input type="checkbox" id="a8-j2"><label for="a8-j2">References arranged</label></li>
      <li><input type="checkbox" id="a8-j3"><label for="a8-j3">Interview preparation (mock interviews, BCS/BJCA resources)</label></li>
      <li><input type="checkbox" id="a8-j4"><label for="a8-j4">Job offer accepted!</label></li>
    </ul>
  </div>
  <div class="info-box green"><span class="info-box-icon">🎉</span><div>ARCP Outcome 6 = CCT awarded. You are done! From here: Specialist Register, consultant appointment, and the rest of your cardiology career.</div></div>
</div>`,

resources: `
<div class="section-title">Resources</div>
<div class="section-subtitle">The best books, websites, courses, and memberships for cardiology trainees.</div>

<div class="card">
  <div class="card-title">Essential Books</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Book</th><th>Use</th><th>Priority</th></tr>
    <tr><td>Oxford Handbook of Cardiology</td><td>Quick on-call and clinic reference</td><td><span class="pill pill-red">Get now</span></td></tr>
    <tr><td>Braunwald's Heart Disease</td><td>Comprehensive textbook reference</td><td><span class="pill pill-blue">ST4–ST5</span></td></tr>
    <tr><td>Essential Echocardiography (Otto)</td><td>Echo fundamentals + pathology</td><td><span class="pill pill-blue">ST4</span></td></tr>
    <tr><td>Clinical Cardiac Electrophysiology (Josephson)</td><td>EP bible — for EP pathway</td><td><span class="pill pill-purple">ST6+</span></td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Online Platforms</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Platform</th><th>Best For</th><th>Cost</th></tr>
    <tr><td><a href="https://bjca.tv" target="_blank">BJCA.tv</a></td><td>UK curriculum-aligned videos; essential for trainees</td><td>Free</td></tr>
    <tr><td><a href="https://www.escardio.org/Education/E-Learning/E-learning-courses" target="_blank">ESC 365 / ESC e-Learning</a></td><td>Guidelines in depth; congress lectures</td><td>Free (member)</td></tr>
    <tr><td><a href="https://litfl.com/ecg-library/" target="_blank">LITFL ECG Library</a></td><td>ECG interpretation — daily practice</td><td>Free</td></tr>
    <tr><td><a href="https://www.123sonography.com" target="_blank">123sonography</a></td><td>Echo learning — video-based, thorough</td><td>Subscription</td></tr>
    <tr><td>UpToDate</td><td>Daily clinical questions; evidence summaries</td><td>Hospital access</td></tr>
    <tr><td>MDCalc</td><td>GRACE, CHA₂DS₂-VASc, HAS-BLED, HEART score calculators</td><td>Free</td></tr>
    <tr><td>ESC Pocket Guidelines app</td><td>Quick guideline access on ward</td><td>Free</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Courses — When to Book</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Course</th><th>When</th><th>Why Essential</th></tr>
    <tr><td>Radiation Protection Course</td><td>Week 1–2 ST4</td><td>Required for cath lab work</td></tr>
    <tr><td>BSE Introductory TTE Course</td><td>Month 1 ST4</td><td>Foundation for BSE accreditation</td></tr>
    <tr><td>ALS (Advanced Life Support)</td><td>ST4 if not done</td><td>Curriculum requirement</td></tr>
    <tr><td>BCS Annual Conference</td><td>Annual (May)</td><td>Free with BCS membership; networking + education</td></tr>
    <tr><td>BJCA Annual Meeting</td><td>Annual</td><td>Trainee-focused; excellent talks</td></tr>
    <tr><td>EECC (European Exam in Core Cardiology)</td><td>ST5–ST6</td><td>Voluntary; excellent knowledge benchmark; June 2026 next sitting</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Memberships to Join Today</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Organisation</th><th>Benefit</th><th>Cost</th></tr>
    <tr><td><a href="https://britishcardiovascularsociety.org.uk" target="_blank">BCS</a></td><td>Free annual conference, Digital Knowledge Hub, career support</td><td>~£90/yr trainee</td></tr>
    <tr><td><a href="https://bjca.tv" target="_blank">BJCA</a></td><td>BJCA.tv videos, handbook, mentorship scheme</td><td>Free</td></tr>
    <tr><td><a href="https://www.escardio.org" target="_blank">ESC</a></td><td>Free guideline PDFs, ESC 365 lectures, congress discounts</td><td>Free basic</td></tr>
    <tr><td><a href="https://www.bsecho.org" target="_blank">BSE</a></td><td>Echo accreditation registration and portfolio</td><td>Annual fee</td></tr>
  </table></div>
</div>`,

};
