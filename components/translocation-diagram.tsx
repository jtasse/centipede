type TranslocationDiagramProps = {
  className?: string
}

export function TranslocationDiagram({ className }: TranslocationDiagramProps) {
  return (
    <svg
      viewBox="0 0 720 280"
      role="img"
      className={className}
      aria-label="A centipede stolon running from lawn, under a strip of tape, onto the sidewalk. An arrow shows glyphosate moving through the stem into the taped lawn."
    >
      <rect width="720" height="280" fill="#efe6d2" />
      <rect x="0" y="0" width="280" height="280" fill="#6a8a3e" />
      <rect x="280" y="0" width="88" height="280" fill="#f4ead0" />
      <rect x="280" y="0" width="88" height="280" fill="#e6d7a8" opacity="0.5" />
      <rect x="448" y="0" width="272" height="280" fill="#b7b1a6" />
      <rect x="448" y="0" width="16" height="280" fill="#d4d0c8" />

      <path
        d="M36 150 C 120 132, 200 168, 280 148 S 360 132, 430 152 S 520 138, 640 158"
        fill="none"
        stroke="#3f5a2a"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {[60, 140, 220, 300, 368, 430, 510, 590, 650].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={148 + (i % 3) * 4}
          r="7"
          fill="#2f471c"
        />
      ))}

      <rect
        x="286"
        y="118"
        width="76"
        height="28"
        rx="3"
        fill="#d4c48a"
        stroke="#8a7a4a"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />

      <path
        d="M420 152 C 360 152, 330 152, 250 148"
        fill="none"
        stroke="#9a3b1a"
        strokeWidth="3"
        markerEnd="url(#backArrow)"
      />
      <defs>
        <marker
          id="backArrow"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0 0 L8 4 L0 8 Z" fill="#9a3b1a" />
        </marker>
      </defs>

      <text
        x="24"
        y="36"
        fill="#efe6d2"
        fontSize="14"
        fontFamily="ui-serif, Georgia, serif"
      >
        Lawn you taped
      </text>
      <text
        x="292"
        y="44"
        fill="#5c564c"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Tape
      </text>
      <text
        x="368"
        y="92"
        fill="#9a3b1a"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Glyphosate still
      </text>
      <text
        x="368"
        y="108"
        fill="#9a3b1a"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        travels this way
      </text>
      <text
        x="480"
        y="36"
        fill="#5c564c"
        fontSize="14"
        fontFamily="ui-serif, Georgia, serif"
      >
        Sidewalk
      </text>
      <text
        x="24"
        y="252"
        fill="#efe6d2"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Tape stops droplets. It does not cut the stolon.
      </text>
    </svg>
  )
}
