import { eventConfig } from "@/lib/event-config";

export function SpeakerTheme() {
  return (
    <section className="relative z-10 px-5 pb-2 sm:px-8">
      <div className="mx-auto max-w-md space-y-4">
        <div className="overflow-hidden rounded-2xl border border-gold/30 bg-[var(--glass)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md">
          <div className="border-b border-gold/25 bg-gold/15 px-4 py-2.5 text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-gold-light uppercase">
              Pembicara
            </p>
          </div>
          <p className="px-5 py-4 text-center font-display text-lg leading-snug text-gold-light sm:text-xl">
            {eventConfig.speaker}
          </p>
        </div>

        <div className="rounded-2xl border border-gold/25 bg-navy-soft/40 px-5 py-4 text-center backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Tema</p>
          <p className="mt-1 font-display text-xl italic text-gold sm:text-2xl">
            {eventConfig.theme}
          </p>
        </div>
      </div>
    </section>
  );
}
