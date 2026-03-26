export default function CoverageIllustration() {
  const areas = [
    { cx: 240, cy: 100, name: 'Borivali' },
    { cx: 170, cy: 145, name: 'Andheri' },
    { cx: 270, cy: 155, name: 'Powai' },
    { cx: 155, cy: 195, name: 'Bandra' },
    { cx: 195, cy: 215, name: 'Dadar' },
    { cx: 310, cy: 200, name: 'Thane' },
    { cx: 170, cy: 255, name: 'Worli' },
    { cx: 330, cy: 260, name: 'Navi Mumbai' },
    { cx: 205, cy: 290, name: 'Churchgate' },
  ];

  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute inset-0 bg-orange-500/15 rounded-full blur-3xl scale-75" />
      <svg viewBox="0 0 480 360" className="w-full drop-shadow-2xl" fill="none">
        <path
          d="M240 60 L200 80 L170 110 L145 145 L130 180 L135 220 L150 255 L165 280 L185 300 L205 315 L230 320 L250 315 L265 300 L280 280 L300 255 L320 225 L335 195 L330 165 L310 145 L290 125 L270 110 L260 80 Z"
          fill="white"
          opacity="0.06"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.2"
        />
        {areas.slice(0, -1).map((a, i) => (
          <line key={i}
            x1={a.cx} y1={a.cy} x2={areas[i + 1].cx} y2={areas[i + 1].cy}
            stroke="#F97316" strokeWidth="1" opacity="0.2" />
        ))}
        {areas.map((area, i) => (
          <g key={area.name}>
            <circle cx={area.cx} cy={area.cy} r="6" fill="#F97316" opacity="0.9" />
            <circle cx={area.cx} cy={area.cy} r="3" fill="white" />
            <text x={area.cx} y={area.cy - 12}
              textAnchor="middle" fill="white" fontSize="8" fontWeight="600" opacity="0.7">
              {area.name}
            </text>
          </g>
        ))}
        <rect x="370" y="90" width="90" height="48" rx="8" fill="#F97316" opacity="0.95" />
        <text x="415" y="112" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">TOWING</text>
        <text x="415" y="128" textAnchor="middle" fill="white" fontSize="11" fontWeight="900">24/7</text>
        {areas.slice(0, 4).map((area, i) => (
          <line key={`route-${i}`}
            x1="415" y1="138" x2={area.cx} y2={area.cy}
            stroke="#F97316" strokeWidth="1" strokeDasharray="6 4"
            opacity="0.2" />
        ))}
        <rect x="100" y="335" width="280" height="20" rx="10" fill="white" opacity="0.06" />
        <text x="240" y="349" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" opacity="0.5">
          All Mumbai · Thane · Navi Mumbai
        </text>
      </svg>
    </div>
  );
}
