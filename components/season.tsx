"use client"

import { months } from "@/lib/guide"
import { cn } from "@/lib/utils"

export function Season() {
  const now = new Date()
  const currentMonth = now.getMonth() + 1
  const current = months.find((month) => month.id === currentMonth) ?? months[7]

  return (
    <section id="season" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Southeast calendar
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            The two-week war is a summer job. Stop treating January like July.
          </h2>
          <p className="leading-7 text-muted-foreground">
            Timed for typical centipede country — the Carolinas, Georgia,
            Alabama, and the Florida panhandle. Shift a few weeks earlier in
            south Georgia, later in the mountains.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-primary p-6 text-primary-foreground sm:p-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase opacity-80">
            This month · {current.name}
          </p>
          <h3 className="font-heading mt-2 text-3xl">{current.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
            {current.body}
          </p>
        </div>

        <ol className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {months.map((month) => {
            const active = month.id === currentMonth
            return (
              <li
                key={month.id}
                className={cn(
                  "rounded-xl p-3 ring-1 sm:p-4",
                  active
                    ? "bg-primary text-primary-foreground ring-primary"
                    : "bg-card ring-foreground/8"
                )}
              >
                <p className={cn("text-xs", active ? "opacity-80" : "text-muted-foreground")}>
                  {month.name}
                </p>
                <p className="font-heading mt-1 text-sm">{month.title}</p>
                <p
                  className={cn(
                    "mt-2 text-xs leading-5",
                    active ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}
                >
                  {month.body}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
