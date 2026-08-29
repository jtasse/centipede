type WipeDiagramProps = {
  className?: string
}

export function WipeDiagram({ className }: WipeDiagramProps) {
  return (
    <svg
      viewBox="0 0 720 360"
      role="img"
      className={className}
      aria-label="Side view of a sidewalk with centipede runners on the concrete. A sponge on a stick is dabbing those runners. A spray bottle over the lawn is crossed out."
    >
      <rect width="720" height="360" fill="#efe6d2" />

      <rect x="0" y="220" width="720" height="140" fill="#c9b492" />
      <rect x="276" y="132" width="444" height="96" fill="#b7b1a6" />
      <rect x="276" y="120" width="444" height="14" fill="#d4d0c8" />
      <path d="M276 228h444v26H276z" fill="#9c9588" />
      <path d="M244 228h32v16H244z" fill="#8d7a5c" />

      <path
        d="M24 208c32-16 58-6 86 0 26 6 46-12 74-2 28 10 46 4 70 2 24-2 40-12 68-4 24 6 40 8 66 4 28-4 50 2 82 8 26 4 48 4 76 2 24-2 44 6 70 6"
        fill="none"
        stroke="#3f5a2a"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {[
        [52, 198],
        [108, 204],
        [162, 200],
        [218, 206],
        [278, 202],
        [340, 208],
        [408, 214],
        [476, 210],
        [548, 216],
        [616, 212],
      ].map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y} r="6" fill="#2f471c" />
          {x < 270 ? (
            <>
              <path
                d={`M${x} ${y - 6} c -6 -16 6 -26 0 -34`}
                fill="none"
                stroke="#4d6b32"
                strokeWidth="3"
              />
              <ellipse
                cx={x - 8}
                cy={y - 36}
                rx="11"
                ry="5"
                fill="#5d8038"
                transform={`rotate(-28 ${x - 8} ${y - 36})`}
              />
              <ellipse
                cx={x + 10}
                cy={y - 32}
                rx="12"
                ry="5"
                fill="#6a9140"
                transform={`rotate(22 ${x + 10} ${y - 32})`}
              />
            </>
          ) : (
            <ellipse
              cx={x + 12}
              cy={y - 6}
              rx="14"
              ry="4"
              fill="#5d8038"
              transform={`rotate(14 ${x + 12} ${y - 6})`}
            />
          )}
        </g>
      ))}

      <g transform="translate(430 78)">
        <rect
          x="48"
          y="0"
          width="13"
          height="96"
          rx="4"
          fill="#8a6a3a"
          transform="rotate(32 54.5 48)"
        />
        <rect
          x="86"
          y="82"
          width="56"
          height="28"
          rx="8"
          fill="#e8d48a"
          stroke="#b8963a"
          strokeWidth="2"
          transform="rotate(16 114 96)"
        />
      </g>

      <g transform="translate(36 28)">
        <rect
          x="22"
          y="28"
          width="22"
          height="38"
          rx="4"
          fill="#d4d0c8"
          stroke="#5c564c"
          strokeWidth="2"
        />
        <rect x="26" y="14" width="14" height="18" rx="3" fill="#9c9588" />
        <circle cx="33" cy="14" r="5" fill="#5c564c" />
        <path
          d="M40 16c14-10 24-8 34-2"
          fill="none"
          stroke="#9c9588"
          strokeWidth="2"
          strokeDasharray="2 3"
        />
        <circle cx="58" cy="10" r="2" fill="#9c9588" />
        <circle cx="70" cy="16" r="1.6" fill="#9c9588" />
        <circle cx="78" cy="8" r="1.4" fill="#9c9588" />
        <path
          d="M10 8 L86 52 M86 8 L10 52"
          fill="none"
          stroke="#9a3b1a"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <text
          x="0"
          y="78"
          fill="#9a3b1a"
          fontSize="13"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          Not a misting sprayer
        </text>
      </g>

      <text
        x="300"
        y="48"
        fill="#5c564c"
        fontSize="18"
        fontFamily="ui-serif, Georgia, serif"
      >
        Paint these runners
      </text>
      <text
        x="300"
        y="70"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Sponge, foam roller, or wick — on the slab only
      </text>

      <text
        x="36"
        y="312"
        fill="#3f5a2a"
        fontSize="16"
        fontFamily="ui-serif, Georgia, serif"
      >
        Living lawn
      </text>
      <text
        x="300"
        y="312"
        fill="#5c564c"
        fontSize="16"
        fontFamily="ui-serif, Georgia, serif"
      >
        Sidewalk
      </text>
    </svg>
  )
}
