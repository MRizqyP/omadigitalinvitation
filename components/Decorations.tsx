export function StarField() {
  const stars = [
    { top: "8%", left: "12%", size: 3 },
    { top: "14%", left: "78%", size: 2 },
    { top: "22%", left: "88%", size: 3 },
    { top: "18%", left: "42%", size: 2 },
    { top: "6%", left: "56%", size: 2 },
    { top: "28%", left: "18%", size: 2 },
    { top: "12%", left: "30%", size: 3 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold-light/80"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 6px rgba(232, 210, 138, 0.8)",
          }}
        />
      ))}
      <svg
        className="absolute top-[10%] right-[14%] h-4 w-4 text-gold/75"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l1.2 7.3L20 12l-6.8 2.7L12 22l-1.2-7.3L4 12l6.8-2.7L12 2z" />
      </svg>
      <svg
        className="absolute top-[7%] left-[8%] h-7 w-7 text-gold/80"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2c-3.5 3.8-5.5 7.2-5.5 10.2A5.5 5.5 0 0 0 12 17.7a5.5 5.5 0 0 0 5.5-5.5C17.5 9.2 15.5 5.8 12 2z" />
      </svg>
    </div>
  );
}

export function Lantern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`animate-lantern h-14 w-10 text-gold ${className}`}
      viewBox="0 0 40 56"
      fill="none"
      aria-hidden
    >
      <path d="M20 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10h16l2 4H10l2-4z" fill="currentColor" opacity="0.9" />
      <rect
        x="11"
        y="14"
        width="18"
        height="28"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="rgba(201,168,76,0.15)"
      />
      <path
        d="M14 18h12M14 24h12M14 30h12M14 36h12"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path d="M13 42h14l-1.5 4h-11L13 42z" fill="currentColor" opacity="0.85" />
      <circle cx="20" cy="52" r="2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function OrnamentalArch({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`mx-auto w-full max-w-md text-gold ${className}`}
      viewBox="0 0 320 56"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 50 C40 50, 50 8, 160 8 C270 8, 280 50, 310 50"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M24 50 C50 50, 60 18, 160 18 C260 18, 270 50, 296 50"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <circle cx="160" cy="8" r="3" fill="currentColor" />
      <path d="M148 20h24M152 26h16" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}
