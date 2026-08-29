"use client"

import { useMemo, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { formatDose, pgrDose } from "@/lib/guide"

const presets = [
  { label: "Front walk", feet: 80 },
  { label: "Typical lot", feet: 180 },
  { label: "Long driveway", feet: 320 },
]

export function DoseCalculator() {
  const [feet, setFeet] = useState(180)
  const dose = useMemo(() => pgrDose(feet), [feet])

  return (
    <section id="dose" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1fr] lg:py-20">
        <div className="space-y-4">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            6-inch strip calculator
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            How much growth regulator for that ribbon?
          </h2>
          <p className="leading-7 text-muted-foreground">
            Edgeless Concentrate is labeled for centipedegrass at{" "}
            <strong className="text-foreground font-medium">
              0.13–0.23 fl oz per 500 linear feet
            </strong>{" "}
            of a 6-inch strip. That is a startlingly small number on a house lot.
            Measure with a syringe, not a bottle cap. Always follow the current
            product label — rates, PPE, timing, and yearly maximums win over
            anything on this page.
          </p>
          <p className="text-sm leading-6 text-muted-foreground">
            The label also asks for a calibrated single-nozzle sprayer delivering
            20 fl oz of spray mix per minute. If you cannot do that, skip the
            homemade mix and either hire it out or use a sponge on the slab and a
            trench.
          </p>
        </div>

        <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Linear feet of edge</p>
              <p className="font-heading text-4xl tabular-nums">{feet} ft</p>
            </div>
            <div className="flex flex-wrap justify-end gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setFeet(preset.feet)}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium hover:bg-muted/80"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Slider
              min={40}
              max={500}
              step={5}
              value={[feet]}
              onValueChange={(value) => {
                const next = Array.isArray(value) ? value[0] : feet
                if (typeof next === "number") setFeet(next)
              }}
              aria-label="Linear feet of sidewalk and driveway edge"
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>40 ft</span>
              <span>500 ft</span>
            </div>
          </div>

          {feet < 40 ? (
            <p className="mt-6 text-sm text-muted-foreground">
              Enter a real stretch of edge to see a dose.
            </p>
          ) : (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-muted/70 p-3">
                <p className="text-xs text-muted-foreground">Concentrate</p>
                <p className="mt-1 text-sm font-medium">
                  {formatDose(dose.lowOz, 3)}–{formatDose(dose.highOz, 3)} fl oz
                </p>
              </div>
              <div className="rounded-xl bg-muted/70 p-3">
                <p className="text-xs text-muted-foreground">In milliliters</p>
                <p className="mt-1 text-sm font-medium">
                  {formatDose(dose.lowMl)}–{formatDose(dose.highMl)} mL
                </p>
              </div>
              <div className="rounded-xl bg-muted/70 p-3">
                <p className="text-xs text-muted-foreground">Kitchen measure</p>
                <p className="mt-1 text-sm font-medium">
                  {formatDose(dose.lowTsp)}–{formatDose(dose.highTsp)} tsp
                </p>
              </div>
            </div>
          )}

          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            Repeat on the label interval (typically 8–12 weeks) while the grass
            is actively growing — about two or three times from spring green-up
            through early fall. Last application at least four weeks before
            dormancy. No rain for two hours, then irrigate within 24 hours; do
            not mow until after that watering. Yearly maximum 350 fl oz/acre (8
            fl oz/1,000 sq ft). Do not apply to stressed turf. Not for beds,
            food plants, or saturated soil. Overspray on concrete is wasted, not
            a barrier.
          </p>
        </div>
      </div>
    </section>
  )
}
