import { InternodeDiagram } from "@/components/internode-diagram"
import { pgrActives, pgrVsGlyphosate } from "@/lib/guide"

export function WhatIsPgr() {
  return (
    <section id="regulator" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            What’s in the bottle
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            A growth regulator is a hormone blocker. Roundup is a plant killer.
          </h2>
          <p className="leading-7 text-muted-foreground">
            Grass makes a hormone called{" "}
            <strong className="text-foreground font-medium">gibberellin</strong>{" "}
            (gibberellic acid, GA). That hormone tells cells to get longer.
            Longer cells are how a centipede stolon walks across a sidewalk in
            two weeks.
          </p>
          <p className="leading-7 text-muted-foreground">
            A turf growth regulator — also called a PGR, for plant growth
            regulator — interrupts that hormone. The plant stays alive. It still
            photosynthesizes. The segments between nodes, the internodes, just
            stay short. Think of it as putting the edge on a shorter leash, not
            poisoning it.
          </p>
        </div>

        <figure className="mt-8 overflow-hidden rounded-2xl ring-1 ring-foreground/10">
          <InternodeDiagram className="h-auto w-full" />
          <figcaption className="bg-card px-4 py-3 text-sm text-muted-foreground sm:px-5">
            Roundup would turn that runner yellow and dead. A growth regulator
            leaves it green and compact, so it does not have the length to hop
            the slab as fast.
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Growth regulator
            </p>
            <h3 className="font-heading mt-2 text-2xl">Hormone brake</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Used on the living 6-inch ribbon of lawn next to the concrete.
              Golf courses use the same chemistry to mow less. At labeled rates
              the turf should not die.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Roundup · glyphosate
            </p>
            <h3 className="font-heading mt-2 text-2xl">Systemic herbicide</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Shuts down an enzyme plants need to make protein. The plant
              starves. That is why it belongs on stolons already sitting on
              concrete — and why a mist into the lawn becomes a brown strip.
            </p>
          </article>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10">
          <div className="hidden border-b border-border bg-muted/60 px-5 py-3 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:grid sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <span>Compare</span>
            <span>Growth regulator</span>
            <span>Roundup</span>
          </div>
          <dl>
            {pgrVsGlyphosate.map((row) => (
              <div
                key={row.label}
                className="border-b border-border px-4 py-4 last:border-b-0 sm:grid sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)_minmax(0,1fr)] sm:items-start sm:gap-4 sm:px-5"
              >
                <dt className="text-sm font-medium">{row.label}</dt>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-0">
                  <span className="mb-1 block text-xs font-medium tracking-wide text-foreground/70 uppercase sm:hidden">
                    Growth regulator
                  </span>
                  {row.regulator}
                </dd>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-0">
                  <span className="mb-1 block text-xs font-medium tracking-wide text-foreground/70 uppercase sm:hidden">
                    Roundup
                  </span>
                  {row.glyphosate}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 max-w-3xl space-y-4">
          <h3 className="font-heading text-2xl">The two names on the jug</h3>
          <p className="leading-7 text-muted-foreground">
            Edgeless, the product labeled for a 6-inch centipede edge, combines
            both of the common Type II regulators. They hit gibberellin at two
            different steps, which is why one pass can last 8–12 weeks.
          </p>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {pgrActives.map((item) => (
            <li
              key={item.name}
              className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10"
            >
              <p className="font-heading text-xl">{item.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.also}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.job}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-sm leading-6 text-muted-foreground">
          It is still a pesticide. It does not kill weeds, it is not fertilizer,
          and it will not erase grass already on the driveway. Follow the
          current label for mix rates, protective equipment, and when people and
          pets can go back on the treated strip.
        </p>
      </div>
    </section>
  )
}
