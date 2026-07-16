import Image from "next/image";
import { eventConfig } from "@/lib/event-config";

export function PhotoGallery() {
  const { photos } = eventConfig;
  const featured = photos[0];
  const others = photos.slice(1);

  return (
    <section className="relative z-10 px-5 pt-10 sm:px-8">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl leading-snug text-gold-light sm:text-3xl">
          {eventConfig.photoGalleryTitle}
        </h2>
        <p className="mt-1 text-center font-display text-xl italic text-gold/90 sm:text-2xl">
          {eventConfig.photoGallerySubtitle}
        </p>
        <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Featured formal portrait */}
        <figure className="mt-7 overflow-hidden rounded-2xl border border-gold/35 bg-navy-soft/40 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="(max-width: 512px) 100vw, 448px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
          </div>
          {featured.caption && (
            <figcaption className="border-t border-gold/20 px-4 py-3 text-center text-sm text-cream/70">
              {featured.caption}
            </figcaption>
          )}
        </figure>

        {/* Garden portraits */}
        <ul className="mt-3 grid grid-cols-2 gap-3">
          {others.map((photo) => (
            <li key={photo.src}>
              <figure className="overflow-hidden rounded-xl border border-gold/30 bg-navy-soft/40 shadow-[0_8px_28px_rgba(0,0,0,0.28)]">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover object-[center_18%]"
                    sizes="(max-width: 512px) 50vw, 220px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent" />
                </div>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-6 px-2 text-center font-display text-lg leading-relaxed text-cream/80 sm:text-xl">
          {eventConfig.closing}
        </p>
      </div>
    </section>
  );
}
