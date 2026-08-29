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
            Centipede does not grow <em>up</em> onto the sidewalk. Surface
            stolons walk over it, root in the joints, and do it again in about
            two weeks. A trimmer, a pretty edge, and Saturday on your knees all
            lose to that habit. The fix is an air gap, Roundup dabbed onto the
            runners sitting on the slab, a 6-inch growth-regulator strip — or a
            raised edge you mow against.
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
              <dd className="font-heading mt-1 text-lg">Surface stolons</dd>
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
            Those little “legs” on a centipede runner are nodes. If a node sits
            on concrete long enough, it roots. Cutting the blades does not
            remove the nodes.
          </p>
        </div>
      </div>
    </section>
  )
}
