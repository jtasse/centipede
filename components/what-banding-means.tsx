import { BandingDiagram } from "@/components/banding-diagram"

export function WhatBandingMeans() {
  return (
    <section id="banding" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
        <div className="space-y-5">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            The landscaper phrase
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            “Band a growth regulator” means spray a 6-inch ribbon, not the whole
            lawn.
          </h2>
          <p className="leading-7 text-muted-foreground">
            <strong className="text-foreground font-medium">Band</strong> is
            just a strip. You walk the sidewalk or driveway with a sprayer and
            wet only the living grass that touches the concrete — about the
            width of a dollar bill standing on end. You are not painting a
            chemical onto the slab. Everything behind that ribbon stays dry.
            Mist that lands on the concrete is wasted product, not a barrier.
          </p>
          <p className="leading-7 text-muted-foreground">
            A{" "}
            <strong className="text-foreground font-medium">
              growth regulator
            </strong>{" "}
            is not Roundup. It does not kill the turf. The grass absorbs it, and
            those six inches stop stretching for roughly 8–12 weeks. The lawn
            stays, often a little darker. You still have to trim or{" "}
            <a href="#playbook" className="font-medium text-primary hover:underline">
              wipe
            </a>{" "}
            whatever is already on the concrete first — that is a glyphosate
            job, not this one. This only slows what grows next.{" "}
            <a href="#in-the-plant" className="font-medium text-primary hover:underline">
              It lives in the plant, not on the sidewalk
            </a>
            .
          </p>
          <ol className="space-y-3 text-sm leading-6">
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                1
              </span>
              <span>
                Trim the edge to the line you want. The chemical will not melt
                runners off the slab.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                2
              </span>
              <span>
                Mix a turf growth regulator labeled for edging, such as Edgeless,
                exactly as that label says. Homeowner amounts are milliliters.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                3
              </span>
              <span>
                Use a single-nozzle sprayer aimed at that 6-inch ribbon of grass.
                Walk a steady pace along every hardscape edge. A marking dye
                helps you see where you have already been. Let the leaf dry at
                least two hours, then irrigate or take rain within 24 hours. Do
                not mow until after that watering.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                4
              </span>
              <span>
                Repeat every 8–12 weeks while the grass is growing — typically
                two or three times from spring green-up through early fall. Stop
                at least four weeks before winter dormancy.
              </span>
            </li>
          </ol>
        </div>
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <BandingDiagram className="h-auto w-full" />
          </div>
          <figcaption className="px-1 text-sm text-muted-foreground">
            You are wetting a thin ribbon of living grass along the concrete —
            not coating the slab. If the spray fans into the lawn or into a
            flower bed, you have left the band.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
