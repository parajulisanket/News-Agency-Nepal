export function GoldBars({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 150" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFF3B0" />
          <stop offset="1" stopColor="#F7C948" />
        </linearGradient>
        <linearGradient id="gFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F5B82E" />
          <stop offset="1" stopColor="#B7791F" />
        </linearGradient>
      </defs>
      <ellipse cx="110" cy="140" rx="90" ry="7" fill="#000" opacity="0.1" />

      {/* back bar */}
      <g transform="translate(40,8)">
        <polygon points="40,20 120,20 140,48 20,48" fill="url(#gTop)" />
        <rect
          x="20"
          y="48"
          width="120"
          height="26"
          rx="5"
          fill="url(#gFront)"
        />
        <rect
          x="26"
          y="52"
          width="40"
          height="4"
          rx="2"
          fill="#fff"
          opacity="0.35"
        />
      </g>

      {/* front bar */}
      <g transform="translate(20,50)">
        <polygon points="50,22 150,22 175,58 25,58" fill="url(#gTop)" />
        <rect
          x="25"
          y="58"
          width="150"
          height="34"
          rx="6"
          fill="url(#gFront)"
        />
        <rect
          x="33"
          y="63"
          width="52"
          height="5"
          rx="2.5"
          fill="#fff"
          opacity="0.35"
        />
        <text
          x="100"
          y="44"
          textAnchor="middle"
          fontSize="13"
          fontWeight="800"
          fill="#8A5A00"
          opacity="0.8"
        >
          999.9
        </text>
        <text
          x="100"
          y="80"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="#FFF3B0"
          opacity="0.9"
        >
          FINE GOLD
        </text>
      </g>
    </svg>
  );
}

export function SilverBars({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 150" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#CBD5E1" />
        </linearGradient>
        <linearGradient id="sFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CBD5E1" />
          <stop offset="1" stopColor="#64748B" />
        </linearGradient>
      </defs>
      <ellipse cx="110" cy="140" rx="90" ry="7" fill="#000" opacity="0.1" />

      {/* back bar */}
      <g transform="translate(40,8)">
        <polygon points="40,20 120,20 140,48 20,48" fill="url(#sTop)" />
        <rect
          x="20"
          y="48"
          width="120"
          height="26"
          rx="5"
          fill="url(#sFront)"
        />
        <rect
          x="26"
          y="52"
          width="40"
          height="4"
          rx="2"
          fill="#fff"
          opacity="0.5"
        />
      </g>

      {/* front bar */}
      <g transform="translate(20,50)">
        <polygon points="50,22 150,22 175,58 25,58" fill="url(#sTop)" />
        <rect
          x="25"
          y="58"
          width="150"
          height="34"
          rx="6"
          fill="url(#sFront)"
        />
        <rect
          x="33"
          y="63"
          width="52"
          height="5"
          rx="2.5"
          fill="#fff"
          opacity="0.5"
        />
        <text
          x="100"
          y="44"
          textAnchor="middle"
          fontSize="13"
          fontWeight="800"
          fill="#475569"
          opacity="0.85"
        >
          999
        </text>
        <text
          x="100"
          y="80"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="#F1F5F9"
          opacity="0.95"
        >
          SILVER
        </text>
      </g>
    </svg>
  );
}
