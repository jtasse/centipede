import { toc, type TocEntry } from "@/lib/toc"
import { ChevronDownIcon } from "lucide-react"

function TocLink({ entry, index }: { entry: TocEntry; index?: string }) {
  return (
    <li>
      <a
        href={entry.href}
        className="group/toc flex gap-3 rounded-lg py-1.5 pr-2 text-sm leading-6 hover:bg-muted/80"
      >
        {index ? (
          <span className="mt-0.5 w-5 shrink-0 text-right font-medium text-muted-foreground tabular-nums">
            {index}
          </span>
        ) : (
          <span className="mt-2.5 ml-8 size-1 shrink-0 rounded-full bg-accent" />
        )}
        <span>
          <span className="font-medium text-foreground group-hover/toc:text-primary group-hover/toc:underline">
            {entry.label}
          </span>
          {entry.note ? (
            <span className="text-muted-foreground"> — {entry.note}</span>
          ) : null}
        </span>
      </a>
      {entry.children?.length ? (
        <ol className="mt-0.5 mb-1 list-none">
          {entry.children.map((child) => (
            <TocLink key={child.href} entry={child} />
          ))}
        </ol>
      ) : null}
    </li>
  )
}

export function GuideToc() {
  return (
    <nav
      id="contents"
      aria-labelledby="toc-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <details
          open
          className="group/details rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 marker:hidden [&::-webkit-details-marker]:hidden">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
                On this page
              </p>
              <h2
                id="toc-heading"
                className="font-heading mt-1 text-2xl text-balance sm:text-3xl"
              >
                Jump to a section
              </h2>
            </div>
            <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="group-open/details:hidden">Show</span>
              <span className="hidden group-open/details:inline">Hide</span>
              <ChevronDownIcon className="size-3.5 transition-transform group-open/details:rotate-180" />
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Centipede crawls on surface{" "}
            <strong className="font-medium text-foreground">runners</strong>{" "}
            (botanists call them stolons). Skip this outline if you already know
            where you are going.
          </p>
          <a
            href="#why"
            className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-ring"
          >
            Skip outline
          </a>
          <ol className="mt-5 grid list-none gap-x-8 gap-y-0.5 sm:grid-cols-2">
            {toc.map((entry, i) => (
              <TocLink
                key={entry.href}
                entry={entry}
                index={String(i + 1).padStart(2, "0")}
              />
            ))}
          </ol>
        </details>
      </div>
    </nav>
  )
}
