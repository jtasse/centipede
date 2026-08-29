import { MowStripDiagram } from "@/components/mow-strip-diagram"

export function WhatIsMowStrip() {
  return (
    <section id="mow-strip" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
              The stop-thinking-about-it job
            </p>
            <h2 className="font-heading text-3xl text-balance sm:text-4xl">
              A raised mow strip is a hard ribbon you put one mower wheel on.
            </h2>
            <p className="leading-7 text-muted-foreground">
              It is a 4–6 inch wide band of steel, brick, or concrete along the
              lawn edge. The top sits 1–2 inches <em>above</em> the grass. You
              mow with one wheel rolling on that ribbon. Runners face a small
              cliff instead of a flush sidewalk they can walk onto.
            </p>
            <p className="leading-7 text-muted-foreground">
              This is a real weekend of digging, not a product you drop in a
              trench. A driveway apron or front walk is a Saturday–Sunday job.
              The whole lot takes longer. Do the stretches you see every time
              you park. Keep a{" "}
              <a href="#v-trench" className="font-medium text-primary hover:underline">
                V-trench
              </a>{" "}
              on the long, less-visible runs if you want.
            </p>
            <p className="leading-7 text-muted-foreground">
              Thin plastic edging pushed flush with the soil is not this. It
              gets buried by midsummer. Loose gravel is not this either —
              runners root in it and you will be weeding rock.
            </p>
          </div>
          <figure className="space-y-3">
            <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
              <MowStripDiagram className="h-auto w-full" />
            </div>
            <figcaption className="px-1 text-sm text-muted-foreground">
              Leave a finger-width air gap — or a maintained V — against the old
              slab. A flush joint is a bridge.
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Steel edging
            </p>
            <h3 className="font-heading mt-2 text-2xl">Cheapest. A day’s install.</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              The tall, commercial kind, staked so it actually sticks up above
              the grass — not the flimsy roll that sits at soil height. Often
              tens of dollars per 10–20 feet of run. Runners can still climb it
              if you set it too low.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Brick or pavers
            </p>
            <h3 className="font-heading mt-2 text-2xl">A soldier course on a firm base</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Stand bricks or pavers on edge along the line. You need a
              compacted base so they do not tip. More money and more digging
              than steel. A clean wheel path when it is done.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Poured concrete
            </p>
            <h3 className="font-heading mt-2 text-2xl">Most permanent. Most work.</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              A narrow ribbon from bagged concrete or a small mix, with form
              boards to hold the shape. This is the “I never want to think about
              this stretch again” option. Cost is bags of mix plus a weekend of
              forming, pouring, and waiting.
            </p>
          </article>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Also need
            </p>
            <h3 className="font-heading mt-2 text-xl">Turf out, base in</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              A sod cutter or a flat shovel to peel a 6–8 inch ribbon of turf.
              A level and stakes. Compactable base for brick or concrete. Form
              boards if you pour. A rubber mallet for steel or brick.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              First weekend
            </p>
            <h3 className="font-heading mt-2 text-xl">Apron or front walk</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Plan a full weekend for the driveway apron or the walk you see
              from the car. The whole lot is a longer project. Do not start on
              dry, packed clay if you can wait for a rain.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Yearly upkeep
            </p>
            <h3 className="font-heading mt-2 text-xl">Mow the line</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              After it is in, you mow with one wheel on the strip. A few minutes
              a season to pick anything that still tries to climb, and to keep
              the finger gap from filling with soil.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Cost ballpark
            </p>
            <h3 className="font-heading mt-2 text-xl">DIY, not a bid</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Steel: tens of dollars per 10–20 feet. Brick or pavers: more,
              plus base. Poured ribbon: bags of concrete and time. These are
              order-of-magnitude ranges, not a shopping list.
            </p>
          </article>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10">
          <div className="hidden border-b border-border bg-muted/60 px-5 py-3 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:grid sm:grid-cols-3">
            <span>Watch this</span>
            <span>Why it matters</span>
            <span>What to do instead</span>
          </div>
          <dl>
            {[
              {
                label: "Flush joint",
                why: "If the new strip touches the old sidewalk with no gap, runners walk the joint like a bridge.",
                instead:
                  "Leave a finger-width air gap, or keep a small V against the old slab.",
              },
              {
                label: "Loose gravel",
                why: "Runners root in gravel. You trade grass-on-concrete for weeds-in-rock.",
                instead:
                  "Use a hard surface: steel, brick, pavers, or poured concrete.",
              },
              {
                label: "Thin plastic, flush with the soil",
                why: "It is not a raised strip. Centipede will be over it by July.",
                instead:
                  "If you use steel, buy the tall kind and stake it so the top sits 1–2 inches above the grass.",
              },
              {
                label: "Soil ramp",
                why: "Backfill that slopes up to the strip is a ramp the runners can walk.",
                instead: "Compact the backfill. Keep the lawn side at mowing height, not piled against the cliff.",
              },
            ].map((row) => (
              <div
                key={row.label}
                className="border-b border-border px-4 py-4 last:border-b-0 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:px-5"
              >
                <dt className="text-sm font-medium">{row.label}</dt>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-0">
                  <span className="mb-1 block text-xs font-medium tracking-wide text-foreground/70 uppercase sm:hidden">
                    Why it matters
                  </span>
                  {row.why}
                </dd>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-0">
                  <span className="mb-1 block text-xs font-medium tracking-wide text-foreground/70 uppercase sm:hidden">
                    What to do instead
                  </span>
                  {row.instead}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
