import { eventConfig } from "@/lib/event-config";

function CalendarIcon() {
  return (
    <svg className="h-5 w-5 text-gold" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5 text-gold" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4.5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="h-5 w-5 text-gold" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function EventDetails() {
  return (
    <section className="relative z-10 px-5 sm:px-8">
      <div className="mx-auto max-w-md rounded-2xl border border-gold/30 bg-[var(--glass)] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-6">
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-navy-soft/60">
              <CalendarIcon />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Tanggal</p>
              <p className="font-display text-lg text-gold-light sm:text-xl">{eventConfig.date}</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-navy-soft/60">
              <ClockIcon />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Waktu</p>
              <p className="font-display text-lg text-gold-light sm:text-xl">{eventConfig.time}</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-navy-soft/60">
              <PinIcon />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Tempat</p>
              <p className="font-display text-lg text-gold-light sm:text-xl">{eventConfig.venue}</p>
              <p className="mt-0.5 text-sm text-cream/60">{eventConfig.address}</p>
            </div>
          </li>
        </ul>

        <a
          href={eventConfig.venueMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-gold/50 bg-gold/10 py-2.5 text-sm font-medium text-gold-light transition hover:bg-gold/20"
        >
          Lihat lokasi di peta
        </a>
      </div>
    </section>
  );
}
