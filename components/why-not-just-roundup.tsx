import { TranslocationDiagram } from "@/components/translocation-diagram"

export function WhyNotJustRoundup() {
  return (
    <section id="tape" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Why not just Roundup the edge
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            Tape keeps spray off the blades. It does not keep Roundup out of the
            plant.
          </h2>
          <p className="leading-7 text-muted-foreground">
            The problem is not only “what if I miss and kill the lawn.”{" "}
            <strong className="text-foreground font-medium">
              Glyphosate is systemic.
            </strong>{" "}
            It moves through living tissue. Centipede is a net of connected
            stolons. Spray the grass in front of the tape and the chemical can
            still walk the plumbing into the turf you covered. Painter’s tape
            blocks droplets the way it blocks paint. It does not install a valve
            in the stem.
          </p>
          <p className="leading-7 text-muted-foreground">
            Tape also fails as tape. It will not stick to dewy, waxy blades. It
            leaves gaps in the canopy. Pulling it up rips grass. A stiff
            cardboard or plastic shield is the real painter’s-tape idea — and it
            belongs on the{" "}
            <a href="#wipe-why" className="font-medium text-primary hover:underline">
              sponge job
            </a>
            , when you are painting runners already sitting on concrete, not as
            a way to Roundup a living 6-inch lawn edge.
          </p>
        </div>

        <figure className="mt-8 overflow-hidden rounded-2xl ring-1 ring-foreground/10">
          <TranslocationDiagram className="h-auto w-full" />
          <figcaption className="bg-card px-4 py-3 text-sm text-muted-foreground sm:px-5">
            If the runner is still attached to the lawn, the lawn is still in
            the circuit.
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <h3 className="font-heading text-2xl">
              Killing a strip is not a slower edge
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              If you Roundup the same 6-inch ribbon a growth regulator would
              slow, you have not substituted products. You have made a wound.
              The turf browns. Weeds move into the dead soil. New stolons grow
              in from behind and you spray again. Some landscape crews call that
              chemical edging and live with a brown line. It is a different look
              and a different chore — closer to the two-week fight you already
              have, with uglier weeks in the middle.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <h3 className="font-heading text-2xl">
              Roundup still has a job: the slab
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Dab only what is already on the sidewalk. You are not doing that
              so yellow grass is prettier to pull.{" "}
              <a href="#wipe-why" className="font-medium text-primary hover:underline">
                Kill the nodes, then rake once
              </a>
              . Stay 1–2 inches off the living edge, and prefer a sponge, a
              foam roller, or a shield over a misting sprayer.
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl bg-accent/15 p-5 ring-1 ring-accent/25 sm:p-6">
          <h3 className="font-heading text-2xl">It does not linger on the sidewalk</h3>
          <p className="mt-3 max-w-3xl leading-7">
            Same misconception, different bottle: a growth regulator is not a
            chemical moat on the concrete either. It has to land on living turf
            and move into the plant. Spray on the slab is wasted product.{" "}
            <a href="#in-the-plant" className="font-medium text-primary hover:underline">
              Where it lives, and the 8–12 week reapply cadence
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
