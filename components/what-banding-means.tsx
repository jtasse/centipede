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
            wet only the grass that touches the concrete — about the width of a
            dollar bill standing on end. Everything behind that ribbon stays
            dry.
          </p>
          <p className="leading-7 text-muted-foreground">
            A{" "}
            <strong className="text-foreground font-medium">
              growth regulator
            </strong>{" "}
            is not Roundup. It does not kill the turf. It tells those six inches
            to stop stretching, so stolons do not race onto the slab for roughly
            8–12 weeks. The grass stays, often a little darker. You still have
            to trim or wipe whatever is already on the concrete first. This only
            slows what grows next.{" "}
            <a href="#regulator" className="font-medium text-primary hover:underline">
              What is in the bottle, exactly
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
                Use a single-nozzle sprayer aimed at that 6-inch ribbon. Walk a
                steady pace along every hardscape edge. A marking dye helps you
                see where you have already been.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                4
              </span>
              <span>
                Repeat on the label interval while the grass is growing. Stop at
                least four weeks before winter dormancy.
              </span>
            </li>
          </ol>
        </div>
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <BandingDiagram className="h-auto w-full" />
          </div>
          <figcaption className="px-1 text-sm text-muted-foreground">
            You are painting a thin line of slow-growth along the concrete. If
            the spray fans into the lawn or into a flower bed, you have left the
            band.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
