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
              few days the runners turn yellow. That does not mean they will rake
              off. Dead centipede on broom-finished concrete often still clings.
              Glyphosate does not unglue them.
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
            A rake will not finish the job. You may still pick them.
          </h3>
          <p className="leading-7 text-muted-foreground">
            Nodes that pressed into broom-finished texture, an expansion joint,
            or a film of soil do not always come off in one pass — dead or
            alive. A rake or a blower helps with the loose thatch. The stuck
            ones are still a pick-off. If your Saturday is already walking the
            slab and pulling, wiping first may only save the ones that bleach
            and let go. That is not the majority.
          </p>
          <p className="leading-7 text-muted-foreground">
            Most of the mess is not plants establishing between slabs. For every
            runner that actually roots in a joint, you will see ten or twenty
            that just grow out over the concrete. Extra-annoying when a joint
            take happens. Not most of the chore. The problem is how many runners
            the lawn sends onto the hardscape.
          </p>
        </div>

        <div className="mt-10 max-w-3xl space-y-5">
          <h3 className="font-heading text-3xl text-balance sm:text-4xl">
            If you still have to pick them, why wipe at all?
          </h3>
          <p className="leading-7 text-muted-foreground">
            A few remaining reasons — modest, not gospel:
          </p>
          <ul className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
            <li className="flex gap-3">
              <span
                aria-hidden
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>
                A live runner still attached to the lawn keeps getting longer
                until you pick it. A killed one stops lengthening.
              </span>
            </li>
            <li className="flex gap-3">
              <span
                aria-hidden
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>
                Glyphosate can move a short way back along a runner that is
                still connected to the lawn. Stay an inch or two off the living
                edge, or you can brown turf.
              </span>
            </li>
            <li className="flex gap-3">
              <span
                aria-hidden
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>
                Dead tissue is sometimes more brittle, so a few more snap off
                instead of stretching.
              </span>
            </li>
          </ul>
          <p className="leading-7 text-muted-foreground">
            None of these is a slam dunk if the bottleneck is volume on the
            slab. It is fair to skip the chemical and spend the effort on
            stopping the flood: a{" "}
            <a href="#playbook" className="font-medium text-primary hover:underline">
              V-trench
            </a>
            , a 6-inch growth-regulator strip on the living lawn, or a raised
            mow strip. The wipe is optional. It is not the main trick.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10">
          <div className="hidden border-b border-border bg-muted/60 px-5 py-3 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:grid sm:grid-cols-3">
            <span>Compare</span>
            <span>Pull while green</span>
            <span>Wipe first</span>
          </div>
          <dl>
            {[
              {
                label: "What you are fighting",
                live: "The flood of runners over the slab",
                wipe: "Same flood. Joint-rooted plants are a small slice.",
              },
              {
                label: "What a rake does",
                live: "Almost nothing. They are alive and they cling.",
                wipe: "Loose thatch may come off. The stuck ones often stay.",
              },
              {
                label: "The Saturday job",
                live: "Walk the slab and pull",
                wipe: "Walk the slab and pull, maybe a few less if they let go",
              },
              {
                label: "Stops the next wave?",
                live: "No",
                wipe: "No. That is the trench, the 6-inch strip, and a raised edge",
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
                    Wipe first
                  </span>
                  {row.wipe}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-8 max-w-3xl leading-7 text-muted-foreground">
          If pulling is already the Saturday, you do not owe the sponge a try.
          New runners will still walk over from the lawn until you put an air
          gap, a 6-inch growth-regulator strip, or a raised edge in their way.
          That is the work that changes the two-week interval. The wipe is a
          side job, if you want it.
        </p>
      </div>
    </section>
  )
}
