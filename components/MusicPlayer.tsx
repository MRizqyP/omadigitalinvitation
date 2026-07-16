"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { eventConfig } from "@/lib/event-config";

type MusicContextValue = {
  isOpen: boolean;
  isPlaying: boolean;
  trackTitle: string;
  openInvitation: () => void;
  toggle: () => void;
};

const MusicContext = createContext<MusicContextValue | null>(null);

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used within MusicProvider");
  return ctx;
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const tracks = eventConfig.music.tracks;
  const hasMusic = tracks.length > 0;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  const track = hasMusic ? tracks[trackIndex % tracks.length] : null;

  useEffect(() => {
    if (!track) return;

    const audio = new Audio(track.src);
    audio.loop = tracks.length === 1;
    audio.preload = "auto";
    audio.volume = eventConfig.music.volume;
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      if (tracks.length <= 1) return;
      setTrackIndex((i) => (i + 1) % tracks.length);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };
  }, [track, tracks.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isOpen) return;
    void audio.play().catch(() => setIsPlaying(false));
  }, [trackIndex, isOpen, track?.src]);

  const openInvitation = useCallback(() => {
    setIsOpen(true);
    const audio = audioRef.current;
    if (audio) {
      void audio.play().catch(() => setIsPlaying(false));
    }
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      isPlaying,
      trackTitle: track?.title ?? "Musik",
      openInvitation,
      toggle,
    }),
    [isOpen, isPlaying, track?.title, openInvitation, toggle],
  );

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>;
}

export function OpeningCover() {
  const { isOpen, openInvitation } = useMusic();

  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 px-6 backdrop-blur-sm">
      <div className="max-w-sm text-center">
        <p
          className="font-arabic text-2xl text-gold sm:text-3xl"
          dir="rtl"
          lang="ar"
        >
          {eventConfig.basmala}
        </p>
        <p className="mt-6 text-xs tracking-[0.3em] text-cream/60">UNDANGAN</p>
        <h1 className="mt-2 font-display text-3xl text-gold-light sm:text-4xl">
          {eventConfig.eventName}
        </h1>
        <p className="mt-3 text-sm text-cream/65">{eventConfig.host}</p>

        <button
          type="button"
          onClick={openInvitation}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gradient-to-r from-gold-dark via-gold to-gold-light px-8 py-3.5 text-sm font-semibold tracking-wide text-navy-deep shadow-[0_8px_28px_rgba(201,168,76,0.35)] transition hover:brightness-110 active:scale-[0.98]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M9 18V6l10-2v12" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="7" cy="18" r="2.5" />
            <circle cx="17" cy="16" r="2.5" />
          </svg>
          Buka Undangan
        </button>
        <p className="mt-4 text-xs text-cream/45">Musik akan diputar setelah dibuka</p>
      </div>
    </div>
  );
}

export function MusicToggle() {
  const { isOpen, isPlaying, trackTitle, toggle } = useMusic();

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <p className="max-w-[10rem] truncate rounded-full border border-gold/25 bg-navy-deep/80 px-3 py-1 text-[10px] text-cream/60 backdrop-blur-sm">
        {isPlaying ? "Memutar" : "Dijeda"} · {trackTitle}
      </p>
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-navy/90 text-gold shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-md transition hover:bg-navy-soft ${
          isPlaying ? "animate-lantern" : ""
        }`}
      >
        {isPlaying ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5.5v13l11-6.5L8 5.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
