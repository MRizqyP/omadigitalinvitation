export const eventConfig = {
  basmala: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
  title: "UNDANGAN",
  eventName: "Tahadduts bin Ni'mah",
  host: "Kel. besar Loupias",
  intro:
    "Dengan memohon rahmat dan ridha Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara",
  date: "Ahad, 26 Juli 2026",
  time: "10.00 - 14.00 WIB",
  venue: "Resto Curug Sampireun",
  address: "Jl. Soekarno Hatta No. 729 A, Bandung",
  venueMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Resto+Curug+Sampireun+Bandung",
  agenda: [
    { id: "pengajian", label: "Pengajian" },
    { id: "games", label: "Games" },
    { id: "tilawah", label: "Tilawah" },
    { id: "saweran", label: "Saweran" },
    { id: "makan", label: "Makan Siang" },
  ] as const,
  speaker: "Ustadz Agus Salim Hasanudin, S.Ud, M.Ag",
  theme: "Hutang kasih yg tak pernah terbayarkan",
  photos: [
    {
      src: "/photo/oma-anggrek.jpeg",
      alt: "Potret formal di depan masjid",
      caption: "Dengan penuh rasa syukur",
    },
    {
      src: "/photo/oma-masjid.jpeg",
      alt: "Di kebun anggrek",
    },
    {
      src: "/photo/oma-taman.jpeg",
      alt: "Di taman bunga",
    },
  ] as const,
  /** Drop mp3/ogg files into public/music/ then list them here */
  music: {
    volume: 0.45,
    tracks: [
      {
        title: "Background",
        src: "/music/background.mp3",
      },
      // Add more songs like:
      // { title: "Nasheed 2", src: "/music/nasheed-2.mp3" },
    ],
  },
  photoGalleryTitle: "Yang kami syukuri kebahagiaan",
  photoGallerySubtitle: "Omah Theo tercinta",
  closing:
    "Di tunggu kehadirannya. Semoga kebersamaan ini menjadi nikmat yang tak terlupakan.",
  rsvpDeadline: "22 Juli 2026",
  rsvpDeadlineNote:
    "Mohon konfirmasi kehadiran paling lambat tanggal 22 Juli 2026",
} as const;
