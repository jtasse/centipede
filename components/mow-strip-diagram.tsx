type MowStripDiagramProps = {
  className?: string
}

export function MowStripDiagram({ className }: MowStripDiagramProps) {
  return (
    <svg
      viewBox="0 0 720 400"
      role="img"
      className={className}
      aria-label="Side view of a raised hard ribbon along a sidewalk. The strip sits one to two inches above the grass. A mower wheel rolls on it. A finger-width air gap sits between the new strip and the old concrete."
    >
      <defs>
        <pattern
          id="mowLawnDots"
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="4" cy="5" r="1.4" fill="#2f471c" />
          <circle cx="12" cy="12" r="1.2" fill="#4d6b32" />
        </pattern>
        <marker
          id="mowStripArrow"
          markerWidth="8"
          markerHeight="8"
          refX="4"
          refY="4"
          orient="auto"
        >
          <path d="M1 1 L7 4 L1 7 Z" fill="#5c564c" />
        </marker>
      </defs>

      <rect width="720" height="400" fill="#efe6d2" />

      <rect x="0" y="236" width="720" height="164" fill="#c9b492" />
      <rect x="0" y="214" width="248" height="28" fill="#6a8a3e" />
      <rect x="0" y="214" width="248" height="28" fill="url(#mowLawnDots)" opacity="0.35" />

      <rect x="248" y="176" width="176" height="80" fill="#9aa3ad" />
      <rect x="248" y="164" width="176" height="14" fill="#cfd4d8" />
      <path d="M248 256h176v16H248z" fill="#7d868f" />

      <rect x="424" y="176" width="16" height="80" fill="#6b5340" />

      <rect x="440" y="164" width="280" height="88" fill="#b7b1a6" />
      <rect x="440" y="152" width="280" height="14" fill="#d4d0c8" />
      <path d="M440 252h280v20H440z" fill="#9c9588" />

      <g transform="translate(278 46)">
        <ellipse cx="56" cy="86" rx="32" ry="32" fill="#3a3a3a" />
        <ellipse cx="56" cy="86" rx="20" ry="20" fill="#6e6e6e" />
        <ellipse cx="56" cy="86" rx="7" ry="7" fill="#c5c5c5" />
        <rect x="49" y="24" width="14" height="32" rx="4" fill="#5c564c" />
      </g>

      <path
        d="M20 206c28-12 48-2 72 4 22 6 40-10 62-2"
        fill="none"
        stroke="#3f5a2a"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {[
        [40, 198],
        [92, 204],
        [148, 198],
        [210, 202],
      ].map(([x, y], i) => (
        <g key={`ms-${i}`}>
          <circle cx={x} cy={y} r="5" fill="#2f471c" />
          <ellipse
            cx={x - 6}
            cy={y - 18}
            rx="10"
            ry="4"
            fill="#5d8038"
            transform={`rotate(-24 ${x - 6} ${y - 18})`}
          />
        </g>
      ))}

      <text
        x="36"
        y="40"
        fill="#5c564c"
        fontSize="18"
        fontFamily="ui-serif, Georgia, serif"
      >
        Runners face a small cliff
      </text>
      <text
        x="334"
        y="78"
        textAnchor="middle"
        fill="#5c564c"
        fontSize="12"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Mower wheel
      </text>

      <line
        x1="248"
        y1="318"
        x2="424"
        y2="318"
        stroke="#5c564c"
        strokeWidth="1.5"
        markerStart="url(#mowStripArrow)"
        markerEnd="url(#mowStripArrow)"
      />
      <text
        x="336"
        y="340"
        textAnchor="middle"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        4–6 in wide
      </text>

      <line
        x1="232"
        y1="176"
        x2="232"
        y2="214"
        stroke="#5c564c"
        strokeWidth="1.5"
        markerStart="url(#mowStripArrow)"
        markerEnd="url(#mowStripArrow)"
      />
      <text
        x="220"
        y="168"
        textAnchor="end"
        fill="#5c564c"
        fontSize="12"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        1–2 in above grass
      </text>

      <line
        x1="424"
        y1="128"
        x2="440"
        y2="128"
        stroke="#5c564c"
        strokeWidth="1.5"
        markerStart="url(#mowStripArrow)"
        markerEnd="url(#mowStripArrow)"
      />
      <text
        x="432"
        y="118"
        textAnchor="middle"
        fill="#5c564c"
        fontSize="12"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Finger gap
      </text>

      <text
        x="36"
        y="372"
        fill="#3f5a2a"
        fontSize="16"
        fontFamily="ui-serif, Georgia, serif"
      >
        Lawn
      </text>
      <text
        x="268"
        y="372"
        fill="#5c564c"
        fontSize="16"
        fontFamily="ui-serif, Georgia, serif"
      >
        Raised strip
      </text>
      <text
        x="500"
        y="372"
        fill="#5c564c"
        fontSize="16"
        fontFamily="ui-serif, Georgia, serif"
      >
        Old sidewalk
      </text>
    </svg>
  )
}
