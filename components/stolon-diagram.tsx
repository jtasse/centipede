type StolonDiagramProps = {
  variant: "crawl" | "gap"
  className?: string
}

export function StolonDiagram({ variant, className }: StolonDiagramProps) {
  const isGap = variant === "gap"

  return (
    <svg
      viewBox="0 0 640 280"
      role="img"
      className={className}
      aria-label={
        isGap
          ? "A V-shaped soil trench beside concrete, stopping centipede runners at the air gap."
          : "Centipede runners crawling from soil onto a sidewalk. Most of them just lie on the concrete."
      }
    >
      <rect width="640" height="280" fill="#efe6d2" />
      <rect x="0" y="168" width="640" height="112" fill="#c9b492" />
      <rect x="288" y="96" width="352" height="92" fill="#b7b1a6" />
      <rect x="288" y="84" width="352" height="14" fill="#d4d0c8" />
      <path d="M288 188h352v28H288z" fill="#9c9588" />
      {isGap ? (
        <path d="M236 188h52l-22 52h-52z" fill="#6b5340" />
      ) : (
        <path d="M250 188h38v20H250z" fill="#8d7a5c" />
      )}
      <path
        d={
          isGap
            ? "M24 176c28-18 54-8 78-4 22 4 40-10 62-6"
            : "M24 176c28-18 54-8 78-4 22 4 44-12 70-4 30 10 48 4 72 2 26-2 40-16 68-8 22 6 36 4 58 8"
        }
        fill="none"
        stroke="#3f5a2a"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {(isGap
        ? [
            [48, 164],
            [96, 168],
            [148, 160],
          ]
        : [
            [48, 164],
            [96, 168],
            [154, 166],
            [214, 172],
            [268, 162],
            [322, 168],
            [376, 176],
          ]
      ).map(([x, y], i) => (
        <g key={`${variant}-${i}`}>
          <circle cx={x} cy={y} r="6" fill="#2f471c" />
          <path
            d={`M${x} ${y - 6} c -6 -18 6 -28 0 -36`}
            fill="none"
            stroke="#4d6b32"
            strokeWidth="3"
          />
          <ellipse
            cx={x - 8}
            cy={y - 38}
            rx="11"
            ry="5"
            fill="#5d8038"
            transform={`rotate(-28 ${x - 8} ${y - 38})`}
          />
          <ellipse
            cx={x + 10}
            cy={y - 34}
            rx="12"
            ry="5"
            fill="#6a9140"
            transform={`rotate(22 ${x + 10} ${y - 34})`}
          />
        </g>
      ))}
      <text
        x="420"
        y="64"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {isGap ? "Air gap — runners stop here" : "Runners walk over the slab"}
      </text>
      <text
        x="36"
        y="248"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Lawn
      </text>
      <text
        x="430"
        y="248"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Sidewalk
      </text>
    </svg>
  )
}
