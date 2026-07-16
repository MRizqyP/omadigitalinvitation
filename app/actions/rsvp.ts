"use server";

import { getSupabase } from "@/lib/supabase";

export type RsvpState = {
  ok: boolean;
  message: string;
};

export async function submitRsvp(
  _prev: RsvpState,
  formData: FormData,
): Promise<RsvpState> {
  const name = String(formData.get("name") ?? "").trim();
  const attendanceRaw = String(formData.get("attendance") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const guestCountRaw = String(formData.get("guest_count") ?? "1").trim();

  if (!name || name.length < 2) {
    return { ok: false, message: "Mohon isi nama lengkap Anda." };
  }

  if (name.length > 100) {
    return { ok: false, message: "Nama terlalu panjang." };
  }

  if (attendanceRaw !== "hadir" && attendanceRaw !== "tidak_hadir") {
    return { ok: false, message: "Mohon pilih status kehadiran." };
  }

  let guestCount = 1;
  if (attendanceRaw === "hadir") {
    guestCount = Number.parseInt(guestCountRaw, 10);
    if (!Number.isFinite(guestCount) || guestCount < 1 || guestCount > 20) {
      return {
        ok: false,
        message: "Jumlah orang harus antara 1 sampai 20.",
      };
    }
  }

  if (message.length > 500) {
    return { ok: false, message: "Ucapan terlalu panjang (maks. 500 karakter)." };
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from("rsvps").insert({
      name,
      attendance: attendanceRaw,
      guest_count: guestCount,
      message: message || null,
    });

    if (error) {
      console.error("RSVP insert error:", error.message);
      return {
        ok: false,
        message: "Gagal menyimpan konfirmasi. Silakan coba lagi.",
      };
    }

    return {
      ok: true,
      message: "Terima kasih, konfirmasi Anda telah tersimpan.",
    };
  } catch (err) {
    console.error("RSVP unexpected error:", err);
    return {
      ok: false,
      message:
        "Konfigurasi database belum siap. Pastikan Supabase sudah dihubungkan.",
    };
  }
}
