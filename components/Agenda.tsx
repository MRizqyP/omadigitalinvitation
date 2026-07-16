import { eventConfig } from "@/lib/event-config";

function AgendaIcon({ id }: { id: (typeof eventConfig.agenda)[number]["id"] }) {
  const common = "h-7 w-7 text-gold";

  switch (id) {
    case "pengajian":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 6v13c3-1.2 5.5-.8 8 .8 2.5-1.6 5-2 8-.8V6c-3-1.2-5.5-.8-8 .8C9.5 5.2 7 4.8 4 6z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path d="M12 7v12" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "games":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="5" y="9" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5 12h14M12 9V20" stroke="currentColor" strokeWidth="1.4" />
          <path d="M9 9c0-2 1.5-3.5 3-3.5S15 7 15 9" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "tilawah":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 5h7v14H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM12 5h7a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-7"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path d="M15 9h2M15 12h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "saweran":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 14c-2 0-3.5-1.2-3.5-3S6 8 8 8h2.5M16 10c2 0 3.5 1.2 3.5 3S18 16 16 16h-2.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <rect x="8" y="10" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7 18h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "makan":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="13" r="6.5" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M9 7.5V5M12 7V4.5M15 7.5V5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path d="M9.5 13h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
  }
}

export function Agenda() {
  return (
    <section className="relative z-10 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-display text-2xl text-gold-light sm:text-3xl">Rangkaian Acara</h2>
        <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <ul className="mt-8 grid grid-cols-3 gap-x-2 gap-y-5 sm:grid-cols-5 sm:gap-3">
          {eventConfig.agenda.map((item) => (
            <li key={item.id} className="flex flex-col items-center gap-2">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-navy-soft/50 shadow-[0_0_20px_rgba(201,168,76,0.12)] transition duration-500 hover:border-gold/70 hover:shadow-[0_0_24px_rgba(201,168,76,0.28)]">
                <AgendaIcon id={item.id} />
              </span>
              <span className="max-w-[5.5rem] text-center text-xs leading-snug text-cream/75 sm:text-[13px]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
