export default function EmergencyIllustration() {
  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl scale-75" />
      <svg viewBox="0 0 480 360" className="w-full drop-shadow-2xl" fill="none">
        <rect x="0" y="270" width="480" height="90" rx="0" fill="#1E293B" opacity="0.6" />
        <rect x="60" y="310" width="50" height="6" rx="3" fill="white" opacity="0.3" />
        <rect x="170" y="310" width="50" height="6" rx="3" fill="white" opacity="0.3" />
        <rect x="280" y="310" width="50" height="6" rx="3" fill="white" opacity="0.3" />
        <rect x="390" y="310" width="50" height="6" rx="3" fill="white" opacity="0.3" />
        <rect x="230" y="210" width="150" height="60" rx="8" fill="#334155" />
        <rect x="245" y="185" width="118" height="38" rx="7" fill="#475569" />
        <rect x="252" y="190" width="45" height="27" rx="4" fill="#0F172A" opacity="0.8" />
        <rect x="305" y="190" width="45" height="27" rx="4" fill="#0F172A" opacity="0.8" />
        <circle cx="268" cy="274" r="20" fill="#1E293B" stroke="#475569" strokeWidth="4" />
        <circle cx="268" cy="274" r="9" fill="#334155" />
        <circle cx="356" cy="274" r="20" fill="#1E293B" stroke="#475569" strokeWidth="4" />
        <circle cx="356" cy="274" r="9" fill="#334155" />
        <rect x="365" y="200" width="30" height="55" rx="4" fill="#374151" />
        <rect x="363" y="198" width="34" height="6" rx="3" fill="#94A3B8" />
        <polygon points="200,255 225,210 250,255" fill="#F97316" opacity="0.9" />
        <polygon points="205,252 225,215 245,252" fill="#0F172A" opacity="0.6" />
        <text x="225" y="248" textAnchor="middle" fill="#F97316" fontSize="18" fontWeight="bold">!</text>
        <rect x="20" y="215" width="110" height="55" rx="6" fill="#EA580C" />
        <rect x="110" y="200" width="65" height="70" rx="8" fill="#F97316" />
        <rect x="118" y="207" width="50" height="30" rx="5" fill="#0F172A" opacity="0.7" />
        <ellipse cx="172" cy="248" rx="10" ry="7" fill="#FCD34D" opacity="0.9" />
        <circle cx="52" cy="272" r="19" fill="#1E293B" stroke="#F97316" strokeWidth="3" />
        <circle cx="52" cy="272" r="9" fill="#334155" />
        <circle cx="115" cy="272" r="19" fill="#1E293B" stroke="#F97316" strokeWidth="3" />
        <circle cx="115" cy="272" r="9" fill="#334155" />
        <circle cx="157" cy="272" r="16" fill="#1E293B" stroke="#F97316" strokeWidth="3" />
        <circle cx="157" cy="272" r="7" fill="#334155" />
        <line x1="20" y1="225" x2="0" y2="200" stroke="#94A3B8" strokeWidth="6" strokeLinecap="round" />
        <rect x="120" y="196" width="18" height="7" rx="3.5" fill="#EF4444" />
        <rect x="142" y="196" width="18" height="7" rx="3.5" fill="#F97316" />
        {[[60, 50], [120, 30], [200, 60], [290, 40], [380, 55], [440, 80], [460, 30]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity="0.6" />
        ))}
      </svg>
    </div>
  );
}
