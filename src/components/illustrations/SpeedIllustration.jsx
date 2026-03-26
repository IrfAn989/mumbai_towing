export default function SpeedIllustration() {
  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-75" />
      <svg viewBox="0 0 480 360" className="w-full drop-shadow-2xl" fill="none">
        <circle cx="200" cy="170" r="130" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
        <circle cx="200" cy="170" r="115" fill="none" stroke="white" strokeWidth="1" opacity="0.15" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = 200 + 105 * Math.cos(angle);
          const y1 = 170 + 105 * Math.sin(angle);
          const x2 = 200 + 115 * Math.cos(angle);
          const y2 = 170 + 115 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="3" opacity="0.5" strokeLinecap="round" />;
        })}
        <text x="200" y="145" textAnchor="middle" fill="white" fontSize="64" fontWeight="900" opacity="0.15">30</text>
        <text x="200" y="175" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" opacity="0.5">MINUTES</text>
        <line x1="200" y1="170" x2="200" y2="80" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
        <line x1="200" y1="170" x2="270" y2="170" stroke="#FFF7ED" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        <circle cx="200" cy="170" r="7" fill="white" />
        {[[310, 160, 440, 152], [315, 185, 460, 185], [310, 208, 445, 218]].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
        ))}
        <rect x="270" y="270" width="90" height="38" rx="5" fill="white" opacity="0.9" />
        <rect x="340" y="258" width="52" height="50" rx="6" fill="white" />
        <circle cx="288" cy="312" r="13" fill="#EA580C" />
        <circle cx="348" cy="312" r="13" fill="#EA580C" />
        <circle cx="380" cy="312" r="10" fill="#EA580C" />
        <ellipse cx="390" cy="286" rx="8" ry="6" fill="#FCD34D" opacity="0.9" />
        <rect x="344" y="254" width="14" height="5" rx="2.5" fill="#EF4444" />
        <rect x="361" y="254" width="14" height="5" rx="2.5" fill="#FBBF24" />
        <rect x="250" y="326" width="230" height="34" rx="3" fill="white" opacity="0.06" />
      </svg>
    </div>
  );
}
