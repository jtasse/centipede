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
    headline: "A narrow ditch against the concrete. First afternoon is the hard one.",
    time: "A couple of hours the first time · then ~20 minutes",
    cadence: "2–3 recuts from spring through fall — not every two weeks",
    chemicals: false,
    permanence: "season",
    effort: "medium",
    bestFor: "Anyone who wants to stop the two-week cycle without spraying",
    why: "Runners grow on the soil surface. You cut a narrow ditch right against the sidewalk: about 3–4 inches deep and 2–3 inches wide, shaped like a V so one wall is the concrete itself. When a runner hits that open air, it stops instead of walking onto the slab. A string trimmer never makes that gap — it only shears the leaves. This is a real afternoon with a cheap hand edger, not a product. It is not permanent. Grass and weather slump the gap shut, so you recut the same line two or three times from spring through fall.",
    steps: [
      "Wait until the soil is soft after a rain. Dry clay will fight you and crumble the edge.",
      "Use a half-moon edger (manual, about $20–40) or a wheeled steel-blade edger, not a string trimmer. Walk the hardscape and cut a vertical face flush with the concrete.",
      "Carve the soil away from that face into a shallow V, 3–4 inches deep and 2–3 inches wide. You should see a clean concrete sidewall.",
      "Pull the severed runners off the slab and out of the trench. Most of them were just sitting on the concrete. A few may try to take in a joint or a film of soil.",
      "Recut the same line two or three times between April and September — about 20 minutes a pass, not every two weeks. The first cut is the hard one.",
    ],
    watchouts: [
      "A shallow scrape is not a trench. If you can still see runners bridging the gap, go deeper.",
      "Do not fill the trench with mulch or gravel. That becomes a rooting bed.",
      "Keep the lawn side at mowing height so the mower deck does not scalp the new lip.",
      "This is not a forever fix. You still glance at it. Runners can bridge a gap that has slumped shut.",
    ],
    tools: [
      "Half-moon edger (~$20–40) or wheeled steel-blade edger",
      "Flat shovel or soil knife",
      "Bucket for pulled runners",
      "Gloves",
    ],
  },
  {
    id: "wipe",
    number: "02",
    name: "Paint the runners on the slab",
    headline:
      "Optional: dab glyphosate with a sponge or roller — not a mist. A rake will not finish the pickup.",
    time: "10–20 minutes to paint — then you may still pick",
    cadence: "Only if you want it. Monthly in peak summer if you do.",
    chemicals: true,
    permanence: "season",
    effort: "low",
    bestFor: "Stopping live runners on the slab from getting longer — not as a substitute for pulling",
    why: "A wipe is not a brand and not a special tool. Put glyphosate — Roundup or a generic — on a sponge, a wick bottle, or a small foam roller, then dab it onto the grass already sitting on the sidewalk. You are wetting the runners by contact, like painting a fence, not spraying a mist into the air. Do not expect a rake to finish the job. Dead centipede on broom-finished concrete often still clings. Nodes that pressed into texture, an expansion joint, or a film of soil do not always come off in one pass. A rake or blower helps with the loose thatch. The stuck ones are still a pick-off. Glyphosate does not unglue them. If Saturday is already walk-the-slab-and-pull, wiping first may only save the ones that bleach and let go — not the majority. Modest remaining reasons, none of them a slam dunk: a killed runner stops lengthening while a live one still attached to the lawn keeps going; the chemical can move a short way back along a connected runner (stay off the living edge); dead tissue is sometimes more brittle. Joint-rooted plants are extra-annoying when they happen. They are not most of the mess. If pulling is the bottleneck, skip the chemical on the slab and spend the time on a V-trench, a 6-inch growth-regulator strip, or a raised mow strip. The wipe is optional. Stopping the flood is the main trick.",
    steps: [
      "Mow or trim so you can see the line where lawn meets concrete.",
      "Use a ready-to-use glyphosate product, or mix a concentrate exactly as that product’s label directs. Do not improvise a stronger mix.",
      "Load a sponge-on-a-stick, wick applicator, or 4-inch foam roller. You want the chemical on the grass, not floating in the air.",
      "Dab only runners and blades that are on the sidewalk or driveway. Stay 1–2 inches off living turf.",
      "Keep people and pets off the treated slab until it is dry. Wait a few days. Rake, sweep, or blow the loose thatch. Plan to pick the ones that still cling — that is normal, not a failed wipe.",
    ],
    watchouts: [
      "A pump sprayer along the lawn edge will brown a ribbon of turf. Glyphosate is systemic: even a cardboard shield cannot stop chemical that has already entered a runner still attached to the lawn. Keep the sponge on the slab.",
      "Centipede is sensitive. Drift onto the lawn is how a tidy edge becomes a dead strip.",
      "A rake is not a magic cleanup. Broom-finished concrete holds dead runners. Expect a pick-off for the stuck ones.",
      "Read the current label for rainfast times, mix rates, and personal protective equipment. This page is not a substitute for the label.",
    ],
    tools: [
      "Glyphosate product labeled for this use",
      "Sponge bottle, wick wand, or small foam roller",
      "Gloves and eye protection as the label requires",
      "Rake or blower for loose thatch, plus a bucket for the stuck ones",
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
      "Trim or trench the edge to the line you actually want. A growth regulator does not remove grass that is already on the concrete — pull it, or dab glyphosate on those runners with a sponge if you want to stop them lengthening.",
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
      "This is a professional-style product. If you cannot follow the label’s sprayer calibration, hire a lawn service to spray the 6-inch strip, or use the trench instead.",
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
    headline: "A hard ribbon you mow on. A weekend for the stretches you see every day.",
    time: "A weekend for a driveway apron or front walk",
    cadence: "A few minutes a season after it is in",
    chemicals: false,
    permanence: "years",
    effort: "high",
    bestFor: "The stretches you are tired of forever — driveway apron, front walk",
    why: "A raised mow strip is a hard ribbon 4–6 inches wide whose top sits 1–2 inches above the grass. You mow with one mower wheel on it. Runners face a small cliff instead of a flush sidewalk they can walk onto. Steel landscape edging (the tall kind, staked so it sticks up), a brick or paver soldier course, or a poured concrete ribbon all count. Thin plastic edging installed flush with the soil does not — it gets buried by midsummer. Leave a finger-width air gap or a maintained V against the old slab. A flush joint is a bridge. Do not use loose gravel; runners root in it.",
    steps: [
      "Kill or peel back a 6–8 inch ribbon of turf along the hardscape. Let it die or sod-cut it out.",
      "Pick a material: tall steel edging staked above the grass, brick or pavers on a compacted base, or a poured concrete ribbon with form boards.",
      "Set the top 1–2 inches above the finished lawn height, 4–6 inches wide, so one mower wheel can roll on it.",
      "Keep a finger-width air gap between the new strip and the old concrete, or cut a V on the lawn side. A flush joint is a bridge.",
      "Backfill and compact. Do not leave a soil ramp the runners can walk up.",
      "Mow with one wheel on the strip. Pick anything that still tries to climb, or dab it if you want to stop it lengthening.",
    ],
    watchouts: [
      "Loose gravel next to the lawn is a trap. Runners root in it and you will be weeding rock instead of grass.",
      "Thin plastic edging installed flush with the soil is usually overgrown by midsummer. That is not a raised mow strip.",
      "Do not bury landscape fabric as your only barrier. Runners travel on top of it.",
      "If steel sits too low, runners climb it. The top has to stay above the grass.",
    ],
    tools: [
      "Steel landscape edging (tall/commercial), brick or pavers, or bagged concrete",
      "Sod cutter or flat shovel",
      "Level, stakes, and a rubber mallet",
      "Compacted base material for brick or concrete",
      "Form boards if you pour a ribbon",
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
    blurb: "Cut a real trench so the lawn cannot walk right back. Painting the slab is optional cleanup.",
    recommended: ["trench", "wipe"],
    firstMove:
      "Cut the V-trench as soon as the soil is soft — that is what stops the next wave. If you still want to paint the runners already on the slab, a sponge or roller will stop them from lengthening, but do not expect a rake to finish the pick-off.",
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
    blurb: "Spray a 6-inch growth-regulator strip so fewer runners ever reach the slab.",
    recommended: ["pgr", "wipe"],
    firstMove:
      "Trim to the line you want, then spray a 6-inch ribbon of growth regulator on the grass along the concrete — not on the slab. Plan on 8–12 weeks, then another pass. Keep a bucket for the few runners that still hop the slab in July and August. A sponge is optional; pulling, or a rake plus a pick, is still the Saturday job if they made it onto the concrete.",
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
    body: "A blade cut makes a pretty line for a few days. Centipede does not need a gap in the blades. It needs a gap in the soil. Runners hop a shallow cut the way a vine hops a fence.",
  },
  {
    title: "A string trimmer shears leaves, not runners",
    body: "The growing points sit at the nodes on those surface runners. Whacking the green off the slab harvests this week’s crop. The lawn is still attached and still sending more. The ones in an expansion joint that actually root are extra-annoying when they happen — they are not most of what you are picking.",
  },
  {
    title: "Hand pulling works — that is the trap",
    body: "You can win any given Saturday. In the Southeast, peak elongation from June through August puts the same work back on the calendar in about two weeks. You are not bad at this. The interval is the problem, and the problem is volume: how many runners the lawn sends onto the hardscape.",
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
    body: "Pull what’s already on the concrete, or dab it if you want. Recut the trench if spring rains slumped it.",
  },
  {
    id: 6,
    name: "Jun",
    title: "Peak season starts",
    body: "This is where the two-week cycle begins. A maintained trench and a 6-inch growth-regulator strip beat heroic pulling. If April was the first growth-regulator pass, the 8–12 week reapply window is opening. A sponge pass on the slab is optional — you may still pick the stuck ones.",
  },
  {
    id: 7,
    name: "Jul",
    title: "Peak",
    body: "Heat plus moisture equals runner speed. Do not add nitrogen. Keep the air gap open.",
  },
  {
    id: 8,
    name: "Aug",
    title: "Still peak",
    body: "If you are exhausted, you are on schedule for untreated centipede. Recut the trench now. Spray a 6-inch growth-regulator strip if the grass is not drought-stressed. Painting the slab is optional cleanup.",
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
    body: "One last trench. Rake or pick dead thatch off the slab so winter does not glue it down.",
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
    body: "Centipede wants about 1 pound of nitrogen per 1,000 square feet per year, often less on older lawns. Extra N makes runners ride above the soil. Those elevated runners are exactly what walk onto concrete.",
  },
  {
    title: "Yellow is often iron, not hunger",
    body: "Centipede chlorosis is common on alkaline or over-limed soil. Chelated iron darkens the lawn without the flush of runners that nitrogen brings.",
  },
  {
    title: "Water the lawn, not the slab",
    body: "A rotor that soaks the driveway keeps edge runners alive. Shift heads so the last 6 inches of turf are the wet edge, not the concrete.",
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
      "Into the runners you paint on the slab. Also not a pavement residual.",
  },
  {
    label: "How long it lasts",
    regulator:
      "About 8–12 weeks in the plant. Reapply 2–3 times from green-up through early fall.",
    glyphosate:
      "Kills what you dab on the concrete. Does not slow the lawn behind the edge.",
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
  "Do not use a gravel ribbon as the only barrier. Runners root in gravel and you will be weeding rock.",
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
