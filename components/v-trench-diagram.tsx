type VTrenchDiagramProps = {
  className?: string
}

export function VTrenchDiagram({ className }: VTrenchDiagramProps) {
  return (
    <svg
      viewBox="0 0 720 380"
      role="img"
      className={className}
      aria-label="Side view of a narrow V-shaped ditch cut against a sidewalk. One wall of the ditch is the concrete. A centipede runner stops at the open air instead of walking onto the slab."
    >
      <rect width="720" height="380" fill="#efe6d2" />

      <rect x="0" y="188" width="720" height="192" fill="#c9b492" />
      <path d="M0 188h268L318 292H0z" fill="#8d7a5c" />
      <path d="M268 188h50L318 292h-24z" fill="#6b5340" />

      <rect x="318" y="108" width="402" height="96" fill="#b7b1a6" />
      <rect x="318" y="96" width="402" height="14" fill="#d4d0c8" />
      <path d="M318 204h402v28H318z" fill="#9c9588" />
      <rect x="318" y="232" width="24" height="148" fill="#a8a196" />

      <path
        d="M24 176c36-16 62-4 92 2 28 6 50-12 78-2 26 10 44 2 74-8"
        fill="none"
        stroke="#3f5a2a"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {[
        [48, 166],
        [108, 172],
        [168, 168],
        [228, 158],
      ].map(([x, y], i) => (
        <g key={`vt-${i}`}>
          <circle cx={x} cy={y} r="6" fill="#2f471c" />
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
        </g>
      ))}

      <defs>
        <marker
          id="vTrenchArrow"
          markerWidth="8"
          markerHeight="8"
          refX="4"
          refY="4"
          orient="auto"
        >
          <path d="M1 1 L7 4 L1 7 Z" fill="#5c564c" />
        </marker>
      </defs>

      <line
        x1="268"
        y1="102"
        x2="318"
        y2="102"
        stroke="#5c564c"
        strokeWidth="1.5"
        markerStart="url(#vTrenchArrow)"
        markerEnd="url(#vTrenchArrow)"
      />
      <text
        x="293"
        y="92"
        textAnchor="middle"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        2–3 in wide
      </text>

      <line
        x1="348"
        y1="188"
        x2="348"
        y2="292"
        stroke="#5c564c"
        strokeWidth="1.5"
        markerStart="url(#vTrenchArrow)"
        markerEnd="url(#vTrenchArrow)"
      />
      <text
        x="364"
        y="244"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        3–4 in deep
      </text>

      <text
        x="36"
        y="328"
        fill="#3f5a2a"
        fontSize="16"
        fontFamily="ui-serif, Georgia, serif"
      >
        Lawn
      </text>
      <text
        x="430"
        y="328"
        fill="#5c564c"
        fontSize="16"
        fontFamily="ui-serif, Georgia, serif"
      >
        Sidewalk
      </text>
      <text
        x="36"
        y="44"
        fill="#5c564c"
        fontSize="18"
        fontFamily="ui-serif, Georgia, serif"
      >
        Open air — runners stop here
      </text>
      <text
        x="36"
        y="68"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        One wall of the ditch is the concrete itself
      </text>
    </svg>
  )
}
