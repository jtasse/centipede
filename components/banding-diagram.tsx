type BandingDiagramProps = {
  className?: string
}

export function BandingDiagram({ className }: BandingDiagramProps) {
  return (
    <svg
      viewBox="0 0 720 360"
      role="img"
      className={className}
      aria-label="Top view of a sidewalk with a 6-inch ribbon of lawn next to the concrete marked as the treated strip, and the rest of the lawn left untreated."
    >
      <rect width="720" height="360" fill="#efe6d2" />

      <rect x="0" y="0" width="720" height="188" fill="#6a8a3e" />
      <rect x="0" y="0" width="720" height="188" fill="url(#lawnDots)" opacity="0.35" />

      <rect x="0" y="148" width="720" height="56" fill="#3f5a2a" />
      <rect x="0" y="148" width="720" height="56" fill="#c9de8a" opacity="0.35" />

      <rect x="0" y="204" width="720" height="156" fill="#b7b1a6" />
      <rect x="0" y="204" width="720" height="16" fill="#d4d0c8" />
      <path
        d="M0 248h720M0 292h720"
        stroke="#9c9588"
        strokeWidth="2"
        strokeDasharray="10 14"
      />

      <defs>
        <pattern id="lawnDots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="5" r="1.4" fill="#2f471c" />
          <circle cx="12" cy="12" r="1.2" fill="#4d6b32" />
        </pattern>
        <marker
          id="dimArrow"
          markerWidth="8"
          markerHeight="8"
          refX="4"
          refY="4"
          orient="auto"
        >
          <path d="M1 1 L7 4 L1 7 Z" fill="#5c564c" />
        </marker>
      </defs>

      <path
        d="M96 176c40-18 70-6 110 2 36 8 64-14 108-4 40 8 72 4 112 8"
        fill="none"
        stroke="#2f471c"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {[120, 188, 268, 348, 430].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={170 - (i % 2) * 4} r="5" fill="#2f471c" />
          <ellipse
            cx={x - 8}
            cy={148}
            rx="10"
            ry="4"
            fill="#5d8038"
            transform={`rotate(-24 ${x - 8} 148)`}
          />
        </g>
      ))}

      <g transform="translate(560 96)">
        <rect x="0" y="18" width="14" height="46" rx="3" fill="#5c564c" />
        <circle cx="7" cy="14" r="10" fill="#d4d0c8" stroke="#5c564c" strokeWidth="2" />
        <path d="M7 64 L7 86 L-18 102" fill="none" stroke="#5c564c" strokeWidth="3" />
        <path
          d="M-18 102 c -16 10 -28 6 -40 4"
          fill="none"
          stroke="#7a9a3a"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>

      <rect x="24" y="24" width="168" height="44" rx="8" fill="#efe6d2" />
      <text x="40" y="51" fill="#3f5a2a" fontSize="16" fontFamily="ui-serif, Georgia, serif">
        Rest of the lawn
      </text>
      <text x="40" y="70" fill="#5c564c" fontSize="12" fontFamily="ui-sans-serif, system-ui, sans-serif">
        Leave this dry
      </text>

      <rect x="24" y="158" width="232" height="36" rx="8" fill="#efe6d2" />
      <text x="40" y="181" fill="#2f471c" fontSize="16" fontFamily="ui-serif, Georgia, serif">
        The band · about 6 inches
      </text>

      <text
        x="40"
        y="250"
        fill="#5c564c"
        fontSize="16"
        fontFamily="ui-serif, Georgia, serif"
      >
        Sidewalk
      </text>

      <line
        x1="668"
        y1="148"
        x2="668"
        y2="204"
        stroke="#5c564c"
        strokeWidth="1.5"
        markerStart="url(#dimArrow)"
        markerEnd="url(#dimArrow)"
      />
      <text
        x="632"
        y="180"
        fill="#5c564c"
        fontSize="12"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        transform="rotate(-90 632 180)"
      >
        6 in
      </text>
    </svg>
  )
}
