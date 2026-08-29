type InternodeDiagramProps = {
  className?: string
}

export function InternodeDiagram({ className }: InternodeDiagramProps) {
  return (
    <svg
      viewBox="0 0 720 300"
      role="img"
      className={className}
      aria-label="Two centipede stolons: untreated with long stretches between nodes crawling onto concrete, and treated with short internodes that stay in the lawn."
    >
      <rect width="720" height="300" fill="#efe6d2" />
      <rect x="400" y="0" width="320" height="300" fill="#b7b1a6" />
      <rect x="400" y="0" width="18" height="300" fill="#d4d0c8" />

      <text
        x="24"
        y="32"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Untreated · long internodes
      </text>
      <path
        d="M36 78 C 90 70, 140 92, 200 80 S 300 70, 360 88 S 430 70, 520 86 S 600 78, 680 90"
        fill="none"
        stroke="#3f5a2a"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {[36, 110, 200, 280, 360, 440, 520, 600, 680].map((x, i) => (
        <g key={`long-${x}`}>
          <circle cx={x} cy={80 + (i % 2) * 6} r="7" fill="#2f471c" />
          <ellipse
            cx={x - 10}
            cy={52}
            rx="14"
            ry="6"
            fill="#5d8038"
            transform={`rotate(-18 ${x - 10} 52)`}
          />
        </g>
      ))}

      <text
        x="24"
        y="168"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        After a growth regulator · short internodes
      </text>
      <path
        d="M36 220 C 70 214, 100 226, 130 218 S 180 214, 210 222 S 250 214, 280 220 S 320 216, 350 222 S 380 218, 392 220"
        fill="none"
        stroke="#3f5a2a"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {[36, 78, 118, 158, 198, 238, 278, 318, 358, 392].map((x, i) => (
        <g key={`short-${x}`}>
          <circle cx={x} cy={218 + (i % 2) * 4} r="6" fill="#2f471c" />
          <ellipse
            cx={x - 6}
            cy={196}
            rx="10"
            ry="4.5"
            fill="#4d6b32"
            transform={`rotate(-12 ${x - 6} 196)`}
          />
        </g>
      ))}

      <text
        x="430"
        y="32"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Sidewalk
      </text>
      <text
        x="430"
        y="270"
        fill="#3f5a2a"
        fontSize="13"
        fontFamily="ui-serif, Georgia, serif"
      >
        Same plant. Shorter steps.
      </text>
    </svg>
  )
}
