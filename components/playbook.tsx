"use client"

import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { goals, methods, type GoalId, type MethodId } from "@/lib/guide"
import { cn } from "@/lib/utils"

export function Playbook() {
  const [goal, setGoal] = useState<GoalId>("this-weekend")
  const [openMethod, setOpenMethod] = useState<MethodId>("wipe")

  const selected = useMemo(
    () => goals.find((item) => item.id === goal) ?? goals[0],
    [goal]
  )

  return (
    <section id="playbook" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Playbook
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            Four tricks. Start with the one that matches how tired you are.
          </h2>
          <p className="leading-7 text-muted-foreground">
            There is no product that makes centipede stay in the lawn forever.
            There are methods that turn a two-week chore into a monthly glance,
            or a one-weekend build. Pick a goal. The two methods that fit stay
            open; the others stay in the list if you want them later.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {goals.map((item) => {
            const active = item.id === goal
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setGoal(item.id)
                  setOpenMethod(item.recommended[0])
                }}
                className={cn(
                  "rounded-2xl p-4 text-left ring-1 transition-colors sm:p-5",
                  active
                    ? "bg-primary text-primary-foreground ring-primary"
                    : "bg-card text-foreground ring-foreground/10 hover:bg-muted"
                )}
              >
                <p className="font-heading text-lg">{item.label}</p>
                <p
                  className={cn(
                    "mt-2 text-sm leading-6",
                    active ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}
                >
                  {item.blurb}
                </p>
              </button>
            )
          })}
        </div>

        <div className="mt-6 rounded-2xl bg-accent/15 p-5 ring-1 ring-accent/25">
          <p className="text-xs font-medium tracking-[0.18em] text-accent-foreground uppercase">
            First move
          </p>
          <p className="mt-2 max-w-3xl leading-7">{selected.firstMove}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {methods.map((method) => {
            const recommended = selected.recommended.includes(method.id)
            const open = openMethod === method.id
            return (
              <article
                key={method.id}
                className={cn(
                  "flex flex-col rounded-2xl bg-card ring-1 ring-foreground/10",
                  recommended ? "ring-2 ring-primary/50" : "opacity-90"
                )}
              >
                <button
                  type="button"
                  className="flex items-start justify-between gap-3 p-5 text-left sm:p-6"
                  onClick={() => setOpenMethod(method.id)}
                  aria-expanded={open}
                >
                  <div>
                    <p className="font-heading text-muted-foreground text-sm">
                      {method.number}
                    </p>
                    <h3 className="font-heading mt-1 text-2xl">{method.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {method.headline}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    {recommended ? (
                      <Badge>Fits your goal</Badge>
                    ) : (
                      <Badge variant="outline">Other option</Badge>
                    )}
                    <Badge variant="secondary">
                      {method.chemicals ? "Chemical" : "No spray"}
                    </Badge>
                  </div>
                </button>
                {open ? (
                  <div className="space-y-5 border-t border-border px-5 py-5 sm:px-6">
                    <p className="leading-7">{method.why}</p>
                    {method.id === "pgr" ? (
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        <a
                          href="#banding"
                          className="inline-flex text-sm font-medium text-primary hover:underline"
                        >
                          See what the 6-inch strip looks like
                        </a>
                        <a
                          href="#tape"
                          className="inline-flex text-sm font-medium text-primary hover:underline"
                        >
                          Why not Roundup the lawn edge with tape
                        </a>
                      </div>
                    ) : null}
                    {method.id === "wipe" ? (
                      <a
                        href="#tape"
                        className="inline-flex text-sm font-medium text-primary hover:underline"
                      >
                        Why wipe instead of only pulling — and why not tape the lawn
                      </a>
                    ) : null}
                    <dl className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                      <div>
                        <dt className="text-muted-foreground">Time</dt>
                        <dd className="mt-1 font-medium">{method.time}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">How often</dt>
                        <dd className="mt-1 font-medium">{method.cadence}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">Best for</dt>
                        <dd className="mt-1 font-medium">{method.bestFor}</dd>
                      </div>
                    </dl>
                    <div>
                      <h4 className="text-sm font-medium">Do it in this order</h4>
                      <ol className="mt-3 space-y-3">
                        {method.steps.map((step, index) => (
                          <li key={step} className="flex gap-3 text-sm leading-6">
                            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                              {index + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <Accordion>
                      <AccordionItem value="tools">
                        <AccordionTrigger>Tools</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc space-y-1 pl-5">
                            {method.tools.map((tool) => (
                              <li key={tool}>{tool}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="watch">
                        <AccordionTrigger>Watch-outs</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc space-y-1 pl-5">
                            {method.watchouts.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
