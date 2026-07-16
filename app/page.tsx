"use client";

import {
  MusicProvider,
  MusicToggle,
  OpeningCover,
} from "@/components/MusicPlayer";
import { Agenda } from "@/components/Agenda";
import { EventDetails } from "@/components/EventDetails";
import { Hero } from "@/components/Hero";
import { Lantern } from "@/components/Decorations";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RsvpForm } from "@/components/RsvpForm";
import { SpeakerTheme } from "@/components/SpeakerTheme";

function InvitationContent() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden pb-[env(safe-area-inset-bottom)]">
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url(/undangan-reference.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy/95 to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.12),_transparent_55%)]" />
      </div>

      <Lantern className="fixed bottom-6 left-3 z-0 hidden opacity-40 sm:block" />
      <Lantern className="fixed bottom-6 right-3 z-0 hidden opacity-40 sm:block" />

      <div className="relative mx-auto w-full max-w-xl">
        <Hero />
        <EventDetails />
        <PhotoGallery />
        <Agenda />
        <SpeakerTheme />
        <RsvpForm />

        <footer className="px-5 pb-12 text-center text-[11px] tracking-wide text-cream/40">
          Kel. besar Loupias · Tahadduts bin Ni&apos;mah
        </footer>
      </div>

      <OpeningCover />
      <MusicToggle />
    </main>
  );
}

export default function HomePage() {
  return (
    <MusicProvider>
      <InvitationContent />
    </MusicProvider>
  );
}
