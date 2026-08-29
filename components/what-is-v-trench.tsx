import { VTrenchDiagram } from "@/components/v-trench-diagram"

export function WhatIsVTrench() {
  return (
    <section id="v-trench" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
              The air-gap job
            </p>
            <h2 className="font-heading text-3xl text-balance sm:text-4xl">
              A V-trench is a narrow ditch against the sidewalk. Runners stop
              when they hit air.
            </h2>
            <p className="leading-7 text-muted-foreground">
              You cut a ditch in the soil right against the sidewalk or driveway:
              about 3–4 inches deep and 2–3 inches wide. It is shaped like a V
              so one wall is the concrete itself. You should see a clean
              sidewalk face and a dark gap of bare soil — not a shallow scrape
              the grass still touches.
            </p>
            <p className="leading-7 text-muted-foreground">
              Centipede runners grow on the soil surface. They do not tunnel
              under the slab. When a runner reaches that open air, it stops
              instead of walking onto the concrete. A string trimmer never makes
              this gap. It only shears the leaves, so the same runners crawl
              back in days.
            </p>
            <p className="leading-7 text-muted-foreground">
              No chemicals. No new concrete. This is a hand-tool afternoon the
              first time, then a short recut a few times a year. It is not
              permanent. You still glance at it.
            </p>
          </div>
          <figure className="space-y-3">
            <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
              <VTrenchDiagram className="h-auto w-full" />
            </div>
            <figcaption className="px-1 text-sm text-muted-foreground">
              If you can still see runners bridging the gap, it is too shallow.
              Recut until one wall is bare concrete.
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Tools
            </p>
            <h3 className="font-heading mt-2 text-xl">A cheap edger and a bucket</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              A half-moon edger (manual, about $20–40) or a wheeled steel-blade
              edger if you already have one. Plus a flat shovel, gloves, and a
              bucket for pulled grass. That is the list.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              First time
            </p>
            <h3 className="font-heading mt-2 text-xl">The hard afternoon</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              For a typical house — say 100–200 feet of sidewalk and driveway
              edge — expect a couple of hours after a rain, when the soil is
              soft. Dry clay fights you and crumbles the lip.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Yearly upkeep
            </p>
            <h3 className="font-heading mt-2 text-xl">20 minutes, a few times</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Recut the same line two or three times from spring through fall —
              not every two weeks. Grass and weather slump the gap shut. Each
              pass is a short walk with the edger.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Cost
            </p>
            <h3 className="font-heading mt-2 text-xl">Often nothing new</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              If you already own an edger, this is a $0 method. If not, you buy
              one tool. There is no bag of mix, no pavers, no spray.
            </p>
          </article>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10">
          <div className="hidden border-b border-border bg-muted/60 px-5 py-3 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:grid sm:grid-cols-3">
            <span>The afternoon</span>
            <span>What you do</span>
            <span>What it should look like</span>
          </div>
          <dl>
            {[
              {
                label: "After a rain",
                do: "Walk the hardscape with a half-moon or wheeled blade edger. Cut a vertical face flush with the concrete.",
                look: "A clean sidewalk sidewall, not grass still kissing the slab.",
              },
              {
                label: "Carve the V",
                do: "Pull the soil away from that face into a shallow V, 3–4 inches deep and 2–3 inches wide.",
                look: "Open air in the gap. You could lay two fingers in it.",
              },
              {
                label: "Clear the mess",
                do: "Pull the severed runners off the slab and out of the trench. Most of them were just sitting on the concrete.",
                look: "Bare soil in the V, a bucket of grass, a sidewalk you can see.",
              },
              {
                label: "Later in the season",
                do: "Recut the same line when rains or mowing slump it. Two or three passes April through September.",
                look: "The same gap you cut the first day — not a pretty trimmer line.",
              },
            ].map((row) => (
              <div
                key={row.label}
                className="border-b border-border px-4 py-4 last:border-b-0 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:px-5"
              >
                <dt className="text-sm font-medium">{row.label}</dt>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-0">
                  <span className="mb-1 block text-xs font-medium tracking-wide text-foreground/70 uppercase sm:hidden">
                    What you do
                  </span>
                  {row.do}
                </dd>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-0">
                  <span className="mb-1 block text-xs font-medium tracking-wide text-foreground/70 uppercase sm:hidden">
                    What it should look like
                  </span>
                  {row.look}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-8 max-w-3xl leading-7 text-muted-foreground">
          The limit is honesty: a V-trench is not a forever fix. Runners can
          bridge a shallow scrape. You still walk the line a few times a
          summer. For the stretches you see every time you park, a{" "}
          <a href="#mow-strip" className="font-medium text-primary hover:underline">
            raised mow strip
          </a>{" "}
          is the “stop thinking about it” option. For a long, less-visible run,
          this ditch is the whole job.
        </p>
      </div>
    </section>
  )
}
