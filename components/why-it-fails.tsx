import { failReasons } from "@/lib/guide"
import { StolonDiagram } from "@/components/stolon-diagram"

export function WhyItFails() {
  return (
    <section id="why" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="space-y-4">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Why the usual tools lose
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            Edging, a spring trimmer, and hand pulling are three versions of the
            same fight.
          </h2>
          <p className="text-muted-foreground leading-7">
            Clemson notes that centipede only makes surface runners, which is
            why borders are easier than with bermudagrass. Easier is not the
            same as easy. The runners still climb a low wall, and research on
            edging walls found that even a 5 cm barrier does not fully stop
            them. You need a gap, slower growth, or a cliff high enough that
            they quit. Painting what is already on the slab is optional cleanup
            — it does not stop the flood.
          </p>
          <figure className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <StolonDiagram variant="gap" className="h-auto w-full" />
          </figure>
        </div>
        <ol className="space-y-4">
          {failReasons.map((item, index) => (
            <li
              key={item.title}
              className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8 sm:p-6"
            >
              <p className="font-heading text-muted-foreground text-sm">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading mt-1 text-xl">{item.title}</h3>
              <p className="mt-2 leading-7 text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
