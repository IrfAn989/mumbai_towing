export default function FlatbedIllustration() {
  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute inset-0 bg-blue-500/15 rounded-full blur-3xl scale-75" />
      <svg viewBox="0 0 480 340" className="w-full drop-shadow-2xl" fill="none">
        <rect x="0" y="268" width="480" height="72" fill="#1E293B" opacity="0.5" />
        {[60, 170, 280, 390].map((x, i) => (
          <rect key={i} x={x} y="300" width="50" height="5" rx="2.5" fill="white" opacity="0.25" />
        ))}
        <rect x="18" y="220" width="310" height="48" rx="4" fill="#1E3A5F" />
        <rect x="18" y="215" width="310" height="10" rx="3" fill="#1D4ED8" />
        <rect x="18" y="228" width="18" height="36" rx="3" fill="#1D4ED8" opacity="0.7" />
        <rect x="80" y="175" width="200" height="48" rx="6" fill="#334155" />
        <rect x="100" y="153" width="160" height="32" rx="7" fill="#3B82F6" opacity="0.5" />
        <rect x="110" y="158" width="60" height="22" rx="4" fill="#0F172A" opacity="0.7" />
        <rect x="180" y="158" width="60" height="22" rx="4" fill="#0F172A" opacity="0.7" />
        <circle cx="118" cy="226" r="16" fill="#0F172A" stroke="#3B82F6" strokeWidth="3" opacity="0.6" />
        <circle cx="242" cy="226" r="16" fill="#0F172A" stroke="#3B82F6" strokeWidth="3" opacity="0.6" />
        <rect x="305" y="188" width="90" height="80" rx="8" fill="#1D4ED8" />
        <rect x="315" y="195" width="72" height="42" rx="6" fill="#0F172A" opacity="0.7" />
        <ellipse cx="393" cy="242" rx="11" ry="8" fill="#FCD34D" />
        <circle cx="330" cy="272" r="22" fill="#0F172A" stroke="#3B82F6" strokeWidth="4" />
        <circle cx="330" cy="272" r="10" fill="#1E293B" />
        <circle cx="390" cy="272" r="22" fill="#0F172A" stroke="#3B82F6" strokeWidth="4" />
        <circle cx="390" cy="272" r="10" fill="#1E293B" />
        <circle cx="60" cy="272" r="20" fill="#0F172A" stroke="#1D4ED8" strokeWidth="3" />
        <circle cx="60" cy="272" r="9" fill="#1E293B" />
        <circle cx="140" cy="272" r="20" fill="#0F172A" stroke="#1D4ED8" strokeWidth="3" />
        <circle cx="140" cy="272" r="9" fill="#1E293B" />
        <circle cx="230" cy="272" r="20" fill="#0F172A" stroke="#1D4ED8" strokeWidth="3" />
        <circle cx="230" cy="272" r="9" fill="#1E293B" />
        <rect x="318" y="183" width="20" height="8" rx="4" fill="#EF4444" />
        <rect x="345" y="183" width="20" height="8" rx="4" fill="#3B82F6" />
        <line x1="110" y1="223" x2="100" y2="268" stroke="#F59E0B" strokeWidth="2.5" opacity="0.7" />
        <line x1="250" y1="223" x2="260" y2="268" stroke="#F59E0B" strokeWidth="2.5" opacity="0.7" />
        {[[30, 60], [100, 35], [220, 70], [350, 45], [430, 65], [460, 30]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity="0.6" />
        ))}
        <rect x="350" y="100" width="100" height="52" rx="14" fill="#1D4ED8" opacity="0.9" />
        <text x="400" y="121" textAnchor="middle" fill="#93C5FD" fontSize="10" fontWeight="600">INSURED</text>
        <text x="400" y="141" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">✓ Safe</text>
      </svg>
    </div>
  );
}
