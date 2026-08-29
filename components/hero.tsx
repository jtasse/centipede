import { StolonDiagram } from "@/components/stolon-diagram"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_-10%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_55%),radial-gradient(700px_circle_at_90%_0%,color-mix(in_oklch,var(--accent)_16%,transparent),transparent_50%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <div className="space-y-6">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Centipede along hardscape
          </p>
          <h1 className="font-heading max-w-xl text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            You are not bad at edging. The grass is crawling.
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Centipede does not grow <em>up</em> onto the sidewalk. It sends
            surface runners — botanists call them stolons — walking out over the
            slab. For every one that actually roots in a joint, you will see ten
            or twenty that just lie there. The two-week fight is the flood of
            runners, not a sidewalk full of new plants. A trimmer, a pretty
            edge, and Saturday on your knees all lose to that volume. The real
            work is stopping them at the lawn edge: an air gap, a 6-inch
            growth-regulator strip, or a raised edge you mow against. Painting
            Roundup onto what is already on the slab is optional. It does not
            unglue the stuck ones, and it does not stop the next wave.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#playbook"
              className="inline-flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/85"
            >
              Pick a method
            </a>
            <a
              href="#why"
              className="inline-flex h-10 items-center rounded-lg border border-border bg-card px-4 text-sm font-medium hover:bg-muted"
            >
              Why the trimmer loses
            </a>
          </div>
          <dl className="grid max-w-xl grid-cols-3 gap-3 pt-2 text-sm">
            <div className="rounded-xl bg-card/80 p-3 ring-1 ring-foreground/8">
              <dt className="text-muted-foreground">Spreads by</dt>
              <dd className="font-heading mt-1 text-lg">Surface runners</dd>
            </div>
            <div className="rounded-xl bg-card/80 p-3 ring-1 ring-foreground/8">
              <dt className="text-muted-foreground">Peak crawl</dt>
              <dd className="font-heading mt-1 text-lg">Jun–Aug</dd>
            </div>
            <div className="rounded-xl bg-card/80 p-3 ring-1 ring-foreground/8">
              <dt className="text-muted-foreground">Your interval</dt>
              <dd className="font-heading mt-1 text-lg">~14 days</dd>
            </div>
          </dl>
        </div>
        <div className="space-y-3">
          <figure className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <StolonDiagram variant="crawl" className="h-auto w-full" />
          </figure>
          <p className="px-1 text-sm text-muted-foreground">
            Those little “legs” on a centipede runner are nodes. Most runners
            just crawl over the slab. A few take in a joint. Either way, cutting
            the blades does not stop the lawn from sending more.
          </p>
        </div>
      </div>
    </section>
  )
}
