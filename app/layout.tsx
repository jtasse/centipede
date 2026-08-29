import type { Metadata } from "next"
import { Figtree, Instrument_Serif } from "next/font/google"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
})

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
})

export const metadata: Metadata = {
  title: "Stolon Line — Centipede along sidewalks and driveways",
  description:
    "A field guide for stopping centipedegrass from crawling over hardscape every two weeks.",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
