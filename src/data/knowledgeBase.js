// Rule-based troubleshooting reference for the Fresenius 2008T.
// Content structured from field-documented failure patterns, case studies,
// and quick-reference guides. Not a substitute for manufacturer service
// documentation, facility policy, or clinical judgment.

export const knowledgeBase = [
  {
    id: 'low-flow',
    title: 'Low Flow Alarm',
    system: 'Hydraulic / Flow',
    keywords: [
      'low flow', 'flow error', 'flwp', 'flow alarm', 'flow low',
      'dialysate not circulating', 'flow rate low', 'flow drop',
    ],
    quick: {
      likely: 'Air in the dialysate loop (Bibag not seated / incomplete rinse) or restricted acid/bicarb line.',
      checklist: [
        'Check acid & bicarb lines behind the machine — no kinks or pinches.',
        'Confirm Bibag is seated on the port and deflates smoothly (not staying inflated).',
        'Observe FLWP on the TMP/Low Soft screen — normal ~800 mL/min, below 700 mL/min suggests low pressure or air.',
        'If multiple machines are alarming at once, suspect RO supply, not this machine.',
      ],
      action: 'Run an extended rinse (3–5 min). If flow stabilizes, resume treatment. If not, pause and notify Biomed.',
    },
    detail: {
      causes: [
        'Air in dialysate loop — Bibag not fully seated or incomplete rinse.',
        'Kinked or pinched acid/bicarb line.',
        'Bibag vent filter clogged or wet (bag stays inflated/won’t deflate).',
        'Weak RO water pressure or closed loop valve.',
        'UF pump imbalance.',
        'Deaeration pump weak (carbon brush wear, air leak at fittings/O-rings).',
        'Flow pump tubing fatigue or roller wear/slip.',
      ],
      correctiveActions: [
        { issue: 'Air in dialysate loop', action: 'Extended rinse 5–10 min; manually fill hydro chamber if needed.' },
        { issue: 'Bibag vent filter clogged/wet', action: 'Replace Bibag vent filter; tap port to free stuck valve (V105).' },
        { issue: 'Kinked/pinched acid or bicarb line', action: 'Reposition or replace line; check pinch points behind machine.' },
        { issue: 'Weak RO pressure', action: 'Verify RO console reads 18–22 psi. If multiple machines affected, notify Biomed — loop-wide issue.' },
        { issue: 'UF pump imbalance', action: 'Biomed: verify UF synchronization.' },
        { issue: 'Deaeration pump weak', action: 'Biomed: check carbon brush wear and vacuum pull.' },
        { issue: 'Flow pump tubing/roller wear', action: 'Biomed: inspect tubing compression, replace tubing if flattened.' },
      ],
      notes: [
        'Run full rinse cycles before connecting patients.',
        'Replace Bibag filters daily, especially if wet or powder-coated.',
        'Avoid twisting or stretching acid/bicarb lines when rolling machines.',
        'Verify RO pressure each morning at the main RO console.',
      ],
    },
    trainme: {
      why: 'FLWP reflects the combined performance of the RO supply, the deaeration pump, and the flow pump. Air is compressible — if the deaeration pump isn’t pulling a clean vacuum, the flow pump ends up moving a mix of air and fluid, which reads as a false low-flow condition even though the flow pump itself is fine.',
      fieldWisdom: [
        'If it fixes itself after a rinse → suspect air.',
        'If it keeps coming back → suspect deaeration.',
        'If tubing is old or flat → suspect the flow pump.',
      ],
      mistakes: [
        'Replacing the flow pump before ruling out air or deaeration.',
        'Ignoring hydro chamber level.',
        'Calibrating before clearing air from the system.',
        'Assuming a single passed self-test means the issue is resolved.',
      ],
    },
    escalate: 'Alarm repeats after a full rinse, multiple machines alarm at once, or conductivity is also unstable — pause treatment and notify Biomed.',
  },

  {
    id: 'high-flow',
    title: 'High Flow Alarm',
    system: 'Hydraulic / Flow',
    keywords: [
      'high flow', 'excess flow', 'flow too high', 'tmp alarm', 'uf control',
      'pressure difference',
    ],
    quick: {
      likely: 'UF pump overpull or a pressure/TMP control mismatch rather than a true supply issue.',
      checklist: [
        'Confirm UF goal and time programmed match the prescription.',
        'Watch the TMP reading for stability during the alarm.',
        'Check for other alarms occurring alongside it (conductivity, pressure).',
      ],
      action: 'If TMP or UF readings are unstable or don’t match prescription, pause and notify Biomed rather than clearing and continuing repeatedly.',
    },
    detail: {
      causes: [
        'UF pump overpulling relative to programmed goal.',
        'Pressure transducer or sensor drift.',
        'Valve not seating correctly, changing effective flow/pressure balance.',
      ],
      correctiveActions: [
        { issue: 'UF pump overpull', action: 'Verify UF programming; Biomed to check UF pump calibration/synchronization.' },
        { issue: 'Pressure sensor drift', action: 'Biomed: verify pressure transducer readings against known reference.' },
        { issue: 'Valve seating issue', action: 'Biomed: inspect associated valve for proper actuation.' },
      ],
      notes: [
        'High Flow is a TMP/UF-side symptom, distinct from Low Flow — don’t assume the same root cause (air/Bibag) applies.',
      ],
    },
    trainme: {
      why: 'Low Flow usually points to the dialysate delivery path (RO, deaeration, Bibag). High Flow usually points to the UF/TMP control loop — the machine is seeing a pressure or volume relationship it doesn’t expect, not a supply shortage.',
      fieldWisdom: [
        'Don’t chase Bibag or RO causes for a High Flow alarm — check UF programming and TMP first.',
      ],
      mistakes: [
        'Treating every flow alarm as a Bibag/air problem regardless of whether it’s Low or High Flow.',
      ],
    },
    escalate: 'TMP or UF readings stay unstable after verifying programming — pause treatment and notify Biomed.',
  },

  {
    id: 'conductivity-fail',
    title: 'Conductivity Self-Test Fail / Instability',
    system: 'Conductivity',
    keywords: [
      'conductivity', 'conductivity fail', 'conductivity self-test',
      'conductivity unstable', 'conductivity swing', 'mixing', 'ms/cm',
    ],
    quick: {
      likely: 'Air in the system or unstable temperature affecting conductivity compensation — often paired with a flow issue.',
      checklist: [
        'Start/continue a rinse cycle and watch the conductivity value on the main screen.',
        'It should rise steadily to 13.0–14.0 mS/cm.',
        'If it fluctuates instead of stabilizing, suspect air or a wet/blocked Bibag vent filter.',
      ],
      action: 'Allow the rinse cycle to run fully. If conductivity does not stabilize, do not proceed with treatment — pause and notify Biomed.',
    },
    detail: {
      causes: [
        'Air in the dialysate loop (same root causes as Low Flow — Bibag venting, deaeration).',
        'Unstable temperature affecting conductivity compensation.',
        'Incomplete concentrate mixing.',
        'Deaeration pump weak, allowing air to persist through mixing.',
      ],
      correctiveActions: [
        { issue: 'Conductivity fails to stabilize during rinse', action: 'Replace Bibag and inspect vent filter for wetness/blockage.' },
        { issue: 'Fluctuation continues after Bibag replacement', action: 'Inspect for air in the deaeration pump path; do not start treatment until resolved — notify Biomed.' },
        { issue: 'Temperature also unstable', action: 'Cross-check the Temperature/Heat Disinfection entry — the two systems are often linked.' },
      ],
      notes: [
        'Conductivity problems rarely occur in isolation — check Low Flow causes at the same time.',
      ],
    },
    trainme: {
      why: 'Conductivity readings depend on stable flow and complete mixing of acid/bicarb concentrate with water. Anything that disrupts flow (air, weak deaeration) also disrupts conductivity, which is why these alarms cluster together in the field.',
      fieldWisdom: [
        'A conductivity fail that clears after a rinse confirms an air-related cause — no further parts should be swapped.',
      ],
      mistakes: [
        'Treating conductivity fails as an isolated electrical/board issue before ruling out air and flow.',
      ],
    },
    escalate: 'Conductivity does not stabilize after a full rinse cycle — do not begin or resume treatment; Biomed must evaluate the unit first.',
  },

  {
    id: 'bibag-door-error',
    title: 'Bibag: Door Error',
    system: 'Bibag System',
    keywords: [
      'bibag door', 'door error', 'bibag: door error', 'bibag not detected',
      'door sensor', 'bibag door open',
    ],
    quick: {
      likely: 'Door not fully latched, or the microswitch behind the latch isn’t being pressed.',
      checklist: [
        'Visually confirm the gray latch fully presses the microswitch button underneath it.',
        'Manually press the microswitch button — it should click.',
        'Do not force the door — this can damage the hinge or latch tab.',
        'If moisture is present, dry it before retesting.',
      ],
      action: 'If the switch doesn’t click or the latch looks worn/cracked, escalate to a full inspection rather than repeated door cycling.',
    },
    detail: {
      causes: [
        'Door not fully latched — gray latch not pushing the microswitch completely.',
        'Broken or misaligned latch tab — plastic tab worn or cracked.',
        'Faulty microswitch — electrical failure or mechanical sticking.',
        'Loose or corroded harness connection between the door switch and Bibag board.',
        'Bibag interface board input fault (rare logic fault on the control input).',
      ],
      inspection: [
        'Visual check: confirm the latch fully presses the microswitch.',
        'Manual actuation: press the microswitch button — should click.',
        'Continuity test: door open → OL (open loop); door closed → 0Ω.',
        'Inspect the harness connector for corrosion or loose pins.',
        'Jumper test: temporarily short the connector to simulate a closed door.',
        'Input verification: Biomed Mode → Diagnostics → Input Test → confirm toggle between 0 and 1.',
      ],
      correctiveActions: [
        { issue: 'Door latch cracked or worn', action: 'Replace Bibag Door Assembly.' },
        { issue: 'Microswitch defective', action: 'Replace Door Switch.' },
        { issue: 'Corroded harness', action: 'Clean or replace harness.' },
        { issue: 'Bibag board fault', action: 'Replace Bibag Interface Board.' },
      ],
      notes: [
        'The microswitch is behind the latch; the button is visible under the latch.',
        'No click when pressed = mechanical failure, not electrical.',
        'Avoid forcing the door closed — it can damage the hinge or tab.',
      ],
    },
    trainme: {
      why: 'The Bibag door error is a binary sensor fault: the board is not seeing a "closed" signal. That can come from four different failure points along the same signal path — the mechanical latch, the switch itself, the wiring, or (rarely) the board input logic. Working the inspection steps in order isolates which one, instead of guessing.',
      fieldWisdom: [
        'Continuity test first — it instantly tells you mechanical/switch vs. wiring/board.',
        'A jumper test that clears the alarm confirms the switch or latch, not the board.',
      ],
      mistakes: [
        'Replacing the Bibag Door Assembly before confirming the microswitch doesn’t click.',
        'Skipping the harness inspection and jumping straight to board replacement.',
      ],
    },
    escalate: 'Continuity test fails or the input test doesn’t toggle after a confirmed good switch — replace hardware per the corrective action table rather than repeating soft resets.',
  },

  {
    id: 'flow-pump-calibration',
    title: 'Flow Pump Calibration Drift / Failure',
    system: 'Flow Pump',
    keywords: [
      'flow pump', 'calibration fail', 'flow calibration', 'pump calibration',
      'tubing worn', 'roller', 'flow drift',
    ],
    quick: {
      likely: 'Peristaltic tubing fatigue — the most common cause of flow pump drift.',
      checklist: [
        'Inspect tubing for flattening or compression wear.',
        'Watch for unstable flow readings during calibration instead of a stable settle.',
        'Listen for abnormal pump noise (grinding, uneven pitch).',
      ],
      action: 'Clear air from the system first (see Deaeration / Air Issues) — only inspect or replace tubing after air is ruled out.',
    },
    detail: {
      causes: [
        'Tubing wear/fatigue (most common) — flattens over time, reduces delivered flow even at correct RPM.',
        'Roller wear or contamination — flat spots or acid/bicarb residue reduce friction, causing inconsistent flow per rotation.',
        'Air in the line / incomplete prime — pump moves air instead of fluid, falsely lowering calibration volume.',
        'Mechanical drag or binding — stiff bearings or a misaligned pump head change effective RPM-to-flow ratio.',
        'Electrical drift — aging motor or encoder miscounting revolutions (less common, but real if tubing replacement doesn’t fix it).',
      ],
      correctiveActions: [
        { issue: 'Calibration passes one day, fails the next after normal use', action: 'Replace tubing — classic fatigue signature.' },
        { issue: 'Flow fluctuates during calibration instead of stabilizing', action: 'Inspect rollers for flat spots or chemical residue.' },
        { issue: 'Calibration improves after extended rinse/priming', action: 'Air-related — see Deaeration / Air Issues entry, not a pump defect.' },
        { issue: 'Tubing replaced but calibration still fails', action: 'Suspect motor/encoder drift — Biomed to evaluate motor control.' },
      ],
      notes: [
        'Proper order: clear air → observe deaeration behavior → inspect tubing/rollers → calibrate last.',
      ],
    },
    trainme: {
      why: 'Flow pump calibration measures delivered volume per rotation. Anything that changes the effective cross-section of the tubing (wear, residue) or introduces compressible air changes that number without the pump itself being broken — which is why calibration failures are often misdiagnosed as pump failures.',
      fieldWisdom: [
        'If it fixes itself after rinse → air.',
        'If it keeps coming back → deaeration.',
        'If tubing is old or flat → flow pump.',
      ],
      mistakes: [
        'Replacing the flow pump first.',
        'Ignoring hydro chamber level before troubleshooting the pump.',
        'Calibrating before removing air from the system.',
        'Assuming a single passing calibration means the issue is fixed.',
      ],
    },
    escalate: 'Tubing and rollers check out but calibration still fails — treat as a motor/encoder issue and involve Biomed for board-level diagnostics.',
  },

  {
    id: 'deaeration-air',
    title: 'Deaeration Pump / Air Issues',
    system: 'Deaeration',
    keywords: [
      'deaeration', 'air lock', 'airlock', 'hydro chamber', 'air in line',
      'won\'t stay full', 'vacuum', 'priming',
    ],
    quick: {
      likely: 'Weak deaeration pump (carbon brush wear is very common) or an incomplete prime leaving air in the loop.',
      checklist: [
        'Watch whether the hydro chamber stays full or keeps dropping.',
        'Listen for a weak or inconsistent pump motor pitch.',
        'Try an extended rinse (5–10 min) and/or manually fill the hydro chamber.',
      ],
      action: 'If the hydro chamber won’t hold after an extended rinse and manual fill, suspect a genuinely weak deaeration pump — notify Biomed.',
    },
    detail: {
      causes: [
        'Carbon brush wear (very common — deaeration pumps are brushed DC motors; worn brushes drop RPM).',
        'Air leaks at fittings, tubing, or O-rings in the deaeration path — prevents proper vacuum pull.',
        'Internal pump contamination from moisture or chemical vapor.',
        'Low or unstable voltage supply from the PDB, or connector corrosion.',
        'Incomplete priming, especially after a filter or pump service.',
      ],
      inspection: [
        'Extended rinse (5–10 min) — clears air, confirms whether the issue is air-related.',
        'Manually fill hydro chamber — rules out simple air lock.',
        'Listen for pump pitch change — indicates motor or brush wear.',
        'Inspect tubing compression — confirms flow pump is not the actual cause.',
        'Check PDB voltage — rules out an electrical supply cause.',
      ],
      correctiveActions: [
        { issue: 'Passes self-test but causes intermittent low flow/air alarms', action: 'Suspect carbon brush wear — Biomed to inspect/replace brushes.' },
        { issue: 'Hydro chamber won’t stay full or refills slowly', action: 'Check fittings, tubing, and O-rings in the deaeration path for leaks.' },
        { issue: 'Pump runs but feels weak, calibration barely misses spec', action: 'Inspect for internal contamination (moisture/chemical vapor).' },
        { issue: 'Performance varies between machines/outlets', action: 'Check PDB voltage and connector condition.' },
      ],
      notes: [
        'Deaeration problems create air problems downstream — always suspect this system before condemning the flow pump.',
      ],
    },
    trainme: {
      why: 'The deaeration pump removes dissolved and free air to keep a solid water column ahead of the flow pump. The flow pump assumes it’s moving liquid only — if air gets through, the flow pump reads a false low flow, conductivity swings, and calibration fails, even though the flow pump itself is healthy.',
      fieldWisdom: [
        'Air problems mimic flow pump failure.',
        'Deaeration problems create air problems.',
        'If you see flow calibration drifting + conductivity instability + hydro chamber not staying full + intermittent low flow together, suspect the deaeration pump first — not the flow pump.',
      ],
      decisionTree: [
        'Is the hydro chamber full and staying full?',
        '  NO → suspect deaeration or air: run extended rinse (5–10 min), manually fill hydro chamber. If problem returns → deaeration pump weak.',
        '  YES → does flow calibration fail consistently?',
        '    YES → inspect tubing & rollers, replace tubing if worn. Still failing → flow pump motor.',
        '    NO → are alarms intermittent?',
        '      YES → air or deaeration; listen for weak deaeration pump.',
        '      NO → mechanical flow issue.',
      ],
      mistakes: [
        'Replacing the flow pump first.',
        'Ignoring hydro chamber level.',
        'Calibrating before removing air.',
        'Assuming a single pass means it’s fixed.',
      ],
    },
    escalate: 'Hydro chamber won’t hold after rinse + manual fill, or pump pitch sounds consistently weak — Biomed to evaluate deaeration pump/brushes directly.',
  },

  {
    id: 'heat-disinfection-temp',
    title: 'Heat Disinfection / Temperature Won’t Reach Setpoint',
    system: 'Temperature Control',
    keywords: [
      'heat disinfection', 'temperature', 'won\'t heat', 'temp stuck',
      'heater', 'thermistor', 'not reaching temperature', 'triad',
    ],
    quick: {
      likely: 'Heater or temperature-sensing circuit fault — start with heater voltage and thermistor before board swaps.',
      checklist: [
        'Verify heater voltage is present during a disinfection cycle.',
        'Check the thermistor reading is plausible, not stuck at a fixed value.',
        'Confirm no other active alarm is suppressing the heater (e.g. flow/air issues).',
      ],
      action: 'If voltage and thermistor look correct but temperature still plateaus well below setpoint, this is a multi-subsystem case — document each step as you go (see DETAIL).',
    },
    detail: {
      causes: [
        'Heater rod failure.',
        'Thermistor assembly failure or drift.',
        'Triad (heater control component) failure.',
        'Sensor board or power logic board fault.',
        'Balancing chamber cable or related connection issue.',
      ],
      correctiveActions: [
        { issue: 'Heater voltage not present or inconsistent', action: 'Verify wiring and heater rod; replace heater rod if confirmed failed.' },
        { issue: 'Thermistor reading implausible/stuck', action: 'Replace thermistor assembly; perform pre/post temperature sensor calibration.' },
        { issue: 'Heater control not responding correctly', action: 'Inspect/replace triad.' },
        { issue: 'Above checks pass but temperature still won’t climb', action: 'Swap sensor board and power logic board with known-good boards to isolate; verify balancing chamber cable and related components.' },
      ],
      notes: [
        'Case reference (Machine 7367): would not reach heat disinfection temperature beyond ~30°C. Resolved only after systematically verifying heater voltage, then replacing heater rod, thermistor assembly, and triad, then swapping sensor and power logic boards, followed by full temperature calibration.',
      ],
    },
    trainme: {
      why: 'Temperature control on the 2008T depends on the heater, the thermistor feedback loop, and the boards that interpret that feedback. When a machine plateaus well below setpoint, any one of those can be the cause — and manufacturer guidance doesn’t always explain the exact observed behavior, so elimination has to be systematic and documented.',
      fieldWisdom: [
        'Verify before replacing: heater voltage and thermistor plausibility first, board swaps last.',
        'Document every step of a multi-part elimination — the next technician (or you, in six months) needs the trail, not just the final fix.',
      ],
      mistakes: [
        'Jumping straight to a board swap without confirming heater voltage and thermistor first.',
        'Not documenting intermediate steps in a multi-part elimination, making the case unreadable later.',
      ],
    },
    escalate: 'Heater voltage and thermistor check out normal but temperature still won’t climb after initial component replacement — treat as a multi-subsystem case requiring full elimination and calibration verification.',
  },
]

// Shown when no entry scores a confident match.
export const fallbackEntry = {
  id: 'general-workflow',
  title: 'No Confident Match — Core Workflow',
  system: 'General',
  quick: {
    likely: 'The symptom description didn’t match a known failure pattern closely enough for a specific result.',
    checklist: [
      'Verify the reported problem — reproduce it if it’s safe to do so.',
      'Review alarms, self-tests, and debug values on the machine.',
      'Inspect mechanical, electrical, hydraulic, and sensor systems in that order.',
      'Try describing the symptom with the on-screen alarm text or affected system (e.g. "flow", "conductivity", "bibag door", "temperature").',
    ],
    action: 'Re-submit with the exact alarm wording if available, or the system involved (hydraulic, conductivity, temperature, Bibag, pressure, blood leak, control boards).',
  },
  detail: {
    causes: [],
    correctiveActions: [],
    notes: [
      'Common 2008T systems this guide covers: Hydraulic System, Conductivity System, Temperature Control, Pressure System, Blood Leak Detection, Bibag System, Electronic Control Boards.',
    ],
  },
  trainme: {
    why: 'Replace or repair only after confirming evidence — don’t skip straight to parts.',
    fieldWisdom: [
      'Verify → Reproduce → Review alarms/self-tests/debug values → Inspect → Replace/repair only after confirming evidence → Verify repair via calibration and full functional test → Document.',
    ],
    mistakes: [],
  },
  escalate: 'If the machine is alarming and the cause isn’t clear from this workflow, pause treatment and notify Biomed rather than repeating resets.',
}
