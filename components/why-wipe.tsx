export function WhyWipe() {
  return (
    <section id="wipe-why" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Wipe vs pull
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            You are not killing them so they are easier to pick up.
          </h2>
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
            <span>Wipe, wait, rake</span>
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
                wipe: "Ten-minute wipe now, one rake in a few days",
              },
              {
                label: "Easier to see?",
                live: "Green on gray is already visible",
                wipe: "Yellow helps, but that is not why you spray",
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
                    Wipe, wait, rake
                  </span>
                  {row.wipe}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-8 max-w-3xl leading-7 text-muted-foreground">
          If you are already getting every node out of every joint by hand, skip
          the chemical. That is also why the job is exhausting. The wipe is a
          substitute for the hard part of pulling, not an extra step before it.
          New runners will still walk over from the lawn — that is the trench
          and the growth-regulator strip — but they will not be restarting from
          leftovers you thought you had pulled.
        </p>
      </div>
    </section>
  )
}
