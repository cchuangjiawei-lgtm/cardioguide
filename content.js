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
      { id: 'gim', title: 'GIM / IMS2 Requirements' },
      { id: 'sles', title: 'SLE Requirements' },
      { id: 'eportfolio', title: 'ePortfolio Tips' },
    ]
  },
  {
    id: 'grp-guidelines', label: 'Guidelines · Core',
    children: [
      { id: 'gl-overview', title: 'Quick Reference' },
      { id: 'gl-acs', title: 'ACS' },
      { id: 'gl-af', title: 'Atrial Fibrillation' },
      { id: 'gl-hf', title: 'Heart Failure' },
      { id: 'gl-htn', title: 'Hypertension' },
      { id: 'gl-lipids', title: 'Dyslipidaemia' },
    ]
  },
  {
    id: 'grp-oncall', label: 'Guidelines · Common On-Call',
    children: [
      { id: 'gl-syncope', title: 'Syncope' },
      { id: 'gl-brady', title: 'Bradycardia & Pacing' },
      { id: 'gl-svt', title: 'SVT & Narrow Complex' },
      { id: 'gl-pe', title: 'Pulmonary Embolism' },
      { id: 'gl-vhd', title: 'Valvular Disease' },
      { id: 'gl-pericarditis', title: 'Pericarditis' },
      { id: 'gl-diabetes', title: 'Diabetes & CV Disease' },
    ]
  },
  {
    id: 'grp-critical', label: 'Guidelines · Less Common, Critical',
    children: [
      { id: 'gl-vt', title: 'VT & Electrical Storm' },
      { id: 'gl-aortic', title: 'Aortic Syndromes' },
      { id: 'gl-tamponade', title: 'Cardiac Tamponade' },
      { id: 'gl-ie', title: 'Infective Endocarditis' },
      { id: 'gl-cmp', title: 'Cardiomyopathies' },
      { id: 'gl-myocarditis', title: 'Myocarditis' },
      { id: 'gl-sport', title: 'Sports Cardiology' },
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
  gim: ['Explain how dual CCT with GIM affects my ARCP','What extra Internal Medicine evidence do I need to log alongside cardiology SLEs?','How many acute takes and outpatient clinics do I need for IMS2 by CCT?'],
  sles: ['Explain the difference between mini-CEX, CBD, DOPS and ACAT','How do I write a good reflective CBD entry?','What makes a high-quality MSF response?'],
  eportfolio: ['How should I structure my ePortfolio time each week?','What do ARCP panels look for beyond the minimum SLEs?','How do I demonstrate progression in my ePortfolio?'],
  'gl-overview': ['Which ESC guidelines should I read first as an ST4?','Where do ESC and NICE actually disagree?','Summarise the most important 2025 ESC updates'],
  'gl-acs': ['Walk me through the ESC 2023 ACS pathway for NSTEMI','Quiz me on ACS management with a clinical vignette','Why is P2Y12 pre-treatment now Class III in NSTE-ACS?'],
  'gl-af': ['Explain the AF-CARE framework','Why did CHA₂DS₂-VASc become CHA₂DS₂-VA in 2024?','Quiz me on DOAC selection and dose reduction'],
  'gl-hf': ['Teach me the four pillars of HFrEF therapy with doses','Quiz me: a 62-year-old with new HFrEF LVEF 28% — management?','Explain the wet/dry warm/cold grid with examples'],
  'gl-htn': ['Walk me through the ESC 2024 hypertension algorithm','How do I tell a hypertensive emergency from urgency?','When should I screen for secondary hypertension?'],
  'gl-lipids': ['Give me the LDL targets by risk category','How do I approach genuine statin intolerance?','When should I add a PCSK9 inhibitor?'],
  'gl-syncope': ['How do I tell cardiac syncope from a vasovagal faint?','Quiz me on high-risk ECG features in syncope','What are the DVLA rules after unexplained syncope?'],
  'gl-brady': ['Walk me through the unstable bradycardia algorithm','Which bradycardias need a permanent pacemaker?','Explain the difference between Mobitz I and II and why it matters'],
  'gl-svt': ['Teach me how to read the 12-lead in a tachycardia','Why is verapamil dangerous in wide-complex tachycardia?','Quiz me on pre-excited AF management'],
  'gl-pe': ['Walk me through PE risk stratification','When should I thrombolyse a PE?','How do I support a patient with a failing right ventricle?'],
  'gl-vhd': ['When is TAVI preferred over SAVR?','Teach me the severity criteria for aortic and mitral disease','Why does acute severe MR look so different from chronic?'],
  'gl-pericarditis': ['Teach me the diagnostic criteria and first-line therapy','Why are steroids not first-line in pericarditis?','How do I distinguish pericarditis from STEMI on ECG?'],
  'gl-diabetes': ['Which diabetes drugs have proven cardiovascular benefit?','Explain euglycaemic DKA and when to suspect it','When do I hold SGLT2 inhibitors?'],
  'gl-vt': ['Walk me through managing electrical storm','Teach me torsades — and why congenital vs acquired changes treatment','Quiz me on ICD indications'],
  'gl-aortic': ['Walk me through the ADD-RS and when to image','Why rate before pressure in aortic dissection?','Quiz me on Type A vs Type B management'],
  'gl-tamponade': ['Explain the last-drop phenomenon','Which echo signs matter most in tamponade?','Why should I not drain tamponade in Type A dissection?'],
  'gl-ie': ['Teach me the 2023 modified Duke criteria','What are the surgical indications in endocarditis?','Quiz me on empirical antibiotic choice'],
  'gl-cmp': ['Walk me through the phenotype-first framework','How do I work up suspected cardiac amyloid?','When should I suspect cardiac sarcoidosis?'],
  'gl-myocarditis': ['Explain the IMPS umbrella and why it matters','Teach me ICI myocarditis — recognition and treatment','When is endomyocardial biopsy actually needed?'],
  'gl-sport': ["How do I tell athlete's heart from cardiomyopathy?",'Quiz me on athlete ECG interpretation','What are the return-to-play rules after myocarditis?'],
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
  <p>The official <a href="https://www.thefederation.uk/sites/default/files/uploads/Cardiology%202022%20curriculum%20updated%20July%202024_0.pdf" target="_blank">Cardiology 2022 ARCP Decision Aid</a> (updated July 2024) specifies exact requirements for each year. Download it and use it as your personal checklist 3 months before your ARCP.</p>
  <div class="info-box blue"><span class="info-box-icon">ℹ️</span><div>Cardiology is a dual-CCT (Group 1) specialty, so this isn't the only decision aid that applies to you — see <strong>GIM / IMS2 Requirements</strong> in this section for the parallel Internal Medicine obligations assessed at the same ARCP.</div></div>
</div>`,

gim: `
<div class="section-title">GIM / IMS2 Requirements</div>
<div class="section-subtitle">Cardiology is a dual-CCT (Group 1) specialty. Every ARCP year you're assessed against a separate Internal Medicine Stage 2 (IMS2) decision aid, alongside your cardiology one.</div>

<div class="info-box blue"><span class="info-box-icon">ℹ️</span><div><strong>Two outcomes, one ARCP:</strong> the GMC requires a training outcome for both cardiology and IMS2 at every ARCP in Group 1 specialties. It's one ePortfolio, not two — you just need to tag the right SLEs as IM evidence so they count for both.</div></div>

<div class="card">
  <div class="card-title">What's Genuinely Additional to Your Cardiology Requirements</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Evidence</th><th>Per year (while training in IM)</th><th>Cumulative by CCT</th></tr>
    <tr><td>MCR (Multiple Consultant Report)</td><td>2</td><td>3 in final year of IM training</td></tr>
    <tr><td>SLEs (CbD/mini-CEX) from IM consultants</td><td>3</td><td>3 in final year</td></tr>
    <tr><td>ACAT (acute take assessment)</td><td>4, if training in CiP1 (≥5 cases each)</td><td>4 in final year</td></tr>
    <tr><td>MSF raters from an IM context</td><td>≥4 of your total raters</td><td>—</td></tr>
    <tr><td>Outpatient clinics (specialties other than cardiology)</td><td>record each year</td><td>≥20 by end IMS2</td></tr>
    <tr><td>Acute unselected take — patients seen</td><td>record each year</td><td>≥750, incl. 100 in final year</td></tr>
    <tr><td>Continuing ward care (blocks ≥4 weeks)</td><td>record months</td><td>12 months, incl. 3 in final year</td></tr>
    <tr><td>Simulation training (human factors focus)</td><td>record hours</td><td>≥12 hrs, incl. 4 in final year</td></tr>
    <tr><td>IM study leave</td><td>record hours</td><td>≥75 hrs, incl. 20 in final year</td></tr>
    <tr><td>QI project</td><td>—</td><td>at least 1 during IMS2</td></tr>
    <tr><td>Teaching observation</td><td>—</td><td>at least 1 by end IMS2</td></tr>
    <tr><td>Patient survey</td><td>—</td><td>at least 1 by end IMS2</td></tr>
    <tr><td>ALS certificate</td><td>keep valid</td><td>valid at CCT</td></tr>
  </table></div>
  <p class="text-sm text-muted">Source: JRCPTB/Federation IMS2 ARCP Decision Aid, 2022 curriculum (15 Sept 2021).</p>
</div>

<div class="card">
  <div class="card-title">ST4 Entrustment Targets for the 8 IM Clinical CiPs</div>
  <p>Self-rated and discussed with your ES, alongside your 5 cardiology CiPs. Levels: 1 = observe only, 2 = act with direct supervision, 3 = act with indirect supervision, 4 = act unsupervised.</p>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>IM Clinical CiP</th><th>ST4 target</th></tr>
    <tr><td>1. Managing an acute unselected take</td><td><span class="pill pill-amber">Level 3</span></td></tr>
    <tr><td>2. Managing acute care within a medical specialty service</td><td><span class="pill pill-blue">Level 2</span></td></tr>
    <tr><td>3. Providing continuity of care to medical inpatients</td><td><span class="pill pill-amber">Level 3</span></td></tr>
    <tr><td>4. Managing outpatients with long-term conditions</td><td><span class="pill pill-amber">Level 3</span></td></tr>
    <tr><td>5. Managing medical problems in patients under other specialties</td><td><span class="pill pill-amber">Level 3</span></td></tr>
    <tr><td>6. Managing an MDT including discharge planning</td><td><span class="pill pill-amber">Level 3</span></td></tr>
    <tr><td>7. Delivering effective resuscitation / deteriorating patient</td><td><span class="pill pill-green">Level 4</span></td></tr>
    <tr><td>8. Managing end of life and applying palliative care skills</td><td><span class="pill pill-amber">Level 3</span></td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Practical Procedures — Maintain, Don't Relearn</div>
  <p>These should already be signed off from IMS1/foundation training. No further DOPS needed unless you or your ES feel it's warranted — just keep them current through practice.</p>
  <ul>
    <li>Advanced CPR — leadership of the resus team</li>
    <li>Ascitic tap, DC cardioversion, lumbar puncture, NG tube, pleural aspiration — competent unsupervised</li>
    <li>Abdominal paracentesis, central venous access, intercostal drain, temporary cardiac pacing — skills lab or supervised practice</li>
  </ul>
</div>

<div class="next-action">
  <div class="next-action-title">Practical takeaway</div>
  <div class="next-action-text">Whenever you're on the acute medical take, in a non-cardiology outpatient clinic, or covering IM on-call, ask for the SLE to be explicitly tagged as IM evidence in your ePortfolio — it counts twice: once towards your cardiology CiPs, once towards IMS2.</div>
</div>

<div class="gl-source-bar"><strong>Official document:</strong> <a class="gl-link jrcptb" href="https://www.thefederation.uk/sites/default/files/IMS2%20ARCP%20Decision%20Aid%202022%20150921.pdf" target="_blank">GIM / IMS2 ARCP Decision Aid (2022 curriculum) ↗</a></div>`,

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
<div class="section-title">Guidelines — Quick Reference</div>
<div class="section-subtitle">Start here. Pick the presentation, not the guideline.</div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ On-call triage — the four that can't wait</div>
  <ul>
    <li><strong>STEMI</strong> → cath lab now. PCI within 120 min of diagnosis, else thrombolyse within 10 min.</li>
    <li><strong>Unstable tachyarrhythmia</strong> → synchronised DCCV. Never AV-node block a pre-excited AF.</li>
    <li><strong>Suspected dissection</strong> → CT aorta. Do <em>not</em> anticoagulate. Rate before pressure.</li>
    <li><strong>Tamponade</strong> → drain. No diuretics, no vasodilators, avoid positive-pressure ventilation.</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Where to look — by presentation</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Presentation</th><th>Go to</th><th>First move</th></tr>
    <tr><td>Chest pain</td><td>ACS · Aortic · Pericarditis · PE</td><td>ECG within 10 min</td></tr>
    <tr><td>Breathless</td><td>Heart Failure · PE · Valvular</td><td>Wet/dry, warm/cold in 30 sec</td></tr>
    <tr><td>Palpitations / fast</td><td>AF · SVT · VT</td><td>12-lead <em>in</em> the tachycardia</td></tr>
    <tr><td>Slow / collapse</td><td>Bradycardia · Syncope</td><td>Reversible causes first</td></tr>
    <tr><td>Fever + murmur</td><td>Endocarditis</td><td>3 sets of cultures before antibiotics</td></tr>
    <tr><td>Shock + raised JVP</td><td>Tamponade · RV infarct · PE</td><td>Bedside echo</td></tr>
    <tr><td>Young + collapse/arrest</td><td>Cardiomyopathies · VT · Sport</td><td>Family history, prior ECGs</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">ESC Guidelines — Current Versions</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Topic</th><th>Year</th><th>Key Message</th><th>Link</th></tr>
    <tr><td>Acute Coronary Syndromes</td><td><span class="pill pill-blue">2023</span></td><td>hsTn 0/1h; no NSTE-ACS pre-treatment; prasugrel &gt; ticagrelor if PCI planned</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-Coronary-Syndromes-ACS" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Atrial Fibrillation</td><td><span class="pill pill-new">2024</span></td><td>AF-CARE; CHA₂DS₂-VA (sex point dropped); ablation first-line option</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Atrial-Fibrillation-Management" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Heart Failure</td><td><span class="pill pill-blue">2021</span> <span class="pill pill-blue">+2023</span></td><td>4 pillars; start all before discharge (STRONG-HF)</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-and-Chronic-Heart-Failure" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Hypertension</td><td><span class="pill pill-new">2024</span></td><td>Target &lt;130/80 in most; start with 2-drug combination</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Elevated-Blood-Pressure-and-Hypertension" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Dyslipidaemias</td><td><span class="pill pill-blue">2019</span></td><td>LDL &lt;1.4 very high risk; non-fasting sample standard</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Dyslipidaemias-Management-of" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Syncope</td><td><span class="pill pill-blue">2018</span></td><td>ECG risk features drive disposition, not the faint itself</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Syncope-Guidelines-on-Diagnosis-and-Management-of" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Cardiac Pacing &amp; CRT</td><td><span class="pill pill-blue">2021</span></td><td>Mobitz II / CHB pace regardless of symptoms; CRT if LBBB ≥130 ms</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardiac-Pacing-and-Cardiac-Resynchronisation-Therapy" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Supraventricular Tachycardias</td><td><span class="pill pill-blue">2019</span></td><td>Vagal → adenosine; never AV-block pre-excited AF</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Supraventricular-Tachycardias" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Acute PE</td><td><span class="pill pill-blue">2019</span></td><td>sPESI + RV strain + troponin defines intermediate-high</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-Pulmonary-Embolism" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Valvular Heart Disease</td><td><span class="pill pill-new">2025</span></td><td>Updated TAVI vs SAVR; refined MR indications</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Valvular-Heart-Disease-Management-of" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Myocarditis &amp; Pericarditis</td><td><span class="pill pill-new">2025</span></td><td>First joint guideline; new IMPS umbrella term</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Myocarditis-and-Pericarditis" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Diabetes &amp; CVD</td><td><span class="pill pill-blue">2023</span></td><td>SGLT2i/GLP-1 for outcomes, not glucose; SCORE2-Diabetes</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Diabetes-and-Cardiovascular-Disease" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Ventricular Arrhythmias / SCD</td><td><span class="pill pill-blue">2022</span></td><td>Electrical storm needs sedation + beta-blockade, not more amiodarone</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Ventricular-Arrhythmias-and-the-Prevention-of-Sudden-Cardiac-Death" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Aortic &amp; Peripheral Arterial</td><td><span class="pill pill-new">2024</span></td><td>Rate before pressure; Type A is a surgical emergency</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Peripheral-Arterial-and-Aortic-Diseases" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Infective Endocarditis</td><td><span class="pill pill-blue">2023</span></td><td>2023 modified Duke; Endocarditis Team; oral switch (POET)</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Infective-Endocarditis" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Cardiomyopathies</td><td><span class="pill pill-blue">2023</span></td><td>Phenotype-first; amyloid recognition rising fast</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardiomyopathies" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Sports Cardiology</td><td><span class="pill pill-blue">2020</span></td><td>Athlete ECG criteria; return-to-play after myocarditis</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Sports-Cardiology-and-Exercise" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Chronic Coronary Syndromes</td><td><span class="pill pill-new">2024</span></td><td>OMT first; FFR-guided revascularisation</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Chronic-Coronary-Syndromes" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>CV Prevention</td><td><span class="pill pill-blue">2021</span></td><td>SCORE2 / SCORE2-OP; stepwise intensification</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/CVD-Prevention-in-clinical-practice" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Pulmonary Hypertension</td><td><span class="pill pill-blue">2022</span></td><td>mPAP &gt;20 mmHg; PVR &gt;2 WU; 5 groups</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Pulmonary-Hypertension" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Cardio-oncology</td><td><span class="pill pill-blue">2022</span></td><td>Baseline TTE; CTRCD = LVEF fall ≥10 points to &lt;50%</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardio-Oncology-Guidelines" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Adult Congenital Heart Disease</td><td><span class="pill pill-blue">2020</span></td><td>Complexity classification; specialist centre referral</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Adult-Congenital-Heart-Disease" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>CV Disease &amp; Pregnancy</td><td><span class="pill pill-new">2025</span></td><td>mWHO risk classes; drug safety; peripartum cardiomyopathy</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardiovascular-Diseases-during-Pregnancy" target="_blank" class="gl-link">ESC ↗</a></td></tr>
    <tr><td>Non-Cardiac Surgery</td><td><span class="pill pill-blue">2022</span></td><td>RCRI; when to delay elective surgery after PCI</td><td><a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardiovascular-assessment-and-management-of-patients-undergoing-non-cardiac-surgery" target="_blank" class="gl-link">ESC ↗</a></td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">NICE Guidelines <span class="tag tag-nice">UK</span></div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Guideline</th><th>Topic</th><th>Where it differs from ESC</th><th>Link</th></tr>
    <tr><td>NG185</td><td>MI secondary prevention</td><td>Broadly aligned; ticagrelor/prasugrel per local formulary</td><td><a href="https://www.nice.org.uk/guidance/ng185" target="_blank" class="gl-link nice">NICE ↗</a></td></tr>
    <tr><td>NG106</td><td>Chronic heart failure</td><td>Higher NT-proBNP referral cut-offs than ESC rule-in</td><td><a href="https://www.nice.org.uk/guidance/ng106" target="_blank" class="gl-link nice">NICE ↗</a></td></tr>
    <tr><td>NG196</td><td>Atrial fibrillation</td><td>Retains CHA₂DS₂-VASc (with sex point); ESC 2024 uses CHA₂DS₂-VA</td><td><a href="https://www.nice.org.uk/guidance/ng196" target="_blank" class="gl-link nice">NICE ↗</a></td></tr>
    <tr><td>NG136</td><td>Hypertension in adults</td><td>Treats from 140/90; ESC target is tighter at &lt;130/80</td><td><a href="https://www.nice.org.uk/guidance/ng136" target="_blank" class="gl-link nice">NICE ↗</a></td></tr>
    <tr><td>NG158</td><td>Venous thromboembolism</td><td>DOAC first-line; aligns closely with ESC PE</td><td><a href="https://www.nice.org.uk/guidance/ng158" target="_blank" class="gl-link nice">NICE ↗</a></td></tr>
  </table></div>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div>When ESC and NICE disagree, <strong>NICE is what your trust audits against</strong> — but ARCP and exams expect you to know both and say why they differ.</div></div>
</div>

<div class="card">
  <div class="card-title">Key Training Documents</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Document</th><th>Purpose</th><th>Link</th></tr>
    <tr><td>2022 Cardiology Curriculum</td><td>Official GMC-approved curriculum — read the introduction and CiP sections</td><td><a href="https://www.gmc-uk.org/-/media/documents/cardiology-2022-curriculum-final-v1_0_pdf-92049190.pdf" target="_blank" class="gl-link pdf">PDF ↗</a></td></tr>
    <tr><td>Cardiology ARCP Decision Aid</td><td>Exact requirements per training year</td><td><a href="https://www.thefederation.uk/sites/default/files/uploads/Cardiology%202022%20curriculum%20updated%20July%202024_0.pdf" target="_blank" class="gl-link pdf">PDF ↗</a></td></tr>
    <tr><td>GIM / IMS2 Decision Aid</td><td>The parallel Internal Medicine requirements — dual CCT</td><td><a href="https://www.thefederation.uk/sites/default/files/IMS2%20ARCP%20Decision%20Aid%202022%20150921.pdf" target="_blank" class="gl-link pdf">PDF ↗</a></td></tr>
    <tr><td>BJCA Logbook</td><td>Log procedures and cases against the curriculum</td><td><a href="https://logbook.bjca.tv/" target="_blank" class="gl-link jrcptb">Web ↗</a></td></tr>
    <tr><td>BJCA Induction Handbook</td><td>Practical guide for new cardiology trainees</td><td><a href="https://bjca.tv/cardiology-handbook/" target="_blank" class="gl-link jrcptb">Web ↗</a></td></tr>
  </table></div>
</div>

<div class="info-box amber"><span class="info-box-icon">⚠️</span><div>These pages are <strong>educational aids, not clinical protocols</strong>. Cross-check every dose against the BNF, follow local trust policy, and call your senior early. Treat the patient, not the flowchart.</div></div>`,

'gl-acs': `
<div class="section-title">Acute Coronary Syndromes</div>
<div class="section-subtitle">ESC 2023 · The most common thing you'll be called about.</div>
<div class="gl-source-bar"><strong>Sources:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-Coronary-Syndromes-ACS" target="_blank" class="gl-link">ESC ACS 2023 ↗</a> <a href="https://www.nice.org.uk/guidance/ng185" target="_blank" class="gl-link nice">NICE NG185 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ On-call — first 10 minutes</div>
  <ul>
    <li><strong>12-lead ECG within 10 min</strong> of first medical contact. Repeat if pain changes.</li>
    <li><strong>STEMI or very-high-risk NSTE-ACS</strong> → bypass ED, straight to the cath lab.</li>
    <li><strong>Aspirin 300 mg</strong> chewed. Oxygen <em>only</em> if SpO₂ &lt;90%.</li>
    <li><strong>Do not pre-treat NSTE-ACS with a P2Y12</strong> before anatomy is known — Class III.</li>
    <li>Inferior STEMI → <strong>do a right-sided ECG</strong>. RV infarct is preload-dependent: no nitrates.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">10 min</div><div class="kn-desc">FMC to 12-lead ECG</div></div>
    <div class="kn-item"><div class="kn-val">120 min</div><div class="kn-desc">Max FMC-to-PCI, else thrombolyse</div></div>
    <div class="kn-item"><div class="kn-val">&lt;2 h</div><div class="kn-desc">Angio — very high risk NSTE-ACS</div></div>
    <div class="kn-item"><div class="kn-val">&lt;24 h</div><div class="kn-desc">Angio — high risk (GRACE &gt;140)</div></div>
    <div class="kn-item"><div class="kn-val">≥1 mm</div><div class="kn-desc">ST elevation, 2 contiguous leads</div></div>
    <div class="kn-item"><div class="kn-val">≥2 mm</div><div class="kn-desc">V2–V3 men ≥40 (≥1.5 mm women)</div></div>
    <div class="kn-item"><div class="kn-val">12 months</div><div class="kn-desc">Standard DAPT duration</div></div>
    <div class="kn-item"><div class="kn-val">&lt;1.4</div><div class="kn-desc">LDL target mmol/L post-ACS</div></div>
    <div class="kn-item"><div class="kn-val">≤35%</div><div class="kn-desc">LVEF for ICD — reassess 6–12 wks</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">STEMI — ECG criteria &amp; equivalents</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Leads</th><th>Criterion</th></tr>
    <tr><td>V2–V3</td><td>≥2.5 mm men &lt;40 y · ≥2 mm men ≥40 y · ≥1.5 mm women</td></tr>
    <tr><td>All other leads</td><td>≥1 mm (absent LBBB or LVH)</td></tr>
    <tr><td>Posterior (V7–V9)</td><td>≥0.5 mm. Suspect if ST↓ V1–V3 + tall R in V1/V2</td></tr>
    <tr><td>Right ventricular (V3R/V4R)</td><td>≥0.5 mm. <strong>Do right-sided leads in every inferior STEMI</strong></td></tr>
  </table></div>
  <div class="info-box red"><span class="info-box-icon">🚨</span><div><strong>STEMI equivalents — activate the lab:</strong> new LBBB meeting Sgarbossa · isolated posterior MI · ST↑ in aVR ≥1 mm with diffuse ST↓ (left main / proximal LAD / 3VD) · de Winter T waves · hyperacute T waves · Wellens' pattern.</div></div>
</div>

<div class="card">
  <div class="card-title">NSTE-ACS — risk &amp; timing</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Risk</th><th>Features</th><th>Angiography</th></tr>
    <tr><td><span class="pill pill-red">Very high</span></td><td>Instability or shock · refractory pain · life-threatening arrhythmia or arrest · mechanical complication · acute HF from ischaemia · recurrent dynamic ST/T change</td><td><strong>&lt;2 hours</strong></td></tr>
    <tr><td><span class="pill pill-amber">High</span></td><td>Confirmed NSTEMI · GRACE &gt;140 · dynamic ST/T changes</td><td><strong>&lt;24 hours</strong></td></tr>
    <tr><td><span class="pill pill-blue">Low</span></td><td>None of the above</td><td>Selective invasive during index admission</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Immediate management — every ACS patient</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Intervention</th><th>Detail</th></tr>
    <tr><td><strong>Aspirin</strong></td><td>300 mg chewed/dispersible → 75 mg OD</td></tr>
    <tr><td><strong>Oxygen</strong></td><td>Only if SpO₂ &lt;90%. Routine O₂ harms (DETO2X-AMI)</td></tr>
    <tr><td><strong>GTN</strong></td><td>SL or IV if ongoing pain, SBP &gt;90, no RV infarct, no recent PDE-5 inhibitor</td></tr>
    <tr><td><strong>Morphine</strong></td><td>2.5–5 mg IV for refractory pain only — delays P2Y12 absorption. Add antiemetic</td></tr>
    <tr><td><strong>Anticoagulation</strong></td><td>STEMI→PPCI: UFH 70–100 U/kg IV. NSTE-ACS: fondaparinux 2.5 mg SC OD (or enoxaparin 1 mg/kg BD)</td></tr>
    <tr><td><strong>Statin</strong></td><td>Atorvastatin 80 mg or rosuvastatin 20–40 mg at presentation</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">P2Y12 choice</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Agent</th><th>Load → maintenance</th><th>When</th></tr>
    <tr><td><strong>Prasugrel</strong></td><td>60 mg → 10 mg OD<br>(5 mg if ≥75 y or &lt;60 kg)</td><td>Preferred for NSTE-ACS going to PCI (ISAR-REACT 5). <strong>Contraindicated after stroke/TIA</strong></td></tr>
    <tr><td><strong>Ticagrelor</strong></td><td>180 mg → 90 mg BD</td><td>STEMI, or when prasugrel unsuitable / anatomy unknown. Dyspnoea ~15%</td></tr>
    <tr><td><strong>Clopidogrel</strong></td><td>600 mg → 75 mg OD<br>(300 mg load if &gt;75 y)</td><td>On OAC, high bleeding risk, or after fibrinolysis</td></tr>
  </table></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">STEMI reperfusion &amp; fibrinolysis dosing</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<p>Primary PCI if deliverable <strong>within 120 min of STEMI diagnosis</strong>. If not → fibrinolysis within 10 min, then transfer for angiography at 2–24 h (pharmaco-invasive).</p>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Agent</th><th>Dose</th></tr>
  <tr><td><strong>Tenecteplase</strong> (preferred)</td><td>Single IV bolus by weight — &lt;60 kg: 30 mg · 60–70: 35 mg · 70–80: 40 mg · 80–90: 45 mg · ≥90: 50 mg. <strong>Halve the dose if age ≥75.</strong></td></tr>
  <tr><td>Alteplase</td><td>15 mg bolus → 0.75 mg/kg over 30 min (max 50) → 0.5 mg/kg over 60 min (max 35). Total ≤100 mg</td></tr>
  <tr><td>Co-therapy</td><td>Aspirin 300 mg + clopidogrel 300 mg (150 if &gt;75) + enoxaparin 30 mg IV bolus then 1 mg/kg SC BD</td></tr>
</table></div>
<div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>Failed fibrinolysis</strong> — &lt;50% ST resolution at 60–90 min, ongoing pain, or instability → <strong>rescue PCI</strong> (Class I).</div></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Complications to recognise on-call</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Complication</th><th>Recognition &amp; action</th></tr>
  <tr><td>Cardiogenic shock</td><td>SBP &lt;90 + hypoperfusion. Urgent PPCI — <strong>culprit lesion only</strong> (CULPRIT-SHOCK). Noradrenaline over dopamine. Discuss mechanical support early</td></tr>
  <tr><td>Acute MR / papillary rupture</td><td>Inferior MI, new loud apical systolic murmur, sudden pulmonary oedema. Urgent echo → emergency surgery</td></tr>
  <tr><td>VSD</td><td>Day 3–7, harsh pansystolic murmur with thrill, collapse. Urgent surgical or percutaneous closure</td></tr>
  <tr><td>Free wall rupture</td><td>Sudden PEA / tamponade. Pericardiocentesis as a bridge, then surgery</td></tr>
  <tr><td>VF / VT</td><td>DCCV. K &gt;4.0, Mg &gt;1.0. Amiodarone 300 mg IV then infusion. Revascularise</td></tr>
  <tr><td>AV block</td><td>Inferior MI: usually vagal and reversible — atropine 0.5–3 mg. <strong>Anterior MI + new AVB = infranodal, large infarct</strong> — low threshold for pacing</td></tr>
  <tr><td>Stent thrombosis</td><td>Sudden re-presentation with ST elevation. Emergency cath lab. Check compliance</td></tr>
  <tr><td>Post-MI pericarditis / Dressler</td><td>Pleuritic pain 1–6 weeks post. Aspirin + colchicine — <strong>avoid other NSAIDs early</strong></td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Secondary prevention — start before discharge</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>DAPT</strong> — aspirin 75 mg + P2Y12 for 12 months. Shorter (3–6 mo) if high bleeding risk; longer (to 36 mo, ticagrelor 60 mg BD) in selected high ischaemic risk. <strong>With AF:</strong> drop aspirin at ~7 days, continue DOAC + clopidogrel to 12 months.</li>
  <li><strong>Statin</strong> — atorvastatin 80 or rosuvastatin 40. Target LDL &lt;1.4 mmol/L <em>and</em> ≥50% reduction. Add ezetimibe, then PCSK9i, if not at target at 4–6 weeks.</li>
  <li><strong>ACE-I / ARB</strong> — all with LVEF ≤40%, HF, diabetes, hypertension, or anterior MI.</li>
  <li><strong>Beta-blocker</strong> — all with reduced LVEF; consider in all post-MI.</li>
  <li><strong>MRA</strong> — eplerenone or spironolactone if LVEF ≤40% with HF symptoms or diabetes.</li>
  <li><strong>SGLT2 inhibitor</strong> — if LVEF ≤40%, CKD, or T2DM.</li>
  <li><strong>Cardiac rehab referral</strong> (Class I A) and smoking cessation.</li>
</ul>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Pearls &amp; traps</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Posterior STEMI is the classic miss</strong> — isolated ST↓ in V1–V3 with a tall R. Always do V7–V9.</li>
  <li><strong>A raised troponin is not always type 1 MI.</strong> Think MINOCA, myocarditis, Takotsubo, PE, sepsis, CKD, tachyarrhythmia.</li>
  <li>Don't pre-treat NSTE-ACS with a P2Y12 — <strong>Class III</strong> in 2023 (STEMI is the exception).</li>
  <li>In shock complicating MI, <strong>revascularise the culprit only</strong> (CULPRIT-SHOCK).</li>
  <li>In stable multivessel STEMI, complete revascularisation is recommended (COMPLETE) — index or staged.</li>
  <li>Use PRECISE-DAPT / DAPT scores to justify duration. High bleeding risk → shorter DAPT, then aspirin or P2Y12 monotherapy.</li>
</ul>
<p class="text-sm text-muted"><strong>Key trials:</strong> ISAR-REACT 5 · CULPRIT-SHOCK · COMPLETE · DETO2X-AMI · PLATO · TRITON-TIMI 38</p>
</div></div>`,

'gl-af': `
<div class="section-title">Atrial Fibrillation</div>
<div class="section-subtitle">ESC 2024 · The AF-CARE framework.</div>
<div class="gl-source-bar"><strong>Sources:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Atrial-Fibrillation-Management" target="_blank" class="gl-link">ESC AF 2024 ↗</a> <a href="https://www.nice.org.uk/guidance/ng196" target="_blank" class="gl-link nice">NICE NG196 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ On-call — first decisions</div>
  <ul>
    <li><strong>Unstable</strong> (hypotension, ischaemia, pulmonary oedema, syncope) → <strong>synchronised DCCV now</strong>, 200 J biphasic AP pads.</li>
    <li><strong>Pre-excited AF</strong> (irregular, broad, varying QRS) → <strong>never</strong> give digoxin, beta-blocker, verapamil/diltiazem or amiodarone. DCCV, or IV flecainide.</li>
    <li><strong>Rate target is lenient</strong> — resting HR &lt;110 initially (RACE II). Tighter only if symptomatic.</li>
    <li>Anticoagulate around cardioversion <strong>regardless of duration</strong>, and continue ≥4 weeks after.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">≥2</div><div class="kn-desc">CHA₂DS₂-VA → anticoagulate (Class I)</div></div>
    <div class="kn-item"><div class="kn-val">48 h</div><div class="kn-desc">Beyond this: 3 wks OAC or TOE first</div></div>
    <div class="kn-item"><div class="kn-val">4 weeks</div><div class="kn-desc">Minimum OAC after any cardioversion</div></div>
    <div class="kn-item"><div class="kn-val">&lt;110</div><div class="kn-desc">Initial resting rate target (bpm)</div></div>
    <div class="kn-item"><div class="kn-val">200 J</div><div class="kn-desc">Biphasic DCCV, AP pads</div></div>
    <div class="kn-item"><div class="kn-val">5 mg bd</div><div class="kn-desc">Apixaban standard dose</div></div>
    <div class="kn-item"><div class="kn-val">1 year</div><div class="kn-desc">Window for early rhythm control (EAST-AFNET 4)</div></div>
    <div class="kn-item"><div class="kn-val">10%</div><div class="kn-desc">Weight loss that cuts AF burden (LEGACY)</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">AF-CARE — the 2024 framework</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Pillar</th><th>Focus</th></tr>
    <tr><td><strong>C</strong> — Comorbidities</td><td>BP, weight, OSA, alcohol, exercise, glycaemia, HF — treated proactively, not incidentally</td></tr>
    <tr><td><strong>A</strong> — Avoid stroke</td><td>CHA₂DS₂-VA, OAC choice, modifiable bleeding risk</td></tr>
    <tr><td><strong>R</strong> — Reduce symptoms</td><td>Rate control, rhythm control, ablation</td></tr>
    <tr><td><strong>E</strong> — Evaluation, dynamic</td><td>Reassess regularly — rhythm, comorbidities and stroke risk all evolve</td></tr>
  </table></div>
  <div class="info-box blue"><span class="info-box-icon">💡</span><div>The point of the framework is to stop you tunnelling on rate-vs-rhythm and forgetting stroke prevention and comorbidity care — which is what actually changes outcomes.</div></div>
</div>

<div class="card">
  <div class="card-title">CHA₂DS₂-VA <span class="tag tag-new">2024: sex point dropped</span></div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Letter</th><th>Risk factor</th><th>Points</th></tr>
    <tr><td>C</td><td>Congestive HF / moderate–severe LV dysfunction</td><td>1</td></tr>
    <tr><td>H</td><td>Hypertension (treated, or BP &gt;140/90)</td><td>1</td></tr>
    <tr><td>A₂</td><td>Age ≥75</td><td>2</td></tr>
    <tr><td>D</td><td>Diabetes</td><td>1</td></tr>
    <tr><td>S₂</td><td>Prior stroke / TIA / systemic embolism</td><td>2</td></tr>
    <tr><td>V</td><td>Vascular disease (MI, PAD, complex aortic plaque)</td><td>1</td></tr>
    <tr><td>A</td><td>Age 65–74</td><td>1</td></tr>
  </table></div>
  <p><strong>Score ≥2</strong> → OAC recommended (Class I) · <strong>1</strong> → OAC should be considered (IIa) · <strong>0</strong> → no antithrombotic.</p>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>HAS-BLED flags modifiable risk — it never justifies withholding OAC.</strong> Aspirin is not a substitute for anticoagulation in AF. Note NICE NG196 still uses CHA₂DS₂-VASc with the sex point.</div></div>
</div>

<div class="card">
  <div class="card-title">DOAC dosing</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>DOAC</th><th>Standard</th><th>Reduce to</th></tr>
    <tr><td>Apixaban</td><td>5 mg BD</td><td>2.5 mg BD if <strong>≥2 of</strong>: age ≥80, weight ≤60 kg, creatinine ≥133 µmol/L</td></tr>
    <tr><td>Rivaroxaban</td><td>20 mg OD <em>with food</em></td><td>15 mg OD if CrCl 15–49</td></tr>
    <tr><td>Edoxaban</td><td>60 mg OD</td><td>30 mg OD if CrCl 15–50, weight ≤60 kg, or strong P-gp inhibitor</td></tr>
    <tr><td>Dabigatran</td><td>150 mg BD</td><td>110 mg BD if age ≥80, on verapamil, or high bleeding risk. <strong>Avoid if eGFR &lt;30</strong></td></tr>
  </table></div>
  <p><strong>Warfarin still required for:</strong> mechanical valve · moderate–severe mitral stenosis · antiphospholipid syndrome (especially triple-positive).</p>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Rate control — agents &amp; cautions</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Drug</th><th>Acute IV</th><th>Oral</th><th>Avoid in</th></tr>
  <tr><td>Beta-blocker</td><td>Metoprolol 2.5–5 mg over 2 min, repeat to 15 mg</td><td>Bisoprolol 1.25–10 mg OD</td><td>Decompensated HF without senior input; pre-excited AF</td></tr>
  <tr><td>Non-DHP CCB</td><td>Diltiazem 0.25 mg/kg over 2 min then 5–15 mg/h; verapamil 5–10 mg</td><td>Diltiazem MR 120–360 mg/day</td><td><strong>HFrEF — contraindicated</strong>; pre-excited AF</td></tr>
  <tr><td>Digoxin</td><td>0.25–0.5 mg IV, repeat 0.25 mg q6h to 1.5 mg/24 h</td><td>62.5–250 mcg OD (level 0.5–0.9)</td><td>Pre-excited AF; dose-reduce in renal failure</td></tr>
  <tr><td>Amiodarone</td><td>300 mg over 1 h → 900 mg/24 h</td><td>Reserve for HF / refractory</td><td>Will chemically cardiovert — <strong>anticoagulate first</strong></td></tr>
</table></div>
<div class="info-box red"><span class="info-box-icon">🚨</span><div><strong>Never combine IV beta-blocker with IV verapamil or diltiazem</strong> — profound bradycardia or asystole.</div></div>
<p>Persistent fast AF with reduced LVEF → consider <strong>tachycardia-induced cardiomyopathy</strong>. Restore rhythm or control rate hard, then reassess LVEF at 3 months.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Rhythm control &amp; cardioversion</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>When to pursue rhythm control</h4>
<ul>
  <li>Symptoms despite adequate rate control (EHRA ≥2b)</li>
  <li>First-detected AF in a younger patient</li>
  <li>AF with heart failure (CASTLE-AF, CASTLE-HTx)</li>
  <li>Suspected tachycardia-induced cardiomyopathy</li>
  <li><strong>Within 1 year of diagnosis</strong> — early rhythm control improves outcomes (EAST-AFNET 4)</li>
</ul>
<h4>Pharmacological cardioversion</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Agent</th><th>Dose</th><th>Caveat</th></tr>
  <tr><td>Flecainide</td><td>2 mg/kg IV over 10 min (max 150 mg), or 200–300 mg PO</td><td><strong>No structural heart disease only.</strong> Basis of 'pill-in-pocket'</td></tr>
  <tr><td>Propafenone</td><td>2 mg/kg IV over 10 min, or 450–600 mg PO</td><td>Same structural restriction</td></tr>
  <tr><td>Vernakalant</td><td>3 mg/kg over 10 min, then 2 mg/kg</td><td>Avoid in HF, hypotension, severe AS, recent ACS</td></tr>
  <tr><td>Amiodarone</td><td>300 mg over 1 h → 900 mg/24 h</td><td>Slow onset; the choice when structural disease present</td></tr>
</table></div>
<div class="info-box red"><span class="info-box-icon">🚨</span><div><strong>Anticoagulation around cardioversion.</strong> &lt;24 h and low risk: heparin/DOAC peri-procedure. 24–48 h: heparin/DOAC before. <strong>&gt;48 h or unknown:</strong> 3 weeks therapeutic OAC <em>or</em> TOE-guided. Afterwards: OAC ≥4 weeks in everyone, then lifelong if CHA₂DS₂-VA ≥1.</div></div>
<h4>Long-term antiarrhythmics</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Drug</th><th>Use when</th></tr>
  <tr><td>Flecainide / propafenone</td><td>No structural heart disease. Avoid in CAD, LVH, HF</td></tr>
  <tr><td>Sotalol</td><td>Preserved LVEF, no HF. Watch QT; reduce in renal impairment</td></tr>
  <tr><td>Dronedarone</td><td>Not permanent AF, not advanced HF (PALLAS, ANDROMEDA)</td></tr>
  <tr><td>Amiodarone</td><td>Structural disease / HF / refractory. Most effective, most toxic</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Catheter ablation</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li>Class I after one failed antiarrhythmic in symptomatic paroxysmal or persistent AF.</li>
  <li><strong>First-line option</strong> for symptomatic paroxysmal AF in selected patients (2024) — EARLY-AF, STOP-AF, CRYO-FIRST.</li>
  <li><strong>AF with HFrEF</strong> — improves mortality and HF hospitalisation (CASTLE-AF, CASTLE-HTx).</li>
  <li>Pulmonary vein isolation is the foundation. Radiofrequency, cryoballoon, or pulsed-field ablation (ADVENT 2023 — faster, more tissue-selective).</li>
  <li>Recurrence in the <strong>3-month blanking period is expected</strong> — don't re-do too early.</li>
  <li>OAC for ≥2 months post-ablation, then <strong>by CHA₂DS₂-VA, not by perceived success</strong>.</li>
</ul>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Special situations</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Scenario</th><th>Key points</th></tr>
  <tr><td><strong>AF in HFrEF</strong></td><td>Beta-blocker first, digoxin as add-on. Avoid non-DHP CCB. Strongly consider ablation</td></tr>
  <tr><td><strong>Pre-excited AF (WPW)</strong></td><td><strong>No AV nodal blockers at all</strong> — digoxin, beta-blocker, verapamil/diltiazem, amiodarone are all Class III. DCCV if unstable; IV flecainide or ibutilide if not. Refer for pathway ablation</td></tr>
  <tr><td><strong>AF after ACS / PCI</strong></td><td>Triple therapy ≤1 week peri-PCI → drop aspirin → DOAC + clopidogrel to 12 months → DOAC alone (AUGUSTUS, RE-DUAL PCI, ENTRUST-AF PCI)</td></tr>
  <tr><td><strong>Post-cardiac surgery</strong></td><td>Up to 40%; usually self-limiting. Beta-blocker prophylaxis. Short-term OAC if &gt;48 h; reassess at 30–60 days</td></tr>
  <tr><td><strong>Thyrotoxic AF</strong></td><td>Treat the thyroid. ~60% revert once euthyroid. Anticoagulate per score meanwhile</td></tr>
  <tr><td><strong>Pregnancy</strong></td><td>Bisoprolol or metoprolol (not atenolol). Avoid amiodarone. <strong>LMWH — not DOAC, not warfarin.</strong> DCCV safe in all trimesters</td></tr>
  <tr><td><strong>LAA occlusion</strong></td><td>High stroke risk with absolute contraindication to OAC (PROTECT-AF, PRAGUE-17)</td></tr>
  <tr><td><strong>Device-detected AHRE</strong></td><td>Episodes ≥6 min but &lt;24 h: shared decision; routine OAC not indicated (NOAH-AFNET 6, ARTESIA)</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Pearls &amp; traps</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Pre-excited AF is the one that kills.</strong> Blocking the AV node pushes every impulse down the accessory pathway → VF.</li>
  <li><strong>"Lone AF" is rare.</strong> Look hard for hypertension, OSA, thyroid disease, alcohol, obesity, HF.</li>
  <li>Symptoms drive rhythm-control intensity. Asymptomatic AF in an elderly patient often needs only rate control + OAC.</li>
  <li>DOAC interactions: amiodarone, verapamil, diltiazem raise levels; rifampicin, phenytoin, carbamazepine, St John's wort lower them.</li>
  <li><strong>Reversal:</strong> idarucizumab for dabigatran; andexanet alfa for apixaban/rivaroxaban; PCC if unavailable.</li>
  <li>10% weight loss alone substantially reduces AF burden (LEGACY) — the least prescribed effective therapy.</li>
</ul>
</div></div>`,

'gl-hf': `
<div class="section-title">Heart Failure</div>
<div class="section-subtitle">ESC 2021 + 2023 update · Acute management and the four pillars.</div>
<div class="gl-source-bar"><strong>Sources:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-and-Chronic-Heart-Failure" target="_blank" class="gl-link">ESC HF 2021 ↗</a> <a href="https://www.nice.org.uk/guidance/ng106" target="_blank" class="gl-link nice">NICE NG106 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ On-call — classify in 30 seconds</div>
  <ul>
    <li>Two axes: <strong>congestion</strong> (wet/dry) and <strong>perfusion</strong> (warm/cold). That grid decides therapy.</li>
    <li><strong>Red flags:</strong> SBP &lt;90 with hypoperfusion · SpO₂ &lt;90% on high-flow · new murmur · malignant arrhythmia · STEMI as trigger.</li>
    <li><strong>NIV early</strong> in respiratory distress — reduces intubation and mortality.</li>
    <li><strong>No routine oxygen</strong> if SpO₂ ≥90%. Hyperoxia vasoconstricts and worsens outcomes.</li>
    <li>Always name the trigger: ischaemia, arrhythmia, infection, non-compliance, NSAIDs, anaemia, thyroid, PE.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">≤40%</div><div class="kn-desc">HFrEF · 41–49% HFmrEF · ≥50% HFpEF</div></div>
    <div class="kn-item"><div class="kn-val">&lt;300</div><div class="kn-desc">NT-proBNP pg/mL — rules OUT acute HF</div></div>
    <div class="kn-item"><div class="kn-val">92–96%</div><div class="kn-desc">Target SpO₂ (88–92% if COPD)</div></div>
    <div class="kn-item"><div class="kn-val">2 h</div><div class="kn-desc">Reassess diuretic response; double if poor</div></div>
    <div class="kn-item"><div class="kn-val">&gt;50–70</div><div class="kn-desc">Spot urine Na mmol/L = good response</div></div>
    <div class="kn-item"><div class="kn-val">30%</div><div class="kn-desc">Creatinine rise acceptable during decongestion</div></div>
    <div class="kn-item"><div class="kn-val">≤35%</div><div class="kn-desc">LVEF for ICD, after ≥3 months OMT</div></div>
    <div class="kn-item"><div class="kn-val">≥130 ms</div><div class="kn-desc">QRS with LBBB → CRT</div></div>
    <div class="kn-item"><div class="kn-val">7 days</div><div class="kn-desc">Follow-up after discharge (Class I)</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">The 30-second grid</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th></th><th>WARM (perfused)</th><th>COLD (hypoperfused)</th></tr>
    <tr><td><strong>DRY</strong></td><td>Compensated — review the diagnosis</td><td>Hypovolaemia / over-diuresis. Cautious fluid; vasopressor if SBP low</td></tr>
    <tr><td><strong>WET</strong></td><td><span class="pill pill-blue">Most common</span> Diuretics ± vasodilators</td><td><span class="pill pill-red">Cardiogenic shock</span> Inotropes/vasopressors first; diuretics only once perfused</td></tr>
  </table></div>
  <p class="text-sm text-muted"><strong>Congestion:</strong> orthopnoea, raised JVP, bibasal creps, oedema, S3, rising weight. <strong>Hypoperfusion:</strong> narrow pulse pressure, cold peripheries, oliguria, confusion, lactate &gt;2.</p>
</div>

<div class="card">
  <div class="card-title">The four pillars — HFrEF</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Pillar</th><th>Start</th><th>Target</th></tr>
    <tr><td><strong>ARNI</strong> / ACE-I / ARB</td><td>Sacubitril–valsartan 24/26 mg BD</td><td>97/103 mg BD <span class="text-xs">(36 h washout from ACE-I)</span></td></tr>
    <tr><td><strong>Beta-blocker</strong></td><td>Bisoprolol 1.25 mg OD</td><td>10 mg OD</td></tr>
    <tr><td><strong>MRA</strong></td><td>Spironolactone 25 mg OD</td><td>50 mg OD <span class="text-xs">(K &lt;5.0, eGFR &gt;30)</span></td></tr>
    <tr><td><strong>SGLT2 inhibitor</strong></td><td colspan="2">Dapagliflozin or empagliflozin 10 mg OD — <strong>no titration, start at target</strong></td></tr>
  </table></div>
  <div class="info-box green"><span class="info-box-icon">📈</span><div><strong>STRONG-HF (Lancet 2022):</strong> intensive up-titration — full doses by 2 weeks with 4 visits in 6 weeks — cut 180-day death or HF readmission by 34%. This is why the 2023 update makes pre-discharge initiation <strong>Class I</strong>. Don't defer it to clinic.</div></div>
</div>

<div class="card">
  <div class="card-title">Decongestion — IV diuretics</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Situation</th><th>Initial IV furosemide</th><th>Escalate</th></tr>
    <tr><td>Diuretic-naive</td><td>20–40 mg bolus</td><td>At 2 h: UO &gt;100–150 mL/h or urine Na &gt;50–70 = good response</td></tr>
    <tr><td>Already on a loop</td><td>≥1–2.5× usual oral daily dose IV</td><td>If insufficient at 2 h — <strong>double the dose</strong></td></tr>
    <tr><td>Persistent congestion</td><td colspan="2">Add second agent: IV acetazolamide 500 mg OD (ADVOR), thiazide, or MRA</td></tr>
    <tr><td>Diuretic resistance</td><td colspan="2">Continuous infusion 5–20 mg/h → ultrafiltration / RRT if failing</td></tr>
  </table></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Cardiogenic shock — vasoactive drugs</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="info-box red"><span class="info-box-icon">🚨</span><div>Early senior + ITU + interventional cardiology. Arterial line and CVC. Urgent echo. If ACS-related → emergency angiography.</div></div>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Drug</th><th>Indication</th><th>Dose</th></tr>
  <tr><td>Noradrenaline</td><td>First-line vasopressor, SBP &lt;90 with hypoperfusion</td><td>0.05–1 mcg/kg/min, titrate to MAP ≥65</td></tr>
  <tr><td>Dobutamine</td><td>Low output with adequate BP</td><td>2–20 mcg/kg/min</td></tr>
  <tr><td>Milrinone</td><td>On chronic beta-blocker, or pulmonary hypertension</td><td>0.1–0.75 mcg/kg/min (no bolus)</td></tr>
  <tr><td>Levosimendan</td><td>Calcium sensitiser; inotrope-dependent</td><td>0.05–0.2 mcg/kg/min over 24 h</td></tr>
  <tr><td>Adrenaline</td><td>Refractory shock only</td><td>0.05–0.5 mcg/kg/min</td></tr>
</table></div>
<p>Mechanical support (IABP, Impella, VA-ECMO) — consider early in SCAI stage C–D with a reversible cause. Discuss with the regional shock team.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Natriuretic peptides &amp; vasodilators</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="info-box blue"><span class="info-box-icon">💡</span><div><strong>NT-proBNP rule-out:</strong> &lt;300 pg/mL at any age excludes acute HF. <strong>Rule-in (age-adjusted):</strong> &gt;450 (&lt;50 y) · &gt;900 (50–75 y) · &gt;1800 (&gt;75 y). BNP rule-out &lt;100. <strong>Raised</strong> in AF, PE, sepsis, CKD; <strong>falsely low</strong> in obesity.</div></div>
<p>Vasodilators are for the acutely congested, <em>hypertensive</em> patient (SBP &gt;110) with pulmonary oedema. Avoid if SBP &lt;90 or significant AS/MS. Routine IV nitrate is now only Class IIb.</p>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Agent</th><th>Start</th><th>Titrate</th></tr>
  <tr><td>GTN infusion</td><td>10–20 mcg/min</td><td>↑5–10 mcg/min every 3–5 min (max ~200). Tachyphylaxis after 24 h</td></tr>
  <tr><td>Isosorbide dinitrate</td><td>1 mg/h IV</td><td>Up to 10 mg/h by BP</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">HFpEF, devices &amp; disposition</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>HFpEF (LVEF ≥50%)</h4>
<ul>
  <li><strong>SGLT2 inhibitor</strong> — the one therapy with clear outcome benefit (EMPEROR-Preserved, DELIVER).</li>
  <li>Diuretics for congestion; treat hypertension, AF, obesity, sleep apnoea aggressively.</li>
  <li>Always ask what's mimicking it: amyloid, constriction, HCM, high-output states.</li>
</ul>
<h4>Devices</h4>
<ul>
  <li><strong>ICD</strong> — LVEF ≤35% after ≥3 months optimal therapy. Reassess at 6–12 weeks post-MI before deciding.</li>
  <li><strong>CRT</strong> — LVEF ≤35% + LBBB + QRS ≥130 ms (strongest benefit ≥150 ms).</li>
  <li>DANISH: benefit less clear in non-ischaemic DCM in the contemporary era.</li>
</ul>
<h4>Disposition</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Setting</th><th>Criteria</th></tr>
  <tr><td>CCU / HDU</td><td>Shock, respiratory failure, ACS, malignant arrhythmia, NIV, inotropes</td></tr>
  <tr><td>Cardiology ward</td><td>Congestion responding to IV diuretic, stable, no ACS</td></tr>
  <tr><td>Ambulatory</td><td>Mild decompensation with robust follow-up <strong>within 7 days</strong> (Class I)</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Pearls &amp; traps</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>A creatinine rise up to 30% during decongestion is acceptable</strong> — usually haemoconcentration, not AKI.</li>
  <li><strong>Don't reflexively stop ACE-I/ARNI/MRA/SGLT2 in AKI.</strong> Reassess when euvolaemic — stopping usually worsens outcomes.</li>
  <li><strong>Beta-blockers: halve, don't stop</strong> — unless cardiogenic shock, severe bradycardia, or hypotension.</li>
  <li>Rapid AF in HF: digoxin if stable, amiodarone if not. <strong>Avoid verapamil/diltiazem and high-dose IV beta-blockade.</strong></li>
  <li>Refer early for advanced therapies if &lt;65 y, recurrent admissions, peak VO₂ &lt;14, or inotrope-dependent.</li>
  <li>Pre-discharge NT-proBNP that hasn't fallen by 30% predicts readmission — flag it to the team.</li>
</ul>
<p class="text-sm text-muted"><strong>Key trials:</strong> PARADIGM-HF · DAPA-HF · EMPEROR-Reduced · EMPEROR-Preserved · DELIVER · RALES · STRONG-HF · ADVOR · EMPULSE</p>
</div></div>`,

'gl-htn': `
<div class="section-title">Hypertension</div>
<div class="section-subtitle">ESC 2024 · Targets, the treatment algorithm, and when to hunt for a secondary cause.</div>
<div class="gl-source-bar"><strong>Sources:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Elevated-Blood-Pressure-and-Hypertension" target="_blank" class="gl-link">ESC HTN 2024 ↗</a> <a href="https://www.nice.org.uk/guidance/ng136" target="_blank" class="gl-link nice">NICE NG136 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ On-call — the only urgent question</div>
  <ul>
    <li><strong>Is there acute target-organ damage?</strong> Chest pain, dissection, pulmonary oedema, encephalopathy, papilloedema, AKI, eclampsia.</li>
    <li><strong>Yes → hypertensive emergency.</strong> IV therapy, HDU, controlled reduction (max 25% MAP in the first hour) — except in dissection, where you go fast and low.</li>
    <li><strong>No → not an emergency</strong>, however alarming the number. Oral therapy, no IV, arrange follow-up. Dropping BP fast in asymptomatic hypertension causes strokes.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">140/90</div><div class="kn-desc">Diagnostic threshold (clinic)</div></div>
    <div class="kn-item"><div class="kn-val">135/85</div><div class="kn-desc">ABPM / home equivalent</div></div>
    <div class="kn-item"><div class="kn-val">&lt;130/80</div><div class="kn-desc">Target for most on treatment</div></div>
    <div class="kn-item"><div class="kn-val">&lt;140/90</div><div class="kn-desc">Target if &gt;80 y or lower not tolerated</div></div>
    <div class="kn-item"><div class="kn-val">≥180/110</div><div class="kn-desc">Severe — assess for organ damage</div></div>
    <div class="kn-item"><div class="kn-val">25%</div><div class="kn-desc">Max MAP reduction in first hour</div></div>
    <div class="kn-item"><div class="kn-val">&lt;120</div><div class="kn-desc">Target SBP in aortic dissection (mmHg)</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">Treatment algorithm</div>
  <h4>Step 1 — start with two drugs (single pill where possible)</h4>
  <ul>
    <li><strong>ACE-I or ARB + CCB</strong> — the preferred first combination</li>
    <li>Or ACE-I/ARB + thiazide-like diuretic (indapamide, chlortalidone)</li>
    <li><strong>Never combine ACE-I with ARB</strong></li>
  </ul>
  <h4>Step 2 — three drugs</h4>
  <ul><li>ACE-I/ARB + CCB + thiazide-like diuretic</li></ul>
  <h4>Step 3 — resistant hypertension</h4>
  <ul>
    <li>Add <strong>spironolactone 25–50 mg</strong> — the most effective 4th agent (PATHWAY-2)</li>
    <li>Alternatives: doxazosin, or a beta-blocker</li>
    <li><strong>Check adherence</strong> (drug-level testing changes the picture surprisingly often) and screen for secondary causes</li>
  </ul>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>ESC vs NICE:</strong> ESC 2024 targets &lt;130/80 for most treated patients; NICE NG136 treats to &lt;140/90 (&lt;150/90 if over 80). Know which your trust audits against.</div></div>
</div>

<div class="card">
  <div class="card-title">Secondary hypertension — when to suspect</div>
  <ul>
    <li>Age &lt;40 with significant hypertension</li>
    <li>Resistant to three drugs at adequate dose</li>
    <li>Sudden loss of previously good control</li>
    <li><strong>Hypokalaemia</strong> — primary hyperaldosteronism (Conn's)</li>
    <li>Renal bruit, flash pulmonary oedema — renovascular disease</li>
    <li>Paroxysmal headache, sweating, palpitations — phaeochromocytoma</li>
    <li>Cushingoid habitus · snoring and daytime somnolence (OSA)</li>
  </ul>
  <p><strong>First-line tests:</strong> renal profile, urine ACR, aldosterone:renin ratio (off interfering drugs), renal ultrasound, overnight dexamethasone suppression, plasma or urinary metanephrines.</p>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Hypertensive emergency — IV agents</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Setting</th><th>Agent</th><th>Target</th></tr>
  <tr><td><strong>Aortic dissection</strong></td><td>IV beta-blocker first (labetalol or esmolol), <em>then</em> vasodilator</td><td>SBP &lt;120 and HR &lt;60 within 20 min</td></tr>
  <tr><td>Pulmonary oedema</td><td>GTN infusion ± loop diuretic</td><td>Symptom relief; avoid overshoot</td></tr>
  <tr><td>Encephalopathy</td><td>Labetalol or nicardipine</td><td>↓MAP 20–25% over the first hour</td></tr>
  <tr><td>Eclampsia / pre-eclampsia</td><td>Labetalol, nifedipine, or hydralazine + magnesium</td><td>&lt;160/110; obstetric input</td></tr>
  <tr><td>Phaeochromocytoma crisis</td><td>Phentolamine — <strong>alpha blockade before beta</strong></td><td>Unopposed beta blockade worsens the crisis</td></tr>
</table></div>
<div class="info-box red"><span class="info-box-icon">🚨</span><div>Reduce MAP by <strong>no more than 25% in the first hour</strong> (dissection excepted). Cerebral autoregulation is reset in chronic hypertension — going too fast causes watershed infarction.</div></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Measurement, and getting it right</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Confirm with ABPM or home readings</strong> before labelling anyone hypertensive — white-coat hypertension is ~15% of clinic diagnoses.</li>
  <li>Seated, back supported, arm at heart level, correct cuff size, no talking, after 5 minutes' rest. An oversized arm in a small cuff reads falsely high.</li>
  <li>Measure both arms at first assessment — a persistent &gt;15 mmHg difference suggests subclavian disease and predicts CV risk.</li>
  <li><strong>Masked hypertension</strong> (normal clinic, high ambulatory) carries the same risk as sustained hypertension and is easily missed.</li>
  <li>Look for postural drop before intensifying, especially in the elderly and in diabetes.</li>
</ul>
</div></div>`,

'gl-lipids': `
<div class="section-title">Dyslipidaemia</div>
<div class="section-subtitle">ESC/EAS 2019 · The admission is your best chance to get this right.</div>
<div class="gl-source-bar"><strong>Sources:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Dyslipidaemias-Management-of" target="_blank" class="gl-link">ESC/EAS 2019 ↗</a> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/CVD-Prevention-in-clinical-practice" target="_blank" class="gl-link">ESC Prevention 2021 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ The one thing to do on the ward round</div>
  <ul>
    <li><strong>Start a high-intensity statin on admission in every ACS patient</strong> — before you know the baseline LDL. Adherence is never higher than at discharge.</li>
    <li>Atorvastatin 80 mg or rosuvastatin 20–40 mg.</li>
    <li><strong>Book the 4–6 week lipid check</strong> — that review is what converts a prescription into a treated patient.</li>
    <li>Severe hypertriglyceridaemia &gt;10 mmol/L is a pancreatitis emergency, not a clinic problem.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers — LDL targets (mmol/L)</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">&lt;1.4</div><div class="kn-desc">Very high risk + ≥50% reduction</div></div>
    <div class="kn-item"><div class="kn-val">&lt;1.8</div><div class="kn-desc">High risk + ≥50% reduction</div></div>
    <div class="kn-item"><div class="kn-val">&lt;2.6</div><div class="kn-desc">Moderate risk</div></div>
    <div class="kn-item"><div class="kn-val">&lt;1.0</div><div class="kn-desc">Recurrent event within 2 y on statin</div></div>
    <div class="kn-item"><div class="kn-val">4–6 wks</div><div class="kn-desc">Recheck after starting or changing dose</div></div>
    <div class="kn-item"><div class="kn-val">&gt;5.0</div><div class="kn-desc">Untreated LDL — suspect FH</div></div>
    <div class="kn-item"><div class="kn-val">&gt;10</div><div class="kn-desc">Triglycerides — pancreatitis risk</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">Risk categories</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Risk</th><th>Who</th><th>LDL target</th></tr>
    <tr><td><span class="pill pill-red">Very high</span></td><td>Established ASCVD · SCORE2 ≥10% · FH with ASCVD or another major risk factor · eGFR &lt;30 · T2DM with target-organ damage or ≥3 risk factors</td><td>&lt;1.4 <em>and</em> ≥50% ↓</td></tr>
    <tr><td><span class="pill pill-amber">High</span></td><td>SCORE2 5–&lt;10% · markedly raised single factor (TC &gt;8, LDL &gt;4.9, BP ≥180/110) · FH alone · eGFR 30–59 · DM ≥10 y duration</td><td>&lt;1.8 <em>and</em> ≥50% ↓</td></tr>
    <tr><td><span class="pill pill-blue">Moderate</span></td><td>SCORE2 1–&lt;5% · young T1DM &lt;35 or T2DM &lt;50 with short duration</td><td>&lt;2.6</td></tr>
    <tr><td><span class="pill pill-green">Low</span></td><td>SCORE2 &lt;1%</td><td>&lt;3.0</td></tr>
  </table></div>
  <p class="text-sm text-muted">Use SCORE2 (40–69 y), SCORE2-OP (≥70 y), or SCORE2-Diabetes (2023). Modifiers: family history, ethnicity, chronic inflammatory disease, raised Lp(a), coronary calcium score.</p>
</div>

<div class="card">
  <div class="card-title">Stepwise therapy</div>
  <p><strong>Maximally tolerated statin → add ezetimibe → add PCSK9 inhibitor.</strong> Don't wait for a clinic to escalate.</p>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Drug</th><th>Dose</th><th>LDL ↓</th><th>Note</th></tr>
    <tr><td><strong>Atorvastatin</strong></td><td>20–80 mg OD</td><td>40–60%</td><td>First-line high-intensity, any time of day</td></tr>
    <tr><td><strong>Rosuvastatin</strong></td><td>10–40 mg OD</td><td>45–63%</td><td>Most potent; preferred in renal impairment</td></tr>
    <tr><td>Simvastatin</td><td>10–40 mg nocte</td><td>28–41%</td><td>Many CYP3A4 interactions — avoid with amiodarone, clarithromycin</td></tr>
    <tr><td>Pravastatin</td><td>10–40 mg OD</td><td>24–32%</td><td>Fewest interactions — useful on DOAC or antiretrovirals</td></tr>
    <tr><td><strong>Ezetimibe</strong></td><td>10 mg OD</td><td>+15–22%</td><td>Outcome benefit on top of statin (IMPROVE-IT)</td></tr>
    <tr><td><strong>PCSK9i</strong></td><td>Alirocumab 75–150 mg SC q2w · evolocumab 140 mg q2w</td><td>+50–60%</td><td>Very high risk not at target on statin + ezetimibe (FOURIER, ODYSSEY)</td></tr>
    <tr><td>Inclisiran</td><td>284 mg SC day 0, day 90, then 6-monthly</td><td>~50%</td><td>siRNA — twice-yearly dosing helps adherence</td></tr>
    <tr><td>Bempedoic acid</td><td>180 mg OD</td><td>~17–20%</td><td>Statin intolerance (CLEAR Outcomes). Monitor urate — gout</td></tr>
    <tr><td>Icosapent ethyl</td><td>2 g BD</td><td>TG ↓</td><td>Very high risk with TG 1.5–5.6 on statin (REDUCE-IT). <strong>Not generic omega-3</strong></td></tr>
  </table></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Special situations</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Situation</th><th>Approach</th></tr>
  <tr><td><strong>Post-ACS</strong></td><td>High-intensity statin at presentation. Recheck at 4–6 weeks. Ezetimibe early if not at target; PCSK9i if still &gt;1.4 (Class I)</td></tr>
  <tr><td><strong>TG &gt;10 mmol/L</strong></td><td>Pancreatitis risk. Admit, low-fat/NBM, IV fluids, fenofibrate, omega-3, insulin infusion if diabetic. <strong>Avoid propofol</strong> (lipid-based)</td></tr>
  <tr><td><strong>Familial hypercholesterolaemia</strong></td><td>LDL &gt;5 untreated + family history / tendon xanthomata / premature CVD. DLCN or Simon Broome criteria. Lipid clinic + <strong>cascade screening of relatives</strong></td></tr>
  <tr><td><strong>Raised Lp(a)</strong></td><td>Measure <strong>once in every adult</strong> (ESC 2019). &gt;50 mg/dL or &gt;125 nmol/L is very high. No specific agent yet — intensify LDL lowering instead</td></tr>
  <tr><td><strong>CKD</strong></td><td>eGFR 30–60 = high risk; &lt;30 = very high. Atorvastatin or dose-adjusted rosuvastatin. Don't start for primary prevention in dialysis</td></tr>
  <tr><td><strong>Liver disease</strong></td><td>Statins safe in most chronic liver disease; avoid in decompensated cirrhosis. Transaminase rise to 3× ULN is acceptable</td></tr>
  <tr><td><strong>Pregnancy</strong></td><td>Statins, ezetimibe and PCSK9i all contraindicated. Stop ≥3 months before conception</td></tr>
  <tr><td><strong>Statin intolerance</strong></td><td><strong>70–90% tolerate on rechallenge.</strong> Try a different statin, lower dose, or alternate-day. If genuine: ezetimibe + bempedoic acid / PCSK9i / inclisiran. Check CK only if symptomatic (stop if &gt;4× ULN)</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Monitoring &amp; pearls</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Baseline:</strong> lipids, LFT, TSH, HbA1c. Exclude secondary causes — hypothyroidism, nephrotic syndrome, diabetes, alcohol.</li>
  <li><strong>4–6 weeks</strong> after any change: lipids and LFT. Then 3–6 monthly to target, then annually.</li>
  <li><strong>CK only if symptomatic</strong> — not routine.</li>
  <li><strong>Lower is better.</strong> No LDL threshold has been shown to cause harm, down to &lt;1 mmol/L in trials.</li>
  <li><strong>Non-fasting samples are standard</strong> (ESC 2019). Only fast if non-fasting TG &gt;4.5.</li>
  <li>Non-HDL = TC − HDL. Secondary targets: &lt;2.2 (very high), &lt;2.6 (high), &lt;3.4 (moderate).</li>
  <li>ApoB is the better burden marker in diabetes, obesity, metabolic syndrome, or low LDL.</li>
  <li>Counsel about the <strong>nocebo effect</strong> — subjective muscle symptoms are far commoner than objective myopathy, and blinded rechallenge usually resolves the question.</li>
</ul>
</div></div>`,

'gl-syncope': `
<div class="section-title">Syncope</div>
<div class="section-subtitle">ESC 2018 · The question is never "was it a faint" — it's "is this the heart".</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Syncope-Guidelines-on-Diagnosis-and-Management-of" target="_blank" class="gl-link">ESC Syncope 2018 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ Red flags — admit or observe</div>
  <ul>
    <li><strong>During exertion, or while supine</strong> — cardiac until proven otherwise.</li>
    <li><strong>Preceded by palpitations</strong>, or with <strong>no prodrome at all</strong>.</li>
    <li>Family history of sudden death &lt;40 y.</li>
    <li>Known structural heart disease, prior MI or HF.</li>
    <li>New abnormal ECG · syncope causing injury · age &gt;65 with comorbidity.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">~10%</div><div class="kn-desc">ED syncope with serious event at 7–30 days</div></div>
    <div class="kn-item"><div class="kn-val">≥20</div><div class="kn-desc">SBP drop (mmHg) = orthostatic hypotension</div></div>
    <div class="kn-item"><div class="kn-val">3 min</div><div class="kn-desc">Standing BP timing</div></div>
    <div class="kn-item"><div class="kn-val">≥3 s</div><div class="kn-desc">Symptomatic pause — significant</div></div>
    <div class="kn-item"><div class="kn-val">≥6 s</div><div class="kn-desc">Asymptomatic pause — consider pacing</div></div>
    <div class="kn-item"><div class="kn-val">~60%</div><div class="kn-desc">Diagnosed by history + ECG alone</div></div>
    <div class="kn-item"><div class="kn-val">1 in 6</div><div class="kn-desc">Unexplained admitted syncope with PE (PESIT)</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">High-risk ECG features</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Feature</th><th>Implication</th></tr>
    <tr><td>Bifascicular block, QRS ≥120 ms</td><td>Risk of paroxysmal high-grade AV block</td></tr>
    <tr><td>Mobitz II · complete AVB · alternating BBB</td><td>Needs pacing</td></tr>
    <tr><td>Sinus bradycardia &lt;40 awake, or pauses ≥3 s</td><td>Sinus node dysfunction</td></tr>
    <tr><td>Pre-excitation (delta wave, short PR)</td><td>WPW</td></tr>
    <tr><td>Long QT · short QT · Brugada pattern</td><td>Channelopathy — SCD risk</td></tr>
    <tr><td>Epsilon wave, TWI V1–V3</td><td>ARVC</td></tr>
    <tr><td>Q waves or LVH</td><td>Prior MI / cardiomyopathy</td></tr>
    <tr><td>Non-sustained VT</td><td>Structural or channelopathic disease</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Disposition</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Risk</th><th>Features</th><th>Plan</th></tr>
    <tr><td><span class="pill pill-green">Low</span></td><td>Typical reflex features, young, no structural disease, normal ECG</td><td>Discharge with reassurance + clinic follow-up</td></tr>
    <tr><td><span class="pill pill-amber">Intermediate</span></td><td>Neither clearly low nor high risk</td><td>Short-stay / syncope unit; outpatient workup</td></tr>
    <tr><td><span class="pill pill-red">High</span></td><td>Any red flag above</td><td>Admit, monitored bed, echo + telemetry ± ILR</td></tr>
  </table></div>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div>Risk scores (OESIL, San Francisco, EGSYS, ROSE) <strong>do not beat clinical judgement</strong> and shouldn't be used in isolation — ESC 2018 says so explicitly.</div></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Is it actually syncope?</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Suggests syncope</th><th>Suggests something else</th></tr>
  <tr><td>Short duration (&lt;20 s) · brief abnormal movements · complete amnesia · rapid full recovery · typical prodrome and trigger</td><td><strong>Seizure:</strong> tonic-clonic, cyanosis, lateral tongue bite, incontinence, prolonged post-ictal confusion, aura, head turning<br><strong>Hypoglycaemia:</strong> prolonged confusion, sweating, diabetes<br><strong>Psychogenic:</strong> eyes closed, atypical movements, long duration, normal vitals<br><strong>Mechanical fall:</strong> no LOC, alert immediately</td></tr>
</table></div>
<h4>Initial evaluation</h4>
<ul>
  <li><strong>History is the single most valuable step</strong> — prodrome, trigger, position, duration, witness account, recovery.</li>
  <li>Lying and standing BP after 3 min. 12-lead ECG in everyone (Class I).</li>
  <li>Echo if known or suspected structural disease, abnormal ECG, or exertional features.</li>
  <li>Carotid sinus massage if &gt;40 with unexplained syncope (not if bruit or recent stroke/TIA).</li>
  <li><strong>Routine brain imaging and broad bloods are Class III</strong> — very low yield.</li>
</ul>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Cause-specific management</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>Reflex (vasovagal) syncope</h4>
<ul>
  <li>Education and trigger avoidance — reassurance alone is highly effective.</li>
  <li><strong>Physical counter-pressure manoeuvres</strong> at the prodrome: leg crossing with thigh tension, hand grip, arm tensing (Class I).</li>
  <li>Hydration and salt. Tilt training. Midodrine 5–10 mg TDS (IIa) or fludrocortisone in recurrent cases.</li>
  <li><strong>Pacing is rarely needed</strong> — only age &gt;40 with severe unpredictable syncope <em>and</em> documented asystolic pause &gt;3 s symptomatic / &gt;6 s asymptomatic.</li>
</ul>
<h4>Orthostatic hypotension</h4>
<ul>
  <li><strong>Drug review is the highest-yield intervention</strong> — diuretics, alpha-blockers, ACE-I/ARB, CCB, TCAs, dopaminergics, alcohol.</li>
  <li>Salt and water, compression stockings, head-up bed, small frequent meals.</li>
  <li>Midodrine 2.5–10 mg TDS or fludrocortisone 0.1–0.3 mg OD if resistant.</li>
  <li>Screen for autonomic failure (diabetes, Parkinson's, amyloid), adrenal insufficiency, anaemia, GI bleed.</li>
</ul>
<h4>Cardiac syncope</h4>
<ul>
  <li>Bradyarrhythmic → pacing. Tachyarrhythmic → treat arrhythmia and substrate; EP study ± ablation; ICD if LVEF &lt;35%, prior VT/VF, or high-risk channelopathy.</li>
  <li>Structural: severe AS, HCM with LVOT obstruction, cardiac tumour, pulmonary hypertension, PE, dissection.</li>
  <li><strong>Implantable loop recorder early</strong> in unexplained syncope with suspected arrhythmic cause (Class I B).</li>
</ul>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">DVLA driving advice (UK)</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Scenario</th><th>Group 1 (car)</th><th>Group 2 (bus/lorry)</th></tr>
  <tr><td>Simple faint, typical features</td><td>No restriction</td><td>No restriction</td></tr>
  <tr><td>Unexplained, single, low risk</td><td>4 weeks</td><td>3 months</td></tr>
  <tr><td>Unexplained, high risk / structural disease</td><td>6 months</td><td>12 months after cause treated</td></tr>
  <tr><td>Syncope while driving or seated</td><td>6 months (longer if no cause found)</td><td>12 months</td></tr>
  <tr><td>Appropriate ICD shock</td><td>6 months</td><td><strong>Permanently barred</strong></td></tr>
</table></div>
<div class="info-box blue"><span class="info-box-icon">💡</span><div><strong>Counsel and document every time.</strong> The patient self-notifies the DVLA — but the conversation being recorded in the notes is what protects both of you. Check current <em>Assessing Fitness to Drive</em> for the live rules.</div></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Pearls &amp; traps</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Syncope on exertion, supine, or immediately after exercise is cardiac until proven otherwise.</strong></li>
  <li>History plus ECG answers the question in ~60% of cases — take the time, get the witness account.</li>
  <li><strong>Presyncope carries the same prognosis as syncope</strong> in the ED. Don't downgrade it.</li>
  <li>PE presents as syncope more often than you'd think — PESIT found it in ~1 in 6 admitted unexplained cases.</li>
  <li>A raised troponin after syncope isn't automatically ACS — trauma and demand ischaemia are alternatives.</li>
  <li>In the over-65s the cause is often <strong>mixed</strong>: orthostatic drop + polypharmacy + volume depletion + mild rhythm disturbance.</li>
  <li>Normal ECG with no structural disease is genuinely reassuring — cardiac cause is rare.</li>
</ul>
</div></div>`,

'gl-brady': `
<div class="section-title">Bradycardia &amp; Pacing</div>
<div class="section-subtitle">ESC 2021 · Reversible causes first, then decide who needs a box.</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardiac-Pacing-and-Cardiac-Resynchronisation-Therapy" target="_blank" class="gl-link">ESC Pacing &amp; CRT 2021 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ Unstable bradycardia — ALS ladder</div>
  <ul>
    <li><strong>Adverse signs:</strong> shock, syncope, myocardial ischaemia, heart failure.</li>
    <li><strong>1.</strong> Atropine 500 mcg IV, repeat every 3–5 min to a <strong>maximum of 3 mg</strong>.</li>
    <li><strong>2.</strong> No response → isoprenaline 5 mcg/min, or adrenaline 2–10 mcg/min, or transcutaneous pacing (<em>sedate — it hurts</em>).</li>
    <li><strong>3.</strong> Transvenous pacing + senior/interventional input.</li>
    <li><strong>Always hunt the reversible cause in parallel</strong> — drugs and potassium first.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">500 mcg</div><div class="kn-desc">Atropine bolus — max total 3 mg</div></div>
    <div class="kn-item"><div class="kn-val">&gt;200 ms</div><div class="kn-desc">PR interval = 1st degree block</div></div>
    <div class="kn-item"><div class="kn-val">≥6 s</div><div class="kn-desc">Asymptomatic pause — consider PPM</div></div>
    <div class="kn-item"><div class="kn-val">70–80</div><div class="kn-desc">Transcutaneous pacing rate</div></div>
    <div class="kn-item"><div class="kn-val">50–100</div><div class="kn-desc">Pacing output (mA) to capture</div></div>
    <div class="kn-item"><div class="kn-val">5–10 d</div><div class="kn-desc">Wait post-MI before permanent pacing</div></div>
    <div class="kn-item"><div class="kn-val">≥5 d</div><div class="kn-desc">Post-TAVI/surgery AVB → PPM</div></div>
    <div class="kn-item"><div class="kn-val">≥70 ms</div><div class="kn-desc">HV interval with syncope → PPM</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">Reversible causes — check these first</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Cause</th><th>Antidote / action</th></tr>
    <tr><td><strong>Drugs</strong></td><td>Beta-blocker → <strong>glucagon 5–10 mg IV</strong> · CCB → <strong>calcium chloride 10%, 10 mL</strong> + high-dose insulin · digoxin → <strong>DigiFab</strong> · also opioids, clonidine, amiodarone, ivabradine, donepezil, lithium</td></tr>
    <tr><td><strong>Electrolytes</strong></td><td>Hyperkalaemia, hypothermia, myxoedema, acidosis</td></tr>
    <tr><td><strong>Cardiac</strong></td><td>Acute MI (especially inferior — vagal, reversible), myocarditis, AV node abscess in endocarditis, post-surgery, post-TAVI, Lyme disease</td></tr>
    <tr><td><strong>Other</strong></td><td>Raised ICP, OSA, sepsis, neuromuscular disease</td></tr>
  </table></div>
  <div class="info-box red"><span class="info-box-icon">🚨</span><div><strong>Hyperkalaemia:</strong> K &gt;6.5 or any ECG change → calcium gluconate 10% 10 mL over 10 min, then insulin–dextrose (10 U Actrapid in 50 mL 50% glucose) and salbutamol nebs. <strong>Treat the potassium before deciding about pacing.</strong></div></div>
</div>

<div class="card">
  <div class="card-title">Classify the rhythm</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Rhythm</th><th>ECG</th><th>Significance</th></tr>
    <tr><td>Sinus bradycardia</td><td>P before every QRS, rate &lt;60</td><td>Often physiological — athlete, sleep, vagal</td></tr>
    <tr><td>Sinus pause</td><td>Pause ≥3 s</td><td>SND. PPM if symptomatic, or ≥6 s asymptomatic</td></tr>
    <tr><td>1st degree AVB</td><td>PR &gt;200 ms, all conduct</td><td>Usually benign</td></tr>
    <tr><td>Mobitz I (Wenckebach)</td><td>Progressive PR then dropped beat, narrow QRS</td><td>Supra-Hisian — usually benign</td></tr>
    <tr><td><strong>Mobitz II</strong></td><td>Constant PR, sudden dropped QRS, often wide</td><td><span class="pill pill-red">Infranodal — PPM</span></td></tr>
    <tr><td>High-grade AVB</td><td>≥2 consecutive non-conducted P waves</td><td>PPM unless reversible</td></tr>
    <tr><td><strong>Complete AVB</strong></td><td>AV dissociation. Narrow escape = junctional; <strong>wide = ventricular</strong></td><td><span class="pill pill-red">PPM unless clearly reversible</span></td></tr>
    <tr><td>Slow AF</td><td>Irregular, no P waves</td><td>Usually drug-induced — reduce rate-limiting drugs first</td></tr>
  </table></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Permanent pacing indications</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Condition</th><th>Indication</th><th>Class</th></tr>
  <tr><td>Symptomatic SND with documented correlation</td><td>PPM (DDD preferred)</td><td>I B</td></tr>
  <tr><td>Brady–tachy syndrome</td><td>PPM to permit rate/rhythm therapy</td><td>I B</td></tr>
  <tr><td>Acquired complete or high-grade AVB</td><td>PPM <strong>irrespective of symptoms</strong></td><td>I C</td></tr>
  <tr><td>Mobitz II</td><td>PPM even if asymptomatic</td><td>I B</td></tr>
  <tr><td>Alternating bundle branch block</td><td>PPM</td><td>I C</td></tr>
  <tr><td>Syncope + bifascicular block + HV ≥70 ms</td><td>PPM</td><td>I B</td></tr>
  <tr><td>Bifascicular block, LVEF ≤35%, unexplained syncope</td><td><strong>CRT-D rather than PPM</strong></td><td>I</td></tr>
  <tr><td>Asymptomatic sinus pause &gt;6 s</td><td>PPM may be considered</td><td>IIb C</td></tr>
  <tr><td>Post-TAVI or cardiac surgery AVB ≥5 days</td><td>PPM</td><td>I C</td></tr>
  <tr><td>Post-MI AVB unresolved at 5–10 days</td><td>PPM</td><td>I C</td></tr>
</table></div>
<h4>Mode selection</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Scenario</th><th>Mode</th></tr>
  <tr><td>Sinus rhythm + AVB</td><td>DDD with algorithms to <strong>minimise RV pacing</strong></td></tr>
  <tr><td>Sinus rhythm + SND, no AVB</td><td>AAI(R) or DDD(R) with long AV delay</td></tr>
  <tr><td>Permanent AF + AVB</td><td>VVIR</td></tr>
  <tr><td>Expected ≥40% ventricular pacing with LVEF ≤40%</td><td>CRT or conduction system pacing (HBP / LBBAP)</td></tr>
  <tr><td>Young, limited venous access, prior device infection</td><td>Leadless pacemaker</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Temporary pacing &amp; MI rules</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Transcutaneous:</strong> fastest bridge. AP pads, rate 70–80, increase output to capture (50–100 mA). Sedate. <strong>Confirm mechanical capture by feeling a pulse</strong> — not just the ECG.</li>
  <li><strong>Transvenous:</strong> right IJ or femoral under fluoroscopy/ultrasound. For failed transcutaneous, or Mobitz II / complete AVB in MI with compromise, or overdrive suppression of torsades.</li>
  <li><strong>Isoprenaline infusion</strong> is a good bridge if pacing isn't immediately available.</li>
  <li>Existing RBBB undergoing TAVI, septal ablation, or right heart catheterisation → consider a wire in situ prophylactically.</li>
</ul>
<h4>Bradycardia in acute MI</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Inferior MI + AVB</th><th>Anterior MI + new AVB</th></tr>
  <tr><td>Vagal, nodal, <strong>narrow</strong> escape, atropine-responsive. Resolves in days. Rarely needs permanent pacing. Revascularise</td><td><strong>Infranodal, wide escape, large infarct, high mortality.</strong> Low threshold for temporary pacing</td></tr>
</table></div>
<p>Persistent high-grade AVB after MI — wait 5–10 days before committing to a permanent device, unless anterior MI, late/failed revascularisation, or pre-existing conduction disease.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Device problems — red flags</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Problem</th><th>Clue</th><th>Action</th></tr>
  <tr><td>Failure to capture</td><td>Pacing spike with no QRS</td><td>Interrogate; check thresholds; exclude metabolic cause</td></tr>
  <tr><td>Failure to sense</td><td>Inappropriate paced beats despite intrinsic rhythm</td><td>Interrogate</td></tr>
  <tr><td>Twiddler's syndrome</td><td>Lead displacement after generator manipulation</td><td>Urgent check and revision</td></tr>
  <tr><td>Pacing-induced cardiomyopathy</td><td>Falling LVEF with high RV pacing burden</td><td>Upgrade to CRT or conduction system pacing</td></tr>
  <tr><td>ICD shock</td><td>Appropriate (VT/VF) vs inappropriate (AF, lead noise)</td><td>Urgent interrogation. <strong>Magnet suspends tachy therapy</strong> in storm or clearly inappropriate shocks</td></tr>
  <tr><td>Device infection</td><td>Pocket redness or pus, bacteraemia (especially staph)</td><td>Antibiotics + <strong>complete system removal</strong></td></tr>
</table></div>
<div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>Magnet behaviour differs.</strong> Over a <em>pacemaker</em> it forces asynchronous pacing at magnet rate. Over an <em>ICD</em> it suspends tachyarrhythmia therapy but does <em>not</em> affect pacing. Remove it when you're done.</div></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Pearls &amp; traps</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>The whole test is symptom–rhythm correlation.</strong> Asymptomatic sinus bradycardia rarely needs anything.</li>
  <li><strong>A wide-complex escape in complete heart block is unstable</strong> — low threshold for temporary pacing.</li>
  <li>Post-TAVI new LBBB is common (~15%). Watch the PR interval — lengthening predicts late AVB needing a pacemaker.</li>
  <li><strong>Never cardiovert with pads near the generator.</strong> Use antero-posterior, &gt;10 cm away, then re-interrogate the device.</li>
  <li>Get a 12-lead, not just a rhythm strip, before intervening — if time allows.</li>
</ul>
</div></div>`,

'gl-svt': `
<div class="section-title">SVT &amp; Narrow-Complex Tachycardia</div>
<div class="section-subtitle">ESC 2019 · Get the 12-lead in the tachycardia. It's the single most useful thing you'll do.</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Supraventricular-Tachycardias" target="_blank" class="gl-link">ESC SVT 2019 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ Unstable → synchronised DCCV now</div>
  <ul>
    <li>Hypotension, altered mentation, chest pain, acute HF, or shock — cardiovert, don't negotiate.</li>
    <li><strong>Energy (biphasic):</strong> narrow regular 50–100 J · narrow irregular 120–200 J · wide regular 100 J · pre-excited AF 120–200 J.</li>
    <li>Sedate properly (midazolam + fentanyl, or propofol with anaesthetic support).</li>
    <li><strong>Wide complex = VT until proven otherwise.</strong> Never give verapamil.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">6 mg</div><div class="kn-desc">Adenosine 1st dose → 12 → 12–18</div></div>
    <div class="kn-item"><div class="kn-val">120 ms</div><div class="kn-desc">QRS width: narrow vs wide</div></div>
    <div class="kn-item"><div class="kn-val">150/min</div><div class="kn-desc">Regular narrow = flutter until excluded</div></div>
    <div class="kn-item"><div class="kn-val">300/min</div><div class="kn-desc">Atrial rate in typical flutter</div></div>
    <div class="kn-item"><div class="kn-val">&lt;250 ms</div><div class="kn-desc">Shortest R-R in pre-excited AF = danger</div></div>
    <div class="kn-item"><div class="kn-val">40 mmHg</div><div class="kn-desc">Modified Valsalva pressure, 15 s</div></div>
    <div class="kn-item"><div class="kn-val">&gt;95%</div><div class="kn-desc">Ablation success — typical flutter &amp; AVNRT</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">Narrow-complex regular — the ladder</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Step</th><th>Action</th></tr>
    <tr><td>1</td><td><strong>Unstable?</strong> → synchronised DCCV</td></tr>
    <tr><td>2</td><td><strong>Modified Valsalva</strong> — 15 s forced expiration (~40 mmHg via a 10 mL syringe), then lie flat with legs raised. Carotid massage one side only, 5–10 s — <em>not</em> if bruit or prior stroke</td></tr>
    <tr><td>3</td><td><strong>Adenosine 6 mg</strong> rapid push through a large antecubital cannula + 20 mL flush. Then 12 mg, then 12–18 mg. Warn the patient. Record a rhythm strip</td></tr>
    <tr><td>4</td><td>Verapamil 5–10 mg over 2 min, or diltiazem 0.25 mg/kg. <strong>Avoid in HFrEF, hypotension, pre-excitation, or suspected VT</strong></td></tr>
    <tr><td>5</td><td>IV beta-blocker — esmolol or metoprolol 2.5–5 mg up to 15 mg</td></tr>
    <tr><td>6</td><td>Synchronised DCCV if drugs fail</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Adenosine response tells you the diagnosis</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Response</th><th>Rhythm</th></tr>
    <tr><td><strong>Sudden termination</strong></td><td>AVNRT, AVRT, sinus nodal re-entry, triggered focal AT</td></tr>
    <tr><td>Gradual slowing, then re-acceleration</td><td>Sinus tachycardia, automatic focal AT, junctional ectopic</td></tr>
    <tr><td>Atrial activity persists with transient AV block</td><td><strong>Atrial flutter</strong> — the F waves become visible</td></tr>
    <tr><td>No effect at all</td><td>High septal VT — <em>or</em> inadequate delivery (much commoner)</td></tr>
  </table></div>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>Adenosine cautions:</strong> bronchospasm risk in asthma (use verapamil) · transplanted heart is super-sensitive — halve the dose · halve with dipyridamole · caffeine and theophylline antagonise it · <strong>never in pre-excited AF</strong>.</div></div>
</div>

<div class="card">
  <div class="card-title">Pre-excited AF — the one that kills</div>
  <div class="info-box red"><span class="info-box-icon">🚨</span><div>Very fast, <strong>irregular</strong>, broad and bizarre QRS complexes with beat-to-beat variation. Can degenerate to VF.<br><br><strong>Never give:</strong> digoxin · beta-blocker · verapamil · diltiazem · amiodarone. All Class III.<br><br><strong>Do:</strong> synchronised DCCV (low threshold), or IV flecainide 2 mg/kg over 10 min / ibutilide 1 mg over 10 min if DCCV isn't immediately available. Refer for accessory pathway ablation afterwards.</div></div>
  <p class="text-sm text-muted"><strong>Why:</strong> blocking the AV node removes the only brake on conduction — every atrial impulse then races down the accessory pathway.</p>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Reading the 12-lead</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Question</th><th>What it tells you</th></tr>
  <tr><td>Narrow (&lt;120 ms) or wide?</td><td>Narrow → almost always SVT. <strong>Wide → treat as VT</strong></td></tr>
  <tr><td>Regular or irregular?</td><td><strong>Regular narrow:</strong> sinus tach, AT, flutter with 2:1, AVNRT, AVRT. <strong>Irregular narrow:</strong> AF, multifocal AT, flutter with variable block</td></tr>
  <tr><td>P waves, and where?</td><td>P before QRS with normal PR → sinus or AT · retrograde P within/just after QRS → AVNRT · P clearly after QRS (RP &gt; PR) → AVRT or atypical AVNRT · sawtooth at 300/min → flutter</td></tr>
  <tr><td>Baseline pre-excitation?</td><td>Delta wave and short PR → WPW. Changes everything about drug choice</td></tr>
</table></div>
<h4>Features favouring VT in a wide-complex tachycardia</h4>
<ul>
  <li>Age &gt;35 · structural heart disease · prior MI · heart failure</li>
  <li><strong>AV dissociation</strong> · capture or fusion beats — pathognomonic</li>
  <li>Extreme (northwest) axis · positive or negative precordial concordance</li>
  <li>QRS &gt;140 ms with RBBB morphology, or &gt;160 ms with LBBB morphology</li>
</ul>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Wide-complex tachycardia — stable</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Step</th><th>Action</th></tr>
  <tr><td>1</td><td>12-lead now, plus the old baseline ECG (pre-existing BBB? pre-excitation?)</td></tr>
  <tr><td>2</td><td>Correct K &gt;4.0 and Mg &gt;1.0</td></tr>
  <tr><td>3</td><td>Vagal manoeuvres — diagnostically useful (Class I C)</td></tr>
  <tr><td>4</td><td>Adenosine acceptable <em>only</em> if no baseline pre-excitation (IIa). May terminate SVT with aberrancy or fascicular VT</td></tr>
  <tr><td>5</td><td><strong>Procainamide 10 mg/kg IV over 20 min</strong> (IIa B) — fewer adverse events than amiodarone (PROCAMIO). Amiodarone 300 mg over 20–60 min (IIb) causes more hypotension but is useful with LV dysfunction</td></tr>
  <tr><td>6</td><td>Synchronised DCCV if drugs fail</td></tr>
  <tr><td><strong>Never</strong></td><td><strong>Verapamil in an undiagnosed wide-complex tachycardia</strong> — cardiovascular collapse if it's VT (Class III B)</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Atrial flutter &amp; special populations</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>Atrial flutter</h4>
<ul>
  <li>Atrial rate ~300/min with 2:1 block gives a ventricular rate of 150 — <strong>a regular narrow tachycardia at exactly 150 is flutter until proven otherwise</strong>.</li>
  <li>Rate control with IV beta-blocker or diltiazem (avoid in HFrEF).</li>
  <li>DCCV often works at low energy (50 J). Chemical: ibutilide, or flecainide if no structural disease.</li>
  <li><strong>Anticoagulate exactly as for AF</strong>, including the 48-hour rule and 4 weeks post-cardioversion.</li>
  <li>Cavotricuspid isthmus ablation — ~95% success for typical flutter. Refer.</li>
</ul>
<h4>Special populations</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Group</th><th>Key points</th></tr>
  <tr><td>Pregnancy</td><td>DCCV safe in all trimesters. Vagal first, <strong>adenosine is safe</strong>. Avoid amiodarone. Ablate pre-conception if symptomatic</td></tr>
  <tr><td>HFrEF (LVEF &lt;40%)</td><td><strong>Avoid IV verapamil/diltiazem and flecainide.</strong> Use amiodarone, digoxin, or DCCV</td></tr>
  <tr><td>Congenital heart disease</td><td>Low threshold for specialist input; anticoagulate intra-atrial re-entry as for AF</td></tr>
  <tr><td>Elderly / AV node disease</td><td>Care combining IV beta-blocker with IV CCB; avoid a single large verapamil bolus</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Pearls &amp; traps</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>If they're stable, time is on your side.</strong> Get the 12-lead before you do anything.</li>
  <li>Adenosine failure is nearly always a <strong>delivery</strong> problem — large proximal cannula, rapid push, immediate flush.</li>
  <li>"SVT" is shorthand, not a diagnosis. <strong>Name the rhythm</strong> — AVNRT, AVRT, focal AT, flutter. It determines the referral.</li>
  <li>After termination, always get a sinus-rhythm 12-lead: pre-excitation, prior infarct, long QT.</li>
  <li><strong>If in any doubt that a wide complex might be VT, treat it as VT.</strong> The cost of being wrong with verapamil is cardiac arrest.</li>
  <li>Refer every symptomatic recurrent SVT for EP assessment — ablation exceeds 95% success and is now first-line in many cases.</li>
</ul>
</div></div>`,

'gl-pe': `
<div class="section-title">Pulmonary Embolism</div>
<div class="section-subtitle">ESC 2019 · Stratify first — instability decides everything.</div>
<div class="gl-source-bar"><strong>Sources:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-Pulmonary-Embolism" target="_blank" class="gl-link">ESC PE 2019 ↗</a> <a href="https://www.nice.org.uk/guidance/ng158" target="_blank" class="gl-link nice">NICE NG158 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ High-risk PE = haemodynamic instability</div>
  <ul>
    <li>Cardiac arrest, <strong>or</strong> obstructive shock, <strong>or</strong> persistent hypotension (SBP &lt;90 or drop ≥40 mmHg for &gt;15 min) not explained by another cause.</li>
    <li><strong>→ Systemic thrombolysis is first-line.</strong> Don't wait for a CTPA if too unstable — bedside echo showing RV strain is enough.</li>
    <li><strong>Fluid cautiously — max 500 mL.</strong> Overfilling a failing RV worsens septal bowing and drops output.</li>
    <li><strong>Avoid intubation if at all possible</strong> — induction and positive pressure precipitate collapse.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">≤1</div><div class="kn-desc">Wells → PE unlikely → D-dimer</div></div>
    <div class="kn-item"><div class="kn-val">age×10</div><div class="kn-desc">Age-adjusted D-dimer if &gt;50 y (ng/mL)</div></div>
    <div class="kn-item"><div class="kn-val">100 mg</div><div class="kn-desc">Alteplase over 2 h — high-risk PE</div></div>
    <div class="kn-item"><div class="kn-val">0.6 mg/kg</div><div class="kn-desc">Alteplase over 15 min if peri-arrest</div></div>
    <div class="kn-item"><div class="kn-val">500 mL</div><div class="kn-desc">Max fluid challenge</div></div>
    <div class="kn-item"><div class="kn-val">10 mg bd</div><div class="kn-desc">Apixaban ×7 days → 5 mg bd</div></div>
    <div class="kn-item"><div class="kn-val">15 mg bd</div><div class="kn-desc">Rivaroxaban ×21 days → 20 mg od</div></div>
    <div class="kn-item"><div class="kn-val">3 months</div><div class="kn-desc">Minimum anticoagulation</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">Risk stratification — confirmed PE</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Risk</th><th>Definition</th><th>Treatment</th></tr>
    <tr><td><span class="pill pill-red">High</span></td><td>Haemodynamic instability</td><td><strong>Systemic thrombolysis + UFH</strong>, ITU/CCU. Catheter-directed or surgical embolectomy if lysis contraindicated or failed</td></tr>
    <tr><td><span class="pill pill-amber">Int-high</span></td><td>Stable + <strong>both</strong> RV dysfunction <em>and</em> raised troponin. sPESI ≥1</td><td>Anticoagulate + monitored bed 24–48 h. <strong>Rescue thrombolysis if they deteriorate</strong></td></tr>
    <tr><td><span class="pill pill-blue">Int-low</span></td><td>Stable + <strong>either</strong> RV dysfunction <em>or</em> raised troponin</td><td>Anticoagulate, ward-based, observe 24 h</td></tr>
    <tr><td><span class="pill pill-green">Low</span></td><td>Stable, normal RV, normal troponin, sPESI = 0</td><td>Anticoagulate. <strong>Outpatient</strong> if Hestia-negative with social support</td></tr>
  </table></div>
  <p class="text-sm text-muted"><strong>sPESI</strong> — 1 point each: age &gt;80 · cancer · chronic cardiopulmonary disease · HR ≥110 · SBP &lt;100 · SpO₂ &lt;90%.</p>
</div>

<div class="card">
  <div class="card-title">Diagnostic pathway</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Scenario</th><th>First test</th><th>Then</th></tr>
    <tr><td><strong>Unstable / peri-arrest</strong></td><td><strong>Bedside TTE</strong> — dilated hypokinetic RV, septal flattening, McConnell's sign, 60/60 sign</td><td>RV strain + consistent picture → <strong>presume PE and thrombolyse</strong>. CTPA only if they can travel</td></tr>
    <tr><td>Stable, Wells ≤1</td><td>Age-adjusted D-dimer</td><td>Negative excludes. Positive → CTPA</td></tr>
    <tr><td>Stable, Wells ≥2</td><td>CTPA</td><td>V/Q if contrast contraindicated</td></tr>
    <tr><td>Pregnancy</td><td>Bilateral leg ultrasound first</td><td>Then V/Q or CTPA with shielding; pregnancy-adapted YEARS</td></tr>
  </table></div>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>Never use D-dimer when pre-test probability is high</strong> — a negative result does not exclude PE.</div></div>
</div>

<div class="card">
  <div class="card-title">Initial anticoagulation</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Agent</th><th>Dose</th><th>When</th></tr>
    <tr><td><strong>Apixaban</strong></td><td>10 mg BD ×7 days → 5 mg BD</td><td>First-line for non-high-risk. No lead-in needed</td></tr>
    <tr><td><strong>Rivaroxaban</strong></td><td>15 mg BD ×21 days → 20 mg OD</td><td>As above</td></tr>
    <tr><td>Enoxaparin</td><td>1 mg/kg SC BD</td><td>Preferred in cancer, pregnancy; avoid eGFR &lt;15</td></tr>
    <tr><td><strong>UFH</strong></td><td>80 U/kg bolus → 18 U/kg/h, APTT 1.5–2.5×</td><td><strong>Instability, planned thrombolysis</strong>, severe renal failure, extreme obesity, high bleeding risk</td></tr>
    <tr><td>Edoxaban / dabigatran</td><td>60 mg OD / 150 mg BD</td><td>Require <strong>≥5 days parenteral lead-in</strong> first</td></tr>
  </table></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Thrombolysis — dosing &amp; contraindications</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Alteplase 100 mg IV over 2 h</strong> (accelerated regimen, preferred). Continue UFH during and after.</li>
  <li><strong>Peri-arrest:</strong> 0.6 mg/kg over 15 min (max 50 mg).</li>
  <li>Tenecteplase was used in PEITHO but is <strong>not licensed for PE</strong>.</li>
</ul>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Absolute contraindications</th><th>Relative</th></tr>
  <tr><td>Prior haemorrhagic stroke · ischaemic stroke &lt;6 months · CNS neoplasm · CNS trauma/surgery ≤3 weeks · major trauma/surgery &lt;3 weeks · active bleeding · bleeding disorder · <strong>aortic dissection</strong></td><td>TIA within 6 months · on anticoagulation · pregnancy or ≤1 week postpartum · non-compressible puncture · traumatic resuscitation · SBP &gt;180 · advanced liver disease · endocarditis · active peptic ulcer</td></tr>
</table></div>
<div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>Do not routinely thrombolyse intermediate-high risk PE.</strong> PEITHO showed less haemodynamic decompensation but significantly more bleeding, with ~2% intracranial haemorrhage. Monitor closely and reserve lysis for rescue.</div></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Supporting the crashing patient</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Fluid:</strong> maximum 500 mL crystalloid. More is actively harmful to a failing RV.</li>
  <li><strong>Vasopressor:</strong> noradrenaline 0.05–1 mcg/kg/min to MAP ≥65.</li>
  <li><strong>Inotrope:</strong> dobutamine 2–20 mcg/kg/min once BP adequate.</li>
  <li><strong>Airway:</strong> avoid intubation where possible. If unavoidable — ketamine or etomidate, pre-load with vasopressor, low tidal volumes, <strong>avoid PEEP &gt;5</strong>.</li>
  <li><strong>VA-ECMO:</strong> discuss with the regional centre early, not late.</li>
  <li>Catheter-directed therapy or surgical embolectomy where lysis is contraindicated or has failed.</li>
</ul>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Special populations &amp; duration</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Group</th><th>Key points</th></tr>
  <tr><td>Cancer-associated</td><td>LMWH or apixaban/edoxaban preferred over warfarin. <strong>Higher bleeding with DOACs in luminal GI/GU tumours.</strong> Minimum 6 months, continue while cancer active</td></tr>
  <tr><td>Pregnancy</td><td><strong>LMWH only.</strong> DOACs and warfarin contraindicated. Thrombolysis reserved for life-threatening PE</td></tr>
  <tr><td>eGFR &lt;30</td><td>UFH acutely. Apixaban 2.5 mg BD acceptable down to ~15. <strong>Avoid dabigatran</strong></td></tr>
  <tr><td>Weight &gt;120 kg / BMI &gt;40</td><td>LMWH with anti-Xa monitoring, or UFH</td></tr>
  <tr><td>Thrombus-in-transit</td><td>Very high mortality. Systemic thrombolysis usual; embolectomy in selected cases</td></tr>
</table></div>
<h4>Duration</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Situation</th><th>Duration</th></tr>
  <tr><td>Provoked by major transient risk factor</td><td>3 months</td></tr>
  <tr><td>Unprovoked first PE</td><td>≥3 months; <strong>extended/indefinite recommended</strong> unless high bleeding risk</td></tr>
  <tr><td>Recurrent unprovoked VTE</td><td>Indefinite</td></tr>
  <tr><td>Active cancer</td><td>≥6 months, continue while active</td></tr>
  <tr><td>Triple-positive antiphospholipid syndrome</td><td><strong>Indefinite warfarin (INR 2–3)</strong> — DOACs inferior (TRAPS)</td></tr>
</table></div>
<p>For extended therapy beyond 6 months, reduced-dose DOAC (apixaban 2.5 mg BD or rivaroxaban 10 mg OD) is an option in selected patients.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Pearls &amp; traps</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Normal troponin + normal BNP almost excludes prognostically significant PE.</strong></li>
  <li><strong>RV dysfunction with a normal troponin</strong> — these patients are sicker than they look. Monitor closely.</li>
  <li>Peri-arrest bedside echo: dilated RV with a preserved LV strongly supports PE as the cause of shock.</li>
  <li>S1Q3T3 is insensitive. Sinus tachycardia, new RBBB, and TWI in V1–V4 are commoner.</li>
  <li>Syncope with unexplained tachycardia — think PE (PESIT).</li>
  <li>Every patient discharged on anticoagulation needs: <strong>indication, agent, duration, follow-up plan, and written information.</strong></li>
</ul>
</div></div>`,

'gl-vhd': `
<div class="section-title">Valvular Heart Disease</div>
<div class="section-subtitle">ESC 2025 · Severity criteria and timing of intervention.</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Valvular-Heart-Disease-Management-of" target="_blank" class="gl-link">ESC VHD 2025 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ On-call — the valve emergencies</div>
  <ul>
    <li><strong>Severe AS with syncope or pulmonary oedema</strong> — preload-dependent and afterload-fixed. Avoid vasodilators and aggressive diuresis. Urgent Heart Team.</li>
    <li><strong>Acute severe MR or AR</strong> (endocarditis, chordal rupture, dissection) — flash pulmonary oedema with a <em>normal-sized</em> heart. Urgent echo, urgent surgery.</li>
    <li><strong>Prosthetic valve obstruction/thrombosis</strong> — muffled prosthetic click, new gradient. Urgent TOE, discuss lysis vs surgery.</li>
    <li><strong>Fever + new murmur</strong> = endocarditis until disproven. Three sets of cultures <em>before</em> antibiotics.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">&lt;1.0 cm²</div><div class="kn-desc">Severe AS — valve area</div></div>
    <div class="kn-item"><div class="kn-val">≥4 m/s</div><div class="kn-desc">Severe AS — peak velocity</div></div>
    <div class="kn-item"><div class="kn-val">≥40</div><div class="kn-desc">Severe AS — mean gradient (mmHg)</div></div>
    <div class="kn-item"><div class="kn-val">≥0.40</div><div class="kn-desc">Severe primary MR — ERO (cm²)</div></div>
    <div class="kn-item"><div class="kn-val">≥7 mm</div><div class="kn-desc">Severe MR — vena contracta</div></div>
    <div class="kn-item"><div class="kn-val">≤60%</div><div class="kn-desc">LVEF triggering MR surgery</div></div>
    <div class="kn-item"><div class="kn-val">≥40 mm</div><div class="kn-desc">LVESD triggering MR surgery</div></div>
    <div class="kn-item"><div class="kn-val">&lt;1.5 cm²</div><div class="kn-desc">Significant mitral stenosis</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">Severity — key echo parameters</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Lesion</th><th>Severe</th></tr>
    <tr><td>Aortic stenosis</td><td>AVA &lt;1.0 cm² · Vmax ≥4 m/s · mean gradient ≥40 mmHg</td></tr>
    <tr><td>Aortic regurgitation</td><td>ERO ≥0.30 cm² · RVol ≥60 mL · regurgitant fraction ≥50% · vena contracta &gt;6 mm</td></tr>
    <tr><td>Mitral stenosis</td><td>MVA &lt;1.5 cm² (very severe &lt;1.0) · mean gradient &gt;10 mmHg</td></tr>
    <tr><td>Mitral regurgitation (primary)</td><td>ERO ≥0.40 cm² · RVol ≥60 mL · vena contracta ≥7 mm</td></tr>
  </table></div>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>Low-flow low-gradient AS</strong> — LVEF &lt;50%, AVA &lt;1.0, but mean gradient &lt;40. The gradient is low because the ventricle is failing, not because the valve is fine. <strong>Needs dobutamine stress echo</strong> to distinguish true severe AS from pseudo-severe.</div></div>
</div>

<div class="card">
  <div class="card-title">Timing of intervention</div>
  <h4>Aortic stenosis — Class I</h4>
  <ul>
    <li>Symptomatic severe AS (dyspnoea, syncope, angina) — <strong>intervene promptly</strong>, symptoms mark a steep mortality curve</li>
    <li>Severe AS undergoing other cardiac surgery</li>
    <li>Asymptomatic severe AS with LVEF &lt;50%</li>
  </ul>
  <h4>Primary mitral regurgitation — Class I</h4>
  <ul>
    <li>Symptomatic severe MR → surgery</li>
    <li>Asymptomatic severe MR with <strong>LVEF ≤60% or LVESD ≥40 mm</strong> → surgery</li>
    <li>TEER (MitraClip) if inoperable; in secondary MR on optimal HF therapy per COAPT criteria</li>
  </ul>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">TAVI vs SAVR — how the Heart Team decides</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Favours TAVI</th><th>Favours SAVR</th></tr>
  <tr><td>Older age (&gt;75)<br>High or prohibitive surgical risk<br>Frailty, hostile chest, porcelain aorta<br>Prior cardiac surgery<br>Suitable transfemoral access</td><td>Younger, low surgical risk<br>Long life expectancy<br>Bicuspid valve with adverse anatomy<br>Concomitant disease needing surgery (CABG, other valve, aortic root)<br>Unfavourable TAVI anatomy</td></tr>
</table></div>
<p class="text-sm text-muted">Durability data increasingly favour considering lifetime management — which valve first, and what the second intervention will look like in 10–15 years. This is now central to the conversation in patients under 70.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Anticoagulation &amp; prosthetic valves</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Situation</th><th>Anticoagulation</th></tr>
  <tr><td><strong>Mechanical valve</strong></td><td><strong>Warfarin only — DOACs are contraindicated.</strong> Target INR by valve position and thrombogenicity (aortic 2.5–3.0; mitral 3.0)</td></tr>
  <tr><td>Bioprosthetic, first 3 months</td><td>Warfarin or aspirin, depending on position and surgical preference</td></tr>
  <tr><td>Bioprosthetic + AF</td><td>DOAC acceptable beyond 3 months</td></tr>
  <tr><td>Moderate–severe mitral stenosis + AF</td><td><strong>Warfarin — not a DOAC</strong></td></tr>
  <tr><td>Post-TAVI</td><td>Single antiplatelet if no other indication; OAC if AF. Routine DAPT no longer recommended</td></tr>
</table></div>
<div class="info-box red"><span class="info-box-icon">🚨</span><div><strong>Prosthetic valve thrombosis</strong> — new dyspnoea, muffled click, raised gradients. Urgent TOE and fluoroscopy. Obstructive left-sided thrombosis: surgery or thrombolysis depending on risk and centre. Involve the Heart Team immediately.</div></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Pearls &amp; traps</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>In severe AS, the symptom is the indication.</strong> Once symptomatic, untreated survival is measured in months to a couple of years.</li>
  <li><strong>Acute severe regurgitation looks nothing like chronic.</strong> The ventricle hasn't dilated, so you get flash pulmonary oedema with a normal heart size and a surprisingly quiet murmur.</li>
  <li>Beware giving GTN or aggressive diuresis in critical AS — the ventricle is preload-dependent and can't compensate.</li>
  <li><strong>Asymptomatic doesn't always mean well.</strong> Ask about reduced exercise tolerance that the patient has quietly adapted to — exercise testing unmasks it.</li>
  <li>Any new murmur with fever needs three sets of blood cultures before antibiotics.</li>
</ul>
</div></div>`,

'gl-pericarditis': `
<div class="section-title">Pericarditis</div>
<div class="section-subtitle">ESC 2025 · Now part of the joint myocarditis–pericarditis guideline (IMPS).</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Myocarditis-and-Pericarditis" target="_blank" class="gl-link">ESC Myocarditis &amp; Pericarditis 2025 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ Two things that matter at 3am</div>
  <ul>
    <li><strong>Is it tamponade?</strong> Hypotension + raised JVP + muffled sounds, pulsus paradoxus &gt;10 mmHg, electrical alternans → see the Tamponade page. Drain, don't diurese.</li>
    <li><strong>Is the troponin up?</strong> That makes it myo<em>peri</em>carditis — worse prognosis, and exercise restriction goes from weeks to <strong>≥6 months</strong>.</li>
    <li>Don't mistake it for STEMI: pericarditis gives <strong>widespread concave</strong> ST elevation with PR depression, no reciprocal change.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">2 of 4</div><div class="kn-desc">Diagnostic criteria needed</div></div>
    <div class="kn-item"><div class="kn-val">&gt;85%</div><div class="kn-desc">Present with typical chest pain</div></div>
    <div class="kn-item"><div class="kn-val">3 months</div><div class="kn-desc">Colchicine — first episode</div></div>
    <div class="kn-item"><div class="kn-val">≥6 months</div><div class="kn-desc">Colchicine — recurrence</div></div>
    <div class="kn-item"><div class="kn-val">&gt;20 mm</div><div class="kn-desc">Large effusion — admit</div></div>
    <div class="kn-item"><div class="kn-val">&gt;38°C</div><div class="kn-desc">Fever = major risk feature</div></div>
    <div class="kn-item"><div class="kn-val">~50%</div><div class="kn-desc">Recurrence reduction with colchicine</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">Diagnosis — 2 of 4 criteria</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Criterion</th><th>Detail</th></tr>
    <tr><td><strong>1. Chest pain</strong></td><td>Sharp, pleuritic, retrosternal. <strong>Better sitting forward, worse lying flat.</strong> &gt;85% of cases</td></tr>
    <tr><td><strong>2. Friction rub</strong></td><td>Scratchy, superficial, left sternal edge, leaning forward, end-expiration. Only ~30% — and evanescent</td></tr>
    <tr><td><strong>3. ECG changes</strong></td><td>New <strong>widespread concave (saddle) ST elevation</strong> and/or <strong>PR depression</strong> — with reciprocal PR elevation in aVR and V1</td></tr>
    <tr><td><strong>4. Pericardial effusion</strong></td><td>New or worsening on echo</td></tr>
  </table></div>
  <p class="text-sm text-muted">Supportive: raised CRP, pericardial inflammation on CMR.</p>
</div>

<div class="card">
  <div class="card-title">First-line therapy — always two drugs</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Drug</th><th>Dose</th><th>Duration</th></tr>
    <tr><td><strong>Ibuprofen</strong> (usual first choice)</td><td>600–800 mg TDS <strong>with a PPI</strong></td><td>1–2 weeks, then taper</td></tr>
    <tr><td><strong>Aspirin</strong> (choose this post-MI or if on antiplatelet)</td><td>750–1000 mg TDS</td><td>1–2 weeks, then taper</td></tr>
    <tr><td><strong>Colchicine</strong> — always add</td><td>&lt;70 kg: 0.5 mg OD · ≥70 kg: 0.5 mg BD</td><td><strong>3 months</strong> (first episode) · <strong>≥6 months</strong> (recurrence)</td></tr>
  </table></div>
  <div class="info-box green"><span class="info-box-icon">📈</span><div><strong>Colchicine roughly halves recurrence</strong> (ICAP, CORP). Add it unless genuinely contraindicated. Dose-reduce in eGFR &lt;30, severe hepatic impairment, and with CYP3A4/P-gp inhibitors (clarithromycin, ciclosporin, verapamil, diltiazem) — myotoxicity.</div></div>
  <div class="info-box red"><span class="info-box-icon">🚨</span><div><strong>Steroids are not first-line</strong> — Class III without a specific indication. They increase recurrence and create dependence. Reserve for NSAID failure or contraindication, autoimmune aetiology, or pregnancy.</div></div>
</div>

<div class="card">
  <div class="card-title">Who needs admitting</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Major features — any one → admit</th><th>Minor</th></tr>
    <tr><td>Fever &gt;38°C<br>Subacute onset<br>Large effusion &gt;20 mm<br>Tamponade<br>Failure of first-line therapy at 1 week</td><td>Myopericarditis (raised troponin)<br>Immunosuppression<br>Trauma<br>On oral anticoagulation</td></tr>
  </table></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Refractory &amp; recurrent disease</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<p>If NSAID/aspirin fails or is contraindicated → low-to-moderate dose prednisolone <strong>0.2–0.5 mg/kg/day</strong> <em>plus</em> colchicine, with a slow taper guided by CRP.</p>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Option</th><th>Notes</th></tr>
  <tr><td>Triple therapy</td><td>NSAID + colchicine + low-dose steroid for difficult cases</td></tr>
  <tr><td><strong>IL-1 antagonists</strong></td><td><strong>Anakinra</strong> 1–2 mg/kg/day SC (max 100 mg) for ≥6 months — <strong>Class I A</strong>, highly effective in steroid-dependent recurrence (AIRTRIP, RHAPSODY). Rilonacept in the USA</td></tr>
  <tr><td>Hydroxychloroquine</td><td>Colchicine-resistant, steroid-dependent (IIb B)</td></tr>
  <tr><td>Azathioprine / IVIG</td><td>Refractory, usually as steroid-sparing agents</td></tr>
</table></div>
<p><strong>Refer early</strong> to a pericardial diseases clinic — recurrent pericarditis is a specialist problem and IL-1 blockade has transformed outcomes.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Effusion, myopericarditis &amp; constriction</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>Effusion by size (diastolic)</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Size</th><th>Management</th></tr>
  <tr><td>Mild &lt;10 mm</td><td>Treat the cause; no intervention</td></tr>
  <tr><td>Moderate 10–20 mm</td><td>Observe closely, work up cause, drain if symptomatic or diagnosis needed</td></tr>
  <tr><td>Large &gt;20 mm</td><td>Admit. Consider drainage. <strong>Think TB, malignancy, myxoedema</strong></td></tr>
  <tr><td>Tamponade</td><td><strong>Urgent pericardiocentesis</strong> (Class I), echo-guided</td></tr>
</table></div>
<h4>Myopericarditis</h4>
<ul>
  <li>Pericarditis + raised troponin with preserved LV function.</li>
  <li>Same treatment, <strong>plus exercise restriction ≥6 months</strong> (Class I) and lower NSAID doses if significant myocardial involvement.</li>
  <li>CMR within 6 months for follow-up. If LV dysfunction develops → manage as myocarditis/HF.</li>
</ul>
<h4>Constrictive pericarditis</h4>
<p>Right-sided failure with preserved LV function: oedema, ascites, raised JVP with <strong>prominent Y descent</strong>, Kussmaul's sign, pericardial knock. Distinguish from restriction by echo (septal bounce, &gt;25% respiratory variation across mitral, expiratory hepatic vein flow reversal), CT (thickening, calcification), CMR, and catheter (equalised diastolic pressures, dip-and-plateau). <strong>Transient inflammatory constriction may resolve</strong> with 3–6 months of anti-inflammatory therapy (IIa) — otherwise pericardiectomy.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Pearls &amp; traps</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Post-MI pericarditis: use aspirin, not other NSAIDs</strong> — they impair infarct healing. Add colchicine.</li>
  <li><strong>Always co-prescribe a PPI.</strong> Treatment courses are long and recurrences common.</li>
  <li><strong>Track CRP</strong> — it guides both duration and when to start tapering. Don't taper before it normalises.</li>
  <li>Exercise restriction until symptoms resolve and CRP normalises; ≥3 months for non-athletes with myopericarditis.</li>
  <li>Dressler's syndrome appears weeks after MI or cardiotomy — colchicine is the key drug.</li>
  <li>Large unexplained effusion with systemic features — <strong>think TB, malignancy, autoimmune disease, hypothyroidism</strong>.</li>
</ul>
</div></div>`,

'gl-diabetes': `
<div class="section-title">Diabetes &amp; CV Disease</div>
<div class="section-subtitle">ESC 2023 · SGLT2 inhibitors and GLP-1 agonists are cardiac drugs now.</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Diabetes-and-Cardiovascular-Disease" target="_blank" class="gl-link">ESC DM-CVD 2023 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ Two things to remember on the ward</div>
  <ul>
    <li><strong>Euglycaemic DKA.</strong> Any unwell patient on an SGLT2 inhibitor — <strong>check ketones even if the glucose is normal</strong>. Especially post-op or septic.</li>
    <li><strong>Hold SGLT2i in acute illness</strong> with dehydration, AKI risk, or fasting. But an uncomplicated HF admission is <em>not</em> a reason to stop it.</li>
    <li>Prescribe these drugs for the <strong>cardiac indication</strong>, not the HbA1c — half your HF, ACS and CKD patients have T2DM.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">&lt;53</div><div class="kn-desc">HbA1c mmol/mol target (&lt;7%)</div></div>
    <div class="kn-item"><div class="kn-val">&lt;69</div><div class="kn-desc">Relaxed target if frail (&lt;8.5%)</div></div>
    <div class="kn-item"><div class="kn-val">&lt;1.4</div><div class="kn-desc">LDL mmol/L — very high risk</div></div>
    <div class="kn-item"><div class="kn-val">120–130</div><div class="kn-desc">Target SBP mmHg</div></div>
    <div class="kn-item"><div class="kn-val">≥3 days</div><div class="kn-desc">Hold SGLT2i before major surgery</div></div>
    <div class="kn-item"><div class="kn-val">&lt;20</div><div class="kn-desc">eGFR contraindicating SGLT2i</div></div>
    <div class="kn-item"><div class="kn-val">~30%</div><div class="kn-desc">Expected creatinine rise on starting — protective</div></div>
    <div class="kn-item"><div class="kn-val">&gt;5.0</div><div class="kn-desc">K+ preventing finerenone start</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">SGLT2 inhibitors — who should be on one</div>
  <p><strong>T2DM with any of: heart failure (any LVEF), CKD, or established ASCVD.</strong> Start irrespective of glucose control.</p>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Agent</th><th>Dose</th><th>Evidence</th></tr>
    <tr><td><strong>Empagliflozin</strong></td><td>10 mg OD</td><td>EMPA-REG (ASCVD) · EMPEROR-Reduced/Preserved (HF) · EMPA-KIDNEY</td></tr>
    <tr><td><strong>Dapagliflozin</strong></td><td>10 mg OD</td><td>DECLARE-TIMI · DAPA-HF · DELIVER · DAPA-CKD</td></tr>
    <tr><td>Canagliflozin</td><td>100–300 mg OD</td><td>CANVAS · CREDENCE (nephropathy)</td></tr>
  </table></div>
  <div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>Contraindicated:</strong> T1DM, eGFR &lt;20. <strong>Hold during:</strong> sepsis, major surgery, NBM, severe vomiting or diarrhoea. Warn about genital and urinary symptoms.</div></div>
</div>

<div class="card">
  <div class="card-title">Risk categories &amp; LDL targets in T2DM</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Risk</th><th>Definition</th><th>LDL target</th></tr>
    <tr><td><span class="pill pill-red">Very high</span></td><td>Established ASCVD, <em>or</em> severe target-organ damage (eGFR &lt;45; eGFR 45–59 with albuminuria; proteinuria; microvascular disease at ≥3 sites), <em>or</em> long-duration early-onset T1DM</td><td>&lt;1.4 + ≥50% ↓</td></tr>
    <tr><td><span class="pill pill-amber">High</span></td><td>DM ≥10 years without target-organ damage plus another risk factor, or moderate organ damage</td><td>&lt;1.8 + ≥50% ↓</td></tr>
    <tr><td><span class="pill pill-blue">Moderate</span></td><td>Young T1DM (&lt;35) or T2DM (&lt;50) with &lt;10 years' duration and no other risk factors</td><td>&lt;2.6</td></tr>
  </table></div>
  <p class="text-sm text-muted">Use <strong>SCORE2-Diabetes</strong> (2023) for moderate-risk primary prevention. Don't use it if there's already ASCVD or severe organ damage — those are automatically very high risk.</p>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">GLP-1 receptor agonists &amp; finerenone</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Agent</th><th>Dose</th><th>Evidence</th></tr>
  <tr><td>Semaglutide</td><td>SC 0.25–2 mg weekly, or oral 3–14 mg daily</td><td>SUSTAIN-6, PIONEER-6. <strong>SELECT — CV benefit in obesity without diabetes</strong></td></tr>
  <tr><td>Liraglutide</td><td>0.6–1.8 mg SC daily</td><td>LEADER</td></tr>
  <tr><td>Dulaglutide</td><td>0.75–4.5 mg SC weekly</td><td>REWIND — includes primary prevention</td></tr>
</table></div>
<p>Particularly useful in T2DM with ASCVD or obesity. Nausea is common but settles. <strong>Avoid</strong> with personal or family history of medullary thyroid cancer or MEN2. Hold before general anaesthesia per local protocol — delayed gastric emptying.</p>
<h4>Finerenone</h4>
<p>Non-steroidal MRA, <strong>10–20 mg OD</strong>. For T2DM with CKD (eGFR ≥25 with albuminuria) — reduces CV and kidney events on top of ACE-I/ARB (FIDELIO-DKD, FIGARO-DKD). <strong>Don't start if K &gt;5.0.</strong> Compatible with SGLT2i.</p>
<h4>Where metformin sits now</h4>
<p>Still first-line for glycaemic control, but the CV outcome data are thin (largely UKPDS). <strong>Add SGLT2i and/or GLP-1 RA based on the cardiac indication, not the HbA1c.</strong> Contraindicated below eGFR 30; hold in acute illness with AKI risk.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">BP, antiplatelets &amp; HF</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>Blood pressure</h4>
<ul>
  <li>Treat from ≥140/90 (≥130/80 if very high risk). Target SBP <strong>120–130</strong> in most under 80 — avoid going below 120.</li>
  <li>ACE-I or ARB first, especially with albuminuria. Add CCB or thiazide-like diuretic.</li>
  <li><strong>Avoid beta-blocker with verapamil/diltiazem</strong> — AV block.</li>
  <li>Resistant: spironolactone 25–50 mg, or finerenone if CKD with albuminuria.</li>
</ul>
<h4>Antiplatelets</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Indication</th><th>Approach</th></tr>
  <tr><td>Established ASCVD</td><td>Aspirin 75–100 mg (clopidogrel if intolerant). DAPT post-ACS as usual</td></tr>
  <tr><td>Primary prevention</td><td>Aspirin <strong>Class IIb only</strong> — narrow risk/benefit. Not routine</td></tr>
  <tr><td>PAD / post-CABG</td><td>Consider rivaroxaban 2.5 mg BD + aspirin in high-risk chronic disease (COMPASS, VOYAGER-PAD)</td></tr>
</table></div>
<h4>Heart failure</h4>
<p>Every patient with T2DM and HF of <em>any</em> LVEF should be on dapagliflozin or empagliflozin. <strong>Avoid saxagliptin and alogliptin</strong> (increased HF hospitalisation) and <strong>pioglitazone</strong> (fluid retention).</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Perioperative &amp; sick-day rules</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Drug</th><th>Action</th></tr>
  <tr><td><strong>SGLT2 inhibitor</strong></td><td><strong>Hold ≥3 days</strong> before major surgery, fasting, or acute illness — euglycaemic DKA risk</td></tr>
  <tr><td>Metformin</td><td>Hold on the day of contrast or major surgery; restart when eGFR stable and eating normally</td></tr>
  <tr><td>GLP-1 RA</td><td>Consider holding before GA — delayed gastric emptying. Follow local anaesthetic protocol</td></tr>
  <tr><td>Sulfonylureas / glinides</td><td>Hold on fasting days — hypoglycaemia</td></tr>
  <tr><td>Insulin</td><td>Local sick-day protocol. Basal usually continued at reduced dose</td></tr>
  <tr><td>DPP-4 inhibitors</td><td>Generally safe to continue</td></tr>
</table></div>
<h4>Pearls</h4>
<ul>
  <li><strong>Check an HbA1c on every cardiac admission</strong> — undiagnosed T2DM is common and the admission is the opportunity.</li>
  <li>A creatinine rise of ~30% on starting an SGLT2i or ACE-I is expected and <strong>protective</strong> — don't stop the drug.</li>
  <li>Start cardioprotective agents during the admission, not "for the GP to sort out".</li>
  <li>New-onset AF is commoner in diabetes — screen opportunistically.</li>
</ul>
</div></div>`,

'gl-vt': `
<div class="section-title">VT &amp; Electrical Storm</div>
<div class="section-subtitle">ESC 2022 · Wide complex is VT until proven otherwise.</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Ventricular-Arrhythmias-and-the-Prevention-of-Sudden-Cardiac-Death" target="_blank" class="gl-link">ESC VA/SCD 2022 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ Unstable VT → synchronised DCCV now</div>
  <ul>
    <li><strong>Pulseless VT / VF</strong> → unsynchronised defibrillation, 150–200 J biphasic, ALS algorithm.</li>
    <li><strong>Unstable VT with a pulse</strong> → synchronised: 100 J monomorphic · 200 J polymorphic. Sedate.</li>
    <li><strong>Torsades</strong> → magnesium 2 g IV over 1–2 min. <em>It works even when the magnesium level is normal.</em></li>
    <li><strong>Never verapamil</strong> in an undiagnosed wide-complex tachycardia — collapse if it's VT.</li>
    <li>Fix the substrate: <strong>K &gt;4.5, Mg &gt;1.0</strong>, ischaemia, hypoxia, acidosis, QT-prolonging drugs.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">≥3 in 24 h</div><div class="kn-desc">Sustained VT/VF or ICD shocks = storm</div></div>
    <div class="kn-item"><div class="kn-val">2 g</div><div class="kn-desc">IV magnesium for torsades</div></div>
    <div class="kn-item"><div class="kn-val">&gt;4.5</div><div class="kn-desc">Target K+ (mmol/L)</div></div>
    <div class="kn-item"><div class="kn-val">30 s</div><div class="kn-desc">Defines sustained VT</div></div>
    <div class="kn-item"><div class="kn-val">≤35%</div><div class="kn-desc">LVEF for primary prevention ICD</div></div>
    <div class="kn-item"><div class="kn-val">90–110</div><div class="kn-desc">Overdrive pacing rate in torsades</div></div>
    <div class="kn-item"><div class="kn-val">10–40%</div><div class="kn-desc">Mortality of electrical storm</div></div>
    <div class="kn-item"><div class="kn-val">~30%</div><div class="kn-desc">Storms broken by deep sedation alone</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">Electrical storm — the ladder</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>#</th><th>Intervention</th><th>Detail</th></tr>
    <tr><td>1</td><td><strong>Sedation / anaesthesia</strong></td><td>Propofol or midazolam infusion; intubate if needed. <strong>Breaks ~1 in 3 storms on its own</strong> — sympathetic drive is the engine</td></tr>
    <tr><td>2</td><td><strong>IV propranolol</strong></td><td>1 mg IV every 5 min up to 0.15 mg/kg, then 1–3 mg q4–6h. <strong>Superior to metoprolol/esmolol</strong> — non-selective and lipophilic, crosses the blood–brain barrier. Class I</td></tr>
    <tr><td>3</td><td>IV amiodarone</td><td>300 mg over 20–60 min → 900 mg/24 h. Combine with the beta-blocker. Class I</td></tr>
    <tr><td>4</td><td>IV lidocaine</td><td>1–1.5 mg/kg bolus → 1–4 mg/min. Add in ischaemic VT or if amiodarone-refractory</td></tr>
    <tr><td>5</td><td>Correct triggers</td><td>K &gt;4.5, Mg &gt;1.0, acidosis, hypoxia, <strong>ischaemia — cath lab if ACS</strong>, HF decompensation</td></tr>
    <tr><td>6</td><td>Stellate ganglion block</td><td>Left or bilateral, C6–C7. Effective in refractory storm (IIa B)</td></tr>
    <tr><td>7</td><td>VA-ECMO</td><td>If collapse despite everything — bridge to ablation, transplant, or recovery</td></tr>
    <tr><td>8</td><td><strong>Urgent catheter ablation</strong></td><td>Class I for incessant/recurrent VT in ischaemic cardiomyopathy. <strong>Mortality benefit when offered early</strong> (PARTITA)</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Stable wide-complex tachycardia</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Step</th><th>Action</th></tr>
    <tr><td>1</td><td>12-lead + old ECG (baseline BBB? pre-excitation?). K &gt;4.0, Mg &gt;1.0, troponin</td></tr>
    <tr><td>2</td><td>Vagal manoeuvres — diagnostically useful (I C)</td></tr>
    <tr><td>3</td><td>Adenosine if no baseline pre-excitation (IIa) — may terminate SVT with aberrancy or fascicular VT</td></tr>
    <tr><td>4</td><td><strong>Procainamide 10–15 mg/kg over 20 min</strong> — preferred (PROCAMIO: fewer adverse events than amiodarone). Stop at termination, hypotension, or QRS widening &gt;50%</td></tr>
    <tr><td>5</td><td>Amiodarone 300 mg over 20–60 min — more hypotension, but useful with LV dysfunction</td></tr>
    <tr><td>6</td><td>Lidocaine 1–1.5 mg/kg — alternative in ischaemic VT, less negatively inotropic</td></tr>
    <tr><td>7</td><td>Synchronised DCCV if drugs fail</td></tr>
  </table></div>
  <p class="text-sm text-muted"><strong>Favours VT:</strong> age &gt;35 · structural disease · prior MI · AV dissociation · capture/fusion beats · extreme axis · precordial concordance · QRS &gt;140 ms (RBBB) or &gt;160 ms (LBBB).</p>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Torsades &amp; polymorphic VT</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>Polymorphic VT with a <em>normal</em> QT — usually acute ischaemia</h4>
<ul>
  <li>Defibrillate/cardiovert urgently. <strong>Urgent revascularisation</strong> — cath lab if ACS.</li>
  <li>IV amiodarone or lidocaine; IV beta-blocker to suppress. Correct K, Mg, acidosis, hypoxia.</li>
</ul>
<h4>Torsades de pointes (long QT)</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Step</th><th>Action</th></tr>
  <tr><td>1</td><td>Defibrillate if pulseless or unstable</td></tr>
  <tr><td>2</td><td><strong>Magnesium sulfate 2 g IV over 1–2 min</strong>, repeat at 5–15 min, then 1–2 g/h infusion</td></tr>
  <tr><td>3</td><td>Correct K aggressively to <strong>&gt;4.5</strong></td></tr>
  <tr><td>4</td><td>Stop QT-prolonging drugs — macrolides, fluoroquinolones, ondansetron, haloperidol, methadone, citalopram &gt;20 mg, azoles. Check <em>qtdrugs.org</em></td></tr>
  <tr><td>5</td><td><strong>Overdrive pacing</strong> at 90–110 — shortens QT, suppresses afterdepolarisations. Class I in acquired torsades</td></tr>
  <tr><td>6</td><td>Isoprenaline 2–10 mcg/min as a bridge to pacing — <strong>acquired long QT only</strong></td></tr>
</table></div>
<div class="info-box red"><span class="info-box-icon">🚨</span><div><strong>The congenital vs acquired distinction changes the treatment completely.</strong><br><strong>Acquired</strong> (drugs, hypokalaemia, hypomagnesaemia) → <em>raise</em> the heart rate: pacing, isoprenaline.<br><strong>Congenital</strong> (LQT1/LQT2, sympathetically triggered) → <em>reduce</em> sympathetic drive: beta-blocker. Isoprenaline would be actively harmful.<br>Use the drug list, the pre-event baseline QT, family history and age to decide.</div></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Substrate-specific patterns</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Substrate</th><th>Clues</th><th>Implications</th></tr>
  <tr><td><strong>Ischaemic CM</strong> (commonest)</td><td>Scar re-entry; monomorphic VT matching infarct territory</td><td>Revascularise. ICD for secondary prevention or LVEF ≤35%. Ablation for recurrent VT (VANISH)</td></tr>
  <tr><td>Non-ischaemic DCM</td><td>Midwall/septal LGE on CMR</td><td><strong>LMNA phenotype is especially malignant</strong> — ICD IIa even above LVEF 35%. DANISH tempered automatic ICD in NICM</td></tr>
  <tr><td>HCM</td><td>ESC HCM Risk-SCD model</td><td>Primary prevention ICD if ≥6% at 5 years (IIa); 4–6% with extensive LGE, apical aneurysm, or syncope (IIb)</td></tr>
  <tr><td>ARVC</td><td>TWI V1–V3 &gt;14 y, epsilon waves, RV dyskinesia; LBBB-morphology VT with superior axis</td><td>ICD if sustained VT or high risk. <strong>Exercise restriction — the disease is load-dependent</strong></td></tr>
  <tr><td>Cardiac sarcoidosis</td><td><strong>Unexplained AV block under 60</strong>, VT in a young patient, patchy LGE, FDG-PET uptake</td><td>Immunosuppression reduces arrhythmia. ICD if sustained VT/VF, LVEF ≤35%, or scar with inducible VT</td></tr>
  <tr><td>Channelopathies</td><td>Long QT · Brugada (coved type 1) · CPVT (bidirectional VT on exercise) · short QT</td><td>Avoid trigger drugs (qtdrugs.org, brugadadrugs.org). Beta-blocker for LQT1/2 and CPVT. <strong>Quinidine for Brugada storm</strong></td></tr>
  <tr><td>Idiopathic VT</td><td><strong>RVOT:</strong> LBBB + inferior axis, normal heart. <strong>Fascicular:</strong> RBBB + axis deviation, verapamil-sensitive</td><td>Good prognosis. <strong>Ablation is often curative</strong> — refer</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">ICD &amp; CRT-D indications</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Indication</th><th>Class</th></tr>
  <tr><td><strong>Secondary prevention</strong> — survivor of VF or unstable VT without reversible cause</td><td>I A</td></tr>
  <tr><td>Ischaemic, LVEF ≤35% on OMT, NYHA II–III, ≥6 wks post-MI, ≥3 months post-revascularisation</td><td>I A</td></tr>
  <tr><td>Non-ischaemic, LVEF ≤35% on OMT, NYHA II–III</td><td>IIa A <span class="text-xs">(DANISH-tempered)</span></td></tr>
  <tr><td>HCM with ESC Risk-SCD ≥6% at 5 years</td><td>IIa B</td></tr>
  <tr><td><strong>LMNA or FLNC truncating variants</strong> — even at LVEF &gt;35%</td><td>IIa B</td></tr>
  <tr><td>ARVC with sustained VT, syncope, or high-risk features</td><td>I / IIa</td></tr>
  <tr><td>Cardiac sarcoidosis with sustained VT/VF or LVEF ≤35%</td><td>I / IIa</td></tr>
  <tr><td><strong>CRT-D</strong> — LVEF ≤35%, sinus rhythm, LBBB QRS ≥130 ms (best ≥150), NYHA II–IV on OMT</td><td>I A</td></tr>
  <tr><td>Wearable defibrillator as bridge — recent MI, peripartum CM, awaiting transplant</td><td>IIb</td></tr>
</table></div>
<p><strong>S-ICD</strong> — consider when there's no pacing or CRT requirement, no need for anti-tachycardia pacing, vascular access concerns, or a young patient facing decades of device therapy.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Pearls &amp; traps</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Default to VT.</strong> The cost of wrongly treating SVT as VT is a delay; the cost of wrongly giving verapamil to VT is cardiac arrest.</li>
  <li><strong>Magnesium works in torsades even with a normal magnesium level.</strong> Give it.</li>
  <li><strong>Deep sedation breaks roughly a third of electrical storms</strong> — never underestimate sympathetic drive.</li>
  <li><strong>Magnet over an ICD suspends tachy therapy. Magnet over a pacemaker forces asynchronous pacing.</strong> Don't confuse the two.</li>
  <li>Ablation has moved from last resort to <strong>consider early</strong> — refer before the third storm, not after.</li>
  <li>A young person with sustained VT or out-of-hospital arrest needs <strong>CMR, genetic counselling, and screening of first-degree relatives</strong>.</li>
</ul>
</div></div>`,

'gl-aortic': `
<div class="section-title">Aortic Syndromes</div>
<div class="section-subtitle">ESC 2024 · Suspect, image, transfer. Type A loses 1–2% per hour.</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Peripheral-Arterial-and-Aortic-Diseases" target="_blank" class="gl-link">ESC Aortic &amp; Peripheral Arterial 2024 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ Red flags — CT angiogram now</div>
  <ul>
    <li><strong>Sudden severe tearing chest or back pain</strong>, maximal at onset (MI crescendos; dissection doesn't).</li>
    <li><strong>BP differential between arms &gt;20 mmHg</strong> or a pulse deficit. Check both arms in every chest pain.</li>
    <li>New aortic regurgitation murmur · syncope · focal neurology with pain · new AV block.</li>
    <li><strong>Inferior STEMI with hypotension</strong> — think RCA ostium. <strong>Do not thrombolyse.</strong></li>
    <li><strong>Rate before pressure.</strong> Beta-blocker first, always — a vasodilator alone causes reflex tachycardia and propagates the dissection.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">1–2%/h</div><div class="kn-desc">Type A mortality untreated, first 48 h</div></div>
    <div class="kn-item"><div class="kn-val">&lt;60</div><div class="kn-desc">Target heart rate (bpm)</div></div>
    <div class="kn-item"><div class="kn-val">100–120</div><div class="kn-desc">Target systolic BP (mmHg)</div></div>
    <div class="kn-item"><div class="kn-val">&gt;20 mmHg</div><div class="kn-desc">Inter-arm BP difference = red flag</div></div>
    <div class="kn-item"><div class="kn-val">≥2</div><div class="kn-desc">ADD-RS → straight to CTA</div></div>
    <div class="kn-item"><div class="kn-val">&lt;500</div><div class="kn-desc">D-dimer ng/mL excludes if ADD-RS 0</div></div>
    <div class="kn-item"><div class="kn-val">~80%</div><div class="kn-desc">Of acute aortic syndromes are dissection</div></div>
    <div class="kn-item"><div class="kn-val">5–10%</div><div class="kn-desc">Painless — the ones that get missed</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">Classification drives management</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Stanford</th><th>Anatomy</th><th>Management</th></tr>
    <tr><td><span class="pill pill-red">Type A</span></td><td><strong>Any involvement of the ascending aorta</strong></td><td><strong>Emergency surgery</strong></td></tr>
    <tr><td><span class="pill pill-amber">Type B</span></td><td>Distal to left subclavian, ascending spared</td><td>Medical therapy ± TEVAR if complicated</td></tr>
    <tr><td><span class="pill pill-blue">Non-A non-B</span></td><td>Arch only (newer entity)</td><td>Increasingly treated like complicated Type B</td></tr>
  </table></div>
  <p class="text-sm text-muted">The family: dissection ~80% · intramural haematoma 10–25% · penetrating atherosclerotic ulcer ~5% · contained rupture (rare).</p>
</div>

<div class="card">
  <div class="card-title">Initial medical management — every acute aortic syndrome</div>
  <p>The target is <strong>dP/dt</strong> — the rate of pressure change driving propagation. <strong>Rate first, then pressure.</strong></p>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Step</th><th>Agent</th><th>Note</th></tr>
    <tr><td><strong>1. Rate control</strong></td><td>IV labetalol 20 mg bolus → 20–80 mg q10 min (max 300 mg) or 1–2 mg/min infusion. Or esmolol 0.5 mg/kg → 0.05–0.3 mg/kg/min</td><td>Lowers dP/dt as well as rate</td></tr>
    <tr><td>1b. If beta-blocker contraindicated</td><td>IV diltiazem 0.25 mg/kg then 5–15 mg/h</td><td>Acceptable substitute</td></tr>
    <tr><td><strong>2. Then</strong> vasodilator if SBP still &gt;120</td><td>IV GTN 10–200 mcg/min, or nitroprusside</td><td><strong>Never before rate control</strong></td></tr>
    <tr><td>Analgesia</td><td>IV morphine 2.5–5 mg titrated</td><td>Pain drives catecholamines and BP</td></tr>
    <tr><td><strong>Avoid</strong></td><td>Hydralazine (reflex tachycardia) · <strong>thrombolysis</strong></td><td>Catastrophic if Type A misread as STEMI</td></tr>
  </table></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">ADD-RS &amp; imaging strategy</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<p>One point per <em>category</em> where any feature is present. Maximum 3.</p>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Category</th><th>Features</th></tr>
  <tr><td><strong>1. Predisposing</strong></td><td>Marfan or connective tissue disease · family history of aortic syndrome · known aortic or aortic valve disease · recent aortic manipulation</td></tr>
  <tr><td><strong>2. Pain</strong></td><td>Abrupt onset · severe intensity · ripping or tearing quality</td></tr>
  <tr><td><strong>3. Examination</strong></td><td>Pulse deficit or BP differential · focal neurology with pain · new AR murmur with pain · hypotension or shock</td></tr>
</table></div>
<div class="table-wrap"><table class="guide-table">
  <tr><th>ADD-RS</th><th>Strategy</th></tr>
  <tr><td>0</td><td>Low risk — D-dimer &lt;500 excludes (99% sensitivity, ADvISED). If ≥500, CTA</td></tr>
  <tr><td>1</td><td>D-dimer &lt;500 makes it very unlikely; ≥500 → CTA</td></tr>
  <tr><td><strong>2–3</strong></td><td><strong>CTA now — do not wait for the D-dimer</strong></td></tr>
</table></div>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Modality</th><th>Role</th></tr>
  <tr><td><strong>CT angiography</strong></td><td>Gold standard, 96–100% sensitive. Defines entry tear, branch involvement, malperfusion, rupture</td></tr>
  <tr><td>TOE</td><td>Bedside option if too unstable to travel. 98% sensitive, operator-dependent</td></tr>
  <tr><td>TTE</td><td>Useful for root, AR, pericardial effusion. <strong>A normal TTE does not exclude dissection</strong></td></tr>
</table></div>
<div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>D-dimer can be falsely normal</strong> in localised intramural haematoma, short-segment dissection, or a thrombosed false lumen. Never use it alone.</div></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Type A and Type B management</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>Type A — emergency surgery</h4>
<ul>
  <li>Operative mortality ~15–25%; medical mortality ~50% at 30 days. <strong>Surgery saves lives.</strong></li>
  <li>Immediate: cardiac surgery, cardiac anaesthesia, ITU. Transfer if not on site.</li>
  <li>Bedside while waiting: arterial line + CVC, rate and pressure control, <strong>cross-match 6 units</strong>, correct coagulopathy, no thrombolysis.</li>
  <li><strong>Tamponade — do NOT drain</strong> unless arrest is imminent. Relieving it can accelerate exsanguination. Bridge to theatre.</li>
</ul>
<h4>Type B</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Uncomplicated</th><th>Complicated → TEVAR (Class I)</th></tr>
  <tr><td>Best medical therapy. ITU/HDU initially for tight rate and BP control. Serial imaging at 1, 3, 6, 12 months then annually</td><td>Malperfusion (mesenteric, renal, limb, spinal, cerebral) · rupture · rapid expansion (&gt;5 mm in 2 weeks, or &gt;55 mm) · refractory pain · refractory hypertension</td></tr>
</table></div>
<p>TEVAR covers the entry tear and depressurises the false lumen — lower mortality than open surgery for complicated Type B. INSTEAD-XL suggested pre-emptive TEVAR may improve 5-year survival in selected uncomplicated cases; not yet routine.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Connective tissue disease &amp; intervention thresholds</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Condition</th><th>Features</th><th>Root threshold</th></tr>
  <tr><td>Marfan (FBN1)</td><td>Tall, arachnodactyly, ectopia lentis, MVP, AR</td><td>≥5.0 cm; <strong>≥4.5 cm</strong> with family history of dissection, rapid growth, or pre-pregnancy</td></tr>
  <tr><td>Loeys-Dietz (TGFBR1/2)</td><td>Hypertelorism, bifid uvula, arterial tortuosity. Aggressive</td><td>≥4.0–4.5 cm</td></tr>
  <tr><td>Vascular EDS (COL3A1)</td><td>Thin translucent skin, easy bruising, organ rupture</td><td><strong>Avoid catheter angiography</strong> — vessels tear on contact</td></tr>
  <tr><td>Bicuspid aortic valve</td><td>5–15× dissection rate vs tricuspid</td><td>≥5.5 cm; ≥5.0 cm with risk factors</td></tr>
  <tr><td>Turner syndrome</td><td>BAV, coarctation, short stature — dissects at smaller diameters</td><td>Aortic size index &gt;2.5 cm/m²</td></tr>
</table></div>
<h4>General aneurysm thresholds</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Location</th><th>Threshold</th></tr>
  <tr><td>Ascending aorta / root</td><td>≥5.5 cm general · ≥5.0 cm BAV · ≥4.5 cm Marfan with risk factors · ≥4.0 cm Loeys-Dietz</td></tr>
  <tr><td>Arch</td><td>≥5.5 cm</td></tr>
  <tr><td>Descending thoracic</td><td>≥5.5–6.0 cm (TEVAR if suitable)</td></tr>
  <tr><td>Abdominal</td><td>≥5.5 cm men · ≥5.0 cm women · or symptomatic · or growth &gt;10 mm/yr</td></tr>
  <tr><td><strong>Symptomatic</strong></td><td><strong>Operate regardless of diameter</strong></td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Follow-up &amp; pearls</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Lifelong BP and HR control</strong> — target SBP &lt;130, HR &lt;60. Surveillance CTA/MRA at 1, 3, 6, 12 months then annually.</li>
  <li><strong>Avoid</strong> heavy isometric exercise and Valsalva, competitive sport, and stimulants (cocaine, amphetamines).</li>
  <li><strong>DVLA:</strong> must notify from thoracic aneurysm ≥5.5 cm; HGV rules stricter. Post-Type A assessed case by case.</li>
  <li><strong>Screen first-degree relatives</strong> if connective tissue disease or familial aortic syndrome — echo and genetic counselling.</li>
</ul>
<h4>Traps</h4>
<ul>
  <li><strong>The painless dissection is the one that gets missed</strong> — suspect in unexplained syncope, stroke, or limb/visceral ischaemia, especially in diabetes or immunosuppression.</li>
  <li><strong>"Inferior STEMI" with hypotension</strong> — check both arms, listen for AR, look at the mediastinum before you thrombolyse.</li>
  <li><strong>Rate before pressure, every time.</strong></li>
  <li>BAV aortopathy is independent of valve haemodynamics — <strong>surveillance continues even after valve replacement</strong>.</li>
</ul>
</div></div>`,

'gl-tamponade': `
<div class="section-title">Cardiac Tamponade</div>
<div class="section-subtitle">ESC 2025 · It's about how fast, not how much.</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Myocarditis-and-Pericarditis" target="_blank" class="gl-link">ESC Myocarditis &amp; Pericarditis 2025 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ Call senior + interventional cardiology now</div>
  <ul>
    <li><strong>Beck's triad is often incomplete</strong> in medical tamponade. The modern working diagnosis is tachycardia + hypotension + raised JVP + <strong>pulsus paradoxus &gt;10 mmHg</strong>.</li>
    <li><strong>Do:</strong> sit up · oxygen · cautious fluid 250–500 mL if hypovolaemic · cross-match.</li>
    <li><strong>Don't:</strong> diuretics · vasodilators · lie them flat · intubate with positive pressure if avoidable.</li>
    <li><strong>Definitive treatment is drainage.</strong> Nothing else fixes it.</li>
    <li><strong>Exception — Type A dissection: do NOT drain</strong> unless arrest is imminent. Bridge to theatre.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">&gt;10 mmHg</div><div class="kn-desc">Pulsus paradoxus — the key sign</div></div>
    <div class="kn-item"><div class="kn-val">200–300</div><div class="kn-desc">mL causing tamponade if rapid</div></div>
    <div class="kn-item"><div class="kn-val">1–2 L</div><div class="kn-desc">Tolerated if slow accumulation</div></div>
    <div class="kn-item"><div class="kn-val">50–100</div><div class="kn-desc">mL aspirated → dramatic improvement</div></div>
    <div class="kn-item"><div class="kn-val">&gt;0.34</div><div class="kn-desc">RA collapse fraction of cycle — 100% specific</div></div>
    <div class="kn-item"><div class="kn-val">≥6 pts</div><div class="kn-desc">ESC triage score → drain now</div></div>
    <div class="kn-item"><div class="kn-val">3–6 d</div><div class="kn-desc">Extended drainage in malignant effusion</div></div>
    <div class="kn-item"><div class="kn-val">4–10%</div><div class="kn-desc">Pericardiocentesis complication rate</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">The mental model — the 'last-drop phenomenon'</div>
  <p>Tamponade is not about <em>how much</em> fluid. It's about <em>how fast</em> it arrived relative to the pericardium's ability to stretch.</p>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Speed</th><th>Volume before tamponade</th></tr>
    <tr><td><strong>Rapid</strong> — haemopericardium, trauma, dissection, iatrogenic perforation</td><td><strong>200–300 mL</strong> — no time to stretch</td></tr>
    <tr><td><strong>Slow</strong> — idiopathic, uraemic, malignant, hypothyroid</td><td><strong>1–2 L</strong> — accommodates, until the last few mL exceed capacity</td></tr>
  </table></div>
  <div class="info-box blue"><span class="info-box-icon">💡</span><div>Because the pressure–volume curve is <strong>steep at the top</strong>, aspirating just 50–100 mL can transform the haemodynamics. The same physiology explains why tamponade appears abruptly after apparent stability — and why a small loculated effusion after cardiac surgery can kill.</div></div>
</div>

<div class="card">
  <div class="card-title">Echo signs — which to weight</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Feature</th><th>Sensitivity</th><th>Specificity</th></tr>
    <tr><td>Diastolic RA collapse</td><td>50–100%</td><td>33–100%</td></tr>
    <tr><td><strong>RA collapse &gt;0.34 of cardiac cycle</strong></td><td>&gt;90%</td><td><strong>100%</strong></td></tr>
    <tr><td>Diastolic RV collapse</td><td>48–100%</td><td>72–100%</td></tr>
    <tr><td><strong>IVC plethora</strong> (&gt;20 mm, &lt;50% collapse)</td><td><strong>97%</strong></td><td>40%</td></tr>
    <tr><td>Respiratory variation: mitral E &gt;25–30%, tricuspid E &gt;40–60%</td><td colspan="2">Supportive</td></tr>
  </table></div>
  <p class="text-sm text-muted"><strong>RA collapse is early and sensitive; RV collapse is later and more specific.</strong> The useful bedside package: effusion + RA collapse + IVC plethora + respiratory flow variation.</p>
</div>

<div class="card">
  <div class="card-title">Bedside management before drainage</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Do</th><th>Don't</th></tr>
    <tr><td><strong>Sit the patient up</strong> if BP tolerates</td><td><strong>Don't lie them flat</strong> — worsens ventricular interdependence</td></tr>
    <tr><td>Oxygen to target</td><td><strong>No diuretics</strong> — drops preload → drops output → arrest</td></tr>
    <tr><td><strong>Cautious crystalloid 250–500 mL</strong> if hypovolaemic</td><td><strong>No vasodilators</strong> — nitrates, GTN, ACE-I</td></tr>
    <tr><td>Cross-match if traumatic, dissection, or peri-procedural</td><td><strong>Avoid positive-pressure ventilation</strong> — can precipitate PEA. Awake pericardiocentesis under LA is preferable</td></tr>
    <tr><td>Arterial line if feasible; reverse anticoagulation if bleeding</td><td>Don't delay for imaging in a peri-arrest patient</td></tr>
  </table></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Recognition, aetiology &amp; investigation</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>Clinical features</h4>
<ul>
  <li><strong>Beck's triad</strong> (surgical tamponade): hypotension · raised JVP with prominent X descent and absent Y · muffled heart sounds.</li>
  <li><strong>Modern features</strong> (often the first clue medically): sinus tachycardia · tachypnoea and orthopnoea · <strong>pulsus paradoxus &gt;10 mmHg</strong> · narrow pulse pressure · cold peripheries, oliguria, altered mentation.</li>
  <li>Large chronic effusions can compress neighbours: dysphagia, hoarseness, nausea, hiccups.</li>
</ul>
<div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>Kussmaul's sign is unusual in tamponade.</strong> It belongs to constriction, restriction, or RV infarction. If present, think effusive-constrictive physiology.</div></div>
<h4>Aetiology (ESC 2025, by frequency)</h4>
<ol>
  <li><strong>Malignancy</strong> — lung, breast, lymphoma, mesothelioma</li>
  <li><strong>Iatrogenic / trauma</strong> — PCI, EP ablation, TAVI, pacemaker, biopsy, CVC</li>
  <li>Pericarditis (idiopathic, viral)</li>
  <li>Tuberculosis (commonest cause worldwide)</li>
</ol>
<p>Less common: connective tissue disease · post-MI or post-cardiotomy injury syndrome · free-wall rupture · <strong>aortic dissection with pericardial extension</strong> · uraemia · purulent · myxoedema · anticoagulant-related.</p>
<h4>Investigation</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Test</th><th>Findings</th></tr>
  <tr><td>ECG</td><td>Sinus tachycardia · <strong>low QRS voltages</strong> · <strong>electrical alternans</strong> (specific, not sensitive)</td></tr>
  <tr><td>CXR</td><td>'Water-bottle' silhouette only if &gt;200 mL. <strong>Often normal in acute tamponade</strong></td></tr>
  <tr><td><strong>Bedside TTE</strong></td><td>The single most important investigation</td></tr>
  <tr><td>Bloods</td><td>FBC, U&amp;E, coag, TFT, troponin, CRP, plus TB and malignancy workup as indicated</td></tr>
</table></div>
<p class="text-sm text-muted"><strong>Iatrogenic tamponade is increasingly common</strong> — AF ablation causes pericarditis in ~10%. Bedside echo the moment anything looks wrong after a procedure; time-to-diagnosis predicts survival.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">ESC 2025 triage score</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<p>Points across three categories. <strong>Total ≥6 from at least two categories → immediate pericardiocentesis.</strong></p>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Category</th><th>Feature</th><th>Points</th></tr>
  <tr><td rowspan="4"><strong>Aetiology</strong></td><td>Malignancy · tuberculosis</td><td>+2 each</td></tr>
  <tr><td>Recent radiotherapy · recent viral infection · recurrent PE · terminal renal failure · immunosuppression</td><td>+1 each</td></tr>
  <tr><td><em>Dysthyroidism</em></td><td>−1</td></tr>
  <tr><td><em>Systemic autoimmune disease</em></td><td>−1</td></tr>
  <tr><td rowspan="5"><strong>Presentation</strong></td><td><strong>Orthopnoea</strong></td><td>+3</td></tr>
  <tr><td>Pulsus paradoxus &gt;10 mmHg · rapid worsening</td><td>+2 each</td></tr>
  <tr><td>Dyspnoea/tachypnoea · progressive sinus tachycardia · oliguria</td><td>+1 each</td></tr>
  <tr><td>Hypotension SBP &lt;95 · pericardial pain · friction rub</td><td>+0.5 each</td></tr>
  <tr><td><em>Slow disease evolution</em></td><td>−1</td></tr>
  <tr><td rowspan="5"><strong>Imaging</strong></td><td><strong>Circumferential large effusion</strong></td><td>+3</td></tr>
  <tr><td>LA collapse</td><td>+2</td></tr>
  <tr><td>IVC dilated and non-collapsing · RV collapse</td><td>+1.5 each</td></tr>
  <tr><td>Cardiomegaly · microvoltage · moderate effusion · RA collapse · flow variation · swinging heart</td><td>+1 each</td></tr>
  <tr><td><em>Small effusion</em></td><td>−1</td></tr>
</table></div>
<div class="info-box blue"><span class="info-box-icon">💡</span><div><strong>How to actually use it:</strong> anyone with definite clinical tamponade or persistent instability drains <em>regardless of score</em>. The score earns its keep in the <strong>ambiguous middle</strong> — large effusion, haemodynamically stable — where it guides urgent versus elective drainage. Check how your ITU and cath lab want it applied locally.</div></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Pericardiocentesis &amp; complications</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>Echo-guided is standard</strong> (Class I). Fluoroscopy in the cath lab is equivalent in expert hands.</li>
  <li>Subxiphoid is classical; <strong>apical increasingly common</strong> when echo shows the largest pocket there.</li>
  <li>Seldinger technique. <strong>Confirm intrapericardial position with agitated saline</strong> — bubbles should fill the pericardium, not the ventricle.</li>
  <li>Leave a pigtail drain in situ 24–72 h; <strong>3–6 days for malignant effusion</strong> to prevent reaccumulation.</li>
  <li><strong>Send fluid for:</strong> MC&amp;S · TB culture and PCR · cytology (2–3 samples) · protein, LDH, glucose · adenosine deaminase · targeted tumour markers.</li>
  <li><strong>Fluid character hints at cause:</strong> bloody → malignancy, trauma, procedural, dissection · purulent → bacterial · milky → chylopericardium · clear → idiopathic, uraemic, viral.</li>
</ul>
<h4>Complications (~4–10%)</h4>
<p>Cardiac chamber puncture (RV commonest) · coronary or internal mammary artery injury · pneumothorax or haemothorax · pneumopericardium · hepatic injury (subxiphoid) · arrhythmia · vagal reaction · <strong>pericardial decompression syndrome</strong> — rare but needs a monitored bed for 24 h.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Special situations</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Scenario</th><th>Key points</th></tr>
  <tr><td><strong>Type A dissection</strong></td><td><strong>Do NOT drain unless arrest is imminent.</strong> The tamponade is temporarily maintaining haemostasis — relieving it risks exsanguination. Bridge to theatre. If unavoidable, aspirate 20–50 mL only, to SBP ~90</td></tr>
  <tr><td>Post-MI free wall rupture</td><td>Emergency surgery. Pericardiocentesis is a bridge, not treatment</td></tr>
  <tr><td><strong>Purulent pericarditis</strong></td><td><strong>Surgical drainage beats a needle</strong> — subxiphoid pericardiotomy clears loculated infected fluid and reduces the 20–30% constriction risk. Broad-spectrum IV antibiotics after cultures</td></tr>
  <tr><td>Malignant tamponade</td><td>Relieves symptoms and gives tissue diagnosis. <strong>Extended drainage 3–6 days</strong> (Class I B). Pericardial window for recurrence</td></tr>
  <tr><td>Post-cardiac surgery</td><td>Loculated, often posterior. Usually needs surgical re-exploration. Low threshold for TTE/TOE in any post-op instability</td></tr>
  <tr><td>Post-PCI / ablation perforation</td><td>Reverse anticoagulation (protamine), prompt drainage, watch for reaccumulation</td></tr>
  <tr><td>Effusive-constrictive</td><td>Improves with drainage but RA pressure stays high — visceral constriction. Consider pericardiectomy</td></tr>
  <tr><td>Tuberculous</td><td>Diagnostic tap with ADA, PCR, cytology. 6-month regimen. Pericardiectomy if not improving at 4–8 weeks</td></tr>
  <tr><td>Uraemic</td><td>Intensive dialysis over 5–7 sessions often resolves it. Avoid heparin if the effusion is bloody</td></tr>
</table></div>
<h4>Pearls</h4>
<ul>
  <li><strong>Pulsus paradoxus can be absent</strong> in severe LV dysfunction, aortic regurgitation, ASD, positive-pressure ventilation, and extreme hypovolaemia. Absence doesn't exclude tamponade.</li>
  <li><strong>Aspirin, colchicine and anti-TB drugs treat causes — never the tamponade.</strong> Drainage is definitive.</li>
  <li>What happens in the pericardium is usually a marker of systemic disease. Stabilise the physiology, then chase the aetiology.</li>
</ul>
</div></div>`,

'gl-ie': `
<div class="section-title">Infective Endocarditis</div>
<div class="section-subtitle">ESC 2023 · Cultures before antibiotics. Endocarditis Team early.</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Infective-Endocarditis" target="_blank" class="gl-link">ESC IE 2023 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ Suspect, culture, echo</div>
  <ul>
    <li><strong>Suspect:</strong> fever + new murmur · bacteraemia without a source (especially <em>S. aureus</em>) · prosthetic valve or device + fever · PWID + fever · embolic event · unexplained HF in an at-risk patient.</li>
    <li><strong>Three sets of blood cultures, 30 min apart, different sites, BEFORE antibiotics.</strong></li>
    <li><strong>New AV block = perivalvular abscess until proven otherwise.</strong> Daily ECG. Urgent TOE.</li>
    <li>Urgent surgical discussion: acute severe regurgitation with pulmonary oedema · uncontrolled infection · recurrent emboli with a large vegetation.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">3 sets</div><div class="kn-desc">Blood cultures, 30 min apart</div></div>
    <div class="kn-item"><div class="kn-val">&gt;10 mm</div><div class="kn-desc">Vegetation size raising embolic risk</div></div>
    <div class="kn-item"><div class="kn-val">&gt;7 days</div><div class="kn-desc">Persistent cultures = uncontrolled infection</div></div>
    <div class="kn-item"><div class="kn-val">5–7 d</div><div class="kn-desc">Repeat TOE if first negative, suspicion persists</div></div>
    <div class="kn-item"><div class="kn-val">≥10 days</div><div class="kn-desc">IV before oral switch (POET)</div></div>
    <div class="kn-item"><div class="kn-val">6 weeks</div><div class="kn-desc">Duration for PVE and enterococcal IE</div></div>
    <div class="kn-item"><div class="kn-val">~30%</div><div class="kn-desc">PVE with normal initial echo</div></div>
    <div class="kn-item"><div class="kn-val">2 g</div><div class="kn-desc">Amoxicillin prophylaxis, 30–60 min before</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">2023 modified Duke criteria</div>
  <p><strong>Definite IE:</strong> 2 major · or 1 major + 3 minor · or 5 minor. <strong>Possible:</strong> 1 major + 1 minor · or 3 minor.</p>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Major</th><th>Minor</th></tr>
    <tr><td><strong>Blood cultures:</strong> typical organisms from 2 separate sets (oral streptococci, <em>S. gallolyticus</em>, HACEK, <em>S. aureus</em>, <em>E. faecalis</em>) · or persistently positive · or single positive for <em>C. burnetii</em><br><br><strong>Imaging:</strong> valvular, perivalvular or device lesions on TTE/TOE, cardiac CT, <strong>FDG-PET/CT</strong>, or WBC SPECT/CT</td><td>1. Predisposing cardiac condition or PWID<br>2. Fever &gt;38°C<br>3. Vascular phenomena — emboli, septic pulmonary infarcts, mycotic aneurysm, Janeway lesions<br>4. Immunological phenomena — glomerulonephritis, Osler nodes, Roth spots<br>5. Microbiological evidence not meeting major</td></tr>
  </table></div>
  <div class="info-box blue"><span class="info-box-icon">💡</span><div>The 2023 revision brought <strong>CT and nuclear imaging into the major criteria</strong> — a significant change, particularly useful for prosthetic valve and device infection where echo is often unrevealing.</div></div>
</div>

<div class="card">
  <div class="card-title">Empirical antibiotics — after cultures</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Scenario</th><th>Regimen</th></tr>
    <tr><td>Community-acquired native valve, or late PVE (&gt;12 months)</td><td>Ampicillin 12 g/day + (flu)cloxacillin 12 g/day + gentamicin 3 mg/kg/day.<br><em>Penicillin-allergic:</em> vancomycin + gentamicin</td></tr>
    <tr><td>Early PVE (≤12 months) or healthcare-associated</td><td>Vancomycin + gentamicin + <strong>rifampicin</strong> 900–1200 mg/day (<em>add rifampicin after 3–5 days, not at the outset</em>)</td></tr>
    <tr><td>PWID / suspected <em>S. aureus</em></td><td>Cover MSSA and MRSA — (flu)cloxacillin + vancomycin if MRSA risk</td></tr>
  </table></div>
  <div class="info-box green"><span class="info-box-icon">📈</span><div>Narrow to targeted therapy within 24–48 h. <strong>For MSSA, ESC prefers cloxacillin or cefazolin over other beta-lactams or vancomycin</strong> — lower mortality.</div></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Workup &amp; targeted therapy</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>Workup</h4>
<ul>
  <li><strong>TTE urgently</strong> as first-line (Class I). <strong>TOE</strong> if TTE negative or inconclusive, prosthetic valve, intracardiac device, or strong suspicion. <strong>Repeat TOE at 5–7 days</strong> if the first is negative but suspicion persists.</li>
  <li><strong>ECG on admission and daily</strong> — new PR prolongation or AV block signals annular or septal abscess.</li>
  <li>Cardiac and chest CT for perivalvular complications and septic pulmonary emboli.</li>
  <li><strong>Brain MRI in all left-sided IE</strong> — silent embolic infarcts change management.</li>
  <li>FDG-PET/CT for PVE &gt;3 months post-surgery and for device infection (Class I in PVE).</li>
</ul>
<h4>Targeted therapy</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Organism</th><th>Regimen</th><th>Duration</th></tr>
  <tr><td>MSSA, native valve</td><td>(Flu)cloxacillin 12 g/day; cefazolin 6 g/day if allergic</td><td>4–6 weeks</td></tr>
  <tr><td>MSSA, prosthetic valve</td><td>(Flu)cloxacillin + rifampicin + gentamicin (first 2 weeks only)</td><td>6 weeks</td></tr>
  <tr><td>MRSA / coagulase-negative staph</td><td>Vancomycin (trough 15–20); daptomycin 10 mg/kg alternative</td><td>4–6 weeks</td></tr>
  <tr><td>Viridans strep, penicillin-sensitive</td><td>Benzylpenicillin 12–18 MU/day or ceftriaxone 2 g OD</td><td>4 weeks (6 if PVE)</td></tr>
  <tr><td><strong><em>E. faecalis</em></strong></td><td><strong>Ampicillin + ceftriaxone</strong> — preferred over ampicillin + gentamicin, far less nephrotoxic</td><td>6 weeks</td></tr>
  <tr><td>HACEK</td><td>Ceftriaxone 2 g OD</td><td>4 weeks (6 if PVE)</td></tr>
</table></div>
<h4>Oral switch &amp; OPAT (POET)</h4>
<p>After <strong>≥10 days IV</strong> (or ≥7 days post-surgery), a clinically stable patient with a susceptible organism and a negative TOE before switching can complete therapy orally or via OPAT. <strong>Not for:</strong> early PVE · abscess or mycotic aneurysm · <em>S. aureus</em> native valve without an expert team · ongoing clinical or microbiological activity.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Surgery — Endocarditis Team decision</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Indication</th><th>Timing</th></tr>
  <tr><td><strong>Heart failure</strong> from acute severe regurgitation or obstruction</td><td><strong>Emergency (&lt;24 h)</strong> if refractory shock or pulmonary oedema</td></tr>
  <tr><td>Regurgitation with HF symptoms or poor haemodynamic tolerance</td><td>Urgent (within days)</td></tr>
  <tr><td><strong>Uncontrolled infection</strong> — abscess, pseudoaneurysm, fistula, enlarging vegetation, or cultures still positive &gt;7 days</td><td>Urgent</td></tr>
  <tr><td>Difficult organisms — fungi, multi-resistant, some Gram-negatives</td><td>Urgent / elective</td></tr>
  <tr><td><strong>Embolism prevention</strong> — vegetation &gt;10 mm with embolic event on antibiotics, or &gt;10 mm on a high-risk valve, or persistent &gt;30 mm</td><td>Urgent</td></tr>
  <tr><td>PVE complications — dehiscence, fistula, large abscess</td><td>Urgent / elective</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Special scenarios &amp; prophylaxis</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Scenario</th><th>Key points</th></tr>
  <tr><td><strong>Device (CIED) infection</strong></td><td><strong>Complete system removal is mandatory</strong> (Class I) plus targeted antibiotics. Reimplant after negative cultures — often contralateral or leadless</td></tr>
  <tr><td>Right-sided IE</td><td>Often <em>S. aureus</em> in PWID, with septic pulmonary emboli. Surgery for uncontrolled RV failure, persistent vegetation &gt;20 mm, persistent bacteraemia, or difficult organisms</td></tr>
  <tr><td>Stroke / cerebral emboli</td><td>Ischaemic stroke with a surgical indication — usually proceed within days; <strong>don't delay beyond 1–2 weeks</strong>. Intracranial haemorrhage → delay 4 weeks if feasible</td></tr>
  <tr><td>Anticoagulation</td><td>Continue in mechanical valve IE but switch to heparin and monitor closely. Hold and reverse if intracranial haemorrhage</td></tr>
  <tr><td>Mycotic aneurysm</td><td>Brain MRI in left-sided IE; CT/MRA if suspected. May need intervention <em>before</em> cardiac surgery</td></tr>
</table></div>
<h4>Prophylaxis — high-risk patients only</h4>
<p>For dental procedures involving gingival or periapical manipulation, or mucosal perforation, in patients with:</p>
<ul>
  <li>Prosthetic valve, <strong>including TAVI</strong></li>
  <li>Previous infective endocarditis</li>
  <li>Unrepaired cyanotic CHD, or repaired with residual shunt / prosthetic material &lt;6 months</li>
  <li>Left ventricular assist device</li>
</ul>
<p><strong>Amoxicillin 2 g PO 30–60 min before</strong> (clindamycin 600 mg if allergic). For most patients, <strong>good oral hygiene and dental surveillance matter far more than antibiotics.</strong></p>
<h4>Pearls</h4>
<ul>
  <li><strong>Involve the Endocarditis Team early in every confirmed case</strong> — cardiology, cardiothoracic surgery, ID, microbiology, imaging. It reduces mortality.</li>
  <li><em>S. aureus</em> bacteraemia carries a high IE rate — echo, preferably TOE, is indicated.</li>
  <li><strong>A negative TTE does not exclude IE.</strong></li>
  <li><strong>New AV block = abscess until proven otherwise.</strong> Urgent TOE, consider surgery.</li>
  <li>Relapse risk is highest in the first year — educate about dental hygiene and warning symptoms before discharge.</li>
</ul>
</div></div>`,

'gl-cmp': `
<div class="section-title">Cardiomyopathies</div>
<div class="section-subtitle">ESC 2023 · Phenotype first, aetiology second. Recognise and refer.</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Cardiomyopathies" target="_blank" class="gl-link">ESC Cardiomyopathies 2023 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ Three patterns to recognise on take</div>
  <ul>
    <li><strong>Heart failure without an obvious cause</strong> — think infiltration, genetics, toxins.</li>
    <li><strong>Arrhythmia in a young patient</strong> — HCM, ARVC, sarcoid, channelopathy.</li>
    <li><strong>Family history of sudden death</strong> — the question that changes a whole family's care.</li>
    <li>Your job on-call is rarely the definitive diagnosis. It's <strong>recognise → basic workup → refer to the right clinic</strong>.</li>
    <li><strong>Always take a 3-generation family history.</strong> One conversation can identify a dozen people at risk.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">≥15 mm</div><div class="kn-desc">Wall thickness for HCM (≥13 if relative)</div></div>
    <div class="kn-item"><div class="kn-val">1:500</div><div class="kn-desc">HCM prevalence</div></div>
    <div class="kn-item"><div class="kn-val">≥30 / ≥50</div><div class="kn-desc">LVOT gradient mmHg: rest / provoked</div></div>
    <div class="kn-item"><div class="kn-val">≥6%</div><div class="kn-desc">5-y HCM Risk-SCD → consider ICD</div></div>
    <div class="kn-item"><div class="kn-val">&gt;15%</div><div class="kn-desc">LGE of LV mass = higher SCD risk</div></div>
    <div class="kn-item"><div class="kn-val">~15%</div><div class="kn-desc">TAVI patients with concurrent ATTR</div></div>
    <div class="kn-item"><div class="kn-val">61 mg</div><div class="kn-desc">Tafamidis daily dose</div></div>
    <div class="kn-item"><div class="kn-val">~30%</div><div class="kn-desc">DCM that is familial</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">The five phenotypes</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Phenotype</th><th>Hallmark</th><th>Common causes</th></tr>
    <tr><td><strong>HCM</strong></td><td>Unexplained LVH ≥15 mm (≥13 with family history)</td><td>Sarcomeric (MYBPC3, MYH7); also <strong>Fabry, amyloid</strong>, glycogen storage</td></tr>
    <tr><td><strong>DCM</strong></td><td>LV dilatation + reduced function, unexplained by load or CAD</td><td>Familial (TTN, LMNA, FLNC); peripartum; alcohol; chemotherapy; viral; tachycardia-mediated</td></tr>
    <tr><td><strong>RCM</strong></td><td>Restrictive filling, biatrial dilatation, near-normal LV size and EF</td><td><strong>Amyloid</strong>, sarcoid, haemochromatosis, Fabry, hypereosinophilic, radiation</td></tr>
    <tr><td><strong>ARVC</strong></td><td>RV dilatation/dysfunction, fibrofatty replacement, arrhythmia</td><td>Desmosomal (PKP2, DSG2, DSP, JUP)</td></tr>
    <tr><td><strong>Non-dilated LV CM</strong> <span class="tag tag-new">new 2023</span></td><td>Scar or dysfunction <em>without</em> dilatation</td><td>FLNC, DSP, inflammatory, healed myocarditis</td></tr>
  </table></div>
</div>

<div class="card">
  <div class="card-title">Cardiac amyloid — when to suspect</div>
  <p>Recognition has been transformed by bone scintigraphy and tafamidis. Look for:</p>
  <ul>
    <li><strong>HFpEF with LV thickening but discordantly LOW ECG voltages</strong> — the classic clue</li>
    <li><strong>Bilateral carpal tunnel syndrome</strong> — often precedes cardiac disease by 5–10 years</li>
    <li>Lumbar spinal stenosis, biceps tendon rupture, atraumatic rotator cuff disease</li>
    <li>Aortic stenosis with "HFpEF" — <strong>up to 15% of TAVI patients have concurrent ATTRwt</strong></li>
    <li><strong>Apical sparing ("cherry on top")</strong> on strain echo — highly specific</li>
    <li>Macroglossia, peri-orbital purpura → suggests AL</li>
  </ul>
  <div class="info-box red"><span class="info-box-icon">🚨</span><div><strong>Always rule out AL amyloid FIRST.</strong> Send <strong>all three</strong>: serum free light chains + serum protein electrophoresis with immunofixation + urine protein electrophoresis. AL is rapidly fatal untreated, and a positive bone scan in someone with an unrecognised plasma cell dyscrasia will mislead you. Only if all three are negative → DPD/PYP scintigraphy; grade 2–3 uptake confirms ATTR <em>without biopsy</em>.</div></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">HCM — workup, obstruction, SCD risk</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>Workup</h4>
<ul>
  <li><strong>ECG:</strong> voltage criteria, deep TWI (giant negative T waves in apical HCM), pathological Q waves.</li>
  <li><strong>Echo:</strong> wall thickness, LVOT gradient at rest <em>and</em> with Valsalva/exercise, SAM, MR, apical involvement.</li>
  <li><strong>CMR:</strong> catches apical and anterolateral disease echo misses; quantifies LGE (&gt;15% LV mass = higher risk).</li>
  <li><strong>48-h Holter</strong> — NSVT is a major risk modifier. <strong>Exercise test</strong> — abnormal BP response (rise &lt;20 mmHg or a fall) is a risk feature.</li>
  <li>Three-generation family history. Genetic testing for all probands, with cascade screening of relatives.</li>
</ul>
<h4>LVOT obstruction</h4>
<ul>
  <li>Significant: <strong>≥30 mmHg at rest or ≥50 mmHg provoked</strong>.</li>
  <li>Beta-blocker or verapamil first; add disopyramide if refractory.</li>
  <li><strong>Cardiac myosin inhibitors</strong> — mavacamten (EXPLORER-HCM, VALOR-HCM) and aficamten (SEQUOIA-HCM) reduce gradient and symptoms and may avert septal reduction. Monitor LVEF.</li>
  <li>Septal myectomy or alcohol septal ablation if still symptomatic on optimal therapy.</li>
</ul>
<h4>SCD risk</h4>
<p>ESC HCM Risk-SCD uses age, family history of SCD, unexplained syncope, NSVT, max wall thickness, LA diameter, LVOT gradient. <strong>≥6% at 5 years → ICD should be considered (IIa)</strong>; 4–6% with extensive LGE, apical aneurysm, or syncope → may be considered (IIb). Survivor of arrest or sustained VT → ICD regardless (Class I).</p>
<div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>AF in HCM: anticoagulate regardless of CHA₂DS₂-VA</strong> (Class I) — thromboembolic risk far exceeds what the score predicts. Avoid digoxin (worsens obstruction) and be cautious with vasodilators.</div></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Amyloid &amp; sarcoid — management</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>Amyloid types</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Type</th><th>Population</th><th>Treatment</th></tr>
  <tr><td><strong>ATTR wild-type</strong></td><td>Older men, isolated cardiac, carpal tunnel history</td><td>Tafamidis 61 mg OD (ATTR-ACT); acoramidis; vutrisiran</td></tr>
  <tr><td>ATTR variant</td><td>Younger, family history, neuropathy + cardiac</td><td>As above + genetic counselling and family screening</td></tr>
  <tr><td><strong>AL</strong></td><td>Multiorgan — kidney, GI, neuropathy, macroglossia</td><td><strong>Urgent haematology.</strong> Chemotherapy (dara-CyBorD), ASCT in selected</td></tr>
</table></div>
<h4>Cardiac care in amyloid is different</h4>
<ul>
  <li>These hearts are <strong>exquisitely volume- and rate-sensitive</strong>. Loop diuretic is the mainstay, cautiously dosed.</li>
  <li>Beta-blockers, ACE-I, ARB and MRA are <strong>often poorly tolerated</strong> — reduce rather than reflexively continue at standard doses.</li>
  <li><strong>Avoid non-DHP calcium blockers and digoxin</strong> — they bind amyloid fibrils, toxicity risk.</li>
  <li>SGLT2 inhibitor is beneficial and generally well tolerated.</li>
  <li>AF: <strong>anticoagulate regardless of score</strong>. Low threshold for pacing in AV block. ICD benefit less clear — individualise.</li>
</ul>
<h4>Cardiac sarcoidosis</h4>
<ul>
  <li><strong>Unexplained AV block under 60 is sarcoid (or giant cell) until proven otherwise.</strong> Also suspect with VT in a young patient.</li>
  <li><strong>CMR</strong> — patchy multifocal LGE not in a coronary territory. <strong>FDG-PET</strong> with a proper prolonged-fast low-carb protocol shows active inflammation and guides immunosuppression.</li>
  <li><strong>Biopsy extracardiac tissue</strong> (lymph node, lung, skin) in preference — cardiac biopsy yield is only ~25–30% because disease is patchy.</li>
  <li>Prednisolone 30–40 mg tapered over months ± methotrexate/azathioprine/MMF. Infliximab in refractory specialist cases.</li>
  <li>Low threshold for pacing; ICD if sustained VT/VF, LVEF ≤35%, or scar with inducible VT.</li>
</ul>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">DCM causes, ARVC, Takotsubo</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>DCM — causes worth chasing</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Cause</th><th>Clue</th><th>Why it matters</th></tr>
  <tr><td>Familial (~30%)</td><td>TTN truncating commonest; LMNA, FLNC, DSP, RBM20</td><td>Genetic testing + family screening</td></tr>
  <tr><td><strong>Tachycardia-mediated</strong></td><td>Persistent AF/SVT or frequent PVCs</td><td><strong>Genuinely reversible</strong> — control rate/rhythm, reassess EF at 3 months</td></tr>
  <tr><td>Alcohol</td><td>Heavy intake, macrocytosis, raised GGT</td><td>Abstinence may reverse</td></tr>
  <tr><td>Peripartum</td><td>Last month of pregnancy to 5 months postpartum</td><td>Bromocriptine in selected; counsel on future pregnancy</td></tr>
  <tr><td>Chemotherapy</td><td>Anthracyclines, trastuzumab, TKIs, ICIs</td><td>Cardio-oncology input</td></tr>
  <tr><td>Iron overload</td><td>Ferritin, transferrin saturation, HFE</td><td>Venesection</td></tr>
  <tr><td>Endocrine</td><td>Thyroid, phaeochromocytoma, acromegaly</td><td>Targeted therapy</td></tr>
</table></div>
<div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>LMNA and FLNC truncating variants:</strong> malignant ventricular arrhythmia arrives <em>before</em> systolic dysfunction is severe. Discuss ICD even with LVEF &gt;35%.</div></div>
<h4>ARVC</h4>
<p>Triad: ECG changes (TWI V1–V3 over age 14, epsilon waves), structural change (RV dilatation, regional aneurysm), and arrhythmia (LBBB-morphology VT with superior axis). <strong>Exercise restriction is disease-modifying</strong> — high-intensity endurance accelerates progression (Class I). Family screening every 2–3 years, more often in adolescence.</p>
<h4>Takotsubo</h4>
<ul>
  <li>Stress-induced reversible LV dysfunction, classically apical ballooning. Troponin rise is <strong>modest and disproportionate</strong> to the wall motion abnormality.</li>
  <li><strong>In shock, avoid inotropes and catecholamines</strong> — they can worsen apical dysfunction. Consider mechanical support instead.</li>
  <li>LVOT obstruction with SAM can occur acutely — treat like obstructive HCM: fluid, beta-blocker, no vasodilators.</li>
  <li>Anticoagulate if large apical akinesia or visible thrombus. EF usually recovers in days to weeks; ~2% annual recurrence.</li>
</ul>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Family screening &amp; pearls</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li>Once confirmed in a proband, <strong>first-degree relatives need history, examination, ECG and echo</strong>.</li>
  <li>If a pathogenic variant is found — <strong>cascade genetic testing</strong>. Carriers screened periodically; non-carriers can be reassured and discharged.</li>
  <li>If no informative variant — serial clinical screening every 2–5 years, <strong>more often through adolescence</strong> (peak risk window for HCM and ARVC).</li>
  <li>Sudden death in a young person without a cause → offer family screening even before a mutation is found.</li>
  <li>Refer to a regional <strong>inherited cardiac conditions clinic</strong>.</li>
</ul>
<h4>Traps</h4>
<ul>
  <li><strong>Fabry disease hides behind "HCM"</strong> — check it in young men with concentric LVH, short PR, proteinuria, neuropathic pain. Enzyme replacement exists.</li>
  <li>"Thick heart with low voltage" is amyloid until proven otherwise.</li>
  <li><strong>Bilateral carpal tunnel in an older man</strong> is one of the most reliable extracardiac flags for ATTRwt — just ask.</li>
  <li>Distinguish restriction from <strong>constriction</strong> — constriction may be surgically curable.</li>
  <li>LV non-compaction can be a benign variant in athletes and Afro-Caribbean populations. <strong>Treat the phenotype, not the trabeculation.</strong></li>
</ul>
</div></div>`,

'gl-myocarditis': `
<div class="section-title">Myocarditis</div>
<div class="section-subtitle">ESC 2025 · The first ESC myocarditis guideline — published jointly with pericarditis.</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Myocarditis-and-Pericarditis" target="_blank" class="gl-link">ESC Myocarditis &amp; Pericarditis 2025 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ The ones that can't wait</div>
  <ul>
    <li><strong>Fulminant myocarditis</strong> (cardiogenic shock) — resuscitation emergency. ITU + tertiary centre for mechanical support, early.</li>
    <li><strong>New AV block or VT in a young patient with a troponin rise</strong> — suspect <strong>giant cell or sarcoid</strong> until proven otherwise. Biopsy within 1–2 weeks changes prognosis dramatically.</li>
    <li><strong>ICI myocarditis</strong> — any troponin rise in a patient on checkpoint inhibitors needs triage within <strong>24 hours</strong>. It's arrhythmogenic <em>before</em> it's heart-failing.</li>
    <li><strong>Exercise restriction 3–6 months</strong> in every confirmed case, regardless of LVEF.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">3–6 mo</div><div class="kn-desc">Exercise restriction (Class I)</div></div>
    <div class="kn-item"><div class="kn-val">&lt;50%</div><div class="kn-desc">LVEF defining "complicated"</div></div>
    <div class="kn-item"><div class="kn-val">≤4 wks</div><div class="kn-desc">Defines acute stage</div></div>
    <div class="kn-item"><div class="kn-val">85%</div><div class="kn-desc">Giant cell death/transplant at 3 y untreated</div></div>
    <div class="kn-item"><div class="kn-val">25%</div><div class="kn-desc">Eosinophilic cases with NO blood eosinophilia</div></div>
    <div class="kn-item"><div class="kn-val">~1%</div><div class="kn-desc">ICI-treated patients affected</div></div>
    <div class="kn-item"><div class="kn-val">24 h</div><div class="kn-desc">Triage window for suspected ICI myocarditis</div></div>
    <div class="kn-item"><div class="kn-val">&gt;20%</div><div class="kn-desc">LGE burden — avoid return to sport</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">The IMPS umbrella — the 2025 paradigm shift</div>
  <p>ESC 2025 introduces <strong>Inflammatory Myopericardial Syndrome (IMPS)</strong> as an initial label, held until imaging refines it. Think of it as the "ACS" framework for inflammatory heart disease.</p>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Refines into</th><th>Meaning</th></tr>
    <tr><td>Isolated myocarditis</td><td>Myocardial inflammation predominant</td></tr>
    <tr><td>Myopericarditis</td><td>Myocardial predominant with pericardial involvement</td></tr>
    <tr><td>Perimyocarditis</td><td>Pericardial predominant with troponin rise</td></tr>
    <tr><td>Isolated pericarditis</td><td>See the Pericarditis page</td></tr>
  </table></div>
  <div class="info-box blue"><span class="info-box-icon">💡</span><div><strong>Why the name matters clinically:</strong> it forces you to look for the other layer. A "pericarditis" with even a small troponin rise is myopericarditis — which moves exercise restriction from weeks to months. Naming it IMPS first keeps the differential open while the workup narrows.</div></div>
</div>

<div class="card">
  <div class="card-title">Classify by stage <em>and</em> severity</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Severity</th><th>Definition</th><th>Action</th></tr>
    <tr><td><span class="pill pill-green">Uncomplicated</span></td><td>LVEF ≥50%, no HF, no arrhythmia, no conduction disease</td><td>Supportive; observe; exercise restriction</td></tr>
    <tr><td><span class="pill pill-amber">Complicated</span></td><td>LVEF &lt;50%, <em>or</em> acute HF, <em>or</em> ventricular arrhythmia, <em>or</em> advanced AV block</td><td>HFrEF therapy; biopsy if not improving in 1–2 weeks</td></tr>
    <tr><td><span class="pill pill-red">Fulminant</span></td><td><strong>Cardiogenic shock</strong> — the term is now reserved for this</td><td>Mechanical support, urgent biopsy, tertiary transfer</td></tr>
  </table></div>
  <p class="text-sm text-muted"><strong>Stage:</strong> acute ≤4 weeks · subacute weeks–months · chronic (overlaps with inflammatory cardiomyopathy, a DCM subtype).</p>
</div>

<div class="card">
  <div class="card-title">Four clinical masks</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Phenotype</th><th>Features</th><th>Mimics</th></tr>
    <tr><td><strong>1. Chest pain</strong> (commonest)</td><td>Pleuritic or ischaemic-type, ST changes, troponin rise</td><td>STEMI — often reaches CMR via the MINOCA pathway</td></tr>
    <tr><td><strong>2. Heart failure</strong></td><td>New LV dysfunction, often 1–3 months of subacute symptoms</td><td>DCM — separated by CMR oedema + LGE</td></tr>
    <tr><td><strong>3. Arrhythmia</strong></td><td>New VT, frequent ectopy, <strong>new AV block in someone young</strong></td><td>Idiopathic VT, channelopathy — but AVB under 60 means sarcoid/giant cell</td></tr>
    <tr><td><strong>4. Cardiogenic shock</strong></td><td>Rapid deterioration, support needed within hours</td><td>Massive PE, ACS with mechanical complication, Takotsubo</td></tr>
  </table></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">CMR, biopsy &amp; the four histologies</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="info-box blue"><span class="info-box-icon">💡</span><div><strong>Lake Louise 2 criteria</strong> — CMR is diagnostic when you have <strong>at least one T2-based marker (oedema)</strong> <em>plus</em> <strong>at least one T1-based marker (injury: native T1, ECV, or LGE)</strong>. Both are needed for specificity. Ask explicitly for a myocarditis protocol.</div></div>
<p><strong>Timing matters:</strong> a negative CMR does not exclude myocarditis if imaging is done within 72 h of symptom onset or beyond 4 weeks — the oedema signal is time-limited.</p>
<h4>EMB — targeted, not routine (Class I C)</h4>
<ul>
  <li>High-risk myocarditis and/or haemodynamic instability</li>
  <li>Intermediate-risk failing to respond to conventional therapy</li>
  <li>Purpose: identify the histological subtype, which <em>determines</em> whether immunosuppression helps</li>
</ul>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Histology</th><th>Hallmark</th><th>Implication</th></tr>
  <tr><td>Lymphocytic</td><td>CD3+ T cells ≥7/mm², often virus-positive</td><td>Commonest. Supportive if uncomplicated. Immunosuppression benefits <strong>virus-negative</strong> chronic inflammatory cardiomyopathy (TIMIC)</td></tr>
  <tr><td><strong>Eosinophilic</strong></td><td>Eosinophil infiltrate + necrosis</td><td>Steroids first-line. <strong>25% have no peripheral eosinophilia</strong>. Up to 22% mortality</td></tr>
  <tr><td><strong>Giant cell</strong></td><td>Multinucleated giant cells, no granulomas</td><td><strong>85% death or transplant at 3 years untreated.</strong> Combined immunosuppression is Class I. ICD for 50% 5-y VT/VF risk</td></tr>
  <tr><td>Sarcoidosis</td><td>Non-caseating granulomas</td><td>Steroids + steroid-sparing agent. Pacing for AVB</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">ICI myocarditis — the emerging emergency</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="info-box red"><span class="info-box-icon">🚨</span><div>Affects <strong>~1%</strong> of checkpoint-inhibitor patients, typically within the first weeks (median 30 days). <strong>Mortality up to 50%</strong> without prompt treatment. Combination therapy (ipilimumab + nivolumab) carries the highest risk. Often <strong>arrhythmogenic before it is heart-failing</strong> — a modest troponin rise deserves urgent attention. Screen for coexistent myositis and respiratory muscle weakness, which worsen prognosis.</div></div>
<ul>
  <li><strong>Diagnostic triage within 24 hours</strong> of suspicion (Class I C).</li>
  <li><strong>Stop the ICI and start high-dose corticosteroids immediately</strong> (Class I C).</li>
  <li>Coexisting coronary disease in an older patient does not stop the workup — ICI myocarditis and ACS can occur together.</li>
</ul>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Line</th><th>Regimen</th></tr>
  <tr><td>1st — non-severe</td><td>IV methylprednisolone 500–1000 mg/day ×3 days, then oral taper</td></tr>
  <tr><td>1st — severe</td><td>IV methylprednisolone <strong>7–14 mg/kg/day</strong> ×3 days, then 1 mg/kg/day</td></tr>
  <tr><td>2nd (no response 24–48 h)</td><td>Mycophenolate · anti-thymocyte globulin · abatacept · alemtuzumab</td></tr>
  <tr><td>3rd</td><td>Infliximab or adalimumab · rituximab</td></tr>
  <tr><td>Emerging</td><td>Abatacept + ruxolitinib with respiratory muscle screening — improved survival (Salem 2023)</td></tr>
</table></div>
<p class="text-sm text-muted">Individual cardio-oncology services often have their own protocol — <strong>check yours before you're on-call for it</strong>. Rechallenge after recovery is possible but is never a solo decision.</p>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Giant cell, eosinophilic &amp; therapy by stage</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<h4>Giant cell myocarditis</h4>
<ul>
  <li>Suspect: new HF with a <strong>treatment-resistant course</strong>, ventricular arrhythmia, or high-grade AV block, age 16–69.</li>
  <li><strong>25% of "idiopathic" AV block under 55 is giant cell or sarcoid on biopsy.</strong></li>
  <li>EMB sensitivity 68% first pass, ~93% with three attempts. <strong>Do it within 1–2 weeks of onset.</strong></li>
  <li>Combined immunosuppression (ciclosporin + steroids ± azathioprine/MMF) is Class I. ICD for the 50% 5-year VT/VF risk. Transplant outcomes match other aetiologies.</li>
</ul>
<h4>Eosinophilic myocarditis</h4>
<ul>
  <li>Often fulminant: abrupt LVEF fall, arrhythmia, <strong>endocavitary thrombi (12%)</strong>. Loeffler pattern on echo.</li>
  <li><strong>A normal FBC does not exclude it</strong> — a quarter have no peripheral eosinophilia.</li>
  <li>Screen for: drug hypersensitivity (especially DRESS), EGPA, hypereosinophilic syndrome, parasites, malignancy.</li>
  <li>IV steroids first-line; withdraw the offending drug; <strong>anticoagulate in the acute phase</strong>. Specific therapy: mepolizumab in EGPA, imatinib in PDGFRA-HES.</li>
</ul>
<h4>Therapy by severity</h4>
<div class="table-wrap"><table class="guide-table">
  <tr><th>Category</th><th>Management</th></tr>
  <tr><td>Uncomplicated</td><td>Rest, symptom control, colchicine for a myopericarditis component. <strong>Avoid NSAIDs with significant myocardial involvement.</strong> Follow-up CMR at 3–6 months</td></tr>
  <tr><td>Complicated</td><td>Full HFrEF therapy. Treat arrhythmia by substrate; consider ICD after the acute phase. Pacing for AVB — low threshold in giant cell/sarcoid. <strong>EMB if not improving in 1–2 weeks</strong></td></tr>
  <tr><td>Fulminant</td><td>Mechanical support (IABP, Impella, VA-ECMO) with early tertiary transfer. Urgent EMB once stabilised. Early transplant workup if refractory</td></tr>
</table></div>
<div class="info-box green"><span class="info-box-icon">📈</span><div><strong>Fulminant lymphocytic myocarditis has surprisingly good long-term recovery if bridged through the acute phase.</strong> Do not withdraw support prematurely. (Empirical steroids pending biopsy remains genuinely non-consensus — practice varies by centre.)</div></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Special situations &amp; return to exercise</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Scenario</th><th>Key points</th></tr>
  <tr><td>COVID-19</td><td>Direct SARS-CoV-2 myocarditis is proven but uncommon. A troponin rise more often reflects sepsis-related injury or type-2 MI. Most CMR changes resolve</td></tr>
  <tr><td>mRNA vaccine myocarditis</td><td>Predominantly young males, within days of the second dose. Usually mild and self-limiting; CMR changes typically resolve by 6–12 months</td></tr>
  <tr><td>Chagas</td><td>Latin American origin. RBBB with left anterior fascicular block, apical aneurysm, VT. Benznidazole doesn't reverse advanced disease (BENEFIT)</td></tr>
  <tr><td>Lyme carditis</td><td>Endemic exposure + high-grade AV block. Doxycycline or ceftriaxone; temporary pacing while treated — <strong>permanent pacing rarely needed</strong></td></tr>
  <tr><td>Peripartum overlap</td><td>Late pregnancy or early postpartum LV dysfunction. Bromocriptine considered; anticoagulate if LVEF &lt;35%</td></tr>
</table></div>
<h4>Return to exercise</h4>
<ul>
  <li><strong>3–6 months restriction in all confirmed myocarditis, regardless of LVEF</strong> (Class I).</li>
  <li>Re-evaluate with symptoms, ECG, troponin, CRP, echo, 48-h Holter, exercise test, and CMR.</li>
  <li><span class="pill pill-green">Green</span> asymptomatic, normal LVEF, no arrhythmia, no active inflammation, normal exercise test.</li>
  <li><span class="pill pill-amber">Amber</span> persistent LGE with normal function — individualise; recreational exercise usually permitted.</li>
  <li><span class="pill pill-red">Red</span> <strong>LGE &gt;20% of LV mass</strong>, persistent dysfunction, or exercise-induced arrhythmia — avoid moderate/high intensity.</li>
</ul>
<div class="info-box amber"><span class="info-box-icon">⚠️</span><div><strong>The athlete pushing for early return is the commonest cause of recurrence.</strong> Be firm, explain the reasoning, and document the conversation. Exercise restriction is often the single intervention that most changes the outcome.</div></div>
</div></div>`,

'gl-sport': `
<div class="section-title">Sports Cardiology</div>
<div class="section-subtitle">ESC 2020 · Is this a lethal condition or a training adaptation?</div>
<div class="gl-source-bar"><strong>Source:</strong> <a href="https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Sports-Cardiology-and-Exercise" target="_blank" class="gl-link">ESC Sports Cardiology 2020 ↗</a></div>

<div class="oncall-box">
  <div class="oncall-box-title">⚡ Red flags in an athlete</div>
  <ul>
    <li><strong>Syncope <em>during</em> exertion</strong> (not immediately after) — always needs a workup.</li>
    <li><strong>Chest pain on exertion</strong> — CAD, anomalous coronary, HCM with obstruction, myocarditis.</li>
    <li><strong>Lateral T-wave inversion</strong> (I, aVL, V5–V6) is <em>never</em> a training adaptation.</li>
    <li>Family history of sudden death under 40 → ECG, echo and genetic counselling for all first-degree relatives.</li>
    <li>Unexplained drop in performance in a previously fit athlete — think myocarditis.</li>
  </ul>
</div>

<div class="key-numbers">
  <div class="key-numbers-title">Key Numbers</div>
  <div class="kn-grid">
    <div class="kn-item"><div class="kn-val">150 min</div><div class="kn-desc">Weekly moderate exercise (or 75 vigorous)</div></div>
    <div class="kn-item"><div class="kn-val">≤13 mm</div><div class="kn-desc">Upper limit LV wall in male athletes</div></div>
    <div class="kn-item"><div class="kn-val">10%</div><div class="kn-desc">Survival lost per minute without defibrillation</div></div>
    <div class="kn-item"><div class="kn-val">3–6 mo</div><div class="kn-desc">Restriction after myocarditis</div></div>
    <div class="kn-item"><div class="kn-val">3 months</div><div class="kn-desc">Athletes after pericarditis (6 if myopericarditis)</div></div>
    <div class="kn-item"><div class="kn-val">≥3 months</div><div class="kn-desc">Before return after ACS</div></div>
    <div class="kn-item"><div class="kn-val">&lt;2 in 10 s</div><div class="kn-desc">PVC burden likely benign</div></div>
  </div>
</div>

<div class="card">
  <div class="card-title">Athlete's heart vs pathology</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Feature</th><th>Benign adaptation</th><th>Concerning</th></tr>
    <tr><td>LV wall thickness</td><td>≤13 mm men, ≤11 mm women</td><td><strong>&gt;15 mm</strong> (&gt;13 mm women) → HCM</td></tr>
    <tr><td>LV cavity</td><td>Mildly dilated, function preserved or enhanced</td><td>Dilated <em>with reduced function</em> → DCM</td></tr>
    <tr><td>Diastolic function</td><td>Normal or supranormal</td><td>Abnormal relaxation, high filling pressures</td></tr>
    <tr><td>Detraining</td><td><strong>Changes regress within weeks</strong></td><td>No regression → pathology</td></tr>
    <tr><td>ECG</td><td>Sinus bradycardia, 1° AVB, Mobitz I, incomplete RBBB, early repolarisation, isolated LVH voltage</td><td><strong>T-wave inversion (especially lateral)</strong>, pathological Q waves, complete LBBB, long/short QT, Brugada pattern, ≥2 PVCs on a 10-second ECG</td></tr>
  </table></div>
  <p class="text-sm text-muted">Use the <strong>International Recommendations for ECG Interpretation in Athletes (2017)</strong> — not standard adult criteria.</p>
</div>

<div class="card">
  <div class="card-title">Sudden cardiac arrest in sport</div>
  <div class="table-wrap"><table class="guide-table">
    <tr><th>Age</th><th>Causes</th></tr>
    <tr><td><strong>Under 35</strong></td><td>HCM · ARVC · <strong>anomalous coronary origin</strong> · myocarditis · CPVT · long/short QT · Brugada · WPW with AF · commotio cordis</td></tr>
    <tr><td><strong>35 and over</strong></td><td><strong>Coronary artery disease dominates</strong> — plaque rupture during exertion</td></tr>
  </table></div>
  <div class="info-box red"><span class="info-box-icon">🚨</span><div><strong>Every minute without defibrillation costs ~10% survival.</strong> Public-access AEDs at sporting venues save lives. After resuscitation: ECG, troponin, echo, coronary imaging, CMR for scar, and genetic counselling.</div></div>
</div>

<div class="deep-dive-header">Deep dive</div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Return to exercise by condition</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<div class="table-wrap"><table class="guide-table">
  <tr><th>Condition</th><th>Guidance</th></tr>
  <tr><td>Acute coronary syndrome</td><td>Wait ≥3 months and risk stratify. Low-risk → all sports. Avoid high-intensity competition if residual ischaemia, LVEF &lt;40%, or exercise-induced arrhythmia</td></tr>
  <tr><td>Post-PCI</td><td>Low intensity within days; higher intensity at 2–4 weeks; competitive sport at 3 months with normal exercise test and LV function</td></tr>
  <tr><td><strong>Myocarditis</strong></td><td><strong>≥3–6 months regardless of LVEF</strong> (Class I). Re-evaluate with troponin, CRP, echo, Holter, exercise test, CMR. Extensive LGE (&gt;20%) or persistent dysfunction → avoid moderate/high intensity</td></tr>
  <tr><td>Pericarditis</td><td>Until symptoms resolve, CRP normalises, ECG/echo settle. Non-athletes 1 month; <strong>athletes minimum 3 months, 6 if myopericarditis</strong></td></tr>
  <tr><td>Post-COVID</td><td>Uncomplicated → gradual return after symptoms resolve. Chest pain, dyspnoea or palpitations → ECG, troponin, echo; CMR if abnormal</td></tr>
  <tr><td>HCM</td><td>Risk stratify, then <strong>shared decision-making</strong>. Most can exercise recreationally; competitive sport restrictions are evolving (LIVE-HCM)</td></tr>
  <tr><td>Long QT</td><td>LQT1 — no unsupervised swimming. LQT2 — avoid auditory triggers. Beta-blocker</td></tr>
  <tr><td>WPW</td><td>Symptomatic, or pre-excited AF on exercise testing → <strong>ablate before competitive sport</strong></td></tr>
  <tr><td>Heart failure</td><td>Regular moderate aerobic exercise is <strong>recommended</strong> (Class I) — improves outcomes and quality of life</td></tr>
  <tr><td>Valve disease</td><td>Severe AS — no competitive sport. Moderate AS — low intensity only. Severe AR with LV dilatation — restricted</td></tr>
</table></div>
</div></div>

<div class="dd"><div class="dd-head" onclick="toggleDD(this)"><span class="dd-title">Prescribing exercise &amp; pearls</span><span class="dd-chevron">▼</span></div><div class="dd-body">
<ul>
  <li><strong>All patients with cardiovascular disease benefit from regular moderate exercise</strong> (Class I) — it reduces both CV and all-cause mortality.</li>
  <li><strong>Prescription:</strong> 150 min/week moderate (50–70% max HR) <em>or</em> 75 min/week vigorous, plus resistance training 2–3 days/week.</li>
  <li>Formal cardiac rehabilitation after ACS or revascularisation is <strong>Class I A</strong>.</li>
  <li>The absolute risk of an exercise-induced cardiac event is very low; long-term benefit vastly outweighs it.</li>
</ul>
<h4>Pearls</h4>
<ul>
  <li><strong>Sinus bradycardia as low as 30 bpm</strong> in a highly conditioned athlete with a normal exercise heart-rate response is typically benign.</li>
  <li><strong>Lateral T-wave inversion is always abnormal in an athlete</strong> — investigate for cardiomyopathy.</li>
  <li>Incomplete RBBB and isolated voltage criteria for LVH are ordinary training adaptations.</li>
  <li>PVCs that <strong>disappear</strong> on exercise in a structurally normal heart are likely benign; those that are complex, polymorphic, or <strong>worsen</strong> with exercise need an ARVC and myocarditis workup.</li>
  <li><strong>Shared decision-making has replaced blanket disqualification</strong> — this is the biggest shift in the 2020 guideline.</li>
  <li>Exercise prescription in chronic disease: start low, go slow. Most patients achieve more than you'd expect if built up gradually.</li>
</ul>
</div></div>`,

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
    <tr><td><a href="https://logbook.bjca.tv/" target="_blank">BJCA Logbook</a></td><td>Track procedures (echo, angiography, pacing) and cases against the curriculum in one place</td><td>Free (BJCA member)</td></tr>
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
