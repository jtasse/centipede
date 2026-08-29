import { WipeDiagram } from "@/components/wipe-diagram"

export function WhyWipe() {
  return (
    <section id="wipe-why" className="scroll-mt-14 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
              The other landscaper word
            </p>
            <h2 className="font-heading text-3xl text-balance sm:text-4xl">
              A wipe is Roundup on a sponge, dabbed onto grass that is already on
              the sidewalk.
            </h2>
            <p className="leading-7 text-muted-foreground">
              <strong className="text-foreground font-medium">Wipe</strong> is
              not a brand and not a special tool. It means put glyphosate —
              Roundup or a store-brand bottle of the same chemical — on a sponge,
              a foam roller, or a wick bottle, then dab or paint it onto the
              runners sitting on the concrete. You are wetting them by contact,
              the way you would paint a fence. You are not spraying a mist into
              the air.
            </p>
            <p className="leading-7 text-muted-foreground">
              A pump sprayer throws droplets that drift onto the living lawn and
              brown a strip. A sponge keeps the chemical on the slab. After a
              few days the runners turn yellow. Then rake, sweep, or blow them
              off. You are not kneeling to tease live grass.
            </p>
          </div>
          <figure className="space-y-3">
            <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
              <WipeDiagram className="h-auto w-full" />
            </div>
            <figcaption className="px-1 text-sm text-muted-foreground">
              Paint only what is already on the concrete. Stay an inch or two
              off the living edge.
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Sponge · roller · wick
            </p>
            <h3 className="font-heading mt-2 text-2xl">Chemical stays on the slab</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              You wet the runners that are already sitting on the sidewalk or
              driveway. Nothing is flying through the air. That is the whole
              trick, and the only reason this job does not brown the lawn.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Pump sprayer
            </p>
            <h3 className="font-heading mt-2 text-2xl">Droplets drift. The lawn pays.</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              A mist along the edge looks faster. Glyphosate that lands on
              living turf — or on a runner still attached to it — moves through
              the plant and you own a brown ribbon. Keep the bottle in the
              garage for this job.
            </p>
          </article>
        </div>

        <div className="mt-14 max-w-3xl space-y-5">
          <h3 className="font-heading text-3xl text-balance sm:text-4xl">
            You are not killing them so they are easier to pick up.
          </h3>
          <p className="leading-7 text-muted-foreground">
            Yellow is a side effect. The point is the{" "}
            <strong className="text-foreground font-medium">nodes</strong> —
            those knuckles on the runner that can root. Pull a live stolon and
            it usually snaps. The bits left in the expansion joint are still
            alive. Those leftovers are why the same sidewalk is covered again in
            about two weeks.
          </p>
          <p className="leading-7 text-muted-foreground">
            Glyphosate moves into those growing points, including the ones you
            cannot see in the crack. After a few days the runner lets go of the
            slab. Then you are not pulling. You are raking, sweeping, or blowing
            dead thatch. If you wait, you can skip the kneeling entirely.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10">
          <div className="hidden border-b border-border bg-muted/60 px-5 py-3 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:grid sm:grid-cols-3">
            <span>Compare</span>
            <span>Pull while green</span>
            <span>Dab, wait, rake</span>
          </div>
          <dl>
            {[
              {
                label: "What you are fighting",
                live: "Stems you can grab",
                wipe: "Nodes that can root, including in the joint",
              },
              {
                label: "What gets left behind",
                live: "Live fragments that restart the crawl",
                wipe: "Dead thatch that is not a plant anymore",
              },
              {
                label: "The Saturday job",
                live: "Kneel, tease, snap, miss a node, repeat",
                wipe: "Ten minutes with a sponge now, one rake in a few days",
              },
              {
                label: "Easier to see?",
                live: "Green on gray is already visible",
                wipe: "Yellow helps, but that is not why you dab",
              },
            ].map((row) => (
              <div
                key={row.label}
                className="border-b border-border px-4 py-4 last:border-b-0 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:px-5"
              >
                <dt className="text-sm font-medium">{row.label}</dt>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-0">
                  <span className="mb-1 block text-xs font-medium tracking-wide text-foreground/70 uppercase sm:hidden">
                    Pull while green
                  </span>
                  {row.live}
                </dd>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-0">
                  <span className="mb-1 block text-xs font-medium tracking-wide text-foreground/70 uppercase sm:hidden">
                    Dab, wait, rake
                  </span>
                  {row.wipe}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-8 max-w-3xl leading-7 text-muted-foreground">
          If you are already getting every node out of every joint by hand, skip
          the chemical. That is also why the job is exhausting. The sponge pass
          is a substitute for the hard part of pulling, not an extra step before
          it. New runners will still walk over from the lawn — that is the trench
          and the growth-regulator strip — but they will not be restarting from
          leftovers you thought you had pulled.
        </p>
      </div>
    </section>
  )
}
