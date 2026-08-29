"use client"

import { useMemo, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { donts, fertilityNotes } from "@/lib/guide"

export function HoursAndHabits() {
  const [minutes, setMinutes] = useState(90)
  const visits = 12
  const currentHours = useMemo(
    () => Math.round(((minutes * visits) / 60) * 10) / 10,
    [minutes]
  )

  return (
    <section id="habits" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="space-y-5">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Time you are actually spending
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            Two weeks feels short because the season is long.
          </h2>
          <p className="leading-7 text-muted-foreground">
            April through September is roughly twelve of those visits. Drag the
            slider to the time a typical session takes you, including the
            kneeling.
          </p>
          <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
            <div className="flex items-end justify-between">
              <p className="font-heading text-4xl tabular-nums">{minutes} min</p>
              <p className="text-sm text-muted-foreground">per visit</p>
            </div>
            <Slider
              className="mt-5"
              min={20}
              max={180}
              step={5}
              value={[minutes]}
              onValueChange={(value) => {
                const next = Array.isArray(value) ? value[0] : minutes
                if (typeof next === "number") setMinutes(next)
              }}
              aria-label="Minutes spent pulling or trimming each visit"
            />
            <p className="mt-5 text-sm leading-6">
              At {visits} visits, that is about{" "}
              <strong className="font-medium">{currentHours} hours</strong> a
              summer — before you count the Saturday you were too tired and the
              grass won anyway.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#v-trench" className="font-medium text-primary hover:underline">
                  V-trench
                </a>
                : a couple of hours the first time for 100–200 ft, then about 20
                minutes, two or three recuts a year.
              </li>
              <li>
                Sponge on the slab: optional, ten to twenty minutes. Expect to
                still pick the ones that cling.
              </li>
              <li>
                Growth regulator: two or three walks along a 6-inch strip, then
                almost no trimming.
              </li>
              <li>
                <a href="#mow-strip" className="font-medium text-primary hover:underline">
                  Raised mow strip
                </a>
                : a weekend for the driveway apron or front walk, then you mow
                the line with one wheel on the ribbon.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="font-heading text-2xl">Stop feeding the runners</h3>
          <ul className="space-y-4">
            {fertilityNotes.map((note) => (
              <li
                key={note.title}
                className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
              >
                <p className="font-heading text-lg">{note.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {note.body}
                </p>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-heading text-2xl">Do not do these</h3>
            <ul className="mt-4 space-y-3">
              {donts.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6">
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
