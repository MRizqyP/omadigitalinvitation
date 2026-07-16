"use client";

import { useActionState, useEffect, useState } from "react";
import { submitRsvp, type RsvpState } from "@/app/actions/rsvp";
import { eventConfig } from "@/lib/event-config";

const initialState: RsvpState = { ok: false, message: "" };

export function RsvpForm() {
  const [state, formAction, pending] = useActionState(submitRsvp, initialState);
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir" | "">("");

  useEffect(() => {
    if (state.ok) {
      setAttendance("");
    }
  }, [state.ok]);

  if (state.ok) {
    return (
      <section id="rsvp" className="relative z-10 px-5 pb-16 pt-4 sm:px-8">
        <div className="mx-auto max-w-md rounded-2xl border border-gold/40 bg-[var(--glass)] p-8 text-center backdrop-blur-md">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-gold/15 text-2xl text-gold">
            ✓
          </div>
          <h2 className="font-display text-2xl text-gold-light">Terima Kasih</h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">{state.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="relative z-10 px-5 pb-16 pt-4 sm:px-8">
      <div className="mx-auto max-w-md rounded-2xl border border-gold/30 bg-[var(--glass)] p-6 backdrop-blur-md sm:p-8">
        <h2 className="text-center font-display text-2xl text-gold-light sm:text-3xl">
          Mohon Konfirmasi Kehadiran
        </h2>
        <p className="mt-2 text-center text-xs leading-relaxed text-cream/55">
          {eventConfig.rsvpDeadlineNote}
        </p>

        <form action={formAction} className="mt-7 space-y-5">
          <label className="block">
            <span className="mb-1.5 block text-xs tracking-wide text-cream/60">Nama</span>
            <input
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={100}
              placeholder="Nama lengkap Anda"
              className="w-full rounded-lg border border-gold/25 bg-navy-deep/70 px-3.5 py-2.5 text-sm text-cream outline-none transition placeholder:text-cream/35 focus:border-gold/60 focus:ring-1 focus:ring-gold/40"
            />
          </label>

          <fieldset>
            <legend className="mb-2 text-xs tracking-wide text-cream/60">Kehadiran</legend>
            <div className="grid gap-2.5 sm:grid-cols-2">
              <label
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-3 text-sm transition ${
                  attendance === "hadir"
                    ? "border-gold bg-gold/20 text-gold-light"
                    : "border-gold/25 bg-navy-deep/50 text-cream/80 hover:border-gold/45"
                }`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="hadir"
                  required
                  className="sr-only"
                  checked={attendance === "hadir"}
                  onChange={() => setAttendance("hadir")}
                />
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px]">
                  ✓
                </span>
                <span>
                  <span className="block font-semibold tracking-wide">HADIR</span>
                  <span className="text-[11px] opacity-70">Saya akan hadir</span>
                </span>
              </label>

              <label
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-3 text-sm transition ${
                  attendance === "tidak_hadir"
                    ? "border-cream/40 bg-navy-soft text-cream"
                    : "border-gold/25 bg-navy-deep/50 text-cream/80 hover:border-gold/45"
                }`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="tidak_hadir"
                  required
                  className="sr-only"
                  checked={attendance === "tidak_hadir"}
                  onChange={() => setAttendance("tidak_hadir")}
                />
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px]">
                  ✕
                </span>
                <span>
                  <span className="block font-semibold tracking-wide">TIDAK HADIR</span>
                  <span className="text-[11px] opacity-70">
                    Mohon maaf, tidak dapat hadir
                  </span>
                </span>
              </label>
            </div>
          </fieldset>

          {attendance === "hadir" && (
            <label className="block animate-fade-up">
              <span className="mb-1.5 block text-xs tracking-wide text-cream/60">
                Jumlah orang
              </span>
              <input
                name="guest_count"
                type="number"
                min={1}
                max={20}
                defaultValue={1}
                required
                className="w-full rounded-lg border border-gold/25 bg-navy-deep/70 px-3.5 py-2.5 text-sm text-cream outline-none transition focus:border-gold/60 focus:ring-1 focus:ring-gold/40"
              />
            </label>
          )}

          <label className="block">
            <span className="mb-1.5 block text-xs tracking-wide text-cream/60">
              Ucapan / Doa (opsional)
            </span>
            <textarea
              name="message"
              rows={3}
              maxLength={500}
              placeholder="Tuliskan doa atau ucapan Anda..."
              className="w-full resize-none rounded-lg border border-gold/25 bg-navy-deep/70 px-3.5 py-2.5 text-sm text-cream outline-none transition placeholder:text-cream/35 focus:border-gold/60 focus:ring-1 focus:ring-gold/40"
            />
          </label>

          {state.message && !state.ok && (
            <p className="rounded-lg border border-red-400/30 bg-red-950/40 px-3 py-2 text-sm text-red-200">
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={pending || !attendance}
            className="w-full rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold-light py-3.5 text-sm font-semibold tracking-wide text-navy-deep shadow-[0_8px_28px_rgba(201,168,76,0.28)] transition hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100"
          >
            {pending ? "Mengirim..." : "Kirim Konfirmasi"}
          </button>
        </form>
      </div>
    </section>
  );
}
