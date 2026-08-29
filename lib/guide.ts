export type MethodId = "trench" | "wipe" | "pgr" | "strip"

export type GoalId = "this-weekend" | "no-chem" | "least-work" | "permanent"

export type Method = {
  id: MethodId
  number: string
  name: string
  headline: string
  time: string
  cadence: string
  chemicals: boolean
  permanence: "season" | "years"
  effort: "low" | "medium" | "high"
  bestFor: string
  why: string
  steps: string[]
  watchouts: string[]
  tools: string[]
}

export const methods: Method[] = [
  {
    id: "trench",
    number: "01",
    name: "Cut a V-trench",
    headline: "Give the stolons an air gap they cannot cross.",
    time: "2–3 hours the first time, then about 20 minutes",
    cadence: "2–3 times per growing season",
    chemicals: false,
    permanence: "season",
    effort: "medium",
    bestFor: "Anyone who wants to stop the two-week cycle without spraying",
    why: "Centipede spreads on the surface. A 3–4 inch V-cut against the concrete severs the runners and leaves a gap of bare soil. When a stolon hits air, it stops. A string trimmer never makes that gap — it only shears the leaves, so the same runners crawl back in days.",
    steps: [
      "Wait until the soil is soft after a rain. Dry clay will fight you and crumble the edge.",
      "Use a half-moon edger or a wheeled blade edger, not a string trimmer. Walk the hardscape and cut a vertical face flush with the concrete.",
      "Carve the soil away from that face into a shallow V, 3–4 inches deep and 2–3 inches wide. You should see a clean concrete sidewall.",
      "Pull the severed stolons off the slab and out of the trench. Nodes left on concrete will root again.",
      "Recut the same line two or three times between April and September. The first cut is the hard one. Maintenance is a short walk with the edger.",
    ],
    watchouts: [
      "A shallow scrape is not a trench. If you can still see stolons bridging the gap, go deeper.",
      "Do not fill the trench with mulch or gravel. That becomes a rooting bed.",
      "Keep the lawn side at mowing height so the mower deck does not scalp the new lip.",
    ],
    tools: [
      "Half-moon edger or wheeled steel-blade edger",
      "Flat shovel or soil knife",
      "Bucket for pulled runners",
      "Gloves",
    ],
  },
  {
    id: "wipe",
    number: "02",
    name: "Wipe the slab, don’t spray the lawn",
    headline: "Kill only the grass that is already on the concrete.",
    time: "10–20 minutes",
    cadence: "Monthly in peak summer, then as needed",
    chemicals: true,
    permanence: "season",
    effort: "low",
    bestFor: "Fastest relief when the sidewalk is already covered",
    why: "Hand-pulling works, which is why you have been doing it, but you are racing summer elongation. A glyphosate wipe on a sponge, wick bottle, or small paint roller hits the same stolons in minutes. You are not wiping so yellow grass is nicer to pull. You are killing the nodes so they stop rooting in the joints. After they bleach, a rake takes the thatch in one pass. Live stolons fight, snap, and leave nodes behind.",
    steps: [
      "Mow or trim so you can see the line where lawn meets concrete.",
      "Use a ready-to-use glyphosate product, or mix a concentrate exactly as that product’s label directs. Do not improvise a stronger mix.",
      "Load a sponge-on-a-stick, wick applicator, or 4-inch foam roller. You want contact, not mist.",
      "Wipe only runners and blades that are on the sidewalk or driveway. Stay 1–2 inches off living turf.",
      "Keep people and pets off the treated slab until it is dry. Wait a few days. Do not kneel and tease them while they are still green — let them yellow, then rake, sweep, or blow the thatch so leftover nodes are not still alive in the joint.",
    ],
    watchouts: [
      "A pump sprayer along the lawn edge will brown a ribbon of turf. Glyphosate is systemic: even a cardboard shield cannot stop chemical that has already entered a stolon still attached to the lawn. Keep the wipe on the slab.",
      "Centipede is sensitive. Drift onto the lawn is how a tidy edge becomes a dead strip.",
      "Read the current label for rainfast times, mix rates, and personal protective equipment. This page is not a substitute for the label.",
    ],
    tools: [
      "Glyphosate product labeled for this use",
      "Sponge bottle, wick wand, or small foam roller",
      "Gloves and eye protection as the label requires",
      "Rake for dead runners",
    ],
  },
  {
    id: "pgr",
    number: "03",
    name: "Slow the edge with a growth regulator",
    headline: "Spray a 6-inch ribbon along the concrete so the grass stops stretching.",
    time: "20 minutes to spray the edge, after a trim",
    cadence: "Every 8–12 weeks while growing · 2–3 times a Southeast season",
    chemicals: true,
    permanence: "season",
    effort: "low",
    bestFor: "Long sidewalks and driveways where trimming is the real chore",
    why: "“Banding” is landscaper shorthand for wetting a 6-inch strip of living turf next to the hardscape — not treating the whole yard, and not coating the sidewalk. Products such as Edgeless (flurprimidol + trinexapac-ethyl) are labeled for that strip on centipedegrass. They are absorbed by leaves, stems, and (for flurprimidol) roots, then block the hormone that makes stems elongate. The grass stays green. It just stops racing over the slab. Rain that washes overspray off the concrete is wasted product, not a chemical barrier. Trim first, then spray the ribbon. Repeat every 8–12 weeks while it is growing — typically two or three times from spring green-up through early fall — and stop at least four weeks before dormancy.",
    steps: [
      "Trim or trench the edge to the line you actually want. A growth regulator does not remove grass that is already on the concrete — that is a glyphosate wipe.",
      "Apply only to actively growing, unstressed centipede. Skip it during drought, disease, or right after sodding. Start after spring green-up, not before.",
      "Spray a 6-inch ribbon of grass along the hardscape with a single-nozzle sprayer, following the product label for centipedegrass rates and calibration. Aim at turf, not the slab.",
      "Keep spray off beds, shrubs, and vegetable gardens. A marking dye helps you see the strip and avoid drift.",
      "Let the leaf dry at least two hours, then irrigate or take rain within 24 hours. Do not mow until after that watering.",
      "Reapply on the label interval, typically 8–12 weeks, as long as the grass is still growing. Last application at least four weeks before dormancy. Do not stack extra passes past the yearly maximum.",
    ],
    watchouts: [
      "It does not linger on the sidewalk. Rain washes overspray off the slab. That is not how the product works.",
      "Homeowner quantities are tiny. Measuring milliliters for a few hundred feet of edge is normal — do not ‘round up’ the concentrate.",
      "Treated turf may look darker for several weeks. That is expected, not damage.",
      "The Edgeless Concentrate yearly maximum is 350 fl oz per acre (8 fl oz per 1,000 sq ft). Do not add extra passes to ‘make it last.’",
      "This is a professional-style product. If you cannot follow the label’s sprayer calibration, hire a lawn service to spray the 6-inch strip, or use the trench and wipe instead.",
    ],
    tools: [
      "Turf growth regulator labeled for a 6-inch edging strip (e.g. Edgeless)",
      "Single-nozzle sprayer you can calibrate",
      "Measuring syringe in milliliters",
      "Optional spray-pattern dye",
    ],
  },
  {
    id: "strip",
    number: "04",
    name: "Build a raised mow strip",
    headline: "One weekend of concrete, brick, or steel. Years of a clean line.",
    time: "A weekend for a typical driveway",
    cadence: "A few minutes a season after it is in",
    chemicals: false,
    permanence: "years",
    effort: "high",
    bestFor: "The stretches you are tired of forever — driveway apron, front walk",
    why: "Flush plastic edging does almost nothing. Centipede stolons climb a 2-inch wall and keep going. A mow strip that sits 1–2 inches above lawn grade, 4–6 inches wide, gives the mower a hard wheel path and the stolons a cliff. Leave a finger-width gap or a maintained V against the old slab so runners still cannot bridge.",
    steps: [
      "Kill or peel back a 6–8 inch ribbon of turf along the hardscape. Let it die or sod-cut it out.",
      "Set steel, brick, or a poured concrete ribbon so the top is 1–2 inches above the finished lawn height.",
      "Keep a small air gap between the new strip and the old concrete, or cut a V on the lawn side. A flush joint is a bridge.",
      "Backfill and compact. Do not leave a soil ramp the stolons can walk up.",
      "Mow with one wheel on the strip. Spot-wipe anything that still tries to climb.",
    ],
    watchouts: [
      "Loose gravel next to the lawn is a trap. Stolons root in it and you will be weeding rock instead of grass.",
      "Thin plastic edging installed flush with the soil is usually overgrown by midsummer.",
      "Do not bury landscape fabric as your only barrier. Stolons travel on top of it.",
    ],
    tools: [
      "Steel landscape edging, brick, or bagged concrete",
      "Sod cutter or flat shovel",
      "Level, stakes, and a rubber mallet",
      "Compacted base material for brick or concrete",
    ],
  },
]

export const goals: {
  id: GoalId
  label: string
  blurb: string
  recommended: MethodId[]
  firstMove: string
}[] = [
  {
    id: "this-weekend",
    label: "I need the sidewalk back this weekend",
    blurb: "Wipe what is on the slab, then cut a real trench so it cannot walk right back.",
    recommended: ["wipe", "trench"],
    firstMove:
      "Do the wipe today. Cut the V-trench as soon as the soil is soft. That pairing ends the two-week panic without waiting on a product shipment.",
  },
  {
    id: "no-chem",
    label: "No chemicals",
    blurb: "A maintained air gap now, a raised strip on the worst stretches later.",
    recommended: ["trench", "strip"],
    firstMove:
      "Trench the whole line after the next rain. Put the mow strip on the driveway apron or front walk — the parts you see every time you park.",
  },
  {
    id: "least-work",
    label: "Least work all summer",
    blurb: "Spray a 6-inch growth-regulator strip, then a monthly wipe for stragglers.",
    recommended: ["pgr", "wipe"],
    firstMove:
      "Trim to the line you want, then spray a 6-inch ribbon of growth regulator on the grass along the concrete — not on the slab. Plan on 8–12 weeks, then another pass. Keep a wick bottle by the garage for the few stolons that still hop the slab in July and August.",
  },
  {
    id: "permanent",
    label: "Fix it so I stop thinking about it",
    blurb: "A raised mow strip on the high-traffic edges, trench everywhere else.",
    recommended: ["strip", "trench"],
    firstMove:
      "Build the strip where you are most tired of kneeling. Keep a V-trench on the long, less-visible runs. You will still glance at it in June, not every other Saturday.",
  },
]

export const failReasons = [
  {
    title: "The edger never finished the job",
    body: "A blade cut makes a pretty line for a few days. Centipede does not need a gap in the blades. It needs a gap in the soil. Stolons hop a shallow cut the way a vine hops a fence.",
  },
  {
    title: "A string trimmer shears leaves, not runners",
    body: "The growing points sit at the nodes on those surface stolons. Whacking the green off the slab leaves the stems in the expansion joint. They root, then sprint.",
  },
  {
    title: "Hand pulling works — that is the trap",
    body: "You can win any given Saturday. In the Southeast, peak elongation from June through August puts the same work back on the calendar in about two weeks. You are not bad at this. The interval is the problem.",
  },
]

export const months = [
  {
    id: 1,
    name: "Jan",
    title: "Dormant",
    body: "Centipede is brown and still. Plan a mow strip. Do not fertilize.",
  },
  {
    id: 2,
    name: "Feb",
    title: "Dormant",
    body: "Order edging, a half-moon tool, or a growth regulator so you are not improvising in May.",
  },
  {
    id: 3,
    name: "Mar",
    title: "Waiting on green-up",
    body: "Install hardscape while the grass is slow. Skip herbicides on dormant turf unless the product label allows it.",
  },
  {
    id: 4,
    name: "Apr",
    title: "First real edge",
    body: "After active growth returns, cut the first V-trench. First of two or three 6-inch growth-regulator passes, only on unstressed, growing turf — spray the grass, not the slab.",
  },
  {
    id: 5,
    name: "May",
    title: "Runners wake up",
    body: "Spot-wipe anything already on concrete. Recut the trench if spring rains slumped it.",
  },
  {
    id: 6,
    name: "Jun",
    title: "Peak season starts",
    body: "This is where the two-week cycle begins. Monthly wipes and a maintained trench beat heroic pulling. If April was the first growth-regulator pass, the 8–12 week reapply window is opening.",
  },
  {
    id: 7,
    name: "Jul",
    title: "Peak",
    body: "Heat plus moisture equals stolon speed. Do not add nitrogen. Keep the air gap open.",
  },
  {
    id: 8,
    name: "Aug",
    title: "Still peak",
    body: "If you are exhausted, you are on schedule for untreated centipede. Wipe and trench now. Spray a 6-inch growth-regulator strip if the grass is not drought-stressed.",
  },
  {
    id: 9,
    name: "Sep",
    title: "Last push",
    body: "Still growing — often the last of two or three growth-regulator passes. That last application must land at least four weeks before dormancy. Final hardscape work is easier in cooler weather.",
  },
  {
    id: 10,
    name: "Oct",
    title: "Slowing",
    body: "One last trench. Rake dead thatch off the slab so winter does not glue it into the joints.",
  },
  {
    id: 11,
    name: "Nov",
    title: "Winding down",
    body: "Southern lawns may still have a little color. Stop forcing growth. Sketch next year’s mow strip.",
  },
  {
    id: 12,
    name: "Dec",
    title: "Rest",
    body: "Leave it. The war is seasonal. Come back in April with a plan, not a trimmer.",
  },
]

export const fertilityNotes = [
  {
    title: "Nitrogen feeds the crawl",
    body: "Centipede wants about 1 pound of nitrogen per 1,000 square feet per year, often less on older lawns. Extra N makes stolons ride above the soil. Those elevated runners are exactly what walk onto concrete.",
  },
  {
    title: "Yellow is often iron, not hunger",
    body: "Centipede chlorosis is common on alkaline or over-limed soil. Chelated iron darkens the lawn without the flush of runners that nitrogen brings.",
  },
  {
    title: "Water the lawn, not the slab",
    body: "A rotor that soaks the driveway keeps edge nodes alive. Shift heads so the last 6 inches of turf are the wet edge, not the concrete.",
  },
]

export const pgrVsGlyphosate = [
  {
    label: "Job",
    regulator: "Slow stretching",
    glyphosate: "Kill the plant",
  },
  {
    label: "How it works",
    regulator:
      "Blocks gibberellin, the hormone that makes cells get longer",
    glyphosate:
      "Blocks an enzyme plants need to make protein; the plant starves",
  },
  {
    label: "What you see",
    regulator: "Still green, often darker, internodes stay short",
    glyphosate: "Yellow in days, then dead thatch",
  },
  {
    label: "Where it belongs on this job",
    regulator: "A 6-inch living ribbon of lawn next to the concrete",
    glyphosate: "Only grass that is already sitting on the slab",
  },
  {
    label: "Where the chemical goes",
    regulator:
      "Into the grass you sprayed. Not a residue coating on the sidewalk.",
    glyphosate:
      "Into the stolons you wipe on the slab. Also not a pavement residual.",
  },
  {
    label: "How long it lasts",
    regulator:
      "About 8–12 weeks in the plant. Reapply 2–3 times from green-up through early fall.",
    glyphosate:
      "Kills what you wipe. Does not slow the lawn behind the edge.",
  },
  {
    label: "Does the lawn stay?",
    regulator: "Yes. You want that edge alive.",
    glyphosate: "No. If it hits the lawn, you own a brown strip.",
  },
]

export const pgrActives = [
  {
    name: "Trinexapac-ethyl",
    also: "Primo Maxx and similar",
    job: "Stops a late step in making gibberellin. The usual whole-turf slowdown chemical on golf courses.",
  },
  {
    name: "Flurprimidol",
    also: "Cutless and the other half of Edgeless",
    job: "Stops an earlier step in the same hormone pathway. Taken up by roots as well as leaves.",
  },
]

export const donts = [
  "Do not use a gravel ribbon as the only barrier. Stolons root in gravel and you will be weeding rock.",
  "Do not install thin plastic edging flush with the soil and walk away. Centipede will be over it by July.",
  "Do not spray glyphosate into the lawn to ‘make a wider edge.’ You will own a brown strip until it fills from behind.",
  "Do not overseed the edge with rye in fall if you are also trying to keep a clean winter line — the rye hides the problem until April.",
]

export const PGR_LOW_OZ_PER_500FT = 0.13
export const PGR_HIGH_OZ_PER_500FT = 0.23
export const ML_PER_FL_OZ = 29.5735
export const TSP_PER_FL_OZ = 6

export function pgrDose(linearFeet: number) {
  const lowOz = (linearFeet / 500) * PGR_LOW_OZ_PER_500FT
  const highOz = (linearFeet / 500) * PGR_HIGH_OZ_PER_500FT
  return {
    lowOz,
    highOz,
    lowMl: lowOz * ML_PER_FL_OZ,
    highMl: highOz * ML_PER_FL_OZ,
    lowTsp: lowOz * TSP_PER_FL_OZ,
    highTsp: highOz * TSP_PER_FL_OZ,
  }
}

export function formatDose(n: number, digits = 2) {
  if (!Number.isFinite(n) || n <= 0) return "—"
  if (n < 0.1) return n.toFixed(3)
  return n.toFixed(digits)
}
