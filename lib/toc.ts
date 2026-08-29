export type TocEntry = {
  href: string
  label: string
  note?: string
  children?: TocEntry[]
}

/** On-page outline — keep in lockstep with section `id`s in `app/page.tsx`. */
export const toc: TocEntry[] = [
  {
    href: "#why",
    label: "Why the trimmer, edger, and pulling lose",
  },
  {
    href: "#playbook",
    label: "Pick a method",
  },
  {
    href: "#v-trench",
    label: "What a V-trench is",
    note: "a narrow ditch against the sidewalk",
  },
  {
    href: "#mow-strip",
    label: "What a raised mow strip is",
    note: "a hard ribbon you mow on",
  },
  {
    href: "#wipe-why",
    label: "Dab Roundup on runners already on the slab",
    note: "a wipe — paint with a sponge, not a mist",
  },
  {
    href: "#banding",
    label: "Spray a 6-inch growth-regulator strip",
    note: "landscapers call this banding",
  },
  {
    href: "#regulator",
    label: "Growth regulator vs Roundup",
    children: [
      {
        href: "#in-the-plant",
        label: "It lives in the plant, not on the sidewalk",
      },
    ],
  },
  {
    href: "#tape",
    label: "Why not just Roundup the lawn edge",
  },
  {
    href: "#dose",
    label: "How much for a 6-inch strip",
  },
  {
    href: "#season",
    label: "Southeast calendar",
  },
  {
    href: "#habits",
    label: "Time you are actually spending",
  },
]
