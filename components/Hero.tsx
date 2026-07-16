import { Lantern, OrnamentalArch, StarField } from "@/components/Decorations";
import { eventConfig } from "@/lib/event-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-12 text-center sm:px-8 sm:pt-16">
      <StarField />
      <Lantern className="absolute left-3 top-8 sm:left-8 sm:top-10" />
      <Lantern className="absolute right-3 top-8 sm:right-8 sm:top-10" />

      <div className="relative z-10 mx-auto max-w-lg">
        <OrnamentalArch className="animate-fade-up mb-4" />

        <p
          className="animate-fade-up font-arabic text-2xl leading-relaxed text-gold sm:text-3xl"
          dir="rtl"
          lang="ar"
        >
          {eventConfig.basmala}
        </p>

        <p className="animate-fade-up-delay-1 mt-5 text-xs font-medium tracking-[0.35em] text-cream/80 sm:text-sm">
          {eventConfig.title}
        </p>

        <h1 className="animate-fade-up-delay-1 font-display gold-gradient-text mt-2 text-4xl font-semibold leading-tight sm:text-5xl">
          {eventConfig.eventName}
        </h1>

        <div className="animate-fade-up-delay-2 mx-auto mt-6 inline-flex items-center justify-center">
          <span className="rounded-sm border border-gold/40 bg-gradient-to-r from-gold-dark/40 via-gold/30 to-gold-dark/40 px-6 py-2 text-sm font-medium tracking-wide text-gold-light shadow-[0_0_24px_rgba(201,168,76,0.2)]">
            {eventConfig.host}
          </span>
        </div>

        <p className="animate-fade-up-delay-3 mx-auto mt-7 max-w-md text-sm leading-relaxed text-cream/75 sm:text-base">
          {eventConfig.intro}
        </p>
      </div>
    </section>
  );
}
